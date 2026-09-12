> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoderdelegate](https://developer.apple.com/documentation/mapkit/mkreversegeocoderdelegate)

# MKReverseGeocoderDelegate

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Defines the interface for receiving messages from an [MKReverseGeocoder](mkreversegeocoder.md) object.

## Declaration

```objectivec
@protocol MKReverseGeocoderDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use this protocol to receive the placemark information for a given coordinate or to retrieve any errors that occurred during the reverse-geocoding process.

Delegates must implement both methods of this protocol.

The Google terms of service require that the reverse geocoding service be used in conjunction with a Google map; take this into account when designing your application’s user interface.

Each Map Kit application has a limited amount of reverse geocoding capacity, so it is to your advantage to use reverse geocode requests sparingly. For more information about when to initiate reverse-geocoding requests, see [MKReverseGeocoder](mkreversegeocoder.md).

This protocol is deprecated in iOS 5.0. Use the [CLGeocoder](../corelocation/clgeocoder.md) class instead.

## Topics

### Processing placemark searches

- [reverseGeocoder:didFindPlacemark:](mkreversegeocoderdelegate/reversegeocoder_didfindplacemark_.md): Deprecated. Tells the delegate that a reverse geocoder successfully obtained placemark information for its coordinate.
- [reverseGeocoder:didFailWithError:](mkreversegeocoderdelegate/reversegeocoder_didfailwitherror_.md): Deprecated. Tells the delegate that the specified reverse geocoder failed to obtain information about its coordinate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
