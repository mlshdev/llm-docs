> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatakeyspace](https://developer.apple.com/documentation/avfoundation/avmetadatakeyspace)

# AVMetadataKeySpace (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines a metadata key space.

## Declaration

```swift
struct AVMetadataKeySpace
```

## Topics

### Common key space

- [common](avmetadatakeyspace/common.md): The common key space.

### Format-specific key spaces

- [audioFile](avmetadatakeyspace/audiofile.md): The AudioToolbox audio file key space.
- [hlsDateRange](avmetadatakeyspace/hlsdaterange.md): The HTTP Live Streaming key space.
- [iTunes](avmetadatakeyspace/itunes.md): The iTunes key space.
- [icy](avmetadatakeyspace/icy.md): The Icecast/ShoutCAST streaming key space.
- [id3](avmetadatakeyspace/id3.md): The ID3 key space.
- [isoUserData](avmetadatakeyspace/isouserdata.md): The ISO key space.
- [quickTimeMetadata](avmetadatakeyspace/quicktimemetadata.md): The QuickTime metadata key space.
- [quickTimeUserData](avmetadatakeyspace/quicktimeuserdata.md): The QuickTime user data key space.

### Initializers

- [init(\_:)](avmetadatakeyspace/init%28__%29.md): Creates a key space with a string.
- [init(rawValue:)](avmetadatakeyspace/init%28rawvalue_%29.md): Creates a key space with a raw string value.

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
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

# AVMetadataKeySpace (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines a metadata key space.

## Declaration

```objectivec
typedef NSString * AVMetadataKeySpace;
```

## Topics

### Common key space

- [AVMetadataKeySpaceCommon](avmetadatakeyspace/common.md): The common key space.

### Format-specific key spaces

- [AVMetadataKeySpaceAudioFile](avmetadatakeyspace/audiofile.md): The AudioToolbox audio file key space.
- [AVMetadataKeySpaceHLSDateRange](avmetadatakeyspace/hlsdaterange.md): The HTTP Live Streaming key space.
- [AVMetadataKeySpaceiTunes](avmetadatakeyspace/itunes.md): The iTunes key space.
- [AVMetadataKeySpaceIcy](avmetadatakeyspace/icy.md): The Icecast/ShoutCAST streaming key space.
- [AVMetadataKeySpaceID3](avmetadatakeyspace/id3.md): The ID3 key space.
- [AVMetadataKeySpaceISOUserData](avmetadatakeyspace/isouserdata.md): The ISO key space.
- [AVMetadataKeySpaceQuickTimeMetadata](avmetadatakeyspace/quicktimemetadata.md): The QuickTime metadata key space.
- [AVMetadataKeySpaceQuickTimeUserData](avmetadatakeyspace/quicktimeuserdata.md): The QuickTime user data key space.

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.
