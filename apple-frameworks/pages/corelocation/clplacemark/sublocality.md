> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clplacemark/sublocality](https://developer.apple.com/documentation/corelocation/clplacemark/sublocality)

# subLocality (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Additional city-level information for the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var subLocality: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains additional information, such as the name of the neighborhood or landmark associated with the placemark. It might also refer to a common name that’s associated with the location.

## See Also

### Getting the placemark details

- [thoroughfare](thoroughfare.md): Deprecated. The street address associated with the placemark.
- [subThoroughfare](subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](locality.md): Deprecated. The city associated with the placemark.
- [administrativeArea](administrativearea.md): Deprecated. The state or province associated with the placemark.
- [subAdministrativeArea](subadministrativearea.md): Deprecated. Additional administrative area information for the placemark.
- [postalCode](postalcode.md): Deprecated. The postal code associated with the placemark.

# subLocality (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Additional city-level information for the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * subLocality;
```

<a id="Discussion"></a>

## Discussion

This property contains additional information, such as the name of the neighborhood or landmark associated with the placemark. It might also refer to a common name that’s associated with the location.

## See Also

### Getting the placemark details

- [thoroughfare](thoroughfare.md): Deprecated. The street address associated with the placemark.
- [subThoroughfare](subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](locality.md): Deprecated. The city associated with the placemark.
- [administrativeArea](administrativearea.md): Deprecated. The state or province associated with the placemark.
- [subAdministrativeArea](subadministrativearea.md): Deprecated. Additional administrative area information for the placemark.
- [postalCode](postalcode.md): Deprecated. The postal code associated with the placemark.
