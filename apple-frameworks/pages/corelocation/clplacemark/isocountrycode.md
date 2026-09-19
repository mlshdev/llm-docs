> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clplacemark/isocountrycode

# isoCountryCode (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The abbreviated country or region name.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var isoCountryCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

This string is the standard abbreviation used to refer to the country or region. For example, if the placemark location is Apple’s headquarters, the value for this property would be the string “US”.

## See Also

### Getting the placemark’s country

- [country](country.md): Deprecated. The name of the country or region associated with the placemark.

# ISOcountryCode (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The abbreviated country or region name.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * ISOcountryCode;
```

<a id="Discussion"></a>

## Discussion

This string is the standard abbreviation used to refer to the country or region. For example, if the placemark location is Apple’s headquarters, the value for this property would be the string “US”.

## See Also

### Getting the placemark’s country

- [country](country.md): Deprecated. The name of the country or region associated with the placemark.
