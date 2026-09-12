> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder/delegate](https://developer.apple.com/documentation/mapkit/mkreversegeocoder/delegate)

# delegate

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The reverse geocoder’s delegate object.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
@property (nonatomic, weak) id<MKReverseGeocoderDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A reverse-geocoder object sends messages to its delegate regarding the successful (or unsuccessful) acquisition of placemark data. You must provide a delegate object to receive this data.

For more information about the [MKReverseGeocoderDelegate](../mkreversegeocoderdelegate.md) protocol, see [MKReverseGeocoderDelegate](../mkreversegeocoderdelegate.md).

## See Also

### Accessing Reverse Geocoder Attributes

- [coordinate](coordinate.md): Deprecated. The coordinate whose placemark data you want to retrieve.
- [placemark](placemark.md): Deprecated. The result of the reverse-geocoding operation.
