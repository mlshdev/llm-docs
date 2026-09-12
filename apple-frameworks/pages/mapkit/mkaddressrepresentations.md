> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressrepresentations](https://developer.apple.com/documentation/mapkit/mkaddressrepresentations)

# MKAddressRepresentations (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that provides formatted address strings.

## Declaration

```swift
class MKAddressRepresentations
```

<a id="Discussion"></a>

## Discussion

Use this class to obtain formatted address strings for a place’s full address, city, or region.

## Topics

### Getting parts of an address

- [cityName](mkaddressrepresentations/cityname.md): The name of the city.
- [cityWithContext](mkaddressrepresentations/citywithcontext.md): The city name along with the country name, to provide additional disambiguating context.
- [regionName](mkaddressrepresentations/regionname.md): The region name, such as “United States”.
- [region](mkaddressrepresentations/region.md)

### Getting a full address and city name

- [fullAddress(includingRegion:singleLine:)](mkaddressrepresentations/fulladdress%28includingregion_singleline_%29.md): Returns the the location’s full address, optionally including the country or on a single link without line breaks.
- [cityWithContext(\_:)](mkaddressrepresentations/citywithcontext%28__%29.md): The city name and, optionally and if applicable, state and region to provide additional disambiguating context.

### Controlling the degree of disambiguation to include in an address representation

- [MKAddressRepresentations.ContextStyle](mkaddressrepresentations/contextstyle.md): Values that describe the degree of disambiguation context to include in an address representation.

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
- [MKAddress](mkaddress.md): A class that contains a full address, and, optionally, a short address.
- [GeoToolbox](../geotoolbox.md): Determine place descriptor information for map coordinates.

# MKAddressRepresentations (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that provides formatted address strings.

## Declaration

```objectivec
@interface MKAddressRepresentations : NSObject
```

<a id="Discussion"></a>

## Discussion

Use this class to obtain formatted address strings for a place’s full address, city, or region.

## Topics

### Getting parts of an address

- [cityName](mkaddressrepresentations/cityname.md): The name of the city.
- [cityWithContext](mkaddressrepresentations/citywithcontext.md): The city name along with the country name, to provide additional disambiguating context.
- [regionCode](mkaddressrepresentations/regioncode.md): The region’s ISO 3166-2 region code, such as “US”.
- [regionName](mkaddressrepresentations/regionname.md): The region name, such as “United States”.

### Getting a full address and city name

- [fullAddressIncludingRegion:singleLine:](mkaddressrepresentations/fulladdress%28includingregion_singleline_%29.md): Returns the the location’s full address, optionally including the country or on a single link without line breaks.
- [cityWithContextUsingStyle:](mkaddressrepresentations/citywithcontext%28__%29.md): The city name and, optionally and if applicable, state and region to provide additional disambiguating context.

### Controlling the degree of disambiguation to include in an address representation

- [MKAddressRepresentationsContextStyle](mkaddressrepresentations/contextstyle.md): Values that describe the degree of disambiguation context to include in an address representation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Representing places and addresses

- [MKMapItem](mkmapitem.md): A point of interest on the map.
- [MKAddress](mkaddress.md): A class that contains a full address, and, optionally, a short address.
