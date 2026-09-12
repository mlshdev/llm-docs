> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentrequest/nationalidcard(region:_:options:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/nationalidcard(region:_:options:))

# nationalIDCard(region:\_:options:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A request that displays national ID card elements onscreen.

## Declaration

```swift
static func nationalIDCard(region: Locale.Region, _ elements: [MobileNationalIDCardDisplayRequest.Element], options: MobileNationalIDCardDisplayRequest.Options = .init()) -> Self
```

## See Also

### National ID card display request

- [MobileNationalIDCardDisplayRequest](../mobilenationalidcarddisplayrequest.md): A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.
