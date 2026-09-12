> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoderdelegate/reversegeocoder:didfindplacemark:](https://developer.apple.com/documentation/mapkit/mkreversegeocoderdelegate/reversegeocoder:didfindplacemark:)

# reverseGeocoder:didFindPlacemark:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that a reverse geocoder successfully obtained placemark information for its coordinate.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
- (void) reverseGeocoder:(MKReverseGeocoder *) geocoder didFindPlacemark:(MKPlacemark *) placemark;
```

## Parameters

- `geocoder`: The reverse geocoder object that completed its request successfully.
- `placemark`: The object containing the placemark data.

<a id="Discussion"></a>

## Discussion

You can get the map coordinate for the associated request from either the reverse geocoder object or from the placemark object, which itself supports the [MKAnnotation](../mkannotation.md) protocol.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Processing placemark searches

- [reverseGeocoder:didFailWithError:](reversegeocoder_didfailwitherror_.md): Deprecated. Tells the delegate that the specified reverse geocoder failed to obtain information about its coordinate.
