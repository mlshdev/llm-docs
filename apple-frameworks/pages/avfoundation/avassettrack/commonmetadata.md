> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/commonmetadata](https://developer.apple.com/documentation/avfoundation/avassettrack/commonmetadata)

# commonMetadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

An array of metadata items for all common metadata keys that have a value.

> Load the value of [commonMetadata](../avpartialasyncproperty/commonmetadata-73m58.md) asynchronously instead.

## Declaration

```swift
var commonMetadata: [AVMetadataItem] { get }
```

# commonMetadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of metadata items for all common metadata keys that have a value.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMetadataItem *> * commonMetadata;
```

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers that have a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. An array of metadata formats available for the track.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns metadata items that a track contains for the specified format.
