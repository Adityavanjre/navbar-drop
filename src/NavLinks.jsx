import { useGlobalContext } from './Context'
import sublinks from './data'

const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className="nav-links">
      {sublinks.map((links) => {
        const { pageId, page } = links

        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks
