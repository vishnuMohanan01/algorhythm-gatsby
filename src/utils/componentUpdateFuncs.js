export default {
    increment: (activeComponentID, setActiveComponentID, numOfComponents) => {
        if (activeComponentID === numOfComponents - 1) setActiveComponentID(0)
        else setActiveComponentID((currComponentID) => currComponentID + 1)
    },
    decrement: (activeComponentID, setActiveComponentID, numOfComponents) => {
        if (activeComponentID !== 0) setActiveComponentID((currComponentID) => currComponentID - 1)
    }
}
