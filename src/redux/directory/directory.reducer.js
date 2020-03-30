const INITIAL_STATE = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/Zh4PPKx/hats.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/bNwS9c7/jackets.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/nfS4yjf/sneakers.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/YNbygmR/women.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/ssj55V3/men.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;