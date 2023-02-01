// export default () => ({}) REACTIVO Y CUANDO CAMBIA NOTIFICA A LOS COMPONENTES QUE ESTÉN ESCUCHANDO
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "1.- Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae harum enim reiciendis iure illum delectus soluta a,nulla quam dolore recusandae modi nobis, deserunt eveniet?Nesciunt quo officiis repudiandae consequatur.",
            picture: null, // https://url
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "2.- Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae harum enim reiciendis iure illum delectus soluta a,nulla quam dolore recusandae modi nobis, deserunt eveniet?Nesciunt quo officiis repudiandae consequatur.",
            picture: null, // https://url
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "3.- Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae harum enim reiciendis iure illum delectus soluta a,nulla quam dolore recusandae modi nobis, deserunt eveniet?Nesciunt quo officiis repudiandae consequatur.",
            picture: null, // https://url
        },
    ]
})