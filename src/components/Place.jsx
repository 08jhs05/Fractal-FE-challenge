import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Place({ data }) {

    const [failedLoadingImg, setFailedLoadingImg] = useState(false);

    const { id } = useParams();
    const businessInfo = data !== undefined ? data[id - 1] : null;

    return(
        <div>
            <Link to="/"><h3>Go back to places</h3></Link>
            <div className="business-info">
                {failedLoadingImg ?
                    <div className="image-error-message">Failed to load image.</div> : 
                    <img src={businessInfo?.logo_url}
                    alt="business_image"
                    onError={() => { setFailedLoadingImg(true); }}
                />}
                
                <div className="info-section">
                    <div>
                        <span className="info-title">• Business Name: </span>{businessInfo?.name}
                    </div>
                    <div>
                        <span className="info-title">• Address: </span>{businessInfo?.address}
                    </div>
                    <div>
                        <span className="info-title">• Website: </span>{businessInfo?.website_url}
                    </div>
                    <div className="info-hours">
                        <span className="info-title">• Hours: </span>
                        <div className="hours">
                            {businessInfo && Object.keys(businessInfo?.hours).map(day => 
                                <div key={day}>
                                    {day} : {businessInfo?.hours[day]}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Place;