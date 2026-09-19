> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkreversegeocoderdelegate/reversegeocoder:didfailwitherror:

# reverseGeocoder:didFailWithError:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the specified reverse geocoder failed to obtain information about its coordinate.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
- (void) reverseGeocoder:(MKReverseGeocoder *) geocoder didFailWithError:(NSError *) error;
```

## Parameters

- `geocoder`: The reverse geocoder object that was unable to complete its request.
- `error`: An error object indicating the reason the request did not succeed.

## See Also

### Processing placemark searches

- [reverseGeocoder:didFindPlacemark:](reversegeocoder_didfindplacemark_.md): Deprecated. Tells the delegate that a reverse geocoder successfully obtained placemark information for its coordinate.
