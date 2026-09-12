> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clplacemark/subadministrativearea](https://developer.apple.com/documentation/corelocation/clplacemark/subadministrativearea)

# subAdministrativeArea (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Additional administrative area information for the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var subAdministrativeArea: String? { get }
```

<a id="Discussion"></a>

## Discussion

Subadministrative areas typically correspond to counties or other regions that are then organized into a larger administrative area or state. For example, if the placemark location is Apple’s headquarters, the value for this property would be the string “Santa Clara”, which is the county in California that contains the city of Cupertino.

## See Also

### Getting the placemark details

- [thoroughfare](thoroughfare.md): Deprecated. The street address associated with the placemark.
- [subThoroughfare](subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](locality.md): Deprecated. The city associated with the placemark.
- [subLocality](sublocality.md): Deprecated. Additional city-level information for the placemark.
- [administrativeArea](administrativearea.md): Deprecated. The state or province associated with the placemark.
- [postalCode](postalcode.md): Deprecated. The postal code associated with the placemark.

# subAdministrativeArea (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Additional administrative area information for the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * subAdministrativeArea;
```

<a id="Discussion"></a>

## Discussion

Subadministrative areas typically correspond to counties or other regions that are then organized into a larger administrative area or state. For example, if the placemark location is Apple’s headquarters, the value for this property would be the string “Santa Clara”, which is the county in California that contains the city of Cupertino.

## See Also

### Getting the placemark details

- [thoroughfare](thoroughfare.md): Deprecated. The street address associated with the placemark.
- [subThoroughfare](subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](locality.md): Deprecated. The city associated with the placemark.
- [subLocality](sublocality.md): Deprecated. Additional city-level information for the placemark.
- [administrativeArea](administrativearea.md): Deprecated. The state or province associated with the placemark.
- [postalCode](postalcode.md): Deprecated. The postal code associated with the placemark.
