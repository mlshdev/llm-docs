> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clplacemark](https://developer.apple.com/documentation/corelocation/clplacemark)

# CLPlacemark (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A user-friendly description of a geographic coordinate, often containing the name of the place, its address, and other relevant information.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
class CLPlacemark
```

## Mentioned In

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md)
- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="overview"></a>

## Overview

A `CLPlacemark` object stores placemark data for a given latitude and longitude. Placemark data includes information such as the country or region, state, city, and street address associated with the specified coordinate. It can also include points of interest and geographically related data.

When you reverse geocode a geographic coordinate using a [CLGeocoder](clgeocoder.md) object, you receive a [CLPlacemark](clplacemark.md) object containing the descriptive information for that location. You can also create [CLPlacemark](clplacemark.md) object and fill it with address information yourself, which you might do when you want to determine the geographic coordinate associated with the location.

## Topics

### Creating a placemark object

- [init(placemark:)](clplacemark/init%28placemark_%29.md): Deprecated. Initializes and returns a placemark object from another placemark object.

### Getting the placemark’s location

- [location](clplacemark/location.md): Deprecated. The location object containing latitude and longitude information.
- [region](clplacemark/region.md): Deprecated. The geographic region associated with the placemark.

### Getting the placemark name

- [name](clplacemark/name.md): Deprecated. The name of the placemark.

### Getting the placemark details

- [thoroughfare](clplacemark/thoroughfare.md): Deprecated. The street address associated with the placemark.
- [subThoroughfare](clplacemark/subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](clplacemark/locality.md): Deprecated. The city associated with the placemark.
- [subLocality](clplacemark/sublocality.md): Deprecated. Additional city-level information for the placemark.
- [administrativeArea](clplacemark/administrativearea.md): Deprecated. The state or province associated with the placemark.
- [subAdministrativeArea](clplacemark/subadministrativearea.md): Deprecated. Additional administrative area information for the placemark.
- [postalCode](clplacemark/postalcode.md): Deprecated. The postal code associated with the placemark.

### Getting the placemark’s country

- [isoCountryCode](clplacemark/isocountrycode.md): Deprecated. The abbreviated country or region name.
- [country](clplacemark/country.md): Deprecated. The name of the country or region associated with the placemark.

### Getting the associated contact details

- [postalAddress](clplacemark/postaladdress.md): Deprecated. The postal address associated with the location, formatted for use with the Contacts framework.
- [addressDictionary](clplacemark/addressdictionary.md): Deprecated. A dictionary containing the Address Book keys and values for the placemark.

### Getting landscape information

- [inlandWater](clplacemark/inlandwater.md): Deprecated. The name of the inland water body associated with the placemark.
- [ocean](clplacemark/ocean.md): Deprecated. The name of the ocean associated with the placemark.

### Getting points of interest

- [areasOfInterest](clplacemark/areasofinterest.md): Deprecated. The relevant areas of interest associated with the placemark.

### Getting the placemark’s time zone

- [timeZone](clplacemark/timezone.md): Deprecated. The time zone associated with the placemark.

### Type Aliases

- [CLPlacemark.Specification](clplacemark/specification.md): Deprecated.
- [CLPlacemark.UnwrappedType](clplacemark/unwrappedtype.md): Deprecated.
- [CLPlacemark.ValueType](clplacemark/valuetype.md): Deprecated.

### Type Properties

- [defaultResolverSpecification](clplacemark/defaultresolverspecification.md)

### Initializers

- [init(coder:)](clplacemark/init%28coder_%29.md): Deprecated.
- [init(location:name:postalAddress:)](clplacemark/init%28location_name_postaladdress_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Geocoding

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md): Convert between a latitude and longitude pair and a more user-friendly description of that location.
- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [CLGeocoder](clgeocoder.md): Deprecated. An interface for converting between geographic coordinates and place names.

# CLPlacemark (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A user-friendly description of a geographic coordinate, often containing the name of the place, its address, and other relevant information.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@interface CLPlacemark : NSObject
```

## Mentioned In

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md)
- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="overview"></a>

## Overview

A `CLPlacemark` object stores placemark data for a given latitude and longitude. Placemark data includes information such as the country or region, state, city, and street address associated with the specified coordinate. It can also include points of interest and geographically related data.

When you reverse geocode a geographic coordinate using a [CLGeocoder](clgeocoder.md) object, you receive a [CLPlacemark](clplacemark.md) object containing the descriptive information for that location. You can also create [CLPlacemark](clplacemark.md) object and fill it with address information yourself, which you might do when you want to determine the geographic coordinate associated with the location.

## Topics

### Creating a placemark object

- [initWithPlacemark:](clplacemark/init%28placemark_%29.md): Deprecated. Initializes and returns a placemark object from another placemark object.

### Getting the placemark’s location

- [location](clplacemark/location.md): Deprecated. The location object containing latitude and longitude information.
- [region](clplacemark/region.md): Deprecated. The geographic region associated with the placemark.

### Getting the placemark name

- [name](clplacemark/name.md): Deprecated. The name of the placemark.

### Getting the placemark details

- [thoroughfare](clplacemark/thoroughfare.md): Deprecated. The street address associated with the placemark.
- [subThoroughfare](clplacemark/subthoroughfare.md): Deprecated. Additional street-level information for the placemark.
- [locality](clplacemark/locality.md): Deprecated. The city associated with the placemark.
- [subLocality](clplacemark/sublocality.md): Deprecated. Additional city-level information for the placemark.
- [administrativeArea](clplacemark/administrativearea.md): Deprecated. The state or province associated with the placemark.
- [subAdministrativeArea](clplacemark/subadministrativearea.md): Deprecated. Additional administrative area information for the placemark.
- [postalCode](clplacemark/postalcode.md): Deprecated. The postal code associated with the placemark.

### Getting the placemark’s country

- [ISOcountryCode](clplacemark/isocountrycode.md): Deprecated. The abbreviated country or region name.
- [country](clplacemark/country.md): Deprecated. The name of the country or region associated with the placemark.

### Getting the associated contact details

- [postalAddress](clplacemark/postaladdress.md): Deprecated. The postal address associated with the location, formatted for use with the Contacts framework.
- [addressDictionary](clplacemark/addressdictionary.md): Deprecated. A dictionary containing the Address Book keys and values for the placemark.

### Getting landscape information

- [inlandWater](clplacemark/inlandwater.md): Deprecated. The name of the inland water body associated with the placemark.
- [ocean](clplacemark/ocean.md): Deprecated. The name of the ocean associated with the placemark.

### Getting points of interest

- [areasOfInterest](clplacemark/areasofinterest.md): Deprecated. The relevant areas of interest associated with the placemark.

### Getting the placemark’s time zone

- [timeZone](clplacemark/timezone.md): Deprecated. The time zone associated with the placemark.

### Instance Methods

- [init](clplacemark/init.md)

### Type Methods

- [placemarkWithLocation:name:postalAddress:](clplacemark/init%28location_name_postaladdress_%29.md)
- [new](clplacemark/new.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Geocoding

- [Converting between coordinates and user-friendly place names](converting-between-coordinates-and-user-friendly-place-names.md): Convert between a latitude and longitude pair and a more user-friendly description of that location.
- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [CLGeocoder](clgeocoder.md): Deprecated. An interface for converting between geographic coordinates and place names.
