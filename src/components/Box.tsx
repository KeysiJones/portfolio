
function Box (
    props: {
        text: string,
        bg: string,
        hoverBg: string,
        styles: string,
        link?: string
    }) {
    
    const classe = `transition duration-150 transform hover:scale-110 ${props.bg} hover:${props.hoverBg} rounded-lg ${props.styles} mx-auto`
    
    const openLink = (link: string) => {
        if(props.link){
            if(props.link.startsWith('#')) {
                window.location.href = link
                return
            }
            window.open(link, '_blank')
        }
    }

    return (
        <button className={classe} onClick={() => openLink(props.link ?? '')}>
            <p className='text-3xl text-white'>{props.text}</p>
        </button>
    )
}

export default Box