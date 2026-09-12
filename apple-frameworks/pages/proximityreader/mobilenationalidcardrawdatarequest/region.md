> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcardrawdatarequest/region](https://developer.apple.com/documentation/proximityreader/mobilenationalidcardrawdatarequest/region)

# region

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The region of the document you’re requesting.

## Declaration

```swift
var region: Locale.Region
```

## See Also

### Configuring the request details

- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
- [MobileNationalIDCardRawDataRequest.Element](element.md): A type representing an element that you can request from a mobile national ID card.
