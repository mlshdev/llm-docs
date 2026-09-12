> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcarddatarequest/retainedelements](https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddatarequest/retainedelements)

# retainedElements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The document elements you’re requesting and intend to retain for an indefinite period of time.

## Declaration

```swift
var retainedElements: [MobileNationalIDCardDataRequest.Element]
```

## See Also

### Configuring the request details

- [region](region.md): The region of the document you’re requesting.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.
- [MobileNationalIDCardDataRequest.Element](element.md): A type that represents an element you can request from a mobile national ID card.
