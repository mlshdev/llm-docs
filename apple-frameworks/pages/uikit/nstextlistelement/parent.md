> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlistelement/parent

# parent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A text list element that refers to the enclosing text list element.

## Declaration

```swift
weak var parent: NSTextListElement? { get }
```

## See Also

### Accessing the text elements

- [textList](textlist.md): The value that represents the text list.
- [childElements](childelements.md): An array that contains child text elements.

# parentElement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A text list element that refers to the enclosing text list element.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTextListElement * parentElement;
```

## See Also

### Accessing the text elements

- [textList](textlist.md): The value that represents the text list.
- [childElements](childelements.md): An array that contains child text elements.
