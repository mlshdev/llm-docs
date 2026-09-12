> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder/coordinate](https://developer.apple.com/documentation/mapkit/mkreversegeocoder/coordinate)

# coordinate

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 5.0) · iPadOS 3.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The coordinate whose placemark data you want to retrieve.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;
```

## See Also

### Accessing Reverse Geocoder Attributes

- [delegate](delegate.md): Deprecated. The reverse geocoder’s delegate object.
- [placemark](placemark.md): Deprecated. The result of the reverse-geocoding operation.
