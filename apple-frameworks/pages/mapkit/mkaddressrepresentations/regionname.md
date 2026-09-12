> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressrepresentations/regionname](https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/regionname)

# regionName (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The region name, such as “United States”.

## Declaration

```swift
var regionName: String? { get }
```

## See Also

### Getting parts of an address

- [cityName](cityname.md): The name of the city.
- [cityWithContext](citywithcontext.md): The city name along with the country name, to provide additional disambiguating context.
- [region](region.md)

# regionName (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The region name, such as “United States”.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * regionName;
```

## See Also

### Getting parts of an address

- [cityName](cityname.md): The name of the city.
- [cityWithContext](citywithcontext.md): The city name along with the country name, to provide additional disambiguating context.
- [regionCode](regioncode.md): The region’s ISO 3166-2 region code, such as “US”.
