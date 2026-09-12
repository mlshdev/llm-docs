> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgmutableimagemetadata](https://developer.apple.com/documentation/imageio/cgmutableimagemetadata)

# CGMutableImageMetadata (Swift)

**Framework:** Image I/O  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type for adding or modifying image metadata.

## Declaration

```swift
class CGMutableImageMetadata
```

<a id="Discussion"></a>

## Discussion

Create a [CGMutableImageMetadata](cgmutableimagemetadata.md) opaque type when you want to modify the metadata in an image. You may pass this type to any functions that take a [CGImageMetadata](cgimagemetadata.md) type as a parameter. This object stores the tag information as XMP data, which you can write back to the image.

When you access or modify EXIF or IPTC properties, the metadata functions automatically bridge those properties to appropriate XMP properties. This bridging behavior fills in any fields that are present only in the XMP data. For example, it fills in the namespace, prefix, and XMP type information in the corresponding [CGImageMetadataTag](cgimagemetadatatag.md) object.

## Topics

### Creating a Mutable Metadata Type

- [CGImageMetadataCreateMutable()](cgimagemetadatacreatemutable%28%29.md): Creates an empty, mutable image metdata opaque type.
- [CGImageMetadataCreateMutableCopy(\_:)](cgimagemetadatacreatemutablecopy%28__%29.md): Creates a deep, mutable copy of the specified metadata information.

### Setting the Values of Tags

- [CGImageMetadataSetValueWithPath(\_:\_:\_:\_:)](cgimagemetadatasetvaluewithpath%28________%29.md): Update the value of an existing metadata tag, or create a new tag using the specified information.
- [CGImageMetadataSetValueMatchingImageProperty(\_:\_:\_:\_:)](cgimagemetadatasetvaluematchingimageproperty%28________%29.md): Updates the value of the metadata tag assigned to the specified image property.
- [CGImageMetadataSetTagWithPath(\_:\_:\_:\_:)](cgimagemetadatasettagwithpath%28________%29.md): Sets the tag at the specified path in the metadata object.
- [CGImageMetadataRemoveTagWithPath(\_:\_:\_:)](cgimagemetadataremovetagwithpath%28______%29.md): Removes the tag at the specified path from the metadata object.

### Registering a Custom Namespace

- [CGImageMetadataRegisterNamespaceForPrefix(\_:\_:\_:\_:)](cgimagemetadataregisternamespaceforprefix%28________%29.md): Registers the specified namespace and prefix with the metadata object.

## Relationships

### Inherits From

- [CGImageMetadata](cgimagemetadata.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### XMP Metadata

- [CGImageMetadata](cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGImageMetadataTag](cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.

# CGMutableImageMetadataRef (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque type for adding or modifying image metadata.

## Declaration

```objectivec
typedef struct CGImageMetadata * CGMutableImageMetadataRef;
```

<a id="Discussion"></a>

## Discussion

Create a [CGMutableImageMetadataRef](cgmutableimagemetadata.md) opaque type when you want to modify the metadata in an image. You may pass this type to any functions that take a [CGImageMetadataRef](cgimagemetadata.md) type as a parameter. This object stores the tag information as XMP data, which you can write back to the image.

When you access or modify EXIF or IPTC properties, the metadata functions automatically bridge those properties to appropriate XMP properties. This bridging behavior fills in any fields that are present only in the XMP data. For example, it fills in the namespace, prefix, and XMP type information in the corresponding [CGImageMetadataTagRef](cgimagemetadatatag.md) object.

## Topics

### Creating a Mutable Metadata Type

- [CGImageMetadataCreateMutable](cgimagemetadatacreatemutable%28%29.md): Creates an empty, mutable image metdata opaque type.
- [CGImageMetadataCreateMutableCopy](cgimagemetadatacreatemutablecopy%28__%29.md): Creates a deep, mutable copy of the specified metadata information.

### Setting the Values of Tags

- [CGImageMetadataSetValueWithPath](cgimagemetadatasetvaluewithpath%28________%29.md): Update the value of an existing metadata tag, or create a new tag using the specified information.
- [CGImageMetadataSetValueMatchingImageProperty](cgimagemetadatasetvaluematchingimageproperty%28________%29.md): Updates the value of the metadata tag assigned to the specified image property.
- [CGImageMetadataSetTagWithPath](cgimagemetadatasettagwithpath%28________%29.md): Sets the tag at the specified path in the metadata object.
- [CGImageMetadataRemoveTagWithPath](cgimagemetadataremovetagwithpath%28______%29.md): Removes the tag at the specified path from the metadata object.

### Registering a Custom Namespace

- [CGImageMetadataRegisterNamespaceForPrefix](cgimagemetadataregisternamespaceforprefix%28________%29.md): Registers the specified namespace and prefix with the metadata object.

## See Also

### XMP Metadata

- [CGImageMetadataRef](cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGImageMetadataTagRef](cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
- [CGImageMetadataErrors](cgimagemetadataerrors.md): Constants for errors that occur when getting or setting metadata information.
