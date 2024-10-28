function _0x1100() {
    var _0x18d48b = [
        '<div><a href="/therapists#3">View Therapist</a></div>',
        '225858UakSCy',
        ' years of experience</p>',
        '117tiHnej',
        'firstName',
        '36968TfqueK',
        '<div><a href="/therapists#2">View Therapist</a></div>',
        '<h2>$',
        'sessionCost',
        '2870176xTlnsk',
        '733320hbmZjb',
        '</p>',
        'Marker',
        'GET',
        'getElementById',
        '<p>',
        '<div class="therapyCard">',
        '<span> / session</span></h2>',
        '153060daddzx',
        '163254ZFaILY',
        '30dENDTt',
        '<div><a href="/therapists#1">View Therapist</a></div>',
        '320919IikvZw',
        'lastName',
        '<h4>Therapist Details</h4>',
        'ajax',
        'map',
        'yearsExperience',
        '</div>',
        '/getTherapists',
        '1FsegZh',
        'initMap',
        'therapistCards',
        'innerHTML',
        'maps'
    ];
    _0x1100 = function () { return _0x18d48b; };
    return _0x1100();
}

var _0x47f8a7 = _0x5801;

(function (_0x2cacbf, _0x28f8ed) {
    var _0x24f161 = _0x5801,
        _0x27bf7e = _0x2cacbf();
    while (true) {
        try {
            var _0x783602 = -parseInt(_0x24f161(0x185)) / 1 * (parseInt(_0x24f161(0x16c)) / 2) + 
                -parseInt(_0x24f161(0x17d)) / 3 + 
                -parseInt(_0x24f161(0x171)) / 4 + 
                parseInt(_0x24f161(0x17b)) / 5 * (parseInt(_0x24f161(0x18b)) / 6) + 
                -parseInt(_0x24f161(0x17a)) / 7 + 
                parseInt(_0x24f161(0x170)) / 8 + 
                -parseInt(_0x24f161(0x18d)) / 9 * (-parseInt(_0x24f161(0x179)) / 10);
            if (_0x783602 === _0x28f8ed) break;
            else _0x27bf7e.push(_0x27bf7e.shift());
        } catch (_0x3b4217) {
            _0x27bf7e.push(_0x27bf7e.shift());
        }
    }
}(_0x1100, 0x6e3ab), 
$[_0x47f8a7(0x180)]({
    'url': _0x47f8a7(0x184),
    'type': _0x47f8a7(0x174),
    'success': handleGetTherapists
}));

function _0x5801(_0x5d0818, _0x2f4baa) {
    var _0x110028 = _0x1100();
    return _0x5801 = function (_0x580187, _0x4768b7) {
        _0x580187 = _0x580187 - 0x16c;
        var _0x5c10c7 = _0x110028[_0x580187];
        return _0x5c10c7;
    }, _0x5801(_0x5d0818, _0x2f4baa);
}

function handleGetTherapists(_0x4416c5) {
    var _0x735628 = _0x47f8a7,
        _0x181e68 = _0x4416c5[1],
        _0x394ddb = _0x4416c5[0],
        _0x200a53 = _0x4416c5[2],
        _0x4e98a6 = _0x735628(0x177);
    
    _0x4e98a6 += _0x735628(0x16e) + _0x181e68['sessionCost'] + _0x735628(0x178);
    _0x4e98a6 += _0x735628(0x17f);
    _0x4e98a6 += _0x735628(0x176) + _0x181e68[_0x735628(0x18e)] + ' ' + _0x181e68['lastName'] + _0x735628(0x172);
    _0x4e98a6 += _0x735628(0x176) + _0x181e68[_0x735628(0x182)] + ' years of experience</p>';
    _0x4e98a6 += _0x735628(0x16d);
    _0x4e98a6 += _0x735628(0x183);

    var _0x130f1f = '<div class="therapyCard mainCard">';
    _0x130f1f += _0x735628(0x16e) + _0x394ddb[_0x735628(0x16f)] + '<span> / session</span></h2>';
    _0x130f1f += _0x735628(0x17f);
    _0x130f1f += '<p>' + _0x394ddb[_0x735628(0x18e)] + ' ' + _0x394ddb[_0x735628(0x17e)] + '</p>';
    _0x130f1f += '<p>' + _0x394ddb[_0x735628(0x182)] + _0x735628(0x18c);
    _0x130f1f += _0x735628(0x17c);
    _0x130f1f += '</div>';

    var _0x23f84d = '<div class="therapyCard">';
    _0x23f84d += _0x735628(0x16e) + _0x200a53['sessionCost'] + '<span> / session</span></h2>';
    _0x23f84d += _0x735628(0x17f);
    _0x23f84d += '<p>' + _0x200a53[_0x735628(0x18e)] + ' ' + _0x200a53[_0x735628(0x17e)] + _0x735628(0x172);
    _0x23f84d += _0x735628(0x176) + _0x200a53[_0x735628(0x182)] + _0x735628(0x18c);
    _0x23f84d += _0x735628(0x18a);
    _0x23f84d += '</div>';

    document[_0x735628(0x175)]('therapistCards')[_0x735628(0x188)] += _0x4e98a6;
    document[_0x735628(0x175)](_0x735628(0x187))[_0x735628(0x188)] += _0x130f1f;
    document[_0x735628(0x175)](_0x735628(0x187))[_0x735628(0x188)] += _0x23f84d;
}

function initVisak() {
    const chennai = {
        lat: 13.0827,  // Latitude for Chennai
        lng: 80.2707   // Longitude for Chennai
    };

    const Visak = new google.Visaks.Visak(document.getElementById("Visak"), {
        zoom: 15,
        center: chennai,
    });

    const marker = new google.Visaks.Marker({
        position: chennai,
        Visak: Visak,
    });
}
const mapSec = document.getElementById('mapSec');
mapSec.innerHTML += `
    <div id="map"></div>
    <a href="https://www.linkedin.com/in/sanmuga-priyaa-karthikeyan-283159293/" target="_blank" style="display: block; margin-top: 10px; text-align: center; color: blue; text-decoration: underline;">
        Visit my LinkedIn Profile
    </a>
`;

window.initVisak = initVisak;
