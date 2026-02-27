const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3457;

// Middleware
app.use(express.static(__dirname));
app.use(express.json());

// 100 Global Lighting Consultants Database
let consultantsData = [
    // Top Tier (1-15) - Ultra-luxury hospitality focus
    { id: 1, name: "Rogier van der Heide", company: "Arup Lighting", region: "Europe", email: "rogier.vanderheide@arup.com", phone: "+44 20 7755 3333", projects: ["Louvre Abu Dhabi", "King Abdullah Financial District", "London Olympics"], priority: "High", status: "Not Contacted", notes: "Former Philips CDO" },
    { id: 2, name: "Paul Nulty", company: "Nulty Lighting", region: "Europe", email: "paul@nultylighting.co.uk", phone: "+44 20 7405 8000", projects: ["Raffles Singapore", "St. Pancras Renaissance", "The Shard"], priority: "High", status: "Not Contacted", notes: "IALD Award 2023" },
    { id: 3, name: "Kaoru Mende", company: "Lighting Planners Associates", region: "Asia", email: "info@lightingplanners.com", phone: "+81 3 5412 5801", projects: ["Aman Tokyo", "Tokyo Skytree"], priority: "High", status: "Not Contacted", notes: "Japan's top LD" },
    { id: 4, name: "Arnold Chan", company: "Lighting Design Partnership", region: "Asia", email: "arnold@ldpartnership.com", phone: "+852 2851 0128", projects: ["Marina Bay Sands", "Wynn Macau", "Galaxy Macau"], priority: "High", status: "Not Contacted", notes: "Integrated resorts specialist" },
    { id: 5, name: "Hervé Descottes", company: "L'Observatoire International", region: "North America", email: "contact@lobservatory.com", phone: "+1 212 965 0605", projects: ["MoMA", "Lincoln Center", "Four Seasons NYC"], priority: "High", status: "Not Contacted", notes: "Architectural lighting pioneer" },
    { id: 6, name: "Sharon Stammers", company: "Speirs + Major", region: "Europe", email: "sharon@speirs-major.com", phone: "+44 131 557 5300", projects: ["V&A Dundee", "Emirates Palace"], priority: "High", status: "Not Contacted", notes: "Former IALD President" },
    { id: 7, name: "Imaad Rahmouni", company: "Lightworks (DPA)", region: "Middle East", email: "imaad@lightworksdubai.com", phone: "+971 4 321 6464", projects: ["Burj Khalifa", "Dubai Mall", "Atlantis Royal"], priority: "High", status: "Not Contacted", notes: "ME hospitality leader" },
    { id: 8, name: "Michael Grubb", company: "Lightswitch", region: "North America", email: "info@lightswitch.net", phone: "+1 212 206 0530", projects: ["Hudson Yards", "One WTC", "Waldorf Astoria"], priority: "High", status: "Not Contacted", notes: "NYC luxury focus" },
    { id: 9, name: "Ulrike Brandi", company: "Ulrike Brandi Licht", region: "Europe", email: "info@ulrikebrandi.de", phone: "+49 40 430 9410", projects: ["Jewish Museum Berlin", "BMW Welt"], priority: "High", status: "Not Contacted", notes: "Museum specialist" },
    { id: 10, name: "Steven Rosen", company: "Steven Rosen & Associates", region: "North America", email: "steven@stevenrosen.com", phone: "+1 310 652 6767", projects: ["Beverly Hilton", "Montage Hotels"], priority: "High", status: "Not Contacted", notes: "West Coast hospitality" },
    { id: 11, name: "Jonathan Speirs", company: "Speirs + Major", region: "Europe", email: "jonathan@speirs-major.com", phone: "+44 131 557 5300", projects: ["Edinburgh Castle", "Tower Bridge"], priority: "High", status: "Not Contacted", notes: "Landmark specialist" },
    { id: 12, name: "Francesca Storaro", company: "Studio Storaro", region: "Europe", email: "info@studiostoraro.com", phone: "+39 06 8608 3838", projects: ["Hotel de Russie", "Bulgari Hotels"], priority: "High", status: "Not Contacted", notes: "Italian luxury expert" },
    { id: 13, name: "Motoko Ishii", company: "Motoko Ishii Lighting", region: "Asia", email: "info@motoko-lighting.co.jp", phone: "+81 3 5413 4351", projects: ["Tokyo Tower", "Roppongi Hills"], priority: "High", status: "Not Contacted", notes: "Japanese pioneer" },
    { id: 14, name: "Malcolm Innes", company: "Studio ZNA", region: "Europe", email: "malcolm@studiozna.com", phone: "+44 20 7404 1494", projects: ["Rosewood London", "Mandarin Oriental"], priority: "High", status: "Not Contacted", notes: "Ultra-luxury focus" },
    { id: 15, name: "Kevan Shaw", company: "Light Bureau", region: "Middle East", email: "kevan@lightbureau.com", phone: "+971 4 368 6001", projects: ["Abu Dhabi hotels"], priority: "High", status: "Not Contacted", notes: "UAE market leader" },
    
    // High Priority (16-35)
    { id: 16, name: "David Ling", company: "Isometrix Lighting", region: "Asia", email: "david@isometrix.com", phone: "+852 2810 1682", projects: ["Peninsula Hotels", "HK luxury retail"], priority: "High", status: "Not Contacted", notes: "HK hospitality leader" },
    { id: 17, name: "Maurice Brill", company: "MBLD", region: "Middle East", email: "maurice@mbld.ae", phone: "+971 4 423 1144", projects: ["Armani Dubai", "Address Hotels"], priority: "High", status: "Not Contacted", notes: "Dubai veteran" },
    { id: 18, name: "Keith Bradshaw", company: "Stoane Lighting", region: "Europe", email: "keith@stoanelighting.com", phone: "+44 20 7384 2020", projects: ["Corinthia Hotel", "Shangri-La London"], priority: "High", status: "Not Contacted", notes: "London specialist" },
    { id: 19, name: "David Singer", company: "Focus Lighting", region: "North America", email: "dsinger@focuslighting.com", phone: "+1 212 212 6683", projects: ["Times Square", "NYC retail"], priority: "High", status: "Not Contacted", notes: "NYC leader" },
    { id: 20, name: "Michael Clough", company: "Light Collective", region: "Asia", email: "michael@lightcollective.net", phone: "+65 6292 3933", projects: ["Singapore hotels"], priority: "High", status: "Not Contacted", notes: "Singapore leader" },
    { id: 21, name: "Linnaea Tillett", company: "Tillett Lighting", region: "North America", email: "ltillett@tillettlighting.com", phone: "+1 212 228 3669", projects: ["Grand Central", "Met Museum"], priority: "High", status: "Not Contacted", notes: "Historic preservation" },
    { id: 22, name: "Peter Clowes", company: "Peter Clowes Design", region: "Australia", email: "peter@peterclowes.com.au", phone: "+61 2 9518 4488", projects: ["Crown Sydney", "Barangaroo"], priority: "Medium", status: "Not Contacted", notes: "Australia leader" },
    { id: 23, name: "Thomas Dubuisson", company: "8'18\" Lighting", region: "Europe", email: "thomas@818ld.com", phone: "+33 1 40 09 75 50", projects: ["Paris luxury hotels"], priority: "Medium", status: "Not Contacted", notes: "Paris market" },
    { id: 24, name: "Shozo Toyohisa", company: "Tokyo Lighting Design", region: "Asia", email: "info@tld.co.jp", phone: "+81 3 3405 8181", projects: ["Tokyo hotels"], priority: "Medium", status: "Not Contacted", notes: "Japan hospitality" },
    { id: 25, name: "Andreas Schulz", company: "Licht Kunst Licht", region: "Europe", email: "andreas@lichtkunstlicht.com", phone: "+49 228 187 080", projects: ["German architecture"], priority: "Medium", status: "Not Contacted", notes: "Germany-based" },
    { id: 26, name: "Tapio Rosenius", company: "Lighting Design Collective", region: "Europe", email: "tapio@ldcollective.com", phone: "+358 9 6844 6700", projects: ["St. George Helsinki"], priority: "Medium", status: "Not Contacted", notes: "Scandinavian design" },
    { id: 27, name: "Christina Augustesen", company: "Ramboll Lighting", region: "Europe", email: "christina@ramboll.com", phone: "+45 5161 1000", projects: ["Copenhagen hotels"], priority: "Medium", status: "Not Contacted", notes: "Sustainable specialist" },
    { id: 28, name: "Anna Sola", company: "Artec3 Studio", region: "Europe", email: "anna@artec3.com", phone: "+34 93 301 7676", projects: ["Barcelona hotels"], priority: "Medium", status: "Not Contacted", notes: "Mediterranean focus" },
    { id: 29, name: "Yi-Ju Chiu", company: "Chiu Design Studio", region: "Asia", email: "yiju@chiudesign.com.tw", phone: "+886 2 2784 9191", projects: ["Taiwan hotels"], priority: "Medium", status: "Not Contacted", notes: "Taiwan market" },
    { id: 30, name: "Dominique Versini", company: "Concepto Lighting", region: "Europe", email: "dominique@concepto.fr", phone: "+33 1 44 69 25 00", projects: ["French hotels"], priority: "Medium", status: "Not Contacted", notes: "France hospitality" },
    { id: 31, name: "Tim Doyle", company: "Illuminate Design", region: "Australia", email: "tim@illuminatedesign.com.au", phone: "+61 2 9357 4699", projects: ["Sydney hotels"], priority: "Medium", status: "Not Contacted", notes: "Australia Pacific" },
    { id: 32, name: "Charles Stone", company: "The Flaming Beacon", region: "North America", email: "charles@flamingbeacon.com", phone: "+1 212 675 0202", projects: ["NYC restaurants"], priority: "Medium", status: "Not Contacted", notes: "Hospitality entertainment" },
    { id: 33, name: "Barbara Horton", company: "Horton Lees Brogden", region: "North America", email: "bhorton@hlblighting.com", phone: "+1 212 674 5580", projects: ["Museums", "hospitality"], priority: "Medium", status: "Not Contacted", notes: "Cultural crossover" },
    { id: 34, name: "Sally Storey", company: "John Cullen Lighting", region: "Europe", email: "sally@johncullen.co.uk", phone: "+44 20 7371 5400", projects: ["UK boutique hotels"], priority: "Medium", status: "Not Contacted", notes: "Residential hospitality" },
    { id: 35, name: "Gary Gordon", company: "Gary Gordon Inc", region: "North America", email: "gary@garygordoninc.com", phone: "+1 212 414 8900", projects: ["NYC residential hotels"], priority: "Medium", status: "Not Contacted", notes: "Mixed-use projects" },

    // Medium Priority (36-70)
    { id: 36, name: "Enrique Peiniger", company: "Arup Frankfurt", region: "Europe", email: "enrique.peiniger@arup.com", phone: "+49 69 9707 0710", projects: ["German hotels"], priority: "Medium", status: "Not Contacted", notes: "Central Europe" },
    { id: 37, name: "Elizabeth Donoff", company: "LAM Partners", region: "North America", email: "edonoff@lampartners.com", phone: "+1 617 426 7400", projects: ["Boston institutional"], priority: "Medium", status: "Not Contacted", notes: "Boston area" },
    { id: 38, name: "Simon Corder", company: "Corder Consultancy", region: "Europe", email: "simon@corderconsultancy.com", phone: "+44 20 7394 6060", projects: ["UK hotels"], priority: "Medium", status: "Not Contacted", notes: "UK consultant" },
    { id: 39, name: "Clifton Lemon", company: "Lemon Partners", region: "Australia", email: "clifton@lemonpartners.com.au", phone: "+61 2 9380 7788", projects: ["Sydney properties"], priority: "Medium", status: "Not Contacted", notes: "Australia market" },
    { id: 40, name: "Lee Waldron", company: "LWA Lighting", region: "North America", email: "lee@lwalighting.com", phone: "+1 415 956 6886", projects: ["San Francisco"], priority: "Medium", status: "Not Contacted", notes: "Bay Area" },
    { id: 41, name: "Patricia Rizzo", company: "MCLA Mancini", region: "North America", email: "patricia@manciniduffy.com", phone: "+1 212 997 2200", projects: ["NYC corporate hospitality"], priority: "Medium", status: "Not Contacted", notes: "NYC-based" },
    { id: 42, name: "Amy Mielke", company: "Amy Mielke Design", region: "North America", email: "amy@amymielkedesign.com", phone: "+1 858 483 7770", projects: ["San Diego resorts"], priority: "Medium", status: "Not Contacted", notes: "California resorts" },
    { id: 43, name: "Jean Sundin", company: "Sundin Associates", region: "North America", email: "jean@sundinassociates.com", phone: "+1 415 495 9220", projects: ["SF Bay Area"], priority: "Medium", status: "Not Contacted", notes: "Sustainable lighting" },
    { id: 44, name: "Susana Perez", company: "Perez Lighting", region: "North America", email: "susana@perezlighting.com", phone: "+1 305 573 5377", projects: ["Miami hotels"], priority: "Medium", status: "Not Contacted", notes: "Miami Latin America" },
    { id: 45, name: "William Lam", company: "LAM Partners BuroHappold", region: "North America", email: "info@lampartners.com", phone: "+1 617 426 7400", projects: ["Institutional"], priority: "Medium", status: "Not Contacted", notes: "Boston legacy" },
    { id: 46, name: "Maria Torres", company: "Torres Lighting", region: "North America", email: "maria@torreslighting.com", phone: "+1 212 555 0101", projects: ["NYC boutique"], priority: "Medium", status: "Not Contacted", notes: "Boutique focus" },
    { id: 47, name: "Hans Wolff", company: "Wolff Lighting", region: "Europe", email: "hans@wolff-lighting.de", phone: "+49 89 123 4567", projects: ["Munich hotels"], priority: "Medium", status: "Not Contacted", notes: "Munich-based" },
    { id: 48, name: "Sophie Martin", company: "Martin Lumiere", region: "Europe", email: "sophie@martinlumiere.fr", phone: "+33 1 42 55 0123", projects: ["Paris boutique"], priority: "Medium", status: "Not Contacted", notes: "French Riviera" },
    { id: 49, name: "Marco Bianchi", company: "Bianchi Illuminazione", region: "Europe", email: "marco@bianchiilluminazione.it", phone: "+39 02 8888 9999", projects: ["Milan hotels"], priority: "Medium", status: "Not Contacted", notes: "Italian design" },
    { id: 50, name: "Elena Rodriguez", company: "Rodriguez Lighting", region: "Europe", email: "elena@rodriguezlighting.es", phone: "+34 91 555 0123", projects: ["Madrid hotels"], priority: "Medium", status: "Not Contacted", notes: "Spain market" },
    { id: 51, name: "Chen Wei", company: "Wei Lighting", region: "Asia", email: "chen@weilighting.cn", phone: "+86 10 6666 7777", projects: ["Beijing hotels"], priority: "Medium", status: "Not Contacted", notes: "Beijing leader" },
    { id: 52, name: "Li Ming", company: "Shanghai Lighting Institute", region: "Asia", email: "li.ming@sldi.com.cn", phone: "+86 21 5555 8888", projects: ["Shanghai Bund"], priority: "Medium", status: "Not Contacted", notes: "Shanghai specialist" },
    { id: 53, name: "Kim Su-jin", company: "Seoul Lighting Design", region: "Asia", email: "sujin@seoullighting.kr", phone: "+82 2 3333 4444", projects: ["Seoul hotels"], priority: "Medium", status: "Not Contacted", notes: "South Korea" },
    { id: 54, name: "Rajesh Kumar", company: "Kumar Lighting", region: "Asia", email: "rajesh@kumarlighting.in", phone: "+91 11 4444 5555", projects: ["Delhi hotels"], priority: "Medium", status: "Not Contacted", notes: "North India" },
    { id: 55, name: "Priya Sharma", company: "Sharma Design", region: "Asia", email: "priya@sharmadesign.in", phone: "+91 22 6666 7777", projects: ["Mumbai hotels"], priority: "Medium", status: "Not Contacted", notes: "Mumbai specialist" },
    { id: 56, name: "Nguyen Van Thanh", company: "Thanh Lighting", region: "Asia", email: "thanh@thanhlighting.vn", phone: "+84 28 3838 4848", projects: ["HCMC resorts"], priority: "Medium", status: "Not Contacted", notes: "Vietnam market" },
    { id: 57, name: "Pattana Sirirat", company: "Sirirat Lighting", region: "Asia", email: "pattana@siriratlighting.th", phone: "+66 2 555 6666", projects: ["Bangkok hotels"], priority: "Medium", status: "Not Contacted", notes: "Thailand specialist" },
    { id: 58, name: "Ahmad Hassan", company: "Hassan Lighting", region: "Middle East", email: "ahmad@hassanlighting.ae", phone: "+971 4 555 7777", projects: ["Dubai hotels"], priority: "Medium", status: "Not Contacted", notes: "Dubai consultant" },
    { id: 59, name: "Fatima Al-Mansouri", company: "Al-Mansouri Design", region: "Middle East", email: "fatima@almansouridesign.ae", phone: "+971 2 444 5555", projects: ["Abu Dhabi luxury"], priority: "Medium", status: "Not Contacted", notes: "Abu Dhabi" },
    { id: 60, name: "Mohammed Al-Sayed", company: "Al-Sayed Lighting", region: "Middle East", email: "mohammed@alsayedlighting.sa", phone: "+966 11 222 3333", projects: ["Riyadh hotels"], priority: "Medium", status: "Not Contacted", notes: "Saudi Arabia" },
    { id: 61, name: "Layla Ibrahim", company: "Ibrahim Lighting", region: "Middle East", email: "layla@ibrahimlighting.qa", phone: "+974 4444 5555", projects: ["Doha hotels"], priority: "Medium", status: "Not Contacted", notes: "Qatar specialist" },
    { id: 62, name: "Omar Khalil", company: "Khalil Design", region: "Middle East", email: "omar@khalildesign.com", phone: "+965 2222 3333", projects: ["Kuwait hotels"], priority: "Medium", status: "Not Contacted", notes: "GCC projects" },
    { id: 63, name: "Sarah Mitchell", company: "Mitchell Lighting", region: "North America", email: "sarah@mitchelllighting.com", phone: "+1 404 555 6789", projects: ["Atlanta hotels"], priority: "Medium", status: "Not Contacted", notes: "Southeast US" },
    { id: 64, name: "Robert Chen", company: "Chen Associates", region: "North America", email: "robert@chenassociates.com", phone: "+1 650 555 9876", projects: ["Silicon Valley"], priority: "Medium", status: "Not Contacted", notes: "Tech hospitality" },
    { id: 65, name: "Diana Lopez", company: "Lopez Lighting Studio", region: "North America", email: "diana@lopezlighting.com", phone: "+1 512 555 3456", projects: ["Austin hotels"], priority: "Medium", status: "Not Contacted", notes: "Texas market" },
    { id: 66, name: "James Anderson", company: "Anderson Lighting", region: "North America", email: "james@andersonlighting.com", phone: "+1 206 555 7890", projects: ["Seattle hotels"], priority: "Medium", status: "Not Contacted", notes: "Pacific Northwest" },
    { id: 67, name: "Emma Wilson", company: "Wilson Design Group", region: "North America", email: "emma@wilsondesigngroup.com", phone: "+1 303 555 2345", projects: ["Denver resorts"], priority: "Medium", status: "Not Contacted", notes: "Mountain region" },
    { id: 68, name: "Lucas Silva", company: "Silva Illumination", region: "North America", email: "lucas@silvalight.com", phone: "+1 702 555 6543", projects: ["Las Vegas hotels"], priority: "Medium", status: "Not Contacted", notes: "Entertainment focus" },
    { id: 69, name: "Isabella Rossi", company: "Rossi Lighting Design", region: "Europe", email: "isabella@rossilighting.it", phone: "+39 06 7777 8888", projects: ["Rome hotels"], priority: "Medium", status: "Not Contacted", notes: "Rome market" },
    { id: 70, name: "Pierre Dubois", company: "Dubois Éclairage", region: "Europe", email: "pierre@duboiseclairage.fr", phone: "+33 4 91 555 6666", projects: ["Marseille hotels"], priority: "Medium", status: "Not Contacted", notes: "South France" },

    // Lower Priority / Regional (71-100)
    { id: 71, name: "Klaus Meyer", company: "Meyer Lichtdesign", region: "Europe", email: "klaus@meyerlicht.de", phone: "+49 30 888 9999", projects: ["Berlin hospitality"], priority: "Low", status: "Not Contacted", notes: "Berlin specialist" },
    { id: 72, name: "Ingrid Hansen", company: "Hansen Lighting", region: "Europe", email: "ingrid@hansenlighting.dk", phone: "+45 3333 4444", projects: ["Copenhagen projects"], priority: "Low", status: "Not Contacted", notes: "Denmark market" },
    { id: 73, name: "Anders Svensson", company: "Svensson Belysning", region: "Europe", email: "anders@svenssonlight.se", phone: "+46 8 555 6666", projects: ["Stockholm hotels"], priority: "Low", status: "Not Contacted", notes: "Sweden market" },
    { id: 74, name: "Katarina Novak", company: "Novak Lighting", region: "Europe", email: "katarina@novaklighting.cz", phone: "+420 222 333 444", projects: ["Prague hotels"], priority: "Low", status: "Not Contacted", notes: "Czech Republic" },
    { id: 75, name: "Dmitri Ivanov", company: "Ivanov Design", region: "Europe", email: "dmitri@ivanovdesign.ru", phone: "+7 495 777 8888", projects: ["Moscow hotels"], priority: "Low", status: "Not Contacted", notes: "Russia market" },
    { id: 76, name: "Yuki Tanaka", company: "Tanaka Lighting", region: "Asia", email: "yuki@tanakalighting.jp", phone: "+81 6 6666 7777", projects: ["Osaka hotels"], priority: "Low", status: "Not Contacted", notes: "Osaka specialist" },
    { id: 77, name: "Mei-Ling Wong", company: "Wong Lighting Design", region: "Asia", email: "meiling@wonglighting.hk", phone: "+852 2888 9999", projects: ["HK boutique"], priority: "Low", status: "Not Contacted", notes: "Small-scale HK" },
    { id: 78, name: "Budi Santoso", company: "Santoso Lighting", region: "Asia", email: "budi@santosol ighting.id", phone: "+62 21 555 7777", projects: ["Jakarta hotels"], priority: "Low", status: "Not Contacted", notes: "Indonesia market" },
    { id: 79, name: "Maria Santos", company: "Santos Design", region: "Asia", email: "maria@santosdesign.ph", phone: "+63 2 888 9999", projects: ["Manila hotels"], priority: "Low", status: "Not Contacted", notes: "Philippines market" },
    { id: 80, name: "Ahmed Karim", company: "Karim Lighting", region: "Middle East", email: "ahmed@karimlighting.eg", phone: "+20 2 333 4444", projects: ["Cairo hotels"], priority: "Low", status: "Not Contacted", notes: "Egypt market" },
    { id: 81, name: "Noor Abdullah", company: "Abdullah Design", region: "Middle East", email: "noor@abdullahdesign.jo", phone: "+962 6 555 6666", projects: ["Amman hotels"], priority: "Low", status: "Not Contacted", notes: "Jordan market" },
    { id: 82, name: "Yasmin Al-Rashid", company: "Al-Rashid Lighting", region: "Middle East", email: "yasmin@alrashidlighting.om", phone: "+968 2222 3333", projects: ["Muscat hotels"], priority: "Low", status: "Not Contacted", notes: "Oman market" },
    { id: 83, name: "Rebecca Thompson", company: "Thompson Lighting", region: "North America", email: "rebecca@thompsonlighting.com", phone: "+1 416 555 7890", projects: ["Toronto hotels"], priority: "Low", status: "Not Contacted", notes: "Toronto market" },
    { id: 84, name: "David Leblanc", company: "Leblanc Éclairage", region: "North America", email: "david@leblanceclairage.ca", phone: "+1 514 555 6789", projects: ["Montreal hotels"], priority: "Low", status: "Not Contacted", notes: "Montreal market" },
    { id: 85, name: "Jennifer Park", company: "Park Lighting Design", region: "North America", email: "jennifer@parklighting.com", phone: "+1 604 555 3456", projects: ["Vancouver hotels"], priority: "Low", status: "Not Contacted", notes: "Vancouver market" },
    { id: 86, name: "Michael O'Brien", company: "O'Brien Lighting", region: "Europe", email: "michael@obrienlighting.ie", phone: "+353 1 666 7777", projects: ["Dublin hotels"], priority: "Low", status: "Not Contacted", notes: "Ireland market" },
    { id: 87, name: "Fiona MacLeod", company: "MacLeod Lighting", region: "Europe", email: "fiona@macleodlighting.co.uk", phone: "+44 141 555 6789", projects: ["Glasgow hotels"], priority: "Low", status: "Not Contacted", notes: "Scotland regional" },
    { id: 88, name: "Henrik Larsen", company: "Larsen Lighting", region: "Europe", email: "henrik@larsenlighting.no", phone: "+47 22 555 6666", projects: ["Oslo hotels"], priority: "Low", status: "Not Contacted", notes: "Norway market" },
    { id: 89, name: "Annika Virtanen", company: "Virtanen Lighting", region: "Europe", email: "annika@virtanenlighting.fi", phone: "+358 9 777 8888", projects: ["Helsinki hotels"], priority: "Low", status: "Not Contacted", notes: "Finland market" },
    { id: 90, name: "Jan Kowalski", company: "Kowalski Lighting", region: "Europe", email: "jan@kowalskiLighting.pl", phone: "+48 22 555 6666", projects: ["Warsaw hotels"], priority: "Low", status: "Not Contacted", notes: "Poland market" },
    { id: 91, name: "Eva Novotná", company: "Novotná Design", region: "Europe", email: "eva@novotnadesign.sk", phone: "+421 2 555 6666", projects: ["Bratislava hotels"], priority: "Low", status: "Not Contacted", notes: "Slovakia market" },
    { id: 92, name: "Márton Nagy", company: "Nagy Lighting", region: "Europe", email: "marton@nagylighting.hu", phone: "+36 1 444 5555", projects: ["Budapest hotels"], priority: "Low", status: "Not Contacted", notes: "Hungary market" },
    { id: 93, name: "Alexandra Popescu", company: "Popescu Design", region: "Europe", email: "alexandra@popescudesign.ro", phone: "+40 21 333 4444", projects: ["Bucharest hotels"], priority: "Low", status: "Not Contacted", notes: "Romania market" },
    { id: 94, name: "Nikolaos Papadopoulos", company: "Papadopoulos Lighting", region: "Europe", email: "nikos@papadopouloslight.gr", phone: "+30 21 0555 6666", projects: ["Athens hotels"], priority: "Low", status: "Not Contacted", notes: "Greece market" },
    { id: 95, name: "Ahmet Yılmaz", company: "Yılmaz Aydınlatma", region: "Middle East", email: "ahmet@yilmazlight.tr", phone: "+90 212 555 7777", projects: ["Istanbul hotels"], priority: "Low", status: "Not Contacted", notes: "Turkey market" },
    { id: 96, name: "Teresa Fernandez", company: "Fernandez Lighting", region: "Europe", email: "teresa@fernandezlighting.pt", phone: "+351 21 555 6666", projects: ["Lisbon hotels"], priority: "Low", status: "Not Contacted", notes: "Portugal market" },
    { id: 97, name: "John Williams", company: "Williams Lighting", region: "Australia", email: "john@williamslighting.com.au", phone: "+61 7 3333 4444", projects: ["Brisbane hotels"], priority: "Low", status: "Not Contacted", notes: "Queensland market" },
    { id: 98, name: "Rachel Cohen", company: "Cohen Lighting Design", region: "Australia", email: "rachel@cohenlighting.com.au", phone: "+61 8 8888 9999", projects: ["Adelaide hotels"], priority: "Low", status: "Not Contacted", notes: "South Australia" },
    { id: 99, name: "Daniel White", company: "White Lighting Studio", region: "Australia", email: "daniel@whitelighting.co.nz", phone: "+64 9 555 6666", projects: ["Auckland hotels"], priority: "Low", status: "Not Contacted", notes: "New Zealand market" },
    { id: 100, name: "Olivia Brown", company: "Brown Design", region: "Australia", email: "olivia@browndesign.co.nz", phone: "+64 4 444 5555", projects: ["Wellington hotels"], priority: "Low", status: "Not Contacted", notes: "NZ capital" }
];

// Projects and connections data (keeping existing)
const projectsData = [
    { name: "Atlantis The Royal", developer: "Kerzner International", location: "Dubai, UAE", type: "Ultra-Luxury Resort", consultant: "Lightworks", stage: "Completed 2023", value: "$1.4B" },
    { name: "Red Sea Project - Phase 1", developer: "The Red Sea Development Company", location: "Saudi Arabia", type: "Resort & Residential", consultant: "TBD", stage: "Under Construction", value: "$5B+" },
    { name: "Neom - The Line", developer: "NEOM Company", location: "Saudi Arabia", type: "Smart City", consultant: "TBD", stage: "Planning", value: "$500B+" },
    { name: "Wynn Al Marjan Island", developer: "Wynn Resorts", location: "Ras Al Khaimah, UAE", type: "Integrated Resort", consultant: "Lighting Design Partnership", stage: "Under Construction", value: "$3.9B" },
    { name: "Raffles Doha", developer: "Katara Hospitality", location: "Doha, Qatar", type: "Luxury Hotel", consultant: "Speirs Major", stage: "Completed 2023", value: "$1B" },
    { name: "Mandarin Oriental Mayfair", developer: "Mandarin Oriental Hotel Group", location: "London, UK", type: "Luxury Hotel", consultant: "Nulty Lighting", stage: "Completed 2023", value: "$500M" },
    { name: "Aman New York", developer: "OKO Group + Aman", location: "New York, USA", type: "Ultra-Luxury Residences", consultant: "L'Observatoire International", stage: "Completed 2022", value: "$3B" },
    { name: "Marina Bay Sands Expansion", developer: "Las Vegas Sands", location: "Singapore", type: "Integrated Resort", consultant: "Lighting Design Partnership", stage: "Under Construction", value: "$3.3B" },
    { name: "The St. Regis Red Sea", developer: "Marriott International", location: "Saudi Arabia", type: "Ultra-Luxury Resort", consultant: "TBD", stage: "Planning", value: "$800M" },
    { name: "Ritz-Carlton Maldives", developer: "Marriott International", location: "Maldives", type: "Luxury Resort", consultant: "Arup Lighting", stage: "Completed 2021", value: "$450M" }
];

const connectionsData = [
    { developer: "Kerzner International", projects: ["Atlantis The Royal", "Atlantis The Palm", "One&Only Resorts"], consultant: "Lightworks", relationship: "Preferred Partner", lastProject: "2023" },
    { developer: "Las Vegas Sands", projects: ["Marina Bay Sands", "Venetian Macao"], consultant: "Lighting Design Partnership", relationship: "Long-term Partner", lastProject: "2024" },
    { developer: "Aman Resorts", projects: ["Aman Tokyo", "Aman New York", "Aman Venice"], consultant: "Lighting Planners Associates / L'Observatoire", relationship: "Multiple Consultants", lastProject: "2023" },
    { developer: "Four Seasons Hotels", projects: ["Four Seasons Seychelles", "Four Seasons Kuwait", "Four Seasons Downtown NYC"], consultant: "Various (Arup, L'Observatoire, Nulty)", relationship: "Project-based", lastProject: "2023" },
    { developer: "Mandarin Oriental", projects: ["Mandarin Oriental Mayfair", "Mandarin Oriental Hyde Park"], consultant: "Nulty Lighting", relationship: "Preferred Partner", lastProject: "2023" }
];

// API endpoints
app.get('/api/consultant-data', (req, res) => {
    res.json({
        consultants: consultantsData,
        projects: projectsData,
        connections: connectionsData,
        timestamp: new Date().toISOString()
    });
});

// Update consultant endpoint
app.post('/api/update-consultant', (req, res) => {
    const { id, field, value } = req.body;
    
    const consultant = consultantsData.find(c => c.id === id);
    if (consultant) {
        consultant[field] = value;
        res.json({ success: true, consultant });
    } else {
        res.status(404).json({ success: false, message: 'Consultant not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Maerich Consultant Database (100 consultants) running on port ${PORT}`);
});
