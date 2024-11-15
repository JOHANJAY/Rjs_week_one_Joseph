import { useRef } from "react"

const InputField = () => {
    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
export default InputField