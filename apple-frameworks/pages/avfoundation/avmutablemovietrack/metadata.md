> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/metadata](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

An array of metadata stored by the track.

## Declaration

```swift
var metadata: [AVMetadataItem] { get set }
```

## See Also

### Accessing metadata

- [commonMetadata](commonmetadata.md): An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](availablemetadataformats.md): An array of metadata formats available for the track.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns metadata items that a track contains for the specified format.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

An array of metadata stored by the track.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMetadataItem *> * metadata;
```

## See Also

### Accessing metadata

- [metadataForFormat:](metadata%28forformat_%29.md): Returns metadata items that a track contains for the specified format.
