> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatag](https://developer.apple.com/documentation/imageio/cgimagemetadatatag)

# CGImageMetadataTag (Swift)

**Framework:** Image I/O  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable type that contains information about a single piece of image metadata.

## Declaration

```swift
class CGImageMetadataTag
```

<a id="overview"></a>

## Overview

Each [CGImageMetadataTag](cgimagemetadatatag.md) opaque type contains a single EXIF, IPTC, or XMP property. The namespace, prefix, name, type, and value of the tag identify different portions of the tag’s content. For example, the namespace specifies whether the tag is part of the EXIF metadata or a different set of metadata.

You retrieve existing metadata tags from an [CGImageMetadata](cgimagemetadata.md) opaque type. You may also create new tags and add them to a [CGMutableImageMetadata](cgmutableimagemetadata.md) type, before you assign the updated metadata to an image.

## Topics

### Creating a Metadata Tag

- [CGImageMetadataTagCreate(\_:\_:\_:\_:\_:)](cgimagemetadatatagcreate%28__________%29.md): Creates a new image metadata tag, and fills it with the specified information.

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace(\_:)](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix(\_:)](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName(\_:)](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue(\_:)](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers(\_:)](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

### Getting the Tag Type

- [CGImageMetadataTagGetType(\_:)](cgimagemetadatataggettype%28__%29.md): Returns the type of the metadata tag’s value.
- [CGImageMetadataType](cgimagemetadatatype.md): Constants that indicate the XMP type for a metadata tag.

### Getting the Core Foundation Type

- [CGImageMetadataTagGetTypeID()](cgimagemetadatataggettypeid%28%29.md): Returns the type identifier for the image metadata tag opaque type

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### XMP Metadata

- [CGImageMetadata](cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGMutableImageMetadata](cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.

# CGImageMetadataTagRef (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable type that contains information about a single piece of image metadata.

## Declaration

```objectivec
typedef struct CGImageMetadataTag * CGImageMetadataTagRef;
```

<a id="overview"></a>

## Overview

Each [CGImageMetadataTagRef](cgimagemetadatatag.md) opaque type contains a single EXIF, IPTC, or XMP property. The namespace, prefix, name, type, and value of the tag identify different portions of the tag’s content. For example, the namespace specifies whether the tag is part of the EXIF metadata or a different set of metadata.

You retrieve existing metadata tags from an [CGImageMetadataRef](cgimagemetadata.md) opaque type. You may also create new tags and add them to a [CGMutableImageMetadataRef](cgmutableimagemetadata.md) type, before you assign the updated metadata to an image.

## Topics

### Creating a Metadata Tag

- [CGImageMetadataTagCreate](cgimagemetadatatagcreate%28__________%29.md): Creates a new image metadata tag, and fills it with the specified information.

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

### Getting the Tag Type

- [CGImageMetadataTagGetType](cgimagemetadatataggettype%28__%29.md): Returns the type of the metadata tag’s value.
- [CGImageMetadataType](cgimagemetadatatype.md): Constants that indicate the XMP type for a metadata tag.

### Getting the Core Foundation Type

- [CGImageMetadataTagGetTypeID](cgimagemetadatataggettypeid%28%29.md): Returns the type identifier for the image metadata tag opaque type

## See Also

### XMP Metadata

- [CGImageMetadataRef](cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGMutableImageMetadataRef](cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.
