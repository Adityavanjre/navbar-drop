import { useRef } from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()

  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const submenuContainer = useRef(null)

  const mouseHandle = (event) => {
    const submenu = submenuContainer.current
    // const { left, right, bottom } = submenu.getBoundingClientReact()
    // const { clientX, clientY } = event

    // if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
    //   // setPageId(null)
    // }
    setPageId(null)
  }

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={mouseHandle}
      // ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1rf',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { icon, url, label, id } = link
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default Submenu
