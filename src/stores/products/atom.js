import { atom, selector } from "recoil";

export const cartState = atom({
    key: "cartState",
    default: [],
})

export const cartListStatsState = selector({
    key: 'CartListStats',
    get: ({ get }) => {
        const cartList = get(cartState); // Kundvagnsstate
        const itemsInCart = cartList.length;
        const totalItemsInCart = cartList.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);

        return {
            itemsInCart,
            totalItemsInCart,
        };
    },
});

export const productState = atom({
    key: "productState",
    default: [
        {
            id: 1,
            title: "Bröd (1 skiva)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 5,
            image: "https://assets.bonappetit.com/photos/5f84743360f032defe1f5376/3:2/w_1857,h_1238,c_limit/Pullman-Loaf-Lede-new.jpg",
        },
        {
            id: 2,
            title: "Mjölk (250ml)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 5,
            image: "https://static.scientificamerican.com/sciam/cache/file/A9E4C1EB-4BBC-48D2-88CFA877B19815CE_source.jpg?w=590&h=800&0F41F72D-29AF-4A33-B714A54E31CE88B7",
        },
        {
            id: 3,
            title: "Gurka (1st)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 15,
            image: "https://f.nordiskemedier.dk/2ogioiyplwawc5jb.jpg",
        },
        {
            id: 4,
            title: "Jordnötssmör (25g)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 10,
            image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2018%2F01%2F03%2Fhealthiest-peanut-butter-2000.jpg&q=60",
        },
        {
            id: 5,
            title: "Banan (1st)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 10,
            image: "https://wp.fiskejournalen.se/wp-content/uploads/2017/05/bananer_705.jpg",
        },
        {
            id: 6,
            title: "Yoghurt (250ml)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 10,
            image: "https://www.daringgourmet.com/wp-content/uploads/2021/01/How-to-Make-Yogurt-7-500x375.jpg",
        },
        {
            id: 7,
            title: "Kaffe (1 kopp)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 15,
            image: "https://malintilja.se/wp-content/uploads/2019/12/KAFFE.jpg",
        },
        {
            id: 8,
            title: "Smör (20g)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 5,
            image: "https://imengine.lrf.infomaker.io/?uuid=457a33ca-8942-48b8-9857-23649b27263b&type=preview&source=&function=fit&width=630&height=434&q=80&maxsize=630&name=istock-179875636-jpg",
        },
        {
            id: 9,
            title: "Juice (250ml)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 10,
            image: "https://storage.googleapis.com/mammafitness-wp/iStock-825882916-1.jpg",
        },
        {
            id: 10,
            title: "Skinka (1 skiva)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 6,
            image: "https://fruktkorgar.se/wp-content/uploads/2019/01/skinka.jpg",
        },
        {
            id: 11,
            title: "Ost (1 skiva)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 5,
            image: "http://gfx.dagbladet.no/labrador/238/238352/23835262/jpg/active/978x.jpg",
        },
        {
            id: 12,
            title: "Gröt (1 portion)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 15,
            image: "https://www.recetin.com/wp-content/uploads/2012/02/arroz_avena.jpg",
        },
        {
            id: 13,
            title: "Smoothie (250ml)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 15,
            image: "https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png",
        },
        {
            id: 14,
            title: "Te (1 kopp)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 10,
            image: "http://aromboden.se/wp-content/uploads/sites/177/2019/11/10-1.jpg",
        },
        {
            id: 15,
            title: "Marmelad (25g)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 5,
            image: "https://www.ikea.com/se/sv/images/products/marmelad-apelsin-flaeder-apelsin-och-flaedermarmelad-ekologisk__1055363_pe847956_s5.jpg",
        },
        {
            id: 16,
            title: "Ägg (1st)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 5,
            image: "https://images.interactives.dk/istock-695954982-wZ1UAXTRHHqH2Bc_ORUFoQ.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&h=480&ixjsv=2.2.4&q=38&rect=37%2C0%2C2044%2C1415",
        },
        {
            id: 17,
            title: "Flingor (40g)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in purus sit amet purus pellentesque faucibus non vel odio. Etiam aliquam sapien justo, non elementum sapien suscipit sed. Praesent eget consequat erat, at lobortis ligula. Sed sed ullamcorper enim. Quisque accumsan velit nec vulputate ultrices. Mauris neque lacus, gravida id lobortis a, imperdiet vel ante. Aliquam scelerisque est eu ultricies tincidunt. Aenean varius erat vel augue malesuada, vel sodales leo gravida. Nam sollicitudin convallis nunc, vitae bibendum sapien ultrices et. Praesent molestie ligula massa, ut gravida lectus tempus a. Vivamus sed tempus augue, in venenatis elit. Nullam lobortis gravida finibus. Curabitur euismod odio scelerisque risus rutrum, a convallis sapien feugiat. Aliquam erat volutpat.",
            price: 7,
            image: "https://www.webstaurantstore.com/images/products/large/429821/1659430.jpg",
        },
    ],
});