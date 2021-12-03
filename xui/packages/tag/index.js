import Tag from './src/tag';

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag);
};

export {
  Tag
}

export default Tag;
