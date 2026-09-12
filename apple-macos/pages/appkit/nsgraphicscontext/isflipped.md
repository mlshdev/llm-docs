> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/isflipped](https://developer.apple.com/documentation/appkit/nsgraphicscontext/isflipped)

# isFlipped (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates the graphics context’s flipped state.

## Declaration

```swift
var isFlipped: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The state is determined by sending `flipped` to the receiver’s view that has focus. If no view has focus, returns [false](https://developer.apple.com/documentation/swift/false) unless the receiver is instantiated using [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md) specifying [true](https://developer.apple.com/documentation/swift/true) as the `flipped` parameter.

## See Also

### Related Documentation

- [init(cgContext:flipped:)](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.

### Getting Information About the Context

- [attributes](attributes.md): The attributes used to create this instance.
- [NSGraphicsContext.AttributeKey](attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [NSGraphicsContext.RepresentationFormatName](representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.

# flipped (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates the graphics context’s flipped state.

## Declaration

```objectivec
@property (readonly, getter=isFlipped) BOOL flipped;
```

<a id="Discussion"></a>

## Discussion

The state is determined by sending `flipped` to the receiver’s view that has focus. If no view has focus, returns [false](https://developer.apple.com/documentation/swift/false) unless the receiver is instantiated using [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md) specifying [true](https://developer.apple.com/documentation/swift/true) as the `flipped` parameter.

## See Also

### Related Documentation

- [graphicsContextWithCGContext:flipped:](init%28cgcontext_flipped_%29-9cbad.md): Creates a new graphics context from the specified Core Graphics context and the initial flipped state.

### Getting Information About the Context

- [attributes](attributes.md): The attributes used to create this instance.
- [NSGraphicsContextAttributeKey](attributekey.md): Constants that specify the dictionary keys for the attributes of the graphics context.
- [NSGraphicsContextRepresentationFormatName](representationformatname.md): Constants that specify values for the representation format name key in a graphic context’s attributes dictionary.
