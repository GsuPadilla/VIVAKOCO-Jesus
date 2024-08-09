document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');

    const characters = {
        Sigewinne: {
            name: "Sigewinne",
            title: "Melusine Head Nurse",
            description: "Sigewinne is the resident head nurse of the Fortress of Meropide. In the past, Sigewinne chose to adopt a human appearance in order to save a young child she befriended at a time where Melusines were looked down upon. However, her transformation was against Fontaine laws, resulting in her conviction to the Fortress of Meropide.",
            image: "images/sigewinne.jpg",
            element: "Cryo",
            weapon: "Bow",
            rarity: 5
        },
        Alhaitham: {
            name: "Alhaitham",
            title: "Sumeru Akademiya Scribe",
            description: "Alhaitham is a member of the Haravatat of the Sumeru Akademiya and the Akademiya's Scribe, responsible for documenting their findings and drafting ordinances. Despite his brilliance, people within the Akademiya are perplexed by Alhaitham due to his unwillingness to aspire for higher office in spite of his egocentricity, and many have been at odds with him for his uncompromising view on rationality and the truth.",
            image: "images/alhacen.jpg",
            element: "Dendro",
            weapon: "Sword",
            rarity: 5
        },
        Aloy: {
            name: "Aloy",
            title: "Nora Huntress",
            description: "She is the heroine from Horizon Zero Dawn and is introduced as a collaboration and crossover character between Guerrilla Games and HoYoverse.",
            image: "images/aloy.jpg",
            element: "Cryo",
            weapon: "Bow",
            rarity: 5
        },
        Arlecchino: {
            name: "Arlecchino",
            title: "Head of the House of the Hearth",
            description: "She is the Fourth of the Eleven Fatui Harbingers and the current director of the House of the Hearth. She is addressed as Father by members of the House, who she calls her children.",
            image: "images/arlecchino.jpg",
            element: "Pyro",
            weapon: "Polearm",
            rarity: 5
        },
        Venti: {
            name: "Venti",
            title: "Singer of Skyward Sonnets",
            description: "He is a free-spirited, wine-loving bard of Mondstadt, belying his identity as Barbatos, the Anemo Archon.",
            image: "images/venti.jpg",
            element: "Anemo",
            weapon: "Bow",
            rarity: 5
        },
        Diluc: {
            name: "Diluc",
            title: "Master of the Dawn Winery",
            description: "Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt. While a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way.",
            image: "images/diluc.jpg",
            element: "Pyro",
            weapon: "Claymore",
            rarity: 5
        },
        Jean: {
            name: "Jean",
            title: "Acting Grand Master",
            description: "The older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.",
            image: "images/jean.jpg",
            element: "Anemo",
            weapon: "Sword",
            rarity: 5
        },
        Mona: {
            name: "Mona",
            title: "Enigmatic Astrologer",
            description: "An astrologist of knowledgeable skill and high pride, Mona has settled in Mondstadt to avoid suffering the ire of her master after unwittingly reading the latter's diary.",
            image: "images/mona.jpg",
            element: "Hydro",
            weapon: "Catalyst",
            rarity: 5
        },
        Albedo: {
            name: "Albedo",
            title: "Chief Alchemist of the Knights of Favonius",
            description: "A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
            image: "images/albedo.jpg",
            element: "Geo",
            weapon: "Sword",
            rarity: 5
        },
        Albedo: {
            name: "Albedo",
            title: "Chief Alchemist of the Knights of Favonius",
            description: "A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
            image: "images/albedo.jpg",
            element: "Geo",
            weapon: "Sword",
            rarity: 5
        },
        Klee: {
            name: "Klee",
            title: "Spark Knight",
            description: "The daughter of the intrepid and often quite destructive adventurer Alice, Klee takes after her mother in many ways, much to the dismay of the Knights of Favonius whom she has been entrusted to.",
            image: "images/klee.jpg",
            element: "Pyro",
            weapon: "Catalyst",
            rarity: 5
        },
        Ayaka: {
            name: "Kamisato Ayaka",
            title: "Daughter of the Yashiro Commission's Kamisato Clan",
            description: "She is in charge of the internal and external affairs of the Kamisato Clan and is the younger sister of Kamisato Ayato. Beautiful, dignified, and noble, Ayaka has earned the title Shirasagi Himegimi and is considered a model of perfection in Inazuma.",
            image: "images/kamisato.jpg",
            element: "Cryo",
            weapon: "Sword",
            rarity: 5
        },
        Ayato: {
            name: "Kamisato Ayato",
            title: "Head of the Kamisato Clan",
            description: "He is the current head of the Kamisato Clan, the older brother of Kamisato Ayaka, and the Yashiro Commissioner. Resourceful and cunning, Ayato keeps a lower profile than his sister and focuses on government affairs in the Commission.",
            image: "images/ayato.jpg",
            element: "Hydro",
            weapon: "Sword",
            rarity: 5
        },
        Baizhu: {
            name: "Baizhu",
            title: "Owner of Bubu Pharmacy",
            description: "The owner of Bubu Pharmacy and Qiqi's guardian, Doctor Baizhu is a master of the medicinal arts and the latest recipient of a generational contract with a white snake named Changsheng. He seeks to achieve immortality to ensure he is the last to ever bear his contract, saving potential inheritors and even Changsheng herself from the cost that comes with its power.",
            image: "images/baizhu.jpg",
            element: "Dendro",
            weapon: "Catalyst",
            rarity: 5
        },
        Childe: {
            name: "Childe",
            title: "The Eleventh of the Eleven Fatui Harbingers",
            description: "He is the Eleventh of the Eleven Fatui Harbingers. Wherever he goes, danger follows, and Childe is always eager for a challenge, making him extremely dangerous despite being the youngest member.",
            image: "images/childe.jpg",
            element: "Hydro",
            weapon: "Sword",
            rarity: 5
        },
        Chiori: {
            name: "Chiori",
            title: "Boss of the Chioriya Boutique",
            description: "An independent designer hailing from Inazuma who strives to make her brand internationally recognized across all of Teyvat, Chiori is the owner of Chioriya Boutique, a fashion label in Fontaine.",
            image: "images/chiori.jpg",
            element: "Geo",
            weapon: "Sword",
            rarity: 5
        },
        Clorinde: {
            name: "Clorinde",
            title: "Champion Duelist",
            description: "She is the strongest Champion Duelist in Fontaine. She once served as Furina's bodyguard, and has a history with Navia.",
            image: "images/clorinde.jpg",
            element: "Electro",
            weapon: "Sword",
            rarity: 5
        },
        Cyno: {
            name: "Cyno",
            title: "General Mahamatra",
            description: "As the General Mahamatra, Cyno leads the Matra and strikes fear into the hearts of researchers of the Sumeru Akademiya. In spite of this, Cyno has a fun side outside of his role in the Akademiya, as he has an affinity for Genius Invokation TCG and constantly cracks unfunny jokes.",
            image: "images/cyno.jpg",
            element: "Electro",
            weapon: "Polearm",
            rarity: 5
        },
        Dehya: {
            name: "Dehya",
            title: "Unfettered Desert Mercenary",
            description: "A fierce and strong warrior, the Flame-Mane Dehya is considered a legend among the Eremites for her might, passion, and conscientiousness. Unwilling to be trapped by the conditions that force most from the desert to stay there, she aspires to deliver hope back to the sands that she considers her home.",
            image: "images/dehya.jpg",
            element: "Pyro",
            weapon: "Claymore",
            rarity: 5
        },
        Dehya: {
            name: "Dehya",
            title: "Unfettered Desert Mercenary",
            description: "A fierce and strong warrior, the Flame-Mane Dehya is considered a legend among the Eremites for her might, passion, and conscientiousness. Unwilling to be trapped by the conditions that force most from the desert to stay there, she aspires to deliver hope back to the sands that she considers her home.",
            image: "images/dehya.jpg",
            element: "Pyro",
            weapon: "Claymore",
            rarity: 5
        },
        Eula: {
            name: "Eula",
            title: "Spindrift Knight",
            description: "Although a descendant of the infamous and tyrannical Lawrence Clan, Eula severed her ties with the clan and became the captain of the Reconnaissance Company with the Knights of Favonius.",
            image: "images/eula.jpg",
            element: "Cryo",
            weapon: "Claymore",
            rarity: 5
        },
        Furina: {
            name: "Furina",
            title: "Regina of All Waters, Kindreds, Peoples and Laws",
            description: "Introduced as the flamboyant and overconfident Hydro Archon, Furina's theatrics are eventually revealed to be a public persona, which she later discards in favor of living a relatively humbler life as an actress and artistic consultant.",
            image: "images/furina.jpg",
            element: "Hydro",
            weapon: "Sword",
            rarity: 5
        },
        Ganyu: {
            name: "Ganyu",
            title: "Secretary, Yuehai Pavilion",
            description: "She is a half-qilin Adeptus under contract with the Geo Archon Morax and serves as the general secretary of the Liyue Qixing.",
            image: "images/ganyu.jpg",
            element: "Cryo",
            weapon: "Bow",
            rarity: 5
        },
        Itto: {
            name: "Arataki Itto",
            title: "The First and Greatest Head of the Arataki Gang",
            description: "A loud and proud descendant of the crimson oni, Itto is also the leader and founder of the Arataki Gang. While not a villain, his reputation as a delinquent in Inazuma City leaves something to be desired.",
            image: "images/arataki.jpg",
            element: "Geo",
            weapon: "Claymore",
            rarity: 5
        },
        Kazuha: {
            name: "Kaedehara Kazuha",
            title: "A wandering samurai who has left his homeland",
            description: "A wandering samurai of the once-famed Kaedehara Clan with an ability to read the sounds of nature, Kazuha is a temporary crewmember of The Crux. Despite being burdened by the many happenings of his past, Kazuha still maintains an easygoing disposition.",
            image: "images/kaedehara.jpg",
            element: "Anemo",
            weapon: "Sword",
            rarity: 5
        },
        Kazuha: {
            name: "Kaedehara Kazuha",
            title: "A wandering samurai who has left his homeland",
            description: "A wandering samurai of the once-famed Kaedehara Clan with an ability to read the sounds of nature, Kazuha is a temporary crewmember of The Crux. Despite being burdened by the many happenings of his past, Kazuha still maintains an easygoing disposition.",
            image: "images/kaedehara.jpg",
            element: "Anemo",
            weapon: "Sword",
            rarity: 5
        },  
        Keshing: {
            name: "Keshing",
            title: "Yuheng of the Liyue Qixing",
            description: "As the Yuheng of the Liyue Qixing, she is someone who seeks her own answers instead of idly letting chaos run amok in Liyue. She chooses her own path with her own power and ability, instead of letting the gods determine her fate.",
            image: "images/keching.jpg",
            element: "Electro",
            weapon: "Sword",
            rarity: 5
        },
        Keshing: {
            name: "Keshing",
            title: "Yuheng of the Liyue Qixing",
            description: "As the Yuheng of the Liyue Qixing, she is someone who seeks her own answers instead of idly letting chaos run amok in Liyue. She chooses her own path with her own power and ability, instead of letting the gods determine her fate.",
            image: "images/keching.jpg",
            element: "Electro",
            weapon: "Sword",
            rarity: 5
        },
        Kokomi: {
            name: "Sangonomiya Kokomi",
            title: "Hibernating Homebody Strategist",
            description: "The young Divine Priestess of Watatsumi Island and a descendant of the Sangonomiya Clan, Kokomi is in charge of most of Watatsumi's affairs, shouldering heavy responsibilities alone in hopes for giving Watatsumi Island's people the hopes and happiness that they desire.",
            image: "images/kokomi.jpg",
            element: "Hydro",
            weapon: "Catalyst",
            rarity: 5
        },
        Lyney: {
            name: "Lyney",
            title: "Celebrated Magician of the Court of Fontaine",
            description: "Skilled and eloquent, Lyney is Fontaine's Great Magician and Lynette's twin brother. After their parents' death and having been saved from an abusive noble by their Father, Lyney has undertaken missions for the House of the Hearth and has said that he will eventually become the successor of Father.",
            image: "images/lyney.jpg",
            element: "Pyro",
            weapon: "Polearm",
            rarity: 5
        },
        Nahida: {
            name: "Nahida",
            title: "Lesser Lord Kusanali",
            description: "As Lesser Lord Kusanali, she strives to have a stronger presence in Sumeru now that she has been freed from her extensive confinement in the Sanctuary of Surasthana.",
            image: "images/nahida.jpg",
            element: "Dendro",
            weapon: "Catalyst",
            rarity: 5
        },
        Navia: {
            name: "Navia",
            title: "President, Leader, Boss, Commander-in-Chief of the Spina di Rosula",
            description: "She is the president of the Spina di Rosula, a mantle previously held by her late father Callas.",
            image: "images/navia.jpg",
            element: "Geo",
            weapon: "Claymore",
            rarity: 5
        },
        Neuvillette: {
            name: "Neuvillette",
            title: "Iudex of Fontaine",
            description: "Neuvillette is the Iudex of Fontaine, and the leader of the Marechaussee Phantom. While Neuvillette upholds the rules of the court with utmost reverence, he is quite aloof when dealing with human emotions and often distances himself from the public eye.",
            image: "images/neuvillette.jpg",
            element: "Hydro",
            weapon: "Catalyst",
            rarity: 5
        },
        Nilou: {
            name: "Nilou",
            title: "Star of Zubayr Theater",
            description: "A dancer under the Zubayr Theater, Nilou's dancing is but elegant and graceful — however, outside the stage's spotlight, she's just like any girl her age; warm, smiling, and friendly.",
            image: "images/nilou.jpg",
            element: "Hydro",
            weapon: "Sword",
            rarity: 5
        },
        Qiqi: {
            name: "Qiqi",
            title: "Pharmacist, Bubu Pharmacy",
            description: "Resurrected as a zombie by the adepti, she has ended up in Baizhu's care and now works at Bubu Pharmacy in Liyue Harbor.",
            image: "images/qiqi.jpg",
            element: "Cryo",
            weapon: "Sword",
            rarity: 5
        },
        Shenhe: {
            name: "Shenhe",
            title: "Ethereal Soul Amidst the Mortal Realm",
            description: "The daughter of an unnamed exorcist couple, Shenhe was taken in and raised by Cloud Retainer as a disciple following a traumatic incident instigated by Shenhe's father during her childhood.",
            image: "images/shenhe.jpg",
            element: "Cryo",
            weapon: "Polearm",
            rarity: 5
        },
        Tighnari: {
            name: "Tighnari",
            title: "Avidya Forest Watcher",
            description: "Tighnari is the stern Chief Officer of the Forest Rangers and Collei's mentor. Despite his intelligence, he prefers to live a solitary life in the depths of Avidya Forest rather than in the ivory tower of Sumeru Akademiya.",
            image: "images/tignari.jpg",
            element: "Dendro",
            weapon: "Bow",
            rarity: 5
        },
        Wanderer: {
            name: "Wanderer",
            title: "Tribulations Uncounted, Trials Unknowable",
            description: "The Wanderer came into existence in place of his previous incarnation after the latter expunged his previous appellations and their respective histories from Irminsul. Harboring his former self's memories after willingly regaining them, Wanderer is now the only title he goes by, for he has no home, kin, or destination.",
            image: "images/wanderer.jpg",
            element: "Dendro",
            weapon: "Bow",
            rarity: 5
        },
        Wriothesley: {
            name: "Wriothesley",
            title: "Lord of the Fortress of Meropide",
            description: "Having killed his abusive foster parents to save his adoptive siblings, Wriothesley was sentenced and exiled to the Fortress of Meropide in his teenage years. He eventually became its Administrator and has enforced a series of reforms under his rule, serving as a role model for the prisoners.",
            image: "images/wriothesley.jpg",
            element: "Cryo",
            weapon: "Catalyst",
            rarity: 5
        },
        Xianyun: {
            name: "Xianyun",
            title: "New Resident in Liyue Harbor",
            description: "Curious about what draws her disciples to Liyue Harbor, she has taken up residence in the city to see for herself.",
            image: "images/xianyun.jpg",
            element: "Anemo",
            weapon: "Catalyst",
            rarity: 5
        },
        Xiao: {
            name: "Xiao",
            title: "Bane of All Evil",
            description: "He is an adeptus, under the name Alatus, and the sole surviving member of the five foremost Yakshas dispatched by Morax to subdue the demonic spirits that plagued Liyue. He currently resides at Wangshu Inn and mostly restrains himself from large crowds and social interactions.",
            image: "images/xiao.jpg",
            element: "Anemo",
            weapon: "Polearm",
            rarity: 5
        },
        Yelan: {
            name: "Yelan",
            title: "A mysterious person who claims to work for the Ministry of Civil Affairs",
            description: "She is a mysterious person who claims to work for the Ministry of Civil Affairs, but comes out as a non-entity on their list. She also claims to work for the Yanshang Teahouse, but only uses it for her true job, an intelligence agent collaborating with Ningguang.",
            image: "images/yelan.jpg",
            element: "Hydro",
            weapon: "Bow",
            rarity: 5
        },
        Yoimiya: {
            name: "Yoimiya",
            title: "Owner of Naganohara Fireworks",
            description: "Yoimiya is the current owner of Naganohara Fireworks; with her colorful fireworks and outgoing personality, Yoimiya is loved by everyone on Narukami Island. She was coined as the Queen of the Summer Festival as they believe summer is not the same without her.",
            image: "images/yoimiya+.jpg",
            element: "Pyro",
            weapon: "Bow",
            rarity: 5
        },
        Zhongli: {
            name: "Zhongli",
            title: "Wangsheng Funeral Parlor Consultant",
            description: "A consultant of the Wangsheng Funeral Parlor, he is later revealed to be the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal.",
            image: "images/zhongli.jpg",
            element: "Geo",
            weapon: "Polearm",
            rarity: 5
        },
        HuTao: {
            name: "Hu Tao",
            title: "77th-Generation Director of the Wangsheng Funeral Parlor",
            description: "Hu Tao's antics and eccentricity belies her role as the 77th Director of the Wangsheng Funeral Parlor and her talent as a poet. Nevertheless, she treats the parlor's operations with utmost importance, and holds funeral ceremonies with the highest dignity and solemnity.",
            image: "images/hu tao.jpg",
            element: "Pyro",
            weapon: "Polearm",
            rarity: 5
        },
        Raiden: {
            name: "Shogun Raiden",
            title: "Her Eternal Excellency",
            description: "The Raiden Shogun is comprised of two beings in one body: Ei, the current Electro Archon of Inazuma; and the Shogun, the puppet created by Ei to act as the ruler of Inazuma in her stead.",
            image: "images/shogun.jpg",
            element: "Electro",
            weapon: "Polearm",
            rarity: 5
        },
        Miko: {
            name: "Yae Miko",
            title: "Guuji of the Grand Narukami Shrine",
            description: "A kitsune of many facets, Yae Miko oversees the Grand Narukami Shrine, owns the Yae Publishing House, and is Eternity's servant and friend.",
            image: "images/miko.jpg",
            element: "Electro",
            weapon: "Catalyst",
            rarity: 5
        },



        
    };

    function showCharacterInfo(characterName) {
        console.log('Mostrando información de:', characterName);
        const character = characters[characterName];
        if (character) {
            const characterInfoElement = document.getElementById('character-info');
            const mapElement = document.getElementById('genshin-map');
            
            if (characterInfoElement && mapElement) {
                mapElement.style.display = 'none';
                characterInfoElement.style.display = 'block';
                characterInfoElement.innerHTML = `
                    <h2>${character.name}</h2>
                    <hr>
                    <h3>${character.title}</h3>
                    <p>${character.description}</p>
                    <p><strong>Element:</strong> ${character.element}</p>
                    <p><strong>Weapon:</strong> ${character.weapon}</p>
                    <p><strong>Rarity:</strong> ${character.rarity} ★</p>
                    <img src="${character.image}" alt="${character.name}">
                    <br>
                    <button onclick="showMap()">Back To Home</button>
                `;
                console.log('Información del personaje actualizada');
            } else {
                console.error('No se encontraron los elementos necesarios en el DOM');
            }
        } else {
            console.error('No se encontró información para el personaje:', characterName);
        }
    }

    window.showMap = function() {
        console.log('Mostrando mapa');
        const characterInfoElement = document.getElementById('character-info');
        const mapElement = document.getElementById('genshin-map');
        
        if (characterInfoElement && mapElement) {
            characterInfoElement.style.display = 'none';
            mapElement.style.display = 'block';
        } else {
            console.error('No se encontraron los elementos necesarios en el DOM');
        }
    };

    const characterBoxes = document.querySelectorAll('.character-box');
    console.log('Número de character-boxes encontrados:', characterBoxes.length);
    
    characterBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const characterName = this.querySelector('p').textContent;
            console.log('Clic en personaje:', characterName);
            showCharacterInfo(characterName);
        });
    });

    const characterList = document.getElementById('character-list');

    characterList.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            characterList.scrollTop += e.deltaY;
        }
    });
});
const menuItems = document.querySelectorAll('.menu-item');

// Añadir event listeners para redirigir a las URLs correspondientes
menuItems[0].addEventListener('click', () => {
    window.location.href = 'https://act.hoyolab.com/ys/app/interactive-map/index.html?bbs_presentation_style=no_header&utm_source=officialweb&utm_medium=fab&utm_id=2&lang=es-es#/map/2?shown_types=&center=2008.50,-1084.00&zoom=-3.00';  // Reemplaza con la URL deseada
});

menuItems[1].addEventListener('click', () => {
    window.location.href = 'https://act.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&v=101&gid=2&utm_source=officialweb&utm_medium=fab&utm_id=2#/ys';  // Reemplaza con la URL deseada
});

menuItems[2].addEventListener('click', () => {
    window.location.href = 'https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&hyl_auth_required=true&hyl_presentation_style=fullscreen&utm_source=officialweb&utm_medium=fab&utm_id=2';  // Reemplaza con la URL deseada
});

menuItems[3].addEventListener('click', () => {
    window.location.href = 'https://wiki.hoyolab.com/pc/genshin/aggregate/character?utm_source=officialweb&utm_medium=fab&utm_id=2&lang=zh-cn&bbs_theme=light&bbs_theme_device=1';  // Reemplaza con la URL deseada
});
