> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelement/parent](https://developer.apple.com/documentation/appkit/nstextelement/parent)

# parent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A value that represents the parent element if this text element is a child of an enclosing element.

## Declaration

```swift
weak var parent: NSTextElement? { get }
```

## See Also

### Accessing text elements

- [isRepresentedElement](isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [childElements](childelements.md): An array of zero or more child text elements.

# parentElement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A value that represents the parent element if this text element is a child of an enclosing element.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTextElement * parentElement;
```

## See Also

### Accessing text elements

- [isRepresentedElement](isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [childElements](childelements.md): An array of zero or more child text elements.
