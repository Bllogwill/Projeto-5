const pathContainerSectionOne = './containers/section-one/index.html'
const containerSectionOne = document.getElementById('container-section-one')

const getButtonServices = document.getElementById('button-services')

const pathContainerSectionTwo = './containers/section-two/index.html'
const containerSectionTwo = document.getElementById('container-section-two')

const pathContainerSectionThree = './containers/section-three/index.html'
const containerSectionThree = document.getElementById('container-section-three')

const pathContainerSectionFor = './containers/section-for/index.html'
const containerSectionFor = document.getElementById('container-section-for')

const pathContainerSectionFive = './containers/section-five/index.html'
const containerSectionFive = document.getElementById('container-section-five')

const pathContainerSectionSix = './containers/section-six/index.html'
const containerSectionSix = document.getElementById('container-section-six')

async function onLoadBody() {
  containerSectionOne.innerHTML = await (
    await fetch(pathContainerSectionOne)
  ).text()

  containerSectionTwo.innerHTML = await (
    await fetch(pathContainerSectionTwo)
  ).text()

  containerSectionThree.innerHTML = await (
    await fetch(pathContainerSectionThree)
  ).text()

  containerSectionFor.innerHTML = await (
    await fetch(pathContainerSectionFor)
  ).text()

  containerSectionFive.innerHTML = await (
    await fetch(pathContainerSectionFive)
  ).text()

  containerSectionSix.innerHTML = await (
    await fetch(pathContainerSectionSix)
  ).text()
}

function scrollToServices() {
  containerSectionTwo.scrollIntoView({
    behavior: 'smooth'
  })
}
