> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocoder/placemark](https://developer.apple.com/documentation/mapkit/mkreversegeocoder/placemark)

# placemark

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 5.0) · iPadOS 3.2+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The result of the reverse-geocoding operation.

> Use the [CLGeocoder](../../corelocation/clgeocoder.md) class instead. Note that placemarks in [CLGeocoder](../../corelocation/clgeocoder.md) always come back to the coordinate of the place, not the requested coordinate.

## Declaration

```objectivec
@property (nonatomic, readonly) MKPlacemark * placemark;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` by default. After a successful reverse-geocoding operation, it is set to the placemark object that was generated.

## See Also

### Accessing Reverse Geocoder Attributes

- [delegate](delegate.md): Deprecated. The reverse geocoder’s delegate object.
- [coordinate](coordinate.md): Deprecated. The coordinate whose placemark data you want to retrieve.
