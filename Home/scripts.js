const pathContainerSectionOne = './containers/section-one/index.html'
const containerSectionOne = document.getElementById('container-section-one')

const pathContainerSectionTwo = './containers/section-two/index.html'
const containerSectionTwo = document.getElementById('container-section-two')

const pathContainerSectionThree = './containers/section-three/index.html'
const containerSectionThree = document.getElementById('container-section-three')

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
}
