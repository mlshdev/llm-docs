> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilephotoidrawdatarequest/retainedelements](https://developer.apple.com/documentation/proximityreader/mobilephotoidrawdatarequest/retainedelements)

# retainedElements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The document elements you’re requesting and intend to retain for an indefinite period of time.

## Declaration

```swift
var retainedElements: [MobilePhotoIDRawDataRequest.Element]
```

## See Also

### Creating a raw data request

- [init(retainedElements:nonRetainedElements:)](init%28retainedelements_nonretainedelements_%29.md): Returns a photo ID raw data request.
- [MobilePhotoIDRawDataRequest.Element](element.md): A type representing an element that you can request from a photo ID.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
