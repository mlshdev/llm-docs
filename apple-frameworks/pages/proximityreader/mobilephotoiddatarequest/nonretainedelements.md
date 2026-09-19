> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobilephotoiddatarequest/nonretainedelements

# nonRetainedElements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.

## Declaration

```swift
var nonRetainedElements: [MobilePhotoIDDataRequest.Element]
```

## See Also

### Creating a data request

- [init(retainedElements:nonRetainedElements:)](init%28retainedelements_nonretainedelements_%29.md): Returns a photo ID data request.
- [MobilePhotoIDDataRequest.Element](element.md): A type that represents an element you can request from a photo ID.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
