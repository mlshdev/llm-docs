> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/availablemetadataformats](https://developer.apple.com/documentation/avfoundation/avasset/availablemetadataformats)

# availableMetadataFormats (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The metadata formats this asset contains.

> Load the value of [availableMetadataFormats](../avpartialasyncproperty/availablemetadataformats-4yiq8.md) asynchronously instead.

## Declaration

```swift
var availableMetadataFormats: [AVMetadataFormat] { get }
```

<a id="Discussion"></a>

## Discussion

Metadata formats may include ID3, iTunes metadata, and so on.

# availableMetadataFormats (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The metadata formats this asset contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableMetadataFormats;
```

<a id="Discussion"></a>

## Discussion

Metadata formats may include ID3, iTunes metadata, and so on.

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.
