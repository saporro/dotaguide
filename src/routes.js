import {About} from './components/pages/About';
import {Menu} from './components/pages/Menu';
import {Str} from './components/pages/Str';
import {Int} from './components/pages/Int';
import {Agi} from './components/pages/Agi';
import {Axe} from './components/pages/Axe';
import {Crixalis} from './components/pages/Crixalis';
import {Azgalor} from './components/pages/Azgalor';
import {Yurnero} from './components/pages/Yurnero';
import {Kardel} from './components/pages/Kardel';
import {Mirana} from './components/pages/Mirana';
import {Rubick} from './components/pages/Rubick';
import {Zeus} from './components/pages/Zeus';
import {Puck} from './components/pages/Puck';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/menu/',
    component: Menu
}, {
    path: '/str/',
    component: Str
}, {
    path: '/int/',
    component: Int
}, {
    path: '/agi/',
    component: Agi
}, {
    path: '/str/',
    component: Str    
},

// Str type
{
    path: '/axe/',
    component: Axe
},{
    path: '/crixalis/',
    component: Crixalis
},{
    path: '/azgalor/',
    component: Azgalor
},

// Agi type
{
    path: '/yurnero/',
    component: Yurnero
},{
    path: '/kardel/',
    component: Kardel
},{
    path: '/mirana/',
    component: Mirana
},

// Int
{
    path: '/rubick/',
    component: Rubick
},{
    path: '/zeus/',
    component: Zeus
},{
    path: '/puck/',
    component: Puck
},
];