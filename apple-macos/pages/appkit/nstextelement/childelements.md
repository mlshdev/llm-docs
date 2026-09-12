> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelement/childelements](https://developer.apple.com/documentation/appkit/nstextelement/childelements)

# childElements (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An array of zero or more child text elements.

## Declaration

```swift
var childElements: [NSTextElement] { get }
```

## See Also

### Accessing text elements

- [isRepresentedElement](isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [parent](parent.md): A value that represents the parent element if this text element is a child of an enclosing element.

# childElements (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An array of zero or more child text elements.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSTextElement *> * childElements;
```

## See Also

### Accessing text elements

- [isRepresentedElement](isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [parentElement](parent.md): A value that represents the parent element if this text element is a child of an enclosing element.
