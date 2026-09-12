> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilephotoidrawdatarequest/init(retainedelements:nonretainedelements:)](https://developer.apple.com/documentation/proximityreader/mobilephotoidrawdatarequest/init(retainedelements:nonretainedelements:))

# init(retainedElements:nonRetainedElements:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns a photo ID raw data request.

## Declaration

```swift
init(retainedElements: [MobilePhotoIDRawDataRequest.Element] = [], nonRetainedElements: [MobilePhotoIDRawDataRequest.Element] = [])
```

## See Also

### Creating a raw data request

- [MobilePhotoIDRawDataRequest.Element](element.md): A type representing an element that you can request from a photo ID.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
