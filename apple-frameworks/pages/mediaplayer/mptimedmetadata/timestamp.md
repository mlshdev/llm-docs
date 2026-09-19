> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mptimedmetadata/timestamp

# timestamp (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The timestamp of the metadata, in the timebase of the media stream.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## See Also

### Extracting timed metadata from a stream

- [allMetadata](allmetadata.md): Deprecated. A dictionary containing all the metadata in the object.
- [key](key.md): Deprecated. A key that identifies a piece of timed metadata.
- [keyspace](keyspace.md): Deprecated. The namespace of the identifying key.
- [value](value.md): Deprecated. The timed metadata.

# timestamp (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The timestamp of the metadata, in the timebase of the media stream.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

## See Also

### Extracting timed metadata from a stream

- [allMetadata](allmetadata.md): Deprecated. A dictionary containing all the metadata in the object.
- [key](key.md): Deprecated. A key that identifies a piece of timed metadata.
- [keyspace](keyspace.md): Deprecated. The namespace of the identifying key.
- [value](value.md): Deprecated. The timed metadata.
