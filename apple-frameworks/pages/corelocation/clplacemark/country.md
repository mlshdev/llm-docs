> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clplacemark/country

# country (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The name of the country or region associated with the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var country: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the placemark location is Apple’s headquarters, for example, the value for this property would be the string “United States”.

## See Also

### Getting the placemark’s country

- [isoCountryCode](isocountrycode.md): Deprecated. The abbreviated country or region name.

# country (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The name of the country or region associated with the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * country;
```

<a id="Discussion"></a>

## Discussion

If the placemark location is Apple’s headquarters, for example, the value for this property would be the string “United States”.

## See Also

### Getting the placemark’s country

- [ISOcountryCode](isocountrycode.md): Deprecated. The abbreviated country or region name.
