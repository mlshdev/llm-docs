> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitemfilter](https://developer.apple.com/documentation/avfoundation/avmetadataitemfilter)

# AVMetadataItemFilter (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that filters selected information from a metadata item.

## Declaration

```swift
class AVMetadataItemFilter
```

<a id="overview"></a>

## Overview

Filter instances are opaque, unmodifiable objects, that you create with the [forSharing()](avmetadataitemfilter/forsharing%28%29.md) class method.

## Topics

### Creating a metadata item filter

- [forSharing()](avmetadataitemfilter/forsharing%28%29.md): Returns a metadata filter to use for sharing assets.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
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
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.

# AVMetadataItemFilter (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that filters selected information from a metadata item.

## Declaration

```objectivec
@interface AVMetadataItemFilter : NSObject
```

<a id="overview"></a>

## Overview

Filter instances are opaque, unmodifiable objects, that you create with the [metadataItemFilterForSharing](avmetadataitemfilter/forsharing%28%29.md) class method.

## Topics

### Creating a metadata item filter

- [metadataItemFilterForSharing](avmetadataitemfilter/forsharing%28%29.md): Returns a metadata filter to use for sharing assets.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metadata

- [Retrieving media metadata](retrieving-media-metadata.md): Load descriptive metadata for media assets and their tracks.
- [AVMetadataItem](avmetadataitem.md): A metadata item for an audiovisual asset or one of its tracks.
- [AVMutableMetadataItem](avmutablemetadataitem.md): A mutable metadata item for an audiovisual asset or for one of its tracks.
- [AVMetadataIdentifier](avmetadataidentifier.md): A structure that defines identifiers for metadata formats.
- [AVMetadataKey](avmetadatakey.md): A structure that defines a metadata key.
- [AVMetadataKeySpace](avmetadatakeyspace.md): A structure that defines a metadata key space.
- [AVMetadataExtraAttributeKey](avmetadataextraattributekey.md): A structure that defines keys for extra metadata attributes.
- [AVMetadataFormat](avmetadataformat.md): A structure that defines metadata formats.
