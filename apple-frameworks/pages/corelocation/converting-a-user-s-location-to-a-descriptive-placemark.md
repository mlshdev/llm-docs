> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/converting-a-user-s-location-to-a-descriptive-placemark](https://developer.apple.com/documentation/corelocation/converting-a-user-s-location-to-a-descriptive-placemark)

# Converting a user’s location to a descriptive placemark (Swift)

**Framework:** Core Location  
**Kind:** Article

Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.

<a id="overview"></a>

## Overview

You can show a user’s location on a map in order to orient them to elements of your app that use map content. For instance, a user’s current location can be a point of reference for retrieving search results or calculating directions. Additionally, you can display location information outside of the map, such as a search field pre-filled with the user’s current city or street address. To provide this information in your app, configure your map view to display the user’s location, and then translate the location to informative, user-friendly data.

<a id="Display-the-user-location-annotation"></a>

### Display the user location annotation

To provide user-friendly place information, configure your map view to display the user’s current location by enabling [showsUserLocation](../mapkit/mkmapview/showsuserlocation.md). After enabling this property, the map delegate begins receiving updates to the user’s location, represented with a [MKUserLocation](../mapkit/mkuserlocation.md) object, through [mapView(\_:didUpdate:)](../mapkit/mkmapviewdelegate/mapview%28__didupdate_%29.md).

<a id="Geocode-the-user-location-annotation"></a>

### Geocode the user location annotation

[CLPlacemark](clplacemark.md) objects represent user place names, and include properties for street name, city name, country or region name, and many other location identifiers. When [mapView(\_:didUpdate:)](../mapkit/mkmapviewdelegate/mapview%28__didupdate_%29.md) receives updates on the user’s location, convert the [MKUserLocation](../mapkit/mkuserlocation.md) object to a [CLPlacemark](clplacemark.md) by reverse geocoding the [location](../mapkit/mkuserlocation/location.md) property with a [CLGeocoder](clgeocoder.md). Readable descriptions of the user’s location are available as properties on the placemark, such as the city information stored in the [locality](clplacemark/locality.md) property.

> **Important**

>  Geocoding requests are rate-limited for each app. Issue new geocoding requests only when the user has moved a significant distance and after a reasonable amount of time has passed.

```swift
func mapView(_ mapView: MKMapView, didUpdate userLocation: MKUserLocation) {
        guard let newLocation = userLocation.location else { return }
        
        let currentTime = Date()
        let lastLocation = self.currentLocation
        self.currentLocation = newLocation
        
        // Only get new placemark information if you don't have a previous location,
        // if the user has moved a meaningful distance from the previous location, such as 1000 meters,
        // and if it's been 60 seconds since the last geocode request.
        if let lastLocation = lastLocation,
            newLocation.distance(from: lastLocation) <= 1000,
            let lastTime = lastGeocodeTime,
            currentTime.timeIntervalSince(lastTime) < 60 {
            return
        }
        
        // Convert the user's location to a user-friendly place name by reverse geocoding the location.
        lastGeocodeTime = currentTime
        geocoder.reverseGeocodeLocation(newLocation) { (placemarks, error) in
            guard error == nil else {
                self.handleError(error)
                return
            }
            
            // Most geocoding requests contain only one result.
            if let firstPlacemark = placemarks?.first {
                self.mostRecentPlacemark = firstPlacemark
                self.currentCity = firstPlacemark.locality
            }
        }
    }
```

<a id="See-also"></a>

## See also

<a id="Related-Documentation"></a>

### Related Documentation

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md)

## See Also

### Geocoding

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md): Convert between a latitude and longitude pair and a more user-friendly description of that location.
- [CLGeocoder](clgeocoder.md): Deprecated. An interface for converting between geographic coordinates and place names.
- [CLPlacemark](clplacemark.md): Deprecated. A user-friendly description of a geographic coordinate, often containing the name of the place, its address, and other relevant information.

# Converting a user’s location to a descriptive placemark (Objective-C)

**Framework:** Core Location  
**Kind:** Article

Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.

<a id="overview"></a>

## Overview

You can show a user’s location on a map in order to orient them to elements of your app that use map content. For instance, a user’s current location can be a point of reference for retrieving search results or calculating directions. Additionally, you can display location information outside of the map, such as a search field pre-filled with the user’s current city or street address. To provide this information in your app, configure your map view to display the user’s location, and then translate the location to informative, user-friendly data.

<a id="Display-the-user-location-annotation"></a>

### Display the user location annotation

To provide user-friendly place information, configure your map view to display the user’s current location by enabling [showsUserLocation](../mapkit/mkmapview/showsuserlocation.md). After enabling this property, the map delegate begins receiving updates to the user’s location, represented with a [MKUserLocation](../mapkit/mkuserlocation.md) object, through [mapView:didUpdateUserLocation:](../mapkit/mkmapviewdelegate/mapview%28__didupdate_%29.md).

<a id="Geocode-the-user-location-annotation"></a>

### Geocode the user location annotation

[CLPlacemark](clplacemark.md) objects represent user place names, and include properties for street name, city name, country or region name, and many other location identifiers. When [mapView:didUpdateUserLocation:](../mapkit/mkmapviewdelegate/mapview%28__didupdate_%29.md) receives updates on the user’s location, convert the [MKUserLocation](../mapkit/mkuserlocation.md) object to a [CLPlacemark](clplacemark.md) by reverse geocoding the [location](../mapkit/mkuserlocation/location.md) property with a [CLGeocoder](clgeocoder.md). Readable descriptions of the user’s location are available as properties on the placemark, such as the city information stored in the [locality](clplacemark/locality.md) property.

> **Important**

>  Geocoding requests are rate-limited for each app. Issue new geocoding requests only when the user has moved a significant distance and after a reasonable amount of time has passed.

```swift
func mapView(_ mapView: MKMapView, didUpdate userLocation: MKUserLocation) {
        guard let newLocation = userLocation.location else { return }
        
        let currentTime = Date()
        let lastLocation = self.currentLocation
        self.currentLocation = newLocation
        
        // Only get new placemark information if you don't have a previous location,
        // if the user has moved a meaningful distance from the previous location, such as 1000 meters,
        // and if it's been 60 seconds since the last geocode request.
        if let lastLocation = lastLocation,
            newLocation.distance(from: lastLocation) <= 1000,
            let lastTime = lastGeocodeTime,
            currentTime.timeIntervalSince(lastTime) < 60 {
            return
        }
        
        // Convert the user's location to a user-friendly place name by reverse geocoding the location.
        lastGeocodeTime = currentTime
        geocoder.reverseGeocodeLocation(newLocation) { (placemarks, error) in
            guard error == nil else {
                self.handleError(error)
                return
            }
            
            // Most geocoding requests contain only one result.
            if let firstPlacemark = placemarks?.first {
                self.mostRecentPlacemark = firstPlacemark
                self.currentCity = firstPlacemark.locality
            }
        }
    }
```

<a id="See-also"></a>

## See also

<a id="Related-Documentation"></a>

### Related Documentation

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md)

## See Also

### Geocoding

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md): Convert between a latitude and longitude pair and a more user-friendly description of that location.
- [CLGeocoder](clgeocoder.md): Deprecated. An interface for converting between geographic coordinates and place names.
- [CLPlacemark](clplacemark.md): Deprecated. A user-friendly description of a geographic coordinate, often containing the name of the place, its address, and other relevant information.
