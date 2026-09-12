> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressrepresentations/citywithcontext](https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/citywithcontext)

# cityWithContext (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The city name along with the country name, to provide additional disambiguating context.

## Declaration

```swift
var cityWithContext: String? { get }
```

<a id="Discussion"></a>

## Discussion

This returns the same value as `cityWithContext(.automatic)`.

## See Also

### Getting parts of an address

- [cityName](cityname.md): The name of the city.
- [regionName](regionname.md): The region name, such as “United States”.
- [region](region.md)

# cityWithContext (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The city name along with the country name, to provide additional disambiguating context.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * cityWithContext;
```

<a id="Discussion"></a>

## Discussion

This returns the same value as `cityWithContext(.automatic)`.

## See Also

### Getting parts of an address

- [cityName](cityname.md): The name of the city.
- [regionCode](regioncode.md): The region’s ISO 3166-2 region code, such as “US”.
- [regionName](regionname.md): The region name, such as “United States”.
