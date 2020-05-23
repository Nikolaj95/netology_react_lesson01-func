export default class StoryItem {
    constructor(entity) {
        Object.assign(this, {
            brand: 'noname',
            title: '',
            description: '',
            descriptionFull: '',
            price: 0,
            currency: '£'
        }, entity);
    };
};