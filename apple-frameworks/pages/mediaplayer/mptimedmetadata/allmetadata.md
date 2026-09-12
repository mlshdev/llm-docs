> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mptimedmetadata/allmetadata](https://developer.apple.com/documentation/mediaplayer/mptimedmetadata/allmetadata)

# allMetadata (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A dictionary containing all the metadata in the object.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var allMetadata: [AnyHashable : Any]! { get }
```

<a id="Discussion"></a>

## Discussion

To retrieve metadata from the dictionary, use the keys described in [Timed metadata dictionary keys](../timed-metadata-dictionary-keys.md).

## See Also

### Extracting timed metadata from a stream

- [key](key.md): Deprecated. A key that identifies a piece of timed metadata.
- [keyspace](keyspace.md): Deprecated. The namespace of the identifying key.
- [timestamp](timestamp.md): Deprecated. The timestamp of the metadata, in the timebase of the media stream.
- [value](value.md): Deprecated. The timed metadata.

# allMetadata (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A dictionary containing all the metadata in the object.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary * allMetadata;
```

<a id="Discussion"></a>

## Discussion

To retrieve metadata from the dictionary, use the keys described in [Timed metadata dictionary keys](../timed-metadata-dictionary-keys.md).

## See Also

### Extracting timed metadata from a stream

- [key](key.md): Deprecated. A key that identifies a piece of timed metadata.
- [keyspace](keyspace.md): Deprecated. The namespace of the identifying key.
- [timestamp](timestamp.md): Deprecated. The timestamp of the metadata, in the timebase of the media stream.
- [value](value.md): Deprecated. The timed metadata.
