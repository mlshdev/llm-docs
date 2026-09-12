> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatype](https://developer.apple.com/documentation/imageio/cgimagemetadatatype)

# CGImageMetadataType (Swift)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the XMP type for a metadata tag.

## Declaration

```swift
enum CGImageMetadataType
```

<a id="overview"></a>

## Overview

Use these constants to identify the type of metadata in a [CGImageMetadataTag](cgimagemetadatatag.md) opaque type. The type tells you how to interpret the value of the metadata tag. When creating a new [CGImageMetadataTag](cgimagemetadatatag.md), specify a type so the system knows how to serialize the data to the XMP format.

## Topics

### Metadata Types

- [CGImageMetadataType.invalid](cgimagemetadatatype/invalid.md): An invalid metadata type.
- [CGImageMetadataType.default](cgimagemetadatatype/default.md): The default type for new tags.
- [CGImageMetadataType.string](cgimagemetadatatype/string.md): A string value.
- [CGImageMetadataType.arrayUnordered](cgimagemetadatatype/arrayunordered.md): An array that doesn’t preserve the order of items.
- [CGImageMetadataType.arrayOrdered](cgimagemetadatatype/arrayordered.md): An array that preserves the order of items.
- [CGImageMetadataType.alternateArray](cgimagemetadatatype/alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [CGImageMetadataType.alternateText](cgimagemetadatatype/alternatetext.md): An alternate array, in which all elements are localized strings for the same value.
- [CGImageMetadataType.structure](cgimagemetadatatype/structure.md): A collection of keys and values.

### Initializers

- [init(rawValue:)](cgimagemetadatatype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Tag Type

- [CGImageMetadataTagGetType(\_:)](cgimagemetadatataggettype%28__%29.md): Returns the type of the metadata tag’s value.

# CGImageMetadataType (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the XMP type for a metadata tag.

## Declaration

```objectivec
enum CGImageMetadataType : int32_t;
```

<a id="overview"></a>

## Overview

Use these constants to identify the type of metadata in a [CGImageMetadataTagRef](cgimagemetadatatag.md) opaque type. The type tells you how to interpret the value of the metadata tag. When creating a new [CGImageMetadataTagRef](cgimagemetadatatag.md), specify a type so the system knows how to serialize the data to the XMP format.

## Topics

### Metadata Types

- [kCGImageMetadataTypeInvalid](cgimagemetadatatype/invalid.md): An invalid metadata type.
- [kCGImageMetadataTypeDefault](cgimagemetadatatype/default.md): The default type for new tags.
- [kCGImageMetadataTypeString](cgimagemetadatatype/string.md): A string value.
- [kCGImageMetadataTypeArrayUnordered](cgimagemetadatatype/arrayunordered.md): An array that doesn’t preserve the order of items.
- [kCGImageMetadataTypeArrayOrdered](cgimagemetadatatype/arrayordered.md): An array that preserves the order of items.
- [kCGImageMetadataTypeAlternateArray](cgimagemetadatatype/alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [kCGImageMetadataTypeAlternateText](cgimagemetadatatype/alternatetext.md): An alternate array, in which all elements are localized strings for the same value.
- [kCGImageMetadataTypeStructure](cgimagemetadatatype/structure.md): A collection of keys and values.

## See Also

### Getting the Tag Type

- [CGImageMetadataTagGetType](cgimagemetadatataggettype%28__%29.md): Returns the type of the metadata tag’s value.
