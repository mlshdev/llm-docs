> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/nationalidcardrawdata(region:retaining:notretaining:)

# nationalIDCardRawData(region:retaining:notRetaining:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A request which retrieves mobile national ID card elements from the holder and returns the raw response data for processing.

## Declaration

```swift
static func nationalIDCardRawData(region: Locale.Region, retaining retainedElements: [MobileNationalIDCardRawDataRequest.Element] = [], notRetaining nonRetainedElements: [MobileNationalIDCardRawDataRequest.Element] = []) -> Self
```

## See Also

### National ID card license raw data request

- [MobileNationalIDCardRawDataRequest](../mobilenationalidcardrawdatarequest.md): A mobile national ID card request which retrieves elements from the holder and returns the raw response data for processing.
