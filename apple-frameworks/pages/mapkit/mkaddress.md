> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddress](https://developer.apple.com/documentation/mapkit/mkaddress)

# MKAddress (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that contains a full address, and, optionally, a short address.

## Declaration

```swift
class MKAddress
```

<a id="Discussion"></a>

## Discussion

MapKit capabilities, such as Search and Reverse geocoding, populate the [MKAddress](mkaddress.md) of a [MKMapItem](mkmapitem.md) with a full address, and a short address, if the framework has one.

When presenting a Place Card using an [MKMapItemDetailViewController](mkmapitemdetailviewcontroller.md) or a selection accessory on an annotation you created using an [MKMapItem](mkmapitem.md), MapKit uses the full address provided if you create the `MKMapitem` using [init(location:address:)](mkmapitem/init%28location_address_%29.md).

## Topics

### Creating an address

- [init(fullAddress:shortAddress:)](mkaddress/init%28fulladdress_shortaddress_%29.md): Initializes a new address with a location’s full address using a string and a short address that provides an abbreviated form of the address such as a street address.

### Getting the full and short addresses

- [fullAddress](mkaddress/fulladdress.md): A string that represents a place’s full address
- [shortAddress](mkaddress/shortaddress.md): A string that represents the short address of a location, such as it’s street address and city.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Representing places and addresses

- [MKMapItem](mkmapitem.md): A point of interest on the map.
- [MKAddressRepresentations](mkaddressrepresentations.md): A class that provides formatted address strings.
- [GeoToolbox](../geotoolbox.md): Determine place descriptor information for map coordinates.

# MKAddress (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that contains a full address, and, optionally, a short address.

## Declaration

```objectivec
@interface MKAddress : NSObject
```

<a id="Discussion"></a>

## Discussion

MapKit capabilities, such as Search and Reverse geocoding, populate the [MKAddress](mkaddress.md) of a [MKMapItem](mkmapitem.md) with a full address, and a short address, if the framework has one.

When presenting a Place Card using an [MKMapItemDetailViewController](mkmapitemdetailviewcontroller.md) or a selection accessory on an annotation you created using an [MKMapItem](mkmapitem.md), MapKit uses the full address provided if you create the `MKMapitem` using [initWithLocation:address:](mkmapitem/init%28location_address_%29.md).

## Topics

### Creating an address

- [initWithFullAddress:shortAddress:](mkaddress/init%28fulladdress_shortaddress_%29.md): Initializes a new address with a location’s full address using a string and a short address that provides an abbreviated form of the address such as a street address.

### Getting the full and short addresses

- [fullAddress](mkaddress/fulladdress.md): A string that represents a place’s full address
- [shortAddress](mkaddress/shortaddress.md): A string that represents the short address of a location, such as it’s street address and city.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Representing places and addresses

- [MKMapItem](mkmapitem.md): A point of interest on the map.
- [MKAddressRepresentations](mkaddressrepresentations.md): A class that provides formatted address strings.
