 ## react-google-maps/apiを利用する
 
```shell
# 最新バージョンを調べる
$ npm info @react-google-maps/api
# 最新バージョンを適用し、インストール
$ yarn add @react-google-maps/api@2.12.0
```

## Google Map API KEYを用意する

[GCP(Google Cloud Platform)に登録し、API keyを取得する](https://developers.google.com/maps/documentation/javascript/)

## 地図を表示させる

ライブラリをImportします。

```jsunicoderegexp
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
```

メインのhtmlを出力します。

```jsunicoderegexp
const GoogleMapApi = () => {
    const mapStyles = {
        height: "80vh",
        width: "80%"
    };

    const defaultCenter = {
        lat: 36.3021688,
        lng: 136.3138505
    }

    return (
        <LoadScript
            googleMapsApiKey='YOUR_API_KEY'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
            <Marker position={defaultCenter} />
        </LoadScript>
    )
}
export default GoogleMapApi;

```
