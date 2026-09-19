> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlistelement/childelements

# childElements (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An array that contains child text elements.

## Declaration

```swift
var childElements: [NSTextListElement] { get }
```

## See Also

### Accessing the text elements

- [textList](textlist.md): The value that represents the text list.
- [parent](parent.md): A text list element that refers to the enclosing text list element.

# childElements (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An array that contains child text elements.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTextListElement *> * childElements;
```

## See Also

### Accessing the text elements

- [textList](textlist.md): The value that represents the text list.
- [parentElement](parent.md): A text list element that refers to the enclosing text list element.
