> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clplacemark/thoroughfare](https://developer.apple.com/documentation/corelocation/clplacemark/thoroughfare)

# thoroughfare (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The street address associated with the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var thoroughfare: String? { get }
```

<a id="Discussion"></a>

## Discussion

The street address contains the street name. For example, if the placemark location is Apple’s headquarters, the value for this property would be the string “Apple Park Way”.

## See Also

### Getting the placemark details

- [subThoroughfare](subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](locality.md): Deprecated. The city associated with the placemark.
- [subLocality](sublocality.md): Deprecated. Additional city-level information for the placemark.
- [administrativeArea](administrativearea.md): Deprecated. The state or province associated with the placemark.
- [subAdministrativeArea](subadministrativearea.md): Deprecated. Additional administrative area information for the placemark.
- [postalCode](postalcode.md): Deprecated. The postal code associated with the placemark.

# thoroughfare (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The street address associated with the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * thoroughfare;
```

<a id="Discussion"></a>

## Discussion

The street address contains the street name. For example, if the placemark location is Apple’s headquarters, the value for this property would be the string “Apple Park Way”.

## See Also

### Getting the placemark details

- [subThoroughfare](subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](locality.md): Deprecated. The city associated with the placemark.
- [subLocality](sublocality.md): Deprecated. Additional city-level information for the placemark.
- [administrativeArea](administrativearea.md): Deprecated. The state or province associated with the placemark.
- [subAdministrativeArea](subadministrativearea.md): Deprecated. Additional administrative area information for the placemark.
- [postalCode](postalcode.md): Deprecated. The postal code associated with the placemark.
