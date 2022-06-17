import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { Component } from 'react';
import '../css/GoogleMapAPi.css';

class GoogleMapApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: '',
            center: {
                lat: 24.7850908,
                lng: 125.271478,
            },
            zoom: 15,
            isShowMarker: false
        }
        this.key = {GOOGLE-MAP-API-KEY};
    }
    location = {
        '加賀': {
            lat: 36.3021688,
            lng: 136.3138505
        },
        '小松空港': {
            lat: 36.3919154,
            lng: 136.3980806
        },
        'てくてくの杜': {
            lat: 36.3113748,
            lng: 136.3130231
        },
        '山代温泉': {
            lat: 36.2892692,
            lng: 136.3612064
        },
        '片山津温泉': {
            lat: 36.3453909,
            lng: 136.3685365
        },
        '山中温泉': {
            lat: 36.24722,
            lng: 136.3736049
        },
    }
    updateLocation = (event) => {
        const center = this.location[event.target.dataset.location];
        this.setState({
            center,
            zoom: Number(event.target.dataset.zoom),
            isShowMarker: true
        });
    }
    render () {
        const containerStyle = {
            width: '80%',
            height: '80vh'
        };

        return (
            <div className="flex justify-content-center mt-3">
                <LoadScript googleMapsApiKey={this.key}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    >
                        { this.state.isShowMarker && <Marker position={this.state.center} /> }
                    </GoogleMap>
                </LoadScript>

                <div className="ml-5 inline-grid">
                    <button onClick={this.updateLocation} data-zoom="15" data-location="加賀" className="button-element">加賀市</button>
                    <button onClick={this.updateLocation} data-zoom="15" data-location="小松空港" className="button-element mt-1">小松空港</button>
                    <button onClick={this.updateLocation} data-zoom="17" data-location="てくてくの杜" className="button-element mt-1">てくてくの杜</button>
                    <button onClick={this.updateLocation} data-zoom="17" data-location="山代温泉" className="button-element mt-1">山代温泉</button>
                    <button onClick={this.updateLocation} data-zoom="17" data-location="片山津温泉" className="button-element mt-1">片山津温泉</button>
                    <button onClick={this.updateLocation} data-zoom="17" data-location="山中温泉" className="button-element mt-1">山中温泉</button>
                </div>
            </div>
        );
    }
}

export default GoogleMapApi;