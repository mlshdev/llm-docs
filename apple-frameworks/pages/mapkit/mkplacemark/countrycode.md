> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkplacemark/countrycode](https://developer.apple.com/documentation/mapkit/mkplacemark/countrycode)

# countryCode (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 26.0) · iPadOS 3.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

The abbreviated country or region name.

> Use MKMapItem's location, address and addressRepresentations properties instead. Use MKAddressRepresentations for formatted address strings for MapKit provided MKMapItems

## Declaration

```swift
var countryCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

This string is the standard abbreviation used to refer to the country or region. For example, if the placemark location was Apple’s headquarters, the value for this property would be the string “US”.

# countryCode (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 26.0) · iPadOS 3.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

The abbreviated country or region name.

> Use MKMapItem's location, address and addressRepresentations properties instead. Use MKAddressRepresentations for formatted address strings for MapKit provided MKMapItems

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * countryCode;
```

<a id="Discussion"></a>

## Discussion

This string is the standard abbreviation used to refer to the country or region. For example, if the placemark location was Apple’s headquarters, the value for this property would be the string “US”.
