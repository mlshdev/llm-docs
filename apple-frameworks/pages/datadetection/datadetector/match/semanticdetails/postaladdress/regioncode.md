> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/postaladdress/regioncode](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/postaladdress/regioncode)

# regionCode

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An optional string that may contain the standard ISO 3166 region code of the address.

## Declaration

```swift
let regionCode: Locale.Region?
```

## See Also

### Properties that detail parts of a postal address

- [fullAddress](fulladdress.md): A string that contains the full string of the address.
- [street](street.md): An optional string that may contain the street component of the address.
- [city](city.md): An optional string that may contain the city component of the address.
- [state](state.md): An optional string that may contain the state component of the address.
- [postalCode](postalcode.md): An optional string that may contain the postal code component of the address.
- [region](region.md): An optional string that may contain the region component of the address.
- [label](label.md): An optional string that may contain a value suitable to populate a label when creating a contact.
