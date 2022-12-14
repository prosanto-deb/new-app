import React from 'react'
import "./client.css"
import Slider from "react-slick";
 const Client = () => {
    function SampleNextArrow(props) {
		const { onClick } = props;
		return (
		  <div onClick={onClick} className="i-left">
			<i class="fa-solid fa-chevron-left"></i>
		  </div>
		  
		);
	  }
	  
	  function SamplePrevArrow(props) {
		const { onClick } = props;
		return (
		  <div onClick={onClick} className="i-right">
			<i class="fa-solid fa-chevron-right"></i>
		  </div>
		);
	  }
	  
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
		 nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };
  return (
    <div className="client">
        <div className="container">
            <div className="client-headr">
                <div className="client-left">
                    <h3>What our clients say about us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                    </p>
                </div>
                <div className="client-right">
					<Slider {...settings}>
                        <div>
							<h5>
								"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
							</h5>
							
							<div className="president">
								<div className="president-left">
									<img src="images/president.png" alt=""/>
									<div className="prisedent-name">
										<h5>Jenny Wilson</h5>
										<h6>Vice President</h6>
										
									</div>
								</div>
								<div className="arrow-icon">
									{/* <i className="fa-solid i-left fa-chevron-left"></i>
									<i className="fa-solid i-right fa-chevron-right"></i> */}
								</div>
							</div>
						</div>
					<div>
							<h5>
								"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
							</h5>
							
							<div className="president">
								<div className="president-left">
									<img src="images/president.png" alt=""/>
									<div className="prisedent-name">
										<h5>Jenny Wilson</h5>
										<h6>Vice President</h6>
										
									</div>
								</div>
								<div className="arrow-icon">
									{/* <i className="fa-solid i-left fa-chevron-left"></i>
									<i className="fa-solid i-right fa-chevron-right"></i> */}
								</div>
							</div>
						</div>
                    </Slider>
                </div>			
            </div>
        </div>
    </div>
  )
}
export default Client