import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

import { getProperties } from '../../api/properties'

const PropertyListing = () => {
    const [properties, setProperties] = useState([])

    const fetchProperties = async () => {
       const data = await getProperties()
       setProperties(data)
    }

    useEffect(() => {
        fetchProperties()
    }, [])

    return (
        <div className="PropertyListing">
            {
                properties.map((property) => {
                    return <PropertyCard key={property.id} {...property}/>
                })
            }
        </div>
    )
};

export default PropertyListing;
