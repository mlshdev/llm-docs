> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/regioncode

# regionCode

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The region’s ISO 3166-2 region code, such as “US”.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * regionCode;
```

## See Also

### Getting parts of an address

- [cityName](cityname.md): The name of the city.
- [cityWithContext](citywithcontext.md): The city name along with the country name, to provide additional disambiguating context.
- [regionName](regionname.md): The region name, such as “United States”.
