import Alert from './packages/alert/index.js';
import Tag from './packages/tag/index.js';

const components = [
    Alert,
    Tag
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    Alert,
    Tag
}

export default {
    install,
}