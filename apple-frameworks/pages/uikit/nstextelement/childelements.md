> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextelement/childelements

# childElements (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An array of zero or more child text elements.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSTextElement *> * childElements;
```

## See Also

### Accessing text elements

- [isRepresentedElement](isrepresentedelement.md): A Boolean value that indicates whether this element is in the text layout.
- [parentElement](parent.md): A value that represents the parent element if this text element is a child of an enclosing element.
