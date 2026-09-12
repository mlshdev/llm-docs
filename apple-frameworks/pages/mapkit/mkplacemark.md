> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkplacemark](https://developer.apple.com/documentation/mapkit/mkplacemark)

# MKPlacemark (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 26.0) · iPadOS 3.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

A user-friendly description of a location on the map.

> Use MKMapItem's location, address and addressRepresentations properties instead. Use MKAddressRepresentations for formatted address strings for MapKit provided MKMapItems

## Declaration

```swift
class MKPlacemark
```

<a id="overview"></a>

## Overview

Placemark data includes information like the country or region, state, city, and street address associated with the specified coordinate. A placemark is a concrete annotation object and conforms to the [MKAnnotation](mkannotation.md) protocol. Because it’s an annotation, you can add a placemark directly to the map view’s list of annotations.

## Topics

### Creating a placemark object

- [init(coordinate:)](mkplacemark/init%28coordinate_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate.
- [init(coordinate:postalAddress:)](mkplacemark/init%28coordinate_postaladdress_%29.md): Deprecated. Creates and returns a placemark object with the specified coordinate and postal address from the user’s Contacts database.
- [init(coordinate:addressDictionary:)](mkplacemark/init%28coordinate_addressdictionary_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate and Address Book dictionary.

### Accessing the placemark attributes

- [countryCode](mkplacemark/countrycode.md): Deprecated. The abbreviated country or region name.

## Relationships

### Inherits From

- [CLPlacemark](../corelocation/clplacemark.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shared behavior

- [MKAnnotation](mkannotation.md): An interface for associating your content with a specific map location.
- [MKAnnotationView](mkannotationview.md): The visual representation of one of your annotation objects.

# MKPlacemark (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 26.0) · iPadOS 3.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.2+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

A user-friendly description of a location on the map.

> Use MKMapItem's location, address and addressRepresentations properties instead. Use MKAddressRepresentations for formatted address strings for MapKit provided MKMapItems

## Declaration

```objectivec
@interface MKPlacemark : CLPlacemark
```

<a id="overview"></a>

## Overview

Placemark data includes information like the country or region, state, city, and street address associated with the specified coordinate. A placemark is a concrete annotation object and conforms to the [MKAnnotation](mkannotation.md) protocol. Because it’s an annotation, you can add a placemark directly to the map view’s list of annotations.

## Topics

### Creating a placemark object

- [initWithCoordinate:](mkplacemark/init%28coordinate_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate.
- [initWithCoordinate:postalAddress:](mkplacemark/init%28coordinate_postaladdress_%29.md): Deprecated. Creates and returns a placemark object with the specified coordinate and postal address from the user’s Contacts database.
- [initWithCoordinate:addressDictionary:](mkplacemark/init%28coordinate_addressdictionary_%29.md): Deprecated. Creates and returns a placemark object using the specified coordinate and Address Book dictionary.

### Accessing the placemark attributes

- [countryCode](mkplacemark/countrycode.md): Deprecated. The abbreviated country or region name.

## Relationships

### Inherits From

- [CLPlacemark](../corelocation/clplacemark.md)

### Conforms To

- [MKAnnotation](mkannotation.md)

## See Also

### Shared behavior

- [MKAnnotation](mkannotation.md): An interface for associating your content with a specific map location.
- [MKAnnotationView](mkannotationview.md): The visual representation of one of your annotation objects.
