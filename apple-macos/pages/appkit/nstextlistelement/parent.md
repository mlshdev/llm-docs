> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextlistelement/parent

# parent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A text list element that refers to the enclosing text list element.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSTextListElement * parentElement;
```

## See Also

### Accessing the text elements

- [textList](textlist.md): The value that represents the text list.
- [childElements](childelements.md): An array that contains child text elements.
