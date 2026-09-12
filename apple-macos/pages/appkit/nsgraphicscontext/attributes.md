> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/attributes](https://developer.apple.com/documentation/appkit/nsgraphicscontext/attributes)

# attributes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The attributes used to create this instance.

## Declaration

```swift
var attributes: [NSGraphicsContext.AttributeKey : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

Screen-based graphics contexts do not store attributes, even if you create them using [init(attributes:)](init%28attributes_%29.md).

## See Also

### Getting Information About the Context

- [NSGraphicsContext.AttributeKey](attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [NSGraphicsContext.RepresentationFormatName](representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
- [isFlipped](isflipped.md): A Boolean value that indicates the graphics context’s flipped state.

# attributes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The attributes used to create this instance.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * attributes;
```

<a id="Discussion"></a>

## Discussion

Screen-based graphics contexts do not store attributes, even if you create them using [graphicsContextWithAttributes:](init%28attributes_%29.md).

## See Also

### Getting Information About the Context

- [NSGraphicsContextAttributeKey](attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [NSGraphicsContextRepresentationFormatName](representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
- [flipped](isflipped.md): A Boolean value that indicates the graphics context’s flipped state.
