<script src="markslides.js"></script>

<script>

    // declare shared values
    const projectName = "Master's Thesis in Information Technology"

    // initialise slides
    const slides = [

        titleSlide({
            name: projectName,
            title: "Type-Extensible Object Notation:<br>JSON with Syntax for Types",
            reference: "https://www.google.com/",
            note: "This is a great slide :)"
        }),

        textImageSlide({
            name: projectName,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ultrices tellus, at dapibus erat imperdiet at. Proin vehicula, ligula quis vulputate facilisis, odio est venenatis nunc, nec semper mauris elit feugiat dolor. Sed ligula nisl, euismod sed hendrerit hendrerit, placerat nec velit. Vestibulum massa dolor, porttitor at convallis vitae, ullamcorper eget nibh. Etiam dapibus mi a est mollis aliquet vitae quis felis. Nulla scelerisque fringilla feugiat. Vestibulum a augue cursus ex efficitur suscipit. Morbi rhoncus, turpis porttitor malesuada cursus, quam sem suscipit nisi, ac congue massa ipsum vel lacus. Ut ut neque ac magna lacinia mattis nec ac eros.<br><br>Maecenas ut turpis et augue convallis gravida sit amet quis velit. Ut bibendum euismod est et posuere. Curabitur sagittis id tellus ac lobortis. Nulla augue ante, tristique sit amet purus eget, condimentum dictum odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nibh nisi, laoreet sed turpis vitae, mollis consequat sapien. Donec congue ex ac pulvinar rutrum. Donec volutpat efficitur augue vel vestibulum. Aliquam non erat id lorem venenatis lacinia. Maecenas ante leo, dictum ut efficitur sit amet, cursus eget lectus.",
            image: "https://aws1.discourse-cdn.com/standard14/uploads/cozic/original/2X/f/f25350393d74576508dff7d85cb2fb53da519f28.png",
            caption: "Figure that's really cool!",
            reference: "https://www.google.com/",
            note: "This is a great slide :)"
        })

    ]

    // render to body
    render(slides)

</script>