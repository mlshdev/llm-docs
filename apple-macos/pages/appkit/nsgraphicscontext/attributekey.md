> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/attributekey](https://developer.apple.com/documentation/appkit/nsgraphicscontext/attributekey)

# NSGraphicsContext.AttributeKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify the dictionary keys for the attributes of the graphics context.

## Declaration

```swift
struct AttributeKey
```

<a id="Discussion"></a>

## Discussion

You use these dictionary keys with [init(attributes:)](init%28attributes_%29.md) and [attributes](attributes.md).

## Topics

### Attribute Keys

- [destination](attributekey/destination.md): Specifies the destination.
- [representationFormat](attributekey/representationformat.md): Specifies the destination file format.

### Initializers

- [init(rawValue:)](attributekey/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

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
- [NSGraphicsContext.RepresentationFormatName](representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
- [isFlipped](isflipped.md): A Boolean value that indicates the graphics context’s flipped state.

# NSGraphicsContextAttributeKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify the dictionary keys for the attributes of the graphics context.

## Declaration

```objectivec
typedef NSString * NSGraphicsContextAttributeKey;
```

<a id="Discussion"></a>

## Discussion

You use these dictionary keys with [graphicsContextWithAttributes:](init%28attributes_%29.md) and [attributes](attributes.md).

## Topics

### Attribute Keys

- [NSGraphicsContextDestinationAttributeName](attributekey/destination.md): Specifies the destination.
- [NSGraphicsContextRepresentationFormatAttributeName](attributekey/representationformat.md): Specifies the destination file format.

## See Also

### Getting Information About the Context

- [attributes](attributes.md): The attributes used to create this instance.
- [NSGraphicsContextRepresentationFormatName](representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
- [flipped](isflipped.md): A Boolean value that indicates the graphics context’s flipped state.
