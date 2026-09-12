> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressrepresentations/citywithcontext(_:)](https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/citywithcontext(_:))

# cityWithContext(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The city name and, optionally and if applicable, state and region to provide additional disambiguating context.

## Declaration

```swift
func cityWithContext(_ style: MKAddressRepresentations.ContextStyle) -> String?
```

## Parameters

- `style`: The [MKAddressRepresentations.ContextStyle](contextstyle.md) to apply.

## See Also

### Getting a full address and city name

- [fullAddress(includingRegion:singleLine:)](fulladdress%28includingregion_singleline_%29.md): Returns the the location’s full address, optionally including the country or on a single link without line breaks.

# cityWithContextUsingStyle: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The city name and, optionally and if applicable, state and region to provide additional disambiguating context.

## Declaration

```objectivec
- (NSString *) cityWithContextUsingStyle:(MKAddressRepresentationsContextStyle) style;
```

## Parameters

- `style`: The [MKAddressRepresentationsContextStyle](contextstyle.md) to apply.

## See Also

### Getting a full address and city name

- [fullAddressIncludingRegion:singleLine:](fulladdress%28includingregion_singleline_%29.md): Returns the the location’s full address, optionally including the country or on a single link without line breaks.
