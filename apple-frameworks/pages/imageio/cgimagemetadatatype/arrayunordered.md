> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatype/arrayunordered](https://developer.apple.com/documentation/imageio/cgimagemetadatatype/arrayunordered)

# CGImageMetadataType.arrayUnordered (Swift)

**Framework:** Image I/O  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array that doesn’t preserve the order of items.

## Declaration

```swift
case arrayUnordered
```

<a id="Discussion"></a>

## Discussion

During serialization, this type becomes `<rdf:Bag>` in the XMP format.

## See Also

### Metadata Types

- [CGImageMetadataType.invalid](invalid.md): An invalid metadata type.
- [CGImageMetadataType.default](default.md): The default type for new tags.
- [CGImageMetadataType.string](string.md): A string value.
- [CGImageMetadataType.arrayOrdered](arrayordered.md): An array that preserves the order of items.
- [CGImageMetadataType.alternateArray](alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [CGImageMetadataType.alternateText](alternatetext.md): An alternate array, in which all elements are localized strings for the same value.
- [CGImageMetadataType.structure](structure.md): A collection of keys and values.

# kCGImageMetadataTypeArrayUnordered (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array that doesn’t preserve the order of items.

## Declaration

```objectivec
kCGImageMetadataTypeArrayUnordered
```

<a id="Discussion"></a>

## Discussion

During serialization, this type becomes `<rdf:Bag>` in the XMP format.

## See Also

### Metadata Types

- [kCGImageMetadataTypeInvalid](invalid.md): An invalid metadata type.
- [kCGImageMetadataTypeDefault](default.md): The default type for new tags.
- [kCGImageMetadataTypeString](string.md): A string value.
- [kCGImageMetadataTypeArrayOrdered](arrayordered.md): An array that preserves the order of items.
- [kCGImageMetadataTypeAlternateArray](alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [kCGImageMetadataTypeAlternateText](alternatetext.md): An alternate array, in which all elements are localized strings for the same value.
- [kCGImageMetadataTypeStructure](structure.md): A collection of keys and values.
