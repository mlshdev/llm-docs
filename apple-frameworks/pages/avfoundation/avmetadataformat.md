> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataformat](https://developer.apple.com/documentation/avfoundation/avmetadataformat)

# AVMetadataFormat (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines metadata formats.

## Declaration

```swift
struct AVMetadataFormat
```

## Mentioned In

- [Retrieving media metadata](retrieving-media-metadata.md)

## Topics

### Metadata formats

- [hlsMetadata](avmetadataformat/hlsmetadata.md): The HLS metadata format.
- [iTunesMetadata](avmetadataformat/itunesmetadata.md): The iTunes metadata format.
- [id3Metadata](avmetadataformat/id3metadata.md): The ID3 metadata format.
- [isoUserData](avmetadataformat/isouserdata.md): The ISO user data metadata format.
- [quickTimeMetadata](avmetadataformat/quicktimemetadata.md): The QuickTime metadata format.
- [quickTimeUserData](avmetadataformat/quicktimeuserdata.md): The QuickTime user data metadata format.
- [unknown](avmetadataformat/unknown.md): An unknown metadata format.

### Initializers

- [init(rawValue:)](avmetadataformat/init%28rawvalue_%29.md): Creates a metadata format with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

# AVMetadataFormat (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines metadata formats.

## Declaration

```objectivec
typedef NSString * AVMetadataFormat;
```

## Mentioned In

- [Retrieving media metadata](retrieving-media-metadata.md)

## Topics

### Metadata formats

- [AVMetadataFormatHLSMetadata](avmetadataformat/hlsmetadata.md): The HLS metadata format.
- [AVMetadataFormatiTunesMetadata](avmetadataformat/itunesmetadata.md): The iTunes metadata format.
- [AVMetadataFormatID3Metadata](avmetadataformat/id3metadata.md): The ID3 metadata format.
- [AVMetadataFormatISOUserData](avmetadataformat/isouserdata.md): The ISO user data metadata format.
- [AVMetadataFormatQuickTimeMetadata](avmetadataformat/quicktimemetadata.md): The QuickTime metadata format.
- [AVMetadataFormatQuickTimeUserData](avmetadataformat/quicktimeuserdata.md): The QuickTime user data metadata format.
- [AVMetadataFormatUnknown](avmetadataformat/unknown.md): An unknown metadata format.

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.
