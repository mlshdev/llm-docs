> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/availablemetadataformats](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/availablemetadataformats)

# availableMetadataFormats

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

An array of metadata formats available for the track.

## Declaration

```swift
var availableMetadataFormats: [AVMetadataFormat] { get }
```

## See Also

### Accessing metadata

- [metadata](metadata.md): An array of metadata stored by the track.
- [commonMetadata](commonmetadata.md): An array of metadata items for all common metadata keys that have a value.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns metadata items that a track contains for the specified format.
