mapboxgl.accessToken = 'pk.eyJ1IjoibWtyaWVzYmVyZyIsImEiOiJjbHVsdTVocTgweXhzMmlwMWZoNDk2dDdhIn0.-0g7mENM-vtH3DoHLXaHKg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-73.82999, 40.75960],
        zoom: 15.5,
        bearing: 27,
        pitch: 45
    });

    const chapters = {
        'breakfast': {
            bearing: 27,
            center: [-73.82921, 40.75984],
            zoom: 15.5,
            pitch: 20
        },
        'lunch': {
            duration: 6000,
            center: [-73.87810, 40.74841],
            bearing: 150,
            zoom: 15,
            pitch: 0
        },
        'dinner': {
            bearing: 90,
            center: [-73.89097, 40.74721],
            zoom: 13,
            speed: 0.6,
            pitch: 40
        },
        'dessert': {
            bearing: 90,
            center: [-73.91156, 40.76808],
            zoom: 12.3
        },
        
    };

    let activeChapterName = 'breakfast';
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;

        map.flyTo(chapters[chapterName]);

        document.getElementById(chapterName).classList.add('active');
        document.getElementById(activeChapterName).classList.remove('active');

        activeChapterName = chapterName;
    }

    function isElementOnScreen(id) {
        const element = document.getElementById(id);
        const bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

    // On every scroll event, check which element is on screen
    window.onscroll = () => {
        for (const chapterName in chapters) {
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
        }
    };