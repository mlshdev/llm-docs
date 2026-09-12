> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatype/alternatetext](https://developer.apple.com/documentation/imageio/cgimagemetadatatype/alternatetext)

# CGImageMetadataType.alternateText (Swift)

**Framework:** Image I/O  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An alternate array, in which all elements are localized strings for the same value.

## Declaration

```swift
case alternateText
```

<a id="Discussion"></a>

## Discussion

During serialization, this type becomes an alternate array of strings with `xml:lang` qualifiers in the XMP format.

## See Also

### Metadata Types

- [CGImageMetadataType.invalid](invalid.md): An invalid metadata type.
- [CGImageMetadataType.default](default.md): The default type for new tags.
- [CGImageMetadataType.string](string.md): A string value.
- [CGImageMetadataType.arrayUnordered](arrayunordered.md): An array that doesn’t preserve the order of items.
- [CGImageMetadataType.arrayOrdered](arrayordered.md): An array that preserves the order of items.
- [CGImageMetadataType.alternateArray](alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [CGImageMetadataType.structure](structure.md): A collection of keys and values.

# kCGImageMetadataTypeAlternateText (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An alternate array, in which all elements are localized strings for the same value.

## Declaration

```objectivec
kCGImageMetadataTypeAlternateText
```

<a id="Discussion"></a>

## Discussion

During serialization, this type becomes an alternate array of strings with `xml:lang` qualifiers in the XMP format.

## See Also

### Metadata Types

- [kCGImageMetadataTypeInvalid](invalid.md): An invalid metadata type.
- [kCGImageMetadataTypeDefault](default.md): The default type for new tags.
- [kCGImageMetadataTypeString](string.md): A string value.
- [kCGImageMetadataTypeArrayUnordered](arrayunordered.md): An array that doesn’t preserve the order of items.
- [kCGImageMetadataTypeArrayOrdered](arrayordered.md): An array that preserves the order of items.
- [kCGImageMetadataTypeAlternateArray](alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [kCGImageMetadataTypeStructure](structure.md): A collection of keys and values.
