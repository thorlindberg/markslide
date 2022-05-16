// slide initialisers

const titleSlide = (data) => {
    return slide(
        header(data.name),
        title(data.title),
        footer(data.reference, data.note)
    )
}

const textImageSlide = (data) => {
    return slide(
        header(data.name),
        textImage(data.text, data.image, data.caption),
        footer(data.reference, data.note)
    )
}

// component initialisers

const slide = (header, content, footer) => {

    var slideContainer = document.createElement("div")
    slideContainer.style.display = "flex"
    slideContainer.style.flexDirection = "column"
    slideContainer.style.width = "100vw"
    slideContainer.style.height = "100vh"

    slideContainer.append(header)
    slideContainer.append(content)
    slideContainer.append(footer)

    return slideContainer

}

const title = (title) => {

    var titleContainer = document.createElement("div")
    titleContainer.style.display = "flex"
    titleContainer.style.flexDirection = "column"
    titleContainer.style.justifyContent = "center"
    titleContainer.style.width = "100%"
    titleContainer.style.height = "100%"

    var titleElement = document.createElement("div")
    titleElement.style.fontSize = "3em"
    titleElement.style.lineHeight = "1.5em"
    titleElement.innerHTML = title

    titleContainer.append(titleElement)

    return titleContainer

}

const textImage = (text, image, caption) => {

    var textImageContainer = document.createElement("div")
    textImageContainer.style.display = "flex"
    textImageContainer.style.justifyContent = "space-between"
    textImageContainer.style.alignItems = "center"
    textImageContainer.style.width = "100%"
    textImageContainer.style.height = "100%"

    var textElement = document.createElement("div")
    textElement.style.width = "47.5%"
    textElement.innerHTML = text

    var imageContainer = document.createElement("div")
    imageContainer.style.display = "flex"
    imageContainer.style.flexDirection = "column"
    imageContainer.style.justifyContent = "center"
    imageContainer.style.width = "47.5%"
    imageContainer.style.height = "100%"

    var imageElement = document.createElement("img")
    imageElement.style.objectFit = "contain"
    imageElement.style.width = "100%"
    imageElement.src = image

    var captionElement = document.createElement("div")
    captionElement.style.lineHeight = "2em"
    captionElement.style.width = "100%"
    captionElement.innerHTML = caption

    imageContainer.append(imageElement)
    imageContainer.append(captionElement)
    
    textImageContainer.append(textElement)
    textImageContainer.append(imageContainer)

    return textImageContainer

}

const header = (name) => {

    var headerElement = document.createElement("div")
    headerElement.style.display = "flex"
    headerElement.style.justifyContent = "space-between"
    headerElement.style.width = "100%"
    headerElement.style.color = "gray"

    headerElement.append(
        headerName(name)
    )

    headerElement.append(
        headerDate()
    )

    return headerElement

}

const headerName = (name) => {

    var nameElement = document.createElement("div")
    nameElement.innerHTML = name

    return nameElement
    
}

const headerDate = () => {

    var dateElement = document.createElement("div")
    dateElement.innerHTML = `${new Date().toLocaleString('en-US', {month: 'long'})} ${new Date().getDate()}. ${new Date().getFullYear()}`

    return dateElement

}

const footer = (reference, note) => {

    var footerElement = document.createElement("div")
    footerElement.style.display = "flex"
    footerElement.style.justifyContent = "space-between"
    footerElement.style.width = "100%"
    footerElement.style.color = "gray"

    footerElement.append(
        footerReference(reference)
    )

    footerElement.append(
        footerNote(note)
    )

    return footerElement

}

const footerReference = (reference) => {

    var referenceElement = document.createElement("div")
    referenceElement.innerHTML = reference

    return referenceElement
    
}

const footerNote = (note) => {

    var noteElement = document.createElement("div")
    noteElement.innerHTML = note

    return noteElement

}

// render to body
const render = (slides) => {
    slides.forEach((slide, index) => {
        
        document.body.append(slide)

        if (index + 1 < slides.length) {
            var pageBreak = document.createElement("div")
            pageBreak.style.pageBreakAfter = "always"
            document.body.append(pageBreak)
        }

    })
}