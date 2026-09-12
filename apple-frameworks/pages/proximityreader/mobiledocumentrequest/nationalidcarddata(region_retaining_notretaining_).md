> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentrequest/nationalidcarddata(region:retaining:notretaining:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/nationalidcarddata(region:retaining:notretaining:))

# nationalIDCardData(region:retaining:notRetaining:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A request which retrieves elements from the holder and returns the validated document elements.

## Declaration

```swift
static func nationalIDCardData(region: Locale.Region, retaining retainedElements: [MobileNationalIDCardDataRequest.Element] = [], notRetaining nonRetainedElements: [MobileNationalIDCardDataRequest.Element] = []) -> Self
```

## See Also

### National ID card license data request

- [MobileNationalIDCardDataRequest](../mobilenationalidcarddatarequest.md): A mobile national ID card request that retrieves elements from the holder and returns the validated document elements.
