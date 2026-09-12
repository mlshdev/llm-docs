> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextelement/parent](https://developer.apple.com/documentation/uikit/nstextelement/parent)

# parent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A value that represents the parent element if this text element is a child of an enclosing element.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTextElement * parentElement;
```

## See Also

### Accessing text elements

- [isRepresentedElement](isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [childElements](childelements.md): An array of zero or more child text elements.
