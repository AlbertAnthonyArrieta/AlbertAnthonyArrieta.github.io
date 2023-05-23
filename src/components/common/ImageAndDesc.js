import Image from 'react-bootstrap/Image';
import Placeholder from '../../images/placeholder.jpg';
import Fade from 'react-reveal/Fade';
export const ImageAndDesc = ({ img, heading, paragraph, order }) => {

    return (
        <Fade bottom>
            <div className='imageanddesc'>
                <Image className='imageanddesc--image imageanddesc--item' src={img} rounded />
                <div className='imageanddesc--item'>
                    <h2 className='text--subheading'>{heading}</h2>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
        </Fade>

    )
}

ImageAndDesc.defaultProps = {
    img: Placeholder,
    heading: "Heading",
    paragraph: "Insert Paragraph Here"
}
export default ImageAndDesc