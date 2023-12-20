const sampleListings =[
  {
    country: "United States",
    title: "Grand Canyon National Park",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg",
    description: " A breathtaking natural wonder carved by the Colorado River over millions of years. The canyon is 277 miles long, up to 18 miles wide, and attains a depth of over a mile."
  },
  {
    country: "United States",
    title: "Yellowstone National Park",
    img: "https://cdn.britannica.com/97/122097-050-B89080F4/Morning-Glory-Pool-Upper-Geyser-Basin-Wyoming.jpg",
    description: "Home to geysers, hot springs, mudpots, and other geothermal wonders. The park also boasts a variety of wildlife, including bears, bison, elk, and wolves."
  },
  {
    country: "United States",
    title: "Yosemite National Park",
    img: "https://images.unsplash.com/photo-1562310503-a918c4c61e38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Known for its towering granite cliffs, giant sequoia trees, and waterfalls. The park is home to a variety of activities, including hiking, camping, rock climbing, and skiing."
  },
  {
    country: "United States",
    title: "Niagara Falls",
    img: "https://images.unsplash.com/photo-1463695970743-ae65cca05743?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A collection of three waterfalls that straddle the border between the United States and Canada. The falls are a popular tourist destination, offering stunning views and a variety of activities, such as boat tours and cave tours."
  },
  {
    country: "United States",
    title: "Rocky Mountain National Park",
    img: "https://images.unsplash.com/photo-1600542158543-1faed2d1c05d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Home to snow-capped peaks, alpine lakes, and diverse wildlife. The park offers a variety of activities, including hiking, camping, fishing, and skiing."
  },
  {
    country: "United States",
    title: "Glacier National Park",
    img: "https://images.unsplash.com/photo-1510942498794-3228abd301c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A wilderness park known for its glaciers, mountains, lakes, and forests. The park offers a variety of activities, including hiking, camping, fishing, and boating."
  },
  {
    country: "United States",
    title: "Zion National Park",
    img: "https://images.unsplash.com/photo-1600198778090-9c9a9013a44e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A park known for its sandstone canyons, waterfalls, and towering cliffs. The park offers a variety of activities, including hiking, camping, and rock climbing."
  },
  {
    country: "United States",
    title: "New York City",
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A City That Never Sleeps New York City often called the city that never sleeps, is a vibrant metropolis that pulsates with energy and excitement It s a place where dreams are made and anything is possible."
  },
  {
    country: "United States",
    title: "Los Angeles",
    img: "https://images.unsplash.com/photo-1540232058434-8e7394b7e847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The entertainment capital of the world, home to Hollywood and the film industry. The city is also known for its beaches, museums, and diverse neighborhoods."
  },
  {
    country: "United States",
    title: "Chicago",
    img: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A major American city known for its architecture, museums, and deep-dish pizza. The city is also home to several professional sports teams."
  },
  {
    country: "United States",
    title: "San Francisco",
    img: "https://images.unsplash.com/photo-1624236028842-88acfd4e5287?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A city known for its Golden Gate Bridge, cable cars, and Victorian houses. The city is also a major center for technology and innovation."
  },
  {
    country: "United States",
    title: "Las Vegas",
    img: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A desert city known for its casinos, shows, and nightlife. The city is also home to several large hotels and resorts."
  },
  {
    country: "United States",
    title: "Miami",
    img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A beach city known for its Latin culture, nightlife, and Art Deco architecture. The city is also a major center for international trade."
  },
  {
    country: "United States",
    title: "Washington D.C.",
    img: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The capital of the United States, home to the White House, Capitol Building, and Supreme Court. The city is also home to several museums and monuments."
  },
  {
    country: "United States",
    title: "Golden Gate Bridge",
    img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An iconic suspension bridge located in San Francisco. The bridge is 1.7 miles long and is a popular tourist destination."
  },
  {
    country: "United States",
    title: "Statue of Liberty",
    img: "https://images.unsplash.com/photo-1585155967849-91c736589c84?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A symbol of freedom and democracy, located in New York City. The statue is 305 feet tall and is a popular tourist destination."
  },
  {
    country: "United States",
    title: "Disneyland",
    img: "https://images.unsplash.com/photo-1605443790760-18c6121939d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A theme park located in Anaheim, California. The park is home to a variety of rides, shows, and characters."
  },
  {
    country: "United States",
    title: "Mount Rushmore",
    img: "https://images.unsplash.com/photo-1592610687683-41d676fcda72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A national memorial featuring the faces of four U.S. presidents carved into a mountainside. The presidents are George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln."
  },
  {
    country: "Afghanistan",
    title: "Band-e Amir National Park",
    img: "https://images.unsplash.com/photo-1622050956578-94fd044a0ada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This stunning national park is home to six turquoise lakes nestled in the Hindu Kush mountains. Visitors can enjoy hiking, picnicking, and swimming in the crystal-clear waters."
  },
  {
    country: "Afghanistan",
    title: "Bamiyan Valley",
    img: "https://images.unsplash.com/photo-1606050716461-78add0ad1785?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This UNESCO World Heritage Site is home to the remains of two giant 6th-century Buddha statues that were tragically destroyed by the Taliban in 2001. The Bamiyan Valley is also a beautiful natural area, with towering cliffs and lush valleys."
  },
  {
    country: "Afghanistan",
    title: "Herat",
    img: "https://images.unsplash.com/photo-1577249229363-96fb8532d852?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This ancient city is known for its rich history and stunning architecture. The Citadel of Herat is a UNESCO World Heritage Site, and the city is also home to several mosques, madrassas, and mausoleums."
  },
  {
    country: "Afghanistan",
    title: "Mazar-i-Sharif",
    img: "https://images.unsplash.com/photo-1684958004432-9044bfab5492?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This city is home to the Shrine of Ali, the fourth caliph of Islam. It is a popular pilgrimage site for Muslims from around the world. Mazar-i-Sharif is also a major commercial center, with a bustling bazaar and several traditional Afghan restaurants."
  },
  {
    country: "Afghanistan",
    title: "Balkh",
    img: "https://images.unsplash.com/photo-1647551640739-a0368c23765a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This ancient city was once a major center of trade and learning. It is home to the ruins of the ancient city of Balkh, which was once the capital of the Bactrian Empire."
  },
  {
    country: "Albania",
    title: "Berat",
    img: "https://images.unsplash.com/photo-1626364701365-7a787211d6d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This UNESCO World Heritage City is known for its Ottoman-era architecture and charming old town. Berat is nicknamed the \"City of a Thousand Windows\" for its many traditional Albanian houses with large windows."
  },
  {
    country: "Albania",
    title: "Gjirokastra",
    img: "https://images.unsplash.com/photo-1693562142975-6a5e4b4d9039?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Another UNESCO World Heritage City, Gjirokastra is known for its Ottoman-era stone houses and its unique fortress. The city is also home to several interesting museums, including the Museum of Weapons and the Ethnographic Museum."
  },
  {
    country: "Algeria",
    title: "Algiers",
    img: "https://images.unsplash.com/photo-1577872472532-0a7818d80e2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The capital of Algeria, Algiers is a bustling city with a rich history and culture. The city is home to several interesting museums and mosques, as well as a beautiful old town."
  },
  {
    country: "Algeria",
    title: "Timgad",
    img: "https://static.wixstatic.com/media/e3bf46_893df565e7ef44bd9253e07acffe6afc~mv2_d_1600_1200_s_2.jpg/v1/fill/w_640,h_510,al_c,q_90,enc_auto/e3bf46_893df565e7ef44bd9253e07acffe6afc~mv2_d_1600_1200_s_2.jpg",
    description: "This UNESCO World Heritage Site is the ruins of a Roman city. Timgad is well-preserved and offers a fascinating glimpse into Roman life."
  },
  {
    country: "Algeria",
    title: "M'zab Valley",
    img: "https://images.unsplash.com/photo-1535777456326-a4710a6b4a6c?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This valley is home to a unique Berber culture. The M'zab Valley is known for its traditional villages, which are built of mudbrick."
  },
  {
    country: "Algeria",
    title: "Ahaggar National Park",
    img: "https://images.unsplash.com/photo-1689368991942-64d9d615d804?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This park is home to a variety of plant and animal life, including desert foxes, sand cats, and fennec foxes. Ahaggar National Park is also a popular destination for hiking, camping, and exploring the stunning desert landscape."
  },
  {
    country: "Andorra",
    title: "Andorra la Vella",
    img: "https://images.unsplash.com/photo-1602841365237-4fb73fb43f0c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The capital of Andorra, Andorra la Vella is a charming town with a pedestrian-only main street. The city is home to several interesting museums and shops, as well as a beautiful church."
  },
  {
    country: "Andorra",
    title: "Vallnord",
    img: "https://www.pgl.co.uk/Files/Files/Schools/Skiing%20and%20Snowboarding/Resort%20Gallery/Andorra/Vallnord/SS-M-Ski-Andorra-Resort-Vallnord.jpg",
    description: "This ski resort is a popular destination for winter sports enthusiasts. Vallnord offers skiing, snowboarding, and other winter activities."
  },
  {
    country: "Egypt",
    title: "The Pyramids of Giza",
    img: "https://images.unsplash.com/photo-1679958256318-1ffdb03bfad3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "One of the Seven Wonders of the Ancient World, these awe-inspiring pyramids are a must-see for any visitor to Egypt."
  },
  {
    country: "Egypt",
    title: "The Great Sphinx",
    img: "https://images.unsplash.com/photo-1696677825933-14974cb83c7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This enigmatic statue is another must-see in Egypt. Its origins and purpose remain shrouded in mystery."
  },
  {
    country: "Egypt",
    title: "The Valley of the Kings",
    img: "https://images.unsplash.com/photo-1667765912995-07c5b404888a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This ancient necropolis is home to the tombs of many pharaohs, including the famous Tutankhamun."
  },
  {
    country: "Egypt",
    title: "Luxor",
    img: "https://images.unsplash.com/photo-1587975844610-40f1ad10d07e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This ancient city was once the capital of Egypt and is home to many impressive temples, including the Karnak Temple and the Luxor Temple."
  },
  {
    country: "Egypt",
    title: "Aswan",
    img: "https://images.unsplash.com/photo-1609254009350-e8802119df6c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This city is located on the Nile River and is home to the Aswan Dam, one of the largest dams in the world."
  },
  {
    country: "South Africa",
    title: "Kruger National Park",
    img: "https://images.unsplash.com/photo-1586943353950-95bdbe3207a1?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This world-famous park is home to an incredible diversity of wildlife, including lions, elephants, leopards, and rhinos."
  },
  {
    country: "South Africa",
    title: "Cape Town",
    img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This beautiful city is known for its stunning scenery, including Table Mountain and Robben Island, where Nelson Mandela was imprisoned."
  },
  {
    country: "South Africa",
    title: "Stellenbosch",
    img: "https://images.unsplash.com/photo-1638012858969-fac36ad2ea32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This town is located in the heart of the South African wine region and is known for its beautiful wineries and historic architecture."
  },
  {
    country: "Antarctica",
    title: "South Pole",
    img: "https://images.unsplash.com/photo-1562743338-51caec0b0e65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The southernmost point on Earth, marked by the Amundsen-Scott Station. It is located on the high plateau of the Antarctic ice sheet."
  },
  {
    country: "Antarctica",
    title: "McMurdo Station",
    img: "https://images.unsplash.com/photo-1583700956198-f6abbc8c708d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The largest research station on the continent, operated by the United States. It serves as a hub for scientific research and logistics."
  },
  {
    country: "Antarctica",
    title: "Dry Valleys",
    img: "https://images.unsplash.com/photo-1520364537418-3cadce1cd0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Unique ice-free valleys with a harsh and dry climate. They are home to a variety of extremophiles and provide clues about past climate change."
  },
  {
    country: "Antarctica",
    title: "Ross Sea",
    img: "https://images.unsplash.com/photo-1528303404135-e6ff8bee3a0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A large marginal sea bordered by the Ross Ice Shelf. It is home to a diverse range of marine life, including penguins, seals, and whales."
  },
  {
    country: "Antarctica",
    title: "Transantarctic Mountains",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Transantarctic_mountain_hg.jpg",
    description: "The longest mountain range on Earth, dividing East Antarctica from West Antarctica. They are home to a number of glaciers and ice shelves."
  },
  {
    country: "Europe",
    title: "Eiffel Tower",
    img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Eiffel Tower is a wrought-iron lattice tower located in Paris, France. It is one of the most recognizable landmarks in the world and a symbol of both Paris and France."
  },
  {
    country: "Europe",
    title: "Colosseum",
    img: "https://images.unsplash.com/photo-1537799943037-f5da89a65689?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Colosseum, also known as the Flavian Amphitheatre, is an ancient amphitheater located in Rome, Italy. It is one of the most iconic and well-preserved examples of Roman architecture and engineering."
  },
  {
    country: "Europe",
    title: "Acropolis of Athens",
    img: "https://plus.unsplash.com/premium_photo-1668618252814-76fd5206f523?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens, Greece. It is home to several ancient buildings, including the iconic Parthenon."
  },
  {
    country: "Europe",
    title: "Sagrada Familia",
    img: "https://images.unsplash.com/photo-1563913822680-89f0080ce69a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Sagrada Familia is a large unfinished Roman Catholic basilica in Barcelona, Spain. Designed by architect Antoni Gaudí, it is known for its unique and intricate architectural style."
  },
  {
    country: "Australia",
    title: "Sydney Opera House",
    img: "https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Sydney Opera House is a multi-venue performing arts center located in Sydney, Australia. Its unique and iconic design, resembling sail-like shells, has made it one of the most famous and recognizable buildings in the world."
  },
  {
    country: "Australia",
    title: "Great Barrier Reef",
    img: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Great Barrier Reef is the world's largest coral reef system, located off the coast of Queensland, Australia. It is a UNESCO World Heritage site and a paradise for divers and snorkelers, offering stunning marine biodiversity."
  },
  {
    country: "Australia",
    title: "Uluru (Ayers Rock)",
    img: "https://images.unsplash.com/photo-1698110165777-3d770c3d5d88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Uluru, also known as Ayers Rock, is a large sandstone rock formation in the Northern Territory of Australia. It is a sacred site for the indigenous Anangu people and an iconic symbol of the Australian Outback."
  },
  {
    country: "Australia",
    title: "Great Ocean Road",
    img: "https://images.unsplash.com/photo-1511233389693-4a066f739752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Great Ocean Road is a scenic coastal drive stretching along the southeastern coast of Australia, in the state of Victoria. It offers breathtaking views of cliffs, beaches, and the famous rock formations known as the Twelve Apostles."
  },
  {
    country: "Jammu and Kashmir",
    title: "Dal Lake",
    img: "https://images.unsplash.com/photo-1600845747913-e33543f94892?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dal Lake is a picturesque lake located in Srinagar, the summer capital of Jammu and Kashmir. Surrounded by snow-capped mountains and adorned with colorful Shikaras (traditional Kashmiri boats) and floating gardens, it is a popular tourist destination."
  },
  {
    country: "Jammu and Kashmir",
    title: "Gulmarg",
    img: "https://images.unsplash.com/photo-1621232082074-1a7750ecc557?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gulmarg, often referred to as the 'Meadow of Flowers', is a charming hill station located in the Pir Panjal Range of the Western Himalayas. It is known for its stunning landscapes, lush meadows, and the famous Gulmarg Gondola, one of the highest cable car systems in the world."
  },
  {
    country: "Jammu and Kashmir",
    title: "Vaishno Devi Temple",
    img: "https://www.templepurohit.com/wp-content/uploads/2015/04/Mata-Vaishno-Devi-Katra-Jammu-and-Kashmir-1_TemplePurohit.com_.jpg",
    description: "Vaishno Devi Temple is a popular Hindu pilgrimage site located in the Trikuta Mountains near Katra town of Jammu and Kashmir. It is dedicated to the Hindu goddess Vaishno Devi and attracts millions of devotees each year who undertake a challenging trek to seek blessings."
  },
  {
    country: "Jammu and Kashmir",
    title: "Sonamarg",
    img: "https://images.unsplash.com/photo-1623996243194-fd281057d568?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sonamarg, meaning 'Meadow of Gold', is a scenic hill station located in the Ganderbal district of Jammu and Kashmir. It is known for its picturesque landscapes, alpine meadows, and the Thajiwas Glacier, offering breathtaking views and opportunities for adventure sports."
  },
  {
    country: "Jammu and Kashmir",
    title: "Pangong Lake",
    img: "https://images.unsplash.com/photo-1606857090627-27ca46667290?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pangong Lake is a stunning high-altitude lake situated in the Ladakh region of Jammu and Kashmir. Its crystal-clear blue waters spanning across India and China offer a mesmerizing spectacle, attracting visitors with its serene beauty and tranquility."
  },
  {
    country: "Himachal Pradesh",
    title: "Shimla",
    img: "https://images.unsplash.com/photo-1609948545248-b4f2b2054f15?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Shimla, the capital city of Himachal Pradesh, is a popular hill station known for its colonial architecture, snow-capped mountains, and pleasant climate. The Ridge, Mall Road, and Christ Church are some of the main attractions in this picturesque town."
  },
  {
    country: "Himachal Pradesh",
    title: "Manali",
    img: "https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Manali is a charming hill station nestled in the Pir Panjal Range of the Himalayas. It is famous for its scenic beauty, adventure sports like skiing and paragliding, and the nearby Rohtang Pass, offering breathtaking views of snow-capped peaks."
  },
  {
    country: "Himachal Pradesh",
    title: "Dharamshala",
    img: "https://images.unsplash.com/photo-1622225074638-1d80c0388697?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dharamshala, located in the Kangra Valley, is known for being the residence of the Dalai Lama and the headquarters of the Tibetan government-in-exile. It offers a blend of Tibetan and Indian cultures, scenic beauty, and spiritual serenity."
  },
  {
    country: "Himachal Pradesh",
    title: "Kullu",
    img: "https://images.unsplash.com/photo-1621342593496-06c1d04fe3a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kullu, often referred to as the 'Valley of Gods', is a picturesque valley located on the banks of the Beas River. It is renowned for its scenic beauty, adventure sports, ancient temples, and the vibrant Kullu Dussehra festival."
  },
  {
    country: "Himachal Pradesh",
    title: "Spiti Valley",
    img: "https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spiti Valley is a remote and mesmerizing high-altitude desert valley located in the Himalayas. It is known for its rugged landscapes, ancient monasteries, and a unique blend of Tibetan and Indian cultures, making it a paradise for nature lovers and adventure enthusiasts."
  },
  {
    country: "Punjab",
    title: "Golden Temple",
    img: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is a sacred Sikh shrine located in Amritsar. It is one of the most revered places of worship for Sikhs and attracts millions of visitors from around the world. The temple is known for its stunning architecture, peaceful atmosphere, and the sacred Amrit Sarovar (Pool of Nectar) surrounding it."
  },
  {
    country: "Punjab",
    title: "Jallianwala Bagh",
    img: "https://images.unsplash.com/photo-1612981889051-27be7c2d52ec?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jallianwala Bagh is a public garden in Amritsar, infamous for the Jallianwala Bagh massacre that took place in 1919. It commemorates the tragic incident where British troops opened fire on a peaceful gathering, resulting in the loss of many lives. The memorial serves as a reminder of the sacrifices made during India's struggle for independence."
  },

  {
    country: "Punjab",
    title: "Chandigarh",
    img: "https://images.unsplash.com/photo-1589350033409-35701c4273d0?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Chandigarh is a modern planned city and the capital of both Punjab and Haryana. Designed by renowned architect Le Corbusier, it is known for its well-organized sectors, gardens, and architectural marvels. The Rock Garden, Sukhna Lake, and Capitol Complex are some of the popular attractions in this vibrant city."
  },
  {
    country: "Chandigarh",
    title: "Rock Garden",
    img: "https://media.istockphoto.com/photos/rock-garden-in-chandigarh-picture-id1190516852?k=20&m=1190516852&s=612x612&w=0&h=8Q3mN2uQIKzkt3tqKjxvRZIti2wVfQNaBzVU0F2XvVY=",
    description: "The Rock Garden is a unique sculpture garden located in Chandigarh. Created by artist Nek Chand, it features a vast collection of sculptures made from recycled materials such as rocks, broken ceramics, and discarded glass bottles. The garden is a testament to creativity and showcases the beauty of art and nature combined."
  },
  {
    country: "Chandigarh",
    title: "Sukhna Lake",
    img: "https://images.unsplash.com/photo-1614687345016-9183348d8f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3VraG5hJTIwTGFrZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Sukhna Lake is a serene man-made lake located in Chandigarh. It is a popular spot for locals and tourists alike, offering boating facilities, a jogging track, and beautiful sunsets. The lake is surrounded by lush greenery and provides a peaceful escape from the bustling city life."
  },
  {
    country: "Chandigarh",
    title: "Rose Garden",
    img: "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Rose Garden, also known as Zakir Hussain Rose Garden, is the largest rose garden in Asia, spread over 30 acres in Chandigarh. It boasts thousands of rose varieties and other ornamental plants, making it a paradise for nature lovers and photographers. The garden hosts an annual rose festival, attracting visitors from all over."
  },
  {
    country: "Haryana",
    title: "Badkhal Lake",
    img: "https://images.unsplash.com/photo-1439066290691-510066268af5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Badkhal Lake is a picturesque lake located in Faridabad, Haryana. Surrounded by the Aravalli Hills, it offers a serene environment and is a popular picnic spot for locals and tourists. Visitors can enjoy boating, picturesque views, and the tranquility of nature at this beautiful lake."
  },
  {
    country: "Haryana",
    title: "Kurukshetra",
    img: "https://images.unsplash.com/photo-1605469237567-a39930679526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kurukshetra is a historic and religiously significant city in Haryana. It is believed to be the site of the epic battle of Mahabharata and is considered a sacred place by Hindus. The city is dotted with temples, pilgrimage sites, and the holy Brahma Sarovar. It attracts devotees and history enthusiasts from all over."
  },
  {
    country: "Haryana",
    title: "Surajkund",
    img: "https://images.unsplash.com/photo-1668881000915-58d3925bcbc1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Surajkund is a beautiful reservoir located in Faridabad, Haryana. It is surrounded by the Aravalli Hills and is known for its tranquil ambiance and scenic beauty. The Surajkund Crafts Mela, held annually, showcases traditional crafts, music, dance, and food from various regions of India, attracting a large number of visitors."
  },
  {
    country: "Haryana",
    title: "Pinjore Gardens",
    img: "https://images.unsplash.com/photo-1591238486049-641eab268a5a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pinjore Gardens, also known as Yadavindra Gardens, is a historic Mughal garden located in Pinjore, Haryana. Spread over 100 acres, it features terraced gardens, fountains, beautiful pavilions, and a stunning backdrop of the Shivalik Hills. The gardens are a popular tourist attraction, offering a blend of natural beauty and architectural grandeur."
  },
  {
    country: "Uttarakhand",
    title: "Jim Corbett National Park",
    img: "https://plus.unsplash.com/premium_photo-1661817083646-cf3a6f24f040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jim Corbett National Park is a renowned wildlife sanctuary located in the Nainital district of Uttarakhand. It is India's oldest national park and is famous for its population of Bengal tigers. Visitors can enjoy jeep safaris, birdwatching, and exploring the diverse flora and fauna in this beautiful wilderness."
  },
  {
    country: "Uttarakhand",
    title: "Valley of Flowers",
    img: "https://images.unsplash.com/photo-1502439502085-ebf78244370a?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Valley of Flowers is a breathtakingly beautiful national park located in the Chamoli district of Uttarakhand. It is known for its vibrant meadows carpeted with a wide variety of alpine flowers. The valley is a UNESCO World Heritage Site and offers stunning views of snow-capped peaks, waterfalls, and pristine landscapes."
  },
  {
    country: "Uttarakhand",
    title: "Rishikesh",
    img: "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Rishikesh is a spiritual and adventure hub located in the foothills of the Himalayas in Uttarakhand. It is known as the 'Yoga Capital of the World' and attracts spiritual seekers and yoga enthusiasts from all over. Rishikesh is also a popular destination for adventure sports like river rafting, hiking, and camping."
  },
  {
    country: "Uttarakhand",
    title: "Nainital",
    img: "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Nainital is a popular hill station and lake town located in the Kumaon region of Uttarakhand. It is known for its scenic beauty, including the picturesque Naini Lake surrounded by mountains. Visitors can enjoy boating on the lake, visit the Naina Devi Temple, explore the markets, and take in the panoramic views from viewpoints like Snow View."
  },
  {
    country: "Uttarakhand",
    title: "Mussoorie",
    img: "https://images.unsplash.com/photo-1591388667055-530d5f4defb3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Mussoorie is a charming hill station located in the Garhwal region of Uttarakhand. It is known for its pleasant climate, scenic beauty, and colonial-era architecture. Visitors can enjoy leisurely walks along Mall Road, visit viewpoints like Gun Hill, explore the Kempty Falls, and take in the panoramic views of the surrounding mountains."
  },
  {
    country: "Delhi",
    title: "Red Fort",
    img: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Red Fort, also known as Lal Qila, is an iconic historical monument located in Old Delhi. Built during the Mughal era, it served as the main residence of the emperors. The fort's impressive red sandstone architecture, intricate carvings, and beautiful gardens make it a popular tourist attraction and a UNESCO World Heritage Site."
  },
  {
    country: "Delhi",
    title: "Qutub Minar",
    img: "https://plus.unsplash.com/premium_photo-1697729438410-d53c666e3810?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Qutub Minar is a magnificent tower located in South Delhi. It is the tallest brick minaret in the world and is an excellent example of Indo-Islamic architecture. Visitors can explore the intricate carvings, climb the spiral staircase to the top for panoramic views, and admire the surrounding archaeological complex."
  },
  {
    country: "Delhi",
    title: "India Gate",
    img: "https://media.istockphoto.com/id/482018359/photo/india-gate-new-delhi.jpg?s=2048x2048&w=is&k=20&c=HCSCMgHxkPI9I-F4TDRCKAt73tq3C1bjctOeCk352G4=",
    description: "India Gate is a prominent monument and war memorial located in the heart of New Delhi. It was built to commemorate the soldiers of the Indian Army who lost their lives in World War I and the Afghan Wars. Visitors can stroll along the lawns, pay tribute to the soldiers, and enjoy the vibrant atmosphere of the surrounding area."
  },
  {
    country: "Delhi",
    title: "Humayun's Tomb",
    img: "https://images.unsplash.com/photo-1646938691456-a03d01a8276a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Humayun's Tomb is a magnificent mausoleum located in South Delhi. It was built in the 16th century and is a UNESCO World Heritage Site. The tomb's grand architecture, beautiful gardens, and serene ambiance make it a popular attraction for history enthusiasts and architecture lovers."
  },
  {
    country: "Delhi",
    title: "Lotus Temple",
    img: "https://media.istockphoto.com/id/474522274/photo/the-bah%C3%A1%C3%AD-lotus-temple-new-delhi-india.jpg?s=2048x2048&w=is&k=20&c=INPuEMA-A41H5q3e0lU0EQYz4xvyLoNDLg_sSG8Tp50=",
    description: "Lotus Temple, also known as the Bahá'í House of Worship, is a unique architectural marvel located in South Delhi. Its lotus-shaped design and serene surroundings make it an ideal place for meditation and prayer. The temple is open to people of all religions and is known for its peaceful atmosphere."
  },
  {
    country: "Uttar Pradesh",
    title: "Taj Mahal",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Taj Mahal is an iconic mausoleum located in Agra, Uttar Pradesh. It is a UNESCO World Heritage Site and one of the Seven Wonders of the World. Built by Emperor Shah Jahan in memory of his beloved wife, the Taj Mahal is renowned for its stunning white marble architecture, intricate carvings, and beautiful gardens."
  },
  {
    country: "Uttar Pradesh",
    title: "Varanasi",
    img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Varanasi, also known as Kashi, is a spiritual city located on the banks of the sacred River Ganges in Uttar Pradesh. It is one of the oldest continuously inhabited cities in the world and a major pilgrimage site for Hindus. Visitors can experience the vibrant ghats, witness ancient rituals, explore narrow lanes, and visit temples and ashrams."
  },
  {
    country: "Uttar Pradesh",
    title: "Ayodhya",
    img: "https://media.istockphoto.com/id/1287252808/photo/ram-temple-ayodhya.jpg?s=2048x2048&w=is&k=20&c=Qvz6tpbB36-upkyK1-drqJsxTfZGBwIVSnLSGllTv3c=",
    description: "Ayodhya is a sacred city located on the banks of the Sarayu River in Uttar Pradesh. It is believed to be the birthplace of Lord Rama and is an important pilgrimage site for Hindus. Visitors can explore various temples, including the Ram Janmabhoomi, and immerse themselves in the religious and cultural significance of the city."
  },
  {
    country: "Rajasthan",
    title: "Jaipur",
    img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jaipur, also known as the Pink City, is the capital of Rajasthan. It is famous for its rich history, stunning architecture, and vibrant culture. Visitors can explore magnificent palaces like the Hawa Mahal and Jal Mahal, visit the majestic Amber Fort, shop for traditional handicrafts in bustling markets, and experience the royal heritage of the city."
  },
  {
    country: "Rajasthan",
    title: "Udaipur",
    img: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Udaipur, known as the Venice of the East, is a city of lakes and palaces in Rajasthan. It is renowned for its romantic ambiance, stunning Lake Palace, and the grand City Palace complex. Visitors can take boat rides on Lake Pichola, explore the intricate architecture of the palaces, and enjoy the breathtaking sunset views."
  },
  {
    country: "Rajasthan",
    title: "Jaisalmer",
    img: "https://images.unsplash.com/photo-1600954700722-b9a768fc9397?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jaisalmer is a mesmerizing city located in the heart of the Thar Desert in Rajasthan. It is famous for its golden sandstone architecture, especially the magnificent Jaisalmer Fort. Visitors can explore the narrow lanes of the fort, visit intricately carved havelis, go on a camel safari in the desert, and witness the vibrant culture of Rajasthan."
  },
  {
    country: "Rajasthan",
    title: "Jodhpur",
    img: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Jodhpur, also known as the Blue City, is a captivating city in Rajasthan. It is famous for its blue-painted houses, majestic Mehrangarh Fort, and vibrant markets. Visitors can explore the fort's palaces and museums, stroll through the vibrant old city, and experience the rich cultural heritage of Rajasthan."
  },
  {
    country: "Rajasthan",
    title: "Pushkar",
    img: "https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pushkar is a holy town located in the Ajmer district of Rajasthan. It is known for its sacred Pushkar Lake and the Brahma Temple, dedicated to Lord Brahma. Pushkar is also famous for its annual camel fair, where thousands of camels and livestock are traded. Visitors can take part in religious ceremonies, explore the colorful bazaars, and soak in the spiritual atmosphere."
  },
  {
    country: "Gujarat",
    title: "Ahmedabad",
    img: "https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1658653042367.jpg-org",
    description: "Ahmedabad is the largest city in Gujarat and a vibrant cultural and commercial hub. It is known for its rich heritage, magnificent temples, and bustling markets. Visitors can explore historical sites like the Sabarmati Ashram, admire the intricate carvings of the Sidi Saiyyed Mosque, and indulge in the local cuisine and textiles."
  },
  {
    country: "Gujarat",
    title: "Gir Forest National Park",
    img: "https://images.unsplash.com/photo-1624341679500-b3ffeca0df59?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gir Forest National Park is located in Gujarat and is the only natural habitat of the Asiatic Lions in India. It is a biodiversity hotspot and home to various other wildlife species. Visitors can go on safari tours to spot lions, leopards, deer, and numerous bird species, and experience the thrill of being in the midst of nature."
  },
  {
    country: "Gujarat",
    title: "Somnath Temple",
    img: "https://lh3.googleusercontent.com/p/AF1QipMzs1W-qnF9ixxZnug0PJV9zM5w-J35BfS1B53K=s1360-w1360-h1020",
    description: "Somnath Temple is a renowned Hindu temple located in Gujarat. It is one of the twelve Jyotirlinga shrines dedicated to Lord Shiva. The temple has a rich history and is known for its architectural grandeur and religious significance. Visitors can witness the evening aarti (ritual) and explore the beautiful temple complex."
  },
  {
    country: "Gujarat",
    title: "Rann of Kutch",
    img: "https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Rann of Kutch is a mesmerizing salt marsh located in Gujarat. It is the largest salt desert in the world and offers stunning landscapes, especially during the Rann Utsav, a vibrant festival held every year. Visitors can witness the vast expanse of white salt, enjoy cultural performances, shop for handicrafts, and experience the unique beauty of the region."
  },
  {
    country: "Gujarat",
    title: "Dwarka",
    img: "https://static.toiimg.com/photo/105070960.cms",
    description: "Dwarka is an ancient city and a major pilgrimage site for Hindus. It is believed to be the dwelling place of Lord Krishna. The city is home to the famous Dwarkadhish Temple, dedicated to Lord Krishna, and numerous other temples of religious significance. Visitors can explore the temples, take part in religious ceremonies, and soak in the spiritual atmosphere of Dwarka."
  },
  {
    country: "Dadra and Nagar Haveli",
    title: "Silvassa",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTh4dgEwbjj-xqHOYwDjwrZTFQRLJMN5oOIMawHLUbh_BuAuu4EqmBu9VBLUca94mZOdzMo93mSf9JKdJObu5vYmDt2t9lS8v3j3jNZ6g",
    description: "Silvassa is the capital city of Dadra and Nagar Haveli. It is known for its serene surroundings, lush greenery, and a tranquil atmosphere. Visitors can explore the Vanganga Lake Garden, go on nature trails in the nearby forests, visit the Tribal Cultural Museum to learn about the indigenous communities, and enjoy the local cuisine."
  },
  {
    country: "Daman and Diu",
    title: "Daman",
    img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQI-8OSANFPde30XHQPwsHwsL0XYcOLNgacqh1pCqySjqOF04Ka9p-qWSaMyCsVdd9kQtrkUFulxWVEB8st9t7r973RXv7DDExymt8x3Q",
    description: "Daman is a coastal town in Daman and Diu with a rich Portuguese heritage. It is known for its beautiful beaches, historic forts, and vibrant culture. Visitors can relax on the beaches, explore the Fort of Moti Daman and Nani Daman, visit the Church of Bom Jesus, and indulge in delicious seafood."
  },
  {
    country: "Maharashtra",
    title: "Mumbai",
    img: "https://media.istockphoto.com/id/1027005714/photo/marine-drive-mumbai.jpg?s=2048x2048&w=is&k=20&c=T3mnvAUpGDyBr1Zh9iewAoQBsMUaCDeI8SGbIU9qy_s=",
    description: "Mumbai, the capital city of Maharashtra, is a bustling metropolis and the financial hub of India. It is known for its iconic landmarks such as the Gateway of India, Marine Drive, and the Bollywood film industry. Visitors can explore historical sites, indulge in street food, visit museums and art galleries, and experience the vibrant nightlife."
  },
  {
    country: "Maharashtra",
    title: "Pune",
    img: "https://media.istockphoto.com/id/1320749212/photo/cityview.jpg?s=2048x2048&w=is&k=20&c=HvhDCUv6ciZLDmrhBJSaUUbdKpTI7L5bCzX8wAa6JoM=",
    description: "Pune is a vibrant city in Maharashtra known for its educational institutions, historical sites, and pleasant weather. It is often referred to as the 'Oxford of the East'. Visitors can explore the grand Aga Khan Palace, visit the iconic Shaniwar Wada fort, enjoy nature at the nearby hill stations, and savor the local cuisine."
  },
  {
    country: "Maharashtra",
    title: "Aurangabad",
    img: "https://images.unsplash.com/photo-1620557812584-adee82f3c16d?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Aurangabad is a historically significant city in Maharashtra. It is known for its UNESCO World Heritage Sites like the Ajanta and Ellora Caves, which showcase ancient rock-cut Buddhist, Hindu, and Jain sculptures and paintings. Visitors can explore the Bibi Ka Maqbara, visit the iconic Daulatabad Fort, and immerse themselves in the rich history of the region."
  },
  {
    country: "Maharashtra",
    title: "Lonavala",
    img: "https://images.unsplash.com/photo-1582871846330-fc6755bc445f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lonavala is a popular hill station located in Maharashtra. It is known for its lush green valleys, scenic landscapes, and pleasant weather. Visitors can explore the stunning viewpoints like Tiger Point and Lion's Point, visit the ancient Karla Caves, enjoy outdoor activities like trekking and camping, and savor the famous chikki (sweet snack)."
  },
  {
    country: "Maharashtra",
    title: "Nashik",
    img: "https://images.unsplash.com/photo-1607244934260-270f6e1281cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Nashik is a city in Maharashtra known for its religious significance and vineyards. It is an important pilgrimage site for Hindus and is famous for the Kumbh Mela festival. Visitors can explore ancient temples like the Trimbakeshwar Temple, take a tour of the vineyards and wineries, and enjoy the serene ambiance of this spiritual city."
  },
  {
    country: "Goa",
    title: "Panaji",
    img: "https://media.istockphoto.com/id/184867271/photo/church-in-panjim.jpg?s=2048x2048&w=is&k=20&c=vuZyTo-nqGN1wFFEYnp_yg5Jqgtv8bjwEiBYe32rngQ=",
    description: "Panaji, the capital city of Goa, is a vibrant and charming place. It is known for its beautiful Portuguese architecture, colorful streets, and lively markets. Visitors can explore the historic neighborhoods of Fontainhas, visit the famous Our Lady of the Immaculate Conception Church, enjoy a boat cruise on the Mandovi River, and indulge in delicious Goan cuisine."
  },
  {
    country: "Goa",
    title: "Calangute",
    img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Calangute is one of the most popular beach destinations in Goa. It is known for its golden sandy beaches, water sports activities, and vibrant nightlife. Visitors can relax on the beach, try their hand at parasailing or jet skiing, shop for local handicrafts and souvenirs at the bustling markets, and enjoy the beachside shacks offering delicious seafood."
  },
  {
    country: "Goa",
    title: "Old Goa",
    img: "https://media.istockphoto.com/id/93174418/photo/cathederal-in-old-goa.jpg?s=2048x2048&w=is&k=20&c=ImqhVrWJWOhl7C44w10f6o-hteckqOkY8bdB8iPFDzU=",
    description: "Old Goa, also known as Velha Goa, is a UNESCO World Heritage site and a treasure trove of history and culture. It was the former capital of Portuguese India and is home to numerous ancient churches and cathedrals. Visitors can explore iconic landmarks like the Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi, and immerse themselves in the rich colonial history."
  },
  {
    country: "Goa",
    title: "Dudhsagar Falls",
    img: "https://media.istockphoto.com/id/1200790835/photo/the-huge-waterfall-dudhsagar-and-the-railway-bridge-passing-through-it-karnataka-india.jpg?s=2048x2048&w=is&k=20&c=_ciuaoE4_g_CDcJn7HICzU3brg3VepWBfV1isIGnVT0=",
    description: "Dudhsagar Falls is a majestic waterfall located on the Mandovi River in Goa. It is one of the tallest waterfalls in India and is known for its milky white cascades amidst lush greenery. Visitors can enjoy a scenic trek to the falls, take a refreshing dip in the natural pool, and admire the breathtaking views of this natural wonder."
  },
  {
    country: "Goa",
    title: "Baga Beach",
    img: "https://media.istockphoto.com/id/666350180/photo/sunset-at-baga-beach-in-goa.jpg?s=2048x2048&w=is&k=20&c=W5CUbRPaIjtou5uUAhw9uPb6YRe7aVM6FDfxRrycEAI=",
    description: "Baga Beach is another popular destination in Goa known for its lively and energetic atmosphere. It offers a perfect blend of sun, sand, and sea. Visitors can relax on the beach, enjoy water sports like banana boat rides and parasailing, explore the vibrant beach shacks, and savor delicious Goan cuisine at the nearby restaurants."
  },
  {
    country: "Madhya Pradesh",
    title: "Bhopal",
    img: "https://plus.unsplash.com/premium_photo-1661925018295-c4a5a3988250?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bhopal, the capital city of Madhya Pradesh, is a blend of history, culture, and natural beauty. It is known for its beautiful lakes, ancient mosques, and palaces. Visitors can explore the iconic Taj-ul-Masajid mosque, visit the majestic Gohar Mahal, enjoy a boat ride on the serene Upper Lake, and immerse themselves in the rich heritage of this city."
  },
  {
    country: "Madhya Pradesh",
    title: "Indore",
    img: "https://plus.unsplash.com/premium_photo-1697730395452-e90ac9269968?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indore is the largest city in Madhya Pradesh and is known for its rich history, architectural marvels, and vibrant street food culture. Visitors can explore the magnificent Rajwada Palace, visit the famous Khajrana Ganesh Temple, enjoy shopping at the bustling Sarafa Bazaar, and savor the delicious Indori cuisine."
  },
  {
    country: "Madhya Pradesh",
    title: "Khajuraho",
    img: "https://plus.unsplash.com/premium_photo-1697730379259-822bae7942e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Khajuraho is a UNESCO World Heritage site and is famous for its stunning temples adorned with intricate sculptures. These temples, built between the 9th and 12th centuries, showcase exquisite artwork and depict various aspects of life. Visitors can marvel at the architectural brilliance, attend the famous Khajuraho Dance Festival, and explore the ancient ruins."
  },
  {
    country: "Madhya Pradesh",
    title: "Gwalior",
    img: "https://media.istockphoto.com/id/177363474/photo/gwalior-fort.jpg?s=2048x2048&w=is&k=20&c=aF5FY806sZOwNM2tiRnQr0gAh3dInwZhoEx4TrCfKd8=",
    description: "Gwalior is a historic city in Madhya Pradesh known for its magnificent forts, palaces, and temples. The iconic Gwalior Fort, with its stunning architecture and panoramic views, is a must-visit. Visitors can also explore the Jai Vilas Palace, visit the famous Sas Bahu Temples, and enjoy the soulful music at the Tansen Tomb."
  },
  {
    country: "Madhya Pradesh",
    title: "Kanha National Park",
    img: "https://images.unsplash.com/photo-1563289278-442a75d2adae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kanha National Park is one of the largest and most well-known national parks in Madhya Pradesh. It is famous for its rich biodiversity, including the majestic Royal Bengal Tigers. Visitors can enjoy thrilling wildlife safaris, spot various species of animals and birds, and immerse themselves in the natural beauty of this pristine wilderness."
  },
  {
    country: "Chhattisgarh",
    title: "Raipur",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Raipur_Skyline_in_2019.png",
    description: "Raipur is the capital city of Chhattisgarh and is known for its rich cultural heritage and bustling markets. Visitors can explore the Mahant Ghasidas Museum, visit the iconic Dudhadari Temple, enjoy shopping for traditional handicrafts and textiles at the local markets, and savor the delectable Chhattisgarhi cuisine."
  },
  {
    country: "Chhattisgarh",
    title: "Chitrakote Falls",
    img: "https://media.istockphoto.com/id/1441182864/photo/beautiful-chitrakote-falls-in-tiratha-india.jpg?s=2048x2048&w=is&k=20&c=axEXERz5BXezuMwNDFpT2ot6d8dxLFNBi5JEsUSg-w8=",
    description: "Chitrakote Falls is one of the most spectacular waterfalls in India and is often referred to as the 'Niagara Falls of India'. Located on the Indravati River, it offers a breathtaking sight with its wide horseshoe-shaped cascade. Visitors can enjoy boat rides near the falls, capture stunning photographs, and immerse themselves in the tranquility of nature."
  },
  {
    country: "Chhattisgarh",
    title: "Barnawapara Wildlife Sanctuary",
    img: "https://chhattisgarhtourism.co.in/photo_gallery/barnawapara_wildlife_sanctuary/05.jpg",
    description: "Barnawapara Wildlife Sanctuary is a haven for wildlife enthusiasts and nature lovers. It is home to a variety of flora and fauna, including tigers, leopards, elephants, and various species of birds. Visitors can enjoy thrilling jeep safaris, spot wildlife in their natural habitat, and experience the serenity of the sanctuary."
  },
  {
    country: "Jharkhand",
    title: "Ranchi",
    img: "https://www.savaari.com/blog/wp-content/uploads/2023/10/Tusk_Travel1.webp",
    description: "Ranchi, the capital city of Jharkhand, is known for its scenic beauty, waterfalls, and lush greenery. Visitors can explore the iconic Rock Garden, visit the beautiful Hundru Falls, enjoy a boat ride on the serene Kanke Dam, and experience the tranquility of the Tagore Hill."
  },
  {
    country: "Jharkhand",
    title: "Jamshedpur",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e2/a5/9a/jubilee-park.jpg?w=500&h=400&s=1",
    description: "Jamshedpur, also known as the 'Steel City', is a major industrial and educational hub in Jharkhand. It is home to the iconic Tata Steel Plant and offers a blend of modernity and natural beauty. Visitors can explore the picturesque Jubilee Park, visit the famous Tata Steel Zoological Park, and enjoy a cable car ride at the Dalma Hills."
  },
  {
    country: "Jharkhand",
    title: "Netarhat",
    img: "https://media.istockphoto.com/id/1311626060/photo/broad-road-to-netarhat-with-tree-canopy-on-both-sides-of-the-road.jpg?s=2048x2048&w=is&k=20&c=i0bNk7jyljP4NsF_9d0KEB35GDZ94Eh8GGdQHskRsYY=",
    description: "Netarhat is a picturesque hill station in Jharkhand, often called the 'Queen of Chotanagpur'. It offers breathtaking views of the surrounding hills, dense forests, and mesmerizing sunsets. Visitors can enjoy nature walks, trekking, and camping amidst the serene beauty of Netarhat."
  },
  {
    country: "Bihar",
    title: "Patna",
    img: "https://media.istockphoto.com/id/1393996484/photo/modern-city-construction-with-heavy-traffic-and-bright-blue-sky-at-morning.jpg?s=2048x2048&w=is&k=20&c=64okrIZLQTQhvKKX9Yz7B-2ebbOwQajPHI4CKexbFLg=",
    description: "Patna, the capital city of Bihar, is a vibrant blend of history, culture, and modernity. Visitors can explore the iconic Golghar, visit the ancient ruins of Pataliputra, experience the spiritual serenity of the Mahavir Mandir, and take a boat ride on the scenic Ganges River."
  },
  {
    country: "Bihar",
    title: "Bodh Gaya",
    img: "https://media.istockphoto.com/id/1203495986/photo/ancient-buddha-temple-sukhothai.jpg?s=2048x2048&w=is&k=20&c=sXiVIF4qiJ2sazHvdOz909Y1i3DgRK70Y4urj9O2BWU=",
    description: "Bodh Gaya is a significant Buddhist pilgrimage site in Bihar and is where Gautama Buddha attained enlightenment under the Bodhi Tree. Visitors can visit the iconic Mahabodhi Temple, explore the spiritual atmosphere of the monasteries, and participate in meditation and prayer sessions."
  },
  {
    country: "Bihar",
    title: "Vaishali",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/64/N-BR-68_Relic_Stupa_Vaishali_%282%29.jpg",
    description: "Vaishali is an ancient city in Bihar and holds great historical and religious significance. It is believed to be the birthplace of Lord Mahavira and is also associated with Lord Buddha. Visitors can explore the Ashokan Pillar, visit the ancient Vishwa Shanti Stupa, and immerse themselves in the rich heritage of Vaishali."
  },
  {
    country: "Bihar",
    title: "Rajgir",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shanti_Stupa_at_Rajgir_%28cropped%29.jpg",
    description: "Rajgir is a historic town in Bihar that holds immense spiritual significance. It was the capital of the Magadha kingdom and is associated with Lord Buddha and Lord Mahavira. Visitors can visit the famous Vishwa Shanti Stupa, explore the ancient ruins of Rajgir Fort, and enjoy the scenic beauty of the surrounding hills."
  },
  {
    country: "Odisha",
    title: "Bhubaneswar",
    img: "https://images.unsplash.com/photo-1617217139357-b77ae58ad4b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bhubaneswar, the capital city of Odisha, is known for its rich historical and cultural heritage. It is famous for its ancient temples, including the iconic Lingaraj Temple and the intricately carved Mukteshwar Temple. Visitors can also explore the beautiful Udayagiri and Khandagiri Caves and enjoy the vibrant local arts and crafts."
  },
  
  {
    country: "Canada",
    title: "Banff National Park",
    img: "https://media.istockphoto.com/id/154956337/photo/bow-river-castle-mountain-banff-national-park-canada-wildflowers-copyspace.jpg?s=2048x2048&w=is&k=20&c=CNPZYB_i220jb56dpJ4NRlTn9cMmfFd4IiOhZbzQIy4=",
    description: "Banff National Park is located in the Canadian Rockies in Alberta and is renowned for its stunning landscapes and outdoor activities. Visitors can explore picturesque lakes like Moraine Lake and Lake Louise, hike through majestic mountain ranges, and spot wildlife such as bears and elk. The park also offers opportunities for skiing, snowboarding, and camping."
  },
  {
    country: "Canada",
    title: "Vancouver",
    img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Vancouver is a vibrant coastal city in British Columbia known for its stunning natural beauty and diverse culture. Visitors can explore Stanley Park, visit the historic Gastown district, and enjoy panoramic views from the Vancouver Lookout. The city is also a gateway to outdoor activities like skiing in Whistler, exploring the Capilano Suspension Bridge, and taking scenic ferry rides."
  },
  {
    country: "Canada",
    title: "Quebec City",
    img: "https://images.unsplash.com/photo-1603306557434-284b08b2e0c2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Quebec City is the capital of the Canadian province of Quebec and offers a unique blend of European charm and Canadian heritage. Visitors can explore the historic Old Quebec, visit iconic landmarks like the Château Frontenac and Montmorency Falls, and indulge in French-Canadian cuisine. The city also hosts vibrant festivals and events throughout the year."
  },
  {
    country: "Canada",
    title: "Whistler",
    img: "https://images.unsplash.com/photo-1513030152704-177f044ab480?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Whistler is a world-renowned resort town located in the Coast Mountains of British Columbia. It is a popular destination for skiing and snowboarding during the winter season, with two major ski resorts: Whistler Blackcomb. In the summer, visitors can enjoy hiking, mountain biking, and golfing. The village of Whistler offers a vibrant après-ski scene and a variety of dining and shopping options."
  },
  {
    country: "Russia",
    title: "Moscow",
    img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Moscow, the capital city of Russia, is a vibrant metropolis with a rich history and iconic landmarks. Visitors can explore the famous Red Square, home to the Kremlin and St. Basil's Cathedral, and witness the changing of the guards. The city also offers world-class museums like the State Tretyakov Gallery, stunning Orthodox cathedrals, and vibrant nightlife."
  },
  {
    country: "Russia",
    title: "St. Petersburg",
    img: "https://images.unsplash.com/photo-1556543697-b40fdaadca4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "St. Petersburg is a cultural hub and the second-largest city in Russia. It is known for its stunning architecture, grand palaces, and art museums. Visitors can explore the Hermitage Museum, visit the Peter and Paul Fortress, and admire the beauty of the Church of the Savior on Spilled Blood. The city also offers elegant canals and a vibrant theater scene."
  },
  {
    country: "Russia",
    title: "Siberia",
    img: "https://images.unsplash.com/photo-1602256976419-c82585fe73a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Siberia is a vast region in Russia known for its stunning natural landscapes and extreme weather conditions. Visitors can explore the Siberian taiga, a dense forest home to diverse wildlife, and marvel at the beauty of Lake Baikal, the deepest lake in the world. The region also offers opportunities for hiking, camping, and experiencing the unique Siberian culture."
  },
  {
    country: "Russia",
    title: "Kazan",
    img: "https://images.unsplash.com/photo-1628066068625-015ea7bcc21a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kazan is the capital of the Republic of Tatarstan in Russia and is known for its rich history and cultural diversity. Visitors can explore the Kazan Kremlin, a UNESCO World Heritage Site, visit the Qolşärif Mosque, and wander through the vibrant streets of the city. Kazan also offers a blend of Tatar, Russian, and European cuisines."
  },
  {
    country: "Russia",
    title: "Sochi",
    img: "https://images.unsplash.com/photo-1608926632580-067ba78be72b?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sochi is a resort city located on the Black Sea coast of Russia. It is known for its mild climate, beautiful beaches, and outdoor activities. Visitors can enjoy water sports, relax in the famous Sochi Arboretum, and take a cable car ride to the summit of the nearby mountains for panoramic views. Sochi also hosted the 2014 Winter Olympics."
  },
  {
    country: "Indonesia",
    title: "Bali",
    img: "https://media.istockphoto.com/id/653953140/photo/hindu-temple-in-bali.jpg?s=2048x2048&w=is&k=20&c=cNGrPEsCVM1mVLP6ZDal1t8aLHXsOlequmBeTbFLuuw=",
    description: "Bali is a popular tourist destination in Indonesia known for its stunning beaches, vibrant culture, and lush landscapes. Visitors can relax on beautiful beaches like Kuta and Seminyak, visit ancient temples such as Tanah Lot and Uluwatu, and experience the unique Balinese arts and crafts. The island also offers opportunities for surfing, diving, and exploring picturesque rice terraces."
  },
  {
    country: "Indonesia",
    title: "Jakarta",
    img: "https://media.istockphoto.com/id/500798563/photo/city-skyline-at-sunset-jakarta-indonesia.jpg?s=2048x2048&w=is&k=20&c=E3ASlFmUEPaF_hqgh2slHsyc5eNOPqwXCKjVDzvcVPk=",
    description: "Jakarta is the capital city of Indonesia and a bustling metropolis with a mix of modern and traditional attractions. Visitors can explore the historic Kota Tua district, visit the National Monument (Monas), and experience vibrant street markets and delicious Indonesian cuisine. Jakarta also offers a variety of museums, shopping malls, and vibrant nightlife."
  },
  {
    country: "Indonesia",
    title: "Komodo National Park",
    img: "https://media.istockphoto.com/id/1648706841/photo/sunrise-at-padar-island-komodo-national-park-flores-indonesia.jpg?s=2048x2048&w=is&k=20&c=4SSehjFJ45ESxO_d2DmRQJh_1yK_OvHYnLnccQ43Us0=",
    description: "Komodo National Park is located in the Lesser Sunda Islands of Indonesia and is famous for being the natural habitat of the Komodo dragon, the world's largest lizard. Visitors can embark on guided tours to observe these fascinating creatures in their natural environment, explore pristine beaches, and go snorkeling or diving to discover the vibrant marine life of the park."
  },
  {
    country: "Japan",
    title: "Tokyo",
    img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tokyo, the capital city of Japan, is a vibrant metropolis that seamlessly blends tradition and modernity. Visitors can explore historic sites like the Meiji Shrine and Senso-ji Temple, indulge in world-class shopping in Ginza, and experience the bustling nightlife of neighborhoods like Shinjuku and Shibuya. Tokyo also offers a wide range of culinary delights, from sushi and ramen to street food and Michelin-starred restaurants."
  },
  {
    country: "Japan",
    title: "Kyoto",
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kyoto is a city in Japan renowned for its rich cultural heritage and stunning temples. Visitors can explore iconic sites like Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine, stroll through traditional neighborhoods like Gion, and experience traditional tea ceremonies. Kyoto is also famous for its cherry blossom season, when the city is adorned with beautiful pink blooms."
  },
  {
    country: "Japan",
    title: "Osaka",
    img: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Osaka is a lively city in Japan known for its vibrant street food culture, modern architecture, and historical landmarks. Visitors can explore Osaka Castle, stroll through the bustling Dotonbori district, and enjoy delicious local dishes like takoyaki and okonomiyaki. The city also offers a variety of shopping districts, amusement parks, and vibrant nightlife."
  },
  {
    country: "Japan",
    title: "Hiroshima",
    img: "https://images.unsplash.com/photo-1580355275559-10c832e123f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hiroshima is a city in Japan known for its tragic history and inspiring resilience. Visitors can visit the Hiroshima Peace Memorial Park and Museum, which serves as a reminder of the atomic bombing that occurred during World War II. The city also offers beautiful gardens, including Shukkei-en Garden, and the iconic Itsukushima Shrine on Miyajima Island."
  },
  {
    country: "Japan",
    title: "Nara",
    img: "https://images.unsplash.com/photo-1610026386855-e01404c45a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Nara, located near Kyoto, is a city in Japan known for its ancient temples, traditional atmosphere, and friendly deer roaming freely in Nara Park. Visitors can explore Todai-ji Temple, home to the world's largest bronze statue of Buddha, and Kasuga Taisha Shrine with its thousands of stone lanterns. Nara is also famous for its cherry blossoms and autumn foliage."
  },
  {
    country: "France",
    title: "Paris",
    img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Paris, the capital city of France, is renowned for its iconic landmarks, rich history, and romantic charm. Visitors can marvel at the Eiffel Tower, explore the Louvre Museum to see the Mona Lisa, and wander through the charming streets of Montmartre. Paris also offers world-class cuisine, fashionable boutiques, and vibrant nightlife."
  },
  {
    country: "France",
    title: "Provence",
    img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Provence is a picturesque region in southeastern France known for its stunning landscapes, charming villages, and vibrant lavender fields. Visitors can explore the historic city of Avignon, wander through the colorful streets of Aix-en-Provence, and visit the beautiful coastal town of Cassis. Provence also offers delicious cuisine, fine wines, and a relaxed way of life."
  },
  {
    country: "France",
    title: "Nice",
    img: "https://images.unsplash.com/photo-1503696967350-ad1874122058?q=80&w=1707&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Nice is a vibrant city located on the French Riviera known for its beautiful beaches, Mediterranean climate, and vibrant atmosphere. Visitors can stroll along the Promenade des Anglais, explore the charming Old Town (Vieux Nice), and visit the stunning hilltop views from Castle Hill. Nice also offers a thriving arts scene, excellent cuisine, and a lively nightlife."
  },
  {
    country: "France",
    title: "Côte d'Azur",
    img: "https://media.istockphoto.com/id/1248448159/photo/villefranche-sur-mer-village-in-france.jpg?s=2048x2048&w=is&k=20&c=-t-SWCuUlffuds_3maS0vVCV2-hCyeSYqjiGTyqyzUc=",
    description: "The Côte d'Azur, also known as the French Riviera, is a glamorous coastal region in southeastern France. It is famous for its stunning beaches, luxurious resorts, and vibrant nightlife. Visitors can enjoy sunbathing in glamorous towns like Saint-Tropez and Cannes, explore the charming streets of Nice and Antibes, and indulge in fine dining and shopping."
  },
  {
    country: "France",
    title: "Versailles",
    img: "https://images.unsplash.com/photo-1551568697-4b520d9743f4?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Versailles is a city located near Paris and is famous for its opulent Palace of Versailles. Visitors can explore the stunning palace, with its Hall of Mirrors and beautifully manicured gardens. Versailles also offers charming streets, local markets, and the opportunity to experience the grandeur and history of the French monarchy."
  },
  {
    country: "Italy",
    title: "Florence",
    img: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Florence, located in the heart of Tuscany, is a city renowned for its art, architecture, and Renaissance heritage. Visitors can admire masterpieces at the Uffizi Gallery, marvel at the Duomo and Brunelleschi's Dome, and stroll across the iconic Ponte Vecchio. Florence is also known for its delicious cuisine, world-class wines, and charming streets lined with boutiques."
  },
  {
    country: "Italy",
    title: "Venice",
    img: "https://media.istockphoto.com/photos/venice-canal-gondola-and-rialto-bridge-in-venice-italy-picture-id1193499036?k=20&m=1193499036&s=612x612&w=0&h=9yC5S1Ct6v0QaRIVQhUJzJ2kKdJxT8uS0b6XcJwS4Xg=",
    description: "Venice, a unique city built on a lagoon, is known for its enchanting canals, beautiful architecture, and romantic atmosphere. Visitors can take a gondola ride along the Grand Canal, visit St. Mark's Square and the stunning St. Mark's Basilica, and explore the charming neighborhoods of Cannaregio and Dorsoduro. Venice also offers exquisite Venetian cuisine and the world-famous Venetian Carnival."
  },
  {
    country: "Italy",
    title: "Amalfi Coast",
    img: "https://images.unsplash.com/photo-1596736743518-eef8c49026b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Amalfi Coast is a breathtaking stretch of coastline in southern Italy, known for its colorful cliffside villages, crystal-clear waters, and dramatic landscapes. Visitors can explore the charming town of Positano, visit the historic town of Amalfi with its stunning cathedral, and take in panoramic views from Ravello. The Amalfi Coast also offers delicious seafood, picturesque hiking trails, and relaxing beachside vibes."
  },
  {
    country: "Italy",
    title: "Sicily",
    img: "https://media.istockphoto.com/id/1451071102/photo/syracuse-italy-street-scene-at-twilight.jpg?s=2048x2048&w=is&k=20&c=Rj9Gl5_zf8-8DbSvdl1hehWlCk9HOcYR-h8-j1yj5s4=",
    description: "Sicily, the largest island in the Mediterranean Sea, is a land of diverse landscapes, ancient ruins, and delicious cuisine. Visitors can explore the Valley of the Temples in Agrigento, wander through the charming streets of Taormina, and visit the vibrant city of Palermo. Sicily also offers stunning beaches, Mount Etna (Europe's highest active volcano), and unique cultural traditions."
  },
  {
    country: "Spain",
    title: "Barcelona",
    img: "https://media.istockphoto.com/id/1301579230/photo/spanish-cities-the-sacred-barcelona-family.jpg?s=2048x2048&w=is&k=20&c=7yc8FlEMJ1EiOUFAQXKPD1DDT-u7poMZZNEcZReMhFo=",
    description: "Barcelona, the vibrant capital of Catalonia, is known for its unique architecture, lively atmosphere, and beautiful beaches. Visitors can marvel at the architectural masterpiece of Antoni Gaudí's Sagrada Família, stroll along the vibrant street of La Rambla, and explore the historic Gothic Quarter. Barcelona also offers delicious Catalan cuisine, world-class museums, and a thriving arts scene."
  },
  {
    country: "Spain",
    title: "Madrid",
    img: "https://media.istockphoto.com/id/951917136/photo/aerial-view-and-skyline-of-madrid-at-dusk-spain-europe.jpg?s=2048x2048&w=is&k=20&c=4yuejoT1ku0jLeq8omJkhjTZnWM0jUD9BfFuS0k8orc=",
    description: "Madrid, the capital city of Spain, is a cultural hub known for its rich history, art, and vibrant nightlife. Visitors can explore world-class museums like the Prado Museum, stroll through the beautiful Retiro Park, and visit the majestic Royal Palace. Madrid also offers a lively culinary scene, traditional tapas bars, and lively festivals such as San Isidro and La Tomatina."
  },
  {
    country: "Spain",
    title: "Seville",
    img: "https://media.istockphoto.com/id/689040704/photo/plaza-de-espana-seville.jpg?s=2048x2048&w=is&k=20&c=J6ot52Gipc_q8iy_raye3zAkZK7JJMUcLHC8r1aIifw=",
    description: "Seville, the capital of Andalusia, is a city filled with rich history, stunning architecture, and vibrant culture. Visitors can admire the grandeur of the Seville Cathedral and climb the Giralda Tower, explore the beautiful Alcázar Palace, and stroll through the charming streets of the Santa Cruz neighborhood. Seville also offers flamenco music and dance, traditional tapas, and festive celebrations like the Feria de Abril."
  },
  {
    country: "Spain",
    title: "Valencia",
    img: "https://media.istockphoto.com/id/1482790388/photo/gand%C3%ADa-port-grao-beach-aerial-skyline-at-sunset-in-mediterranean-valencia.jpg?s=2048x2048&w=is&k=20&c=459oyuY8-YnjUOwia0Me9SQi1wfGHWuYPeYGxYDzLmc=",
    description: "Valencia, located on the southeastern coast of Spain, is a city known for its modern architecture, vibrant festivals, and delicious cuisine. Visitors can explore the futuristic City of Arts and Sciences, relax on the beautiful beaches of La Malvarrosa, and wander through the historic streets of the Old Town. Valencia also offers traditional paella, lively street markets, and the famous Fallas festival."
  },
  {
    country: "Spain",
    title: "Granada",
    img: "https://media.istockphoto.com/id/182727232/photo/the-alhambra.jpg?s=2048x2048&w=is&k=20&c=N6nXN6AQZFRQeGtll3yNPiwWiwtlzp5dycWI7IMhTF8=",
    description: "Granada, nestled at the foot of the Sierra Nevada mountains, is a city known for its Moorish architecture, fascinating history, and vibrant culture. Visitors can explore the magnificent Alhambra Palace, wander through the narrow streets of the Albaicín neighborhood, and experience a traditional flamenco show in the Sacromonte caves. Granada also offers delicious tapas, beautiful viewpoints, and the vibrant atmosphere of the Albayzín district."
  },
  {
    country: "Brazil",
    title: "Rio de Janeiro",
    img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Rio de Janeiro, the bustling city nestled between mountains and the Atlantic Ocean, is known for its vibrant culture, stunning beaches, and iconic landmarks. Visitors can relax on the famous Copacabana and Ipanema beaches, hike up to the towering Christ the Redeemer statue, and take a cable car ride to the top of Sugarloaf Mountain for panoramic views. Rio de Janeiro also offers samba music, lively street festivals, and a lively nightlife scene."
  },
  {
    country: "Brazil",
    title: "São Paulo",
    img: "https://images.unsplash.com/photo-1629984557780-4dde2292e245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "São Paulo, the largest city in Brazil, is a bustling metropolis known for its vibrant culture, diverse cuisine, and thriving arts scene. Visitors can explore the bustling Paulista Avenue, visit the São Paulo Museum of Art, and enjoy the city's vibrant street art. São Paulo also offers a wide range of culinary delights, from traditional Brazilian dishes to international cuisines, and a vibrant nightlife."
  },
  {
    country: "Brazil",
    title: "Salvador",
    img: "https://images.unsplash.com/photo-1621693247912-767f47a3c382?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Salvador, the capital of the Bahia state, is a vibrant coastal city known for its rich Afro-Brazilian culture, colorful colonial architecture, and lively music scene. Visitors can explore the historic Pelourinho district, visit the São Francisco Church with its intricate golden interior, and enjoy the energetic rhythms of capoeira and samba. Salvador also offers delicious Bahian cuisine, beautiful beaches, and vibrant street markets."
  },
  {
    country: "Brazil",
    title: "Manaus",
    img: "https://images.unsplash.com/photo-1518464087714-fd4f40eadfcd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Manaus, located in the heart of the Amazon rainforest, is a gateway to the wonders of the jungle and a city with a rich history. Visitors can explore the iconic Teatro Amazonas, a stunning opera house, take a boat tour along the Amazon River, and immerse themselves in the unique ecosystems of the surrounding rainforest. Manaus also offers vibrant markets, diverse wildlife, and opportunities for eco-tourism."
  },
  {
    country: "Brazil",
    title: "Foz do Iguaçu",
    img: "https://media.istockphoto.com/id/1496496626/photo/waterfalls-of-foz-do-igua%C3%A7u.jpg?s=2048x2048&w=is&k=20&c=VpV0G_l4JqwDEIVaVL-Vd7qI9__oeTK_9L_g9IjgFw8=",
    description: "Foz do Iguaçu, located on the border of Brazil, Argentina, and Paraguay, is home to the magnificent Iguaçu Falls, one of the world's most spectacular natural wonders. Visitors can witness the awe-inspiring power of the falls, explore the surrounding national park, and even take a boat ride to get up close to the cascades. Foz do Iguaçu also offers diverse wildlife, lush rainforest, and a unique cultural blend at the Triple Frontier."
  },
  {
    country: "Mexico",
    title: "Mexico City",
    img: "https://media.istockphoto.com/id/1064307584/photo/independence-monument-mexico-city.jpg?s=2048x2048&w=is&k=20&c=etSUiEl_50CN8bxMM4V_pHrWEvKc9BkFOoKBM6AchoI=",
    description: "Mexico City, the vibrant capital of Mexico, is a bustling metropolis known for its rich history, captivating culture, and delicious cuisine. Visitors can explore the historic center, visit the impressive National Palace, and marvel at the ancient ruins of Teotihuacan. Mexico City also offers world-class museums, such as the Frida Kahlo Museum and the National Museum of Anthropology, as well as lively markets, colorful street art, and a thriving arts scene."
  },
  {
    country: "Mexico",
    title: "Cancún",
    img: "https://media.istockphoto.com/id/1179231030/photo/aerial-canc%C3%BAn-sea-and-lake-view.jpg?s=2048x2048&w=is&k=20&c=Be-dO6xLTAJnJgLUA2Z7oviylBufCyyrzPxdFPWyuLk=",
    description: "Cancún, located on the northeastern coast of the Yucatán Peninsula, is a popular beach destination known for its turquoise waters, white sandy beaches, and vibrant nightlife. Visitors can relax on the beautiful beaches, explore the underwater world while snorkeling or diving in the nearby coral reefs, and visit the ancient Mayan ruins of Tulum. Cancún also offers luxurious resorts, exciting water sports, and a variety of dining and entertainment options."
  },
  {
    country: "Mexico",
    title: "Oaxaca",
    img: "https://media.istockphoto.com/id/1454077822/photo/oaxaca-cathedral-with-drone.jpg?s=2048x2048&w=is&k=20&c=fGQobvz961uQYBNoBtDqHhNLbkbP9m-6k0UmcQnDpZw=",
    description: "Oaxaca, located in southern Mexico, is a city renowned for its rich indigenous culture, colorful festivals, and exquisite cuisine. Visitors can explore the historic center with its beautiful colonial architecture, visit the fascinating Zapotec ruins of Monte Albán, and immerse themselves in the vibrant markets offering traditional crafts and local delicacies. Oaxaca also offers mezcal tastings, traditional art workshops, and a lively arts and music scene."
  },
  {
    country: "Mexico",
    title: "Playa del Carmen",
    img: "https://images.unsplash.com/photo-1607646868325-e459b2570fad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Playa del Carmen, situated along the Riviera Maya, is a coastal town known for its stunning beaches, crystal-clear waters, and lively atmosphere. Visitors can relax on the pristine white sands, go snorkeling or diving in the vibrant coral reefs of the Great Maya Barrier Reef, and explore the nearby eco-archaeological parks. Playa del Carmen also offers a bustling pedestrian street, known as Quinta Avenida, lined with shops, restaurants, and vibrant nightlife."
  },
  {
    country: "China",
    title: "Beijing",
    img: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Beijing, the capital of China, is a city steeped in history and culture. Visitors can explore the iconic Forbidden City, walk along the Great Wall of China, and visit the Temple of Heaven. Beijing also offers modern attractions like the futuristic Olympic Park and the bustling shopping district of Wangfujing. With its traditional architecture, delicious cuisine, and vibrant street life, Beijing showcases the perfect blend of old and new."
  },
  {
    country: "China",
    title: "Shanghai",
    img: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Shanghai, a global financial hub, is a modern metropolis known for its stunning skyline, vibrant nightlife, and thriving arts scene. Visitors can stroll along the historic Bund, explore the futuristic skyscrapers of Pudong, and visit the beautiful Yu Garden. Shanghai also offers world-class shopping on Nanjing Road, delicious street food, and a diverse range of cultural experiences, from traditional Chinese opera to contemporary art exhibitions."
  },
  {
    country: "China",
    title: "Xi'an",
    img: "https://images.unsplash.com/photo-1563867800922-e2ff6367aae1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Xi'an, the ancient capital of China, is a city rich in history and archaeological wonders. Visitors can marvel at the Terracotta Army, explore the ancient city walls, and visit the Great Mosque. Xi'an also offers a vibrant Muslim Quarter, where visitors can sample delicious street food and shop for traditional handicrafts. With its blend of ancient treasures and modern developments, Xi'an offers a unique glimpse into China's past and present."
  },
  {
    country: "China",
    title: "Chengdu",
    img: "https://images.unsplash.com/photo-1575386867460-c9f9ce28faf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Chengdu, the capital of Sichuan province, is famous for its giant pandas, spicy cuisine, and relaxed lifestyle. Visitors can visit the Chengdu Research Base of Giant Panda Breeding, where they can observe these adorable creatures up close. Chengdu also offers beautiful parks and gardens, such as the People's Park and the Wenshu Monastery, as well as a vibrant food scene with its famous Sichuan hotpot and street snacks."
  },
];
module.exports = { data: sampleListings };


