import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onUpdateTab = () => {
    updateActiveTabId(tabId)
  }

  const isActiveTabClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabClass}`}
        onClick={onUpdateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
