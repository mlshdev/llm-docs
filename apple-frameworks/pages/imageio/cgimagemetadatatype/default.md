> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatype/default](https://developer.apple.com/documentation/imageio/cgimagemetadatatype/default)

# CGImageMetadataType.default (Swift)

**Framework:** Image I/O  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default type for new tags.

## Declaration

```swift
case `default`
```

<a id="Discussion"></a>

## Discussion

When you create new tags, the system assigns this value initially. The system uses the Core Foundation type of the metadata tag’s value to determine an appropriate type. During the serialization process, the system converts the type automatically to a nondefault value.

## See Also

### Metadata Types

- [CGImageMetadataType.invalid](invalid.md): An invalid metadata type.
- [CGImageMetadataType.string](string.md): A string value.
- [CGImageMetadataType.arrayUnordered](arrayunordered.md): An array that doesn’t preserve the order of items.
- [CGImageMetadataType.arrayOrdered](arrayordered.md): An array that preserves the order of items.
- [CGImageMetadataType.alternateArray](alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [CGImageMetadataType.alternateText](alternatetext.md): An alternate array, in which all elements are localized strings for the same value.
- [CGImageMetadataType.structure](structure.md): A collection of keys and values.

# kCGImageMetadataTypeDefault (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default type for new tags.

## Declaration

```objectivec
kCGImageMetadataTypeDefault
```

<a id="Discussion"></a>

## Discussion

When you create new tags, the system assigns this value initially. The system uses the Core Foundation type of the metadata tag’s value to determine an appropriate type. During the serialization process, the system converts the type automatically to a nondefault value.

## See Also

### Metadata Types

- [kCGImageMetadataTypeInvalid](invalid.md): An invalid metadata type.
- [kCGImageMetadataTypeString](string.md): A string value.
- [kCGImageMetadataTypeArrayUnordered](arrayunordered.md): An array that doesn’t preserve the order of items.
- [kCGImageMetadataTypeArrayOrdered](arrayordered.md): An array that preserves the order of items.
- [kCGImageMetadataTypeAlternateArray](alternatearray.md): An ordered array, in which all elements are alternates for the same value.
- [kCGImageMetadataTypeAlternateText](alternatetext.md): An alternate array, in which all elements are localized strings for the same value.
- [kCGImageMetadataTypeStructure](structure.md): A collection of keys and values.
