> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilephotoiddatarequest/init(retainedelements:nonretainedelements:)](https://developer.apple.com/documentation/proximityreader/mobilephotoiddatarequest/init(retainedelements:nonretainedelements:))

# init(retainedElements:nonRetainedElements:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns a photo ID data request.

## Declaration

```swift
init(retainedElements: [MobilePhotoIDDataRequest.Element] = [], nonRetainedElements: [MobilePhotoIDDataRequest.Element] = [])
```

## See Also

### Creating a data request

- [MobilePhotoIDDataRequest.Element](element.md): A type that represents an element you can request from a photo ID.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
