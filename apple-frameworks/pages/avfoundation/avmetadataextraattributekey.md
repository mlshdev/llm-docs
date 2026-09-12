> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataextraattributekey](https://developer.apple.com/documentation/avfoundation/avmetadataextraattributekey)

# AVMetadataExtraAttributeKey (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines keys for extra metadata attributes.

## Declaration

```swift
struct AVMetadataExtraAttributeKey
```

## Topics

### Extra attribute keys

- [valueURI](avmetadataextraattributekey/valueuri.md): A key that identifies a resource to use as the item’s value.
- [baseURI](avmetadataextraattributekey/baseuri.md): A key that identifies the base URI the item uses to resolve its related URIs.
- [info](avmetadataextraattributekey/info.md): A key that identifies more information about the item.

### Initializers

- [init(\_:)](avmetadataextraattributekey/init%28__%29.md): Creates an extra attribute key with a string.
- [init(rawValue:)](avmetadataextraattributekey/init%28rawvalue_%29.md): Creates an extra attribute key with a raw string value.

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
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.

# AVMetadataExtraAttributeKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines keys for extra metadata attributes.

## Declaration

```objectivec
typedef NSString * AVMetadataExtraAttributeKey;
```

## Topics

### Extra attribute keys

- [AVMetadataExtraAttributeValueURIKey](avmetadataextraattributekey/valueuri.md): A key that identifies a resource to use as the item’s value.
- [AVMetadataExtraAttributeBaseURIKey](avmetadataextraattributekey/baseuri.md): A key that identifies the base URI the item uses to resolve its related URIs.
- [AVMetadataExtraAttributeInfoKey](avmetadataextraattributekey/info.md): A key that identifies more information about the item.

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
- [AVMetadataItemFilter](avmetadataitemfilter.md): An object that filters selected information from a metadata item.
