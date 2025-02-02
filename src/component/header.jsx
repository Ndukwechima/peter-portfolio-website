

const Header = () => {
  return (
    <div className="h-12 w-full bg-[#10585A] underline">
    <header className="grid grid-cols-5 justify-items-center items-center gap-4 text-white py-2" >
        <h1 className="col-start-1">Peter<span className="text-[#FF9807]">Dev</span></h1>

        <ul className="grid grid-cols-5 gap-4 col-start-2 col-end-7">
            <li className="text-[#FF9807]">Home</li>
            <li>About me</li>
            <li>Technology</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </header>
    </div>
  )
}

export default Header
