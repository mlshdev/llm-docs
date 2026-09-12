> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressrepresentations/fulladdress(includingregion:singleline:)](https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/fulladdress(includingregion:singleline:))

# fullAddress(includingRegion:singleLine:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the the location’s full address, optionally including the country or on a single link without line breaks.

## Declaration

```swift
func fullAddress(includingRegion: Bool, singleLine: Bool) -> String?
```

## Parameters

- `includingRegion`: A Boolean value that indicates whether the address should include the region name.
- `singleLine`: A Boolean value that indicates whether the framework should format the address as a single line.

## See Also

### Getting a full address and city name

- [cityWithContext(\_:)](citywithcontext%28__%29.md): The city name and, optionally and if applicable, state and region to provide additional disambiguating context.

# fullAddressIncludingRegion:singleLine: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the the location’s full address, optionally including the country or on a single link without line breaks.

## Declaration

```objectivec
- (NSString *) fullAddressIncludingRegion:(BOOL) includingRegion singleLine:(BOOL) singleLine;
```

## Parameters

- `includingRegion`: A Boolean value that indicates whether the address should include the region name.
- `singleLine`: A Boolean value that indicates whether the framework should format the address as a single line.

## See Also

### Getting a full address and city name

- [cityWithContextUsingStyle:](citywithcontext%28__%29.md): The city name and, optionally and if applicable, state and region to provide additional disambiguating context.
