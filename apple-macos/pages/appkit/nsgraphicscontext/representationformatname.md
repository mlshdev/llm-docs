> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/representationformatname](https://developer.apple.com/documentation/appkit/nsgraphicscontext/representationformatname)

# NSGraphicsContext.RepresentationFormatName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.

## Declaration

```swift
struct RepresentationFormatName
```

<a id="Discussion"></a>

## Discussion

You use these constants with the [representationFormat](attributekey/representationformat.md) key.

## Topics

### Format Names

- [pdf](representationformatname/pdf.md): Destination file format is PDF.
- [postScript](representationformatname/postscript.md): Destination file format is PostScript.

### Initializers

- [init(rawValue:)](representationformatname/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Information About the Context

- [attributes](attributes.md): The attributes used to create this instance.
- [NSGraphicsContext.AttributeKey](attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [isFlipped](isflipped.md): A Boolean value that indicates the graphics context’s flipped state.

# NSGraphicsContextRepresentationFormatName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.

## Declaration

```objectivec
typedef NSString * NSGraphicsContextRepresentationFormatName;
```

<a id="Discussion"></a>

## Discussion

You use these constants with the [NSGraphicsContextRepresentationFormatAttributeName](attributekey/representationformat.md) key.

## Topics

### Format Names

- [NSGraphicsContextPDFFormat](representationformatname/pdf.md): Destination file format is PDF.
- [NSGraphicsContextPSFormat](representationformatname/postscript.md): Destination file format is PostScript.

## See Also

### Getting Information About the Context

- [attributes](attributes.md): The attributes used to create this instance.
- [NSGraphicsContextAttributeKey](attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [flipped](isflipped.md): A Boolean value that indicates the graphics context’s flipped state.
