> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/lyrics](https://developer.apple.com/documentation/avfoundation/avasset/lyrics)

# lyrics (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The lyrics of the asset in a language suitable for the current locale.

> Load the value of [lyrics](../avpartialasyncproperty/lyrics.md) asynchronously instead.

## Declaration

```swift
var lyrics: String? { get }
```

# lyrics (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The lyrics of the asset in a language suitable for the current locale.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * lyrics;
```

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
