> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder](https://developer.apple.com/documentation/mapkit/mkreversegeocoder)

# MKReverseGeocoder

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country or region, city, or street.

## Declaration

```objectivec
@interface MKReverseGeocoder : NSObject
```

<a id="overview"></a>

## Overview

A reverse geocoder object is a single-shot object that works with a network-based map service to look up placemark information for its specified coordinate value.

The Google terms of service require that the reverse geocoding service be used in conjunction with a Google map; take this into account when designing your application’s user interface.

Each Map Kit application has a limited amount of reverse geocoding capacity, so it is to your advantage to use reverse geocode requests sparingly. Here are some rules of thumb for using this class most effectively:

- Send at most one reverse-geocoding request for any one user action.
- If the user performs multiple actions that involve reverse-geocoding the same location, reuse the results from the initial reverse-geocoding request instead of starting individual requests for each action.
- When you want to update the location automatically (such as when the user is moving), reissue the reverse-geocoding request only when the user’s location has moved a significant distance and after a reasonable amount of time has passed. For example, in a typical situation, you should not send more than one reverse-geocode request per minute.
- Do not start a reverse-geocoding request at a time when the user will not see the results immediately. For example, do not start a request if your application recently resigned the active state (possibly because of an interruption such as a phone call) and is waiting to become active again.

An iOS-based device must have access to the network in order for the reverse geocoder object to return valid information. The reverse geocoder returns information through its associated delegate object, which is an object that conforms to the [MKReverseGeocoderDelegate](mkreversegeocoderdelegate.md) protocol. If the reverse geocoder is unable to retrieve the requested information, it similarly reports the error to its delegate object. For more information on this protocol, see [MKReverseGeocoderDelegate](mkreversegeocoderdelegate.md).

This class is deprecated in iOS 5.0. Use the [CLGeocoder](../corelocation/clgeocoder.md) class instead.

## Topics

### Initializing the Reverse Geocoder

- [initWithCoordinate:](mkreversegeocoder/initwithcoordinate_.md): Deprecated. Initializes the reverse geocoder with the specified coordinate value.

### Accessing Reverse Geocoder Attributes

- [delegate](mkreversegeocoder/delegate.md): Deprecated. The reverse geocoder’s delegate object.
- [coordinate](mkreversegeocoder/coordinate.md): Deprecated. The coordinate whose placemark data you want to retrieve.
- [placemark](mkreversegeocoder/placemark.md): Deprecated. The result of the reverse-geocoding operation.

### Managing the Search

- [start](mkreversegeocoder/start.md): Deprecated. Starts the reverse-geocoding process asynchronously.
- [querying](mkreversegeocoder/querying.md): Deprecated. A Boolean value indicating whether the receiver is in the middle of reverse-geocoding its coordinate.
- [cancel](mkreversegeocoder/cancel.md): Deprecated. Cancels a pending reverse-geocoding request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
