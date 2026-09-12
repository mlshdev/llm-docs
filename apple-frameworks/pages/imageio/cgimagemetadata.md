> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadata](https://developer.apple.com/documentation/imageio/cgimagemetadata)

# CGImageMetadata (Swift)

**Framework:** Image I/O  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that contains the XMP metadata associated with an image.

## Declaration

```swift
class CGImageMetadata
```

<a id="overview"></a>

## Overview

A [CGImageMetadata](cgimagemetadata.md) object stores the metadata associated with an image. Create this object from your image’s associated XMP data, and use it to fetch individual metadata tags. You can search for specific tags, or enumerate all of the tags present for the image.

## Topics

### Creating an Image Metadata Type

- [CGImageMetadataCreateFromXMPData(\_:)](cgimagemetadatacreatefromxmpdata%28__%29.md): Creates a collection of metadata tags from the specified XMP data.

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath(\_:\_:\_:)](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTags(\_:)](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyTagMatchingImageProperty(\_:\_:\_:)](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
- [CGImageMetadataCopyStringValueWithPath(\_:\_:\_:)](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.

### Enumerating the Metadata Tags

- [CGImageMetadataEnumerateTagsUsingBlock(\_:\_:\_:\_:)](cgimagemetadataenumeratetagsusingblock%28________%29.md): Enumerates the tags of a metadata object and executes the specified block on each tag.
- [CGImageMetadataTagBlock](cgimagemetadatatagblock.md): The block to execute when enumerating the tags of a metadata object.
- [kCGImageMetadataEnumerateRecursively](kcgimagemetadataenumeraterecursively.md): An option to enumerate recursively through a set of metadata tags.

### Generating XMP Data

- [CGImageMetadataCreateXMPData(\_:\_:)](cgimagemetadatacreatexmpdata%28____%29.md): Returns a data object that contains the metadata object’s contents serialized into the XMP format.

### Getting the Core Foundation Type

- [CGImageMetadataGetTypeID()](cgimagemetadatagettypeid%28%29.md): Returns the type identifier for metadata objects.

## Relationships

### Inherited By

- [CGMutableImageMetadata](cgmutableimagemetadata.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### XMP Metadata

- [CGMutableImageMetadata](cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [CGImageMetadataTag](cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.

# CGImageMetadataRef (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that contains the XMP metadata associated with an image.

## Declaration

```objectivec
typedef const struct CGImageMetadata * CGImageMetadataRef;
```

<a id="overview"></a>

## Overview

A [CGImageMetadataRef](cgimagemetadata.md) object stores the metadata associated with an image. Create this object from your image’s associated XMP data, and use it to fetch individual metadata tags. You can search for specific tags, or enumerate all of the tags present for the image.

## Topics

### Creating an Image Metadata Type

- [CGImageMetadataCreateFromXMPData](cgimagemetadatacreatefromxmpdata%28__%29.md): Creates a collection of metadata tags from the specified XMP data.

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTags](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyTagMatchingImageProperty](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
- [CGImageMetadataCopyStringValueWithPath](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.

### Enumerating the Metadata Tags

- [CGImageMetadataEnumerateTagsUsingBlock](cgimagemetadataenumeratetagsusingblock%28________%29.md): Enumerates the tags of a metadata object and executes the specified block on each tag.
- [CGImageMetadataTagBlock](cgimagemetadatatagblock.md): The block to execute when enumerating the tags of a metadata object.
- [kCGImageMetadataEnumerateRecursively](kcgimagemetadataenumeraterecursively.md): An option to enumerate recursively through a set of metadata tags.

### Generating XMP Data

- [CGImageMetadataCreateXMPData](cgimagemetadatacreatexmpdata%28____%29.md): Returns a data object that contains the metadata object’s contents serialized into the XMP format.

### Getting the Core Foundation Type

- [CGImageMetadataGetTypeID](cgimagemetadatagettypeid%28%29.md): Returns the type identifier for metadata objects.

## See Also

### XMP Metadata

- [CGMutableImageMetadataRef](cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [CGImageMetadataTagRef](cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.
