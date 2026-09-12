> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitysharedcharacterrange](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitysharedcharacterrange)

# accessibilitySharedCharacterRange

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The range of characters that the accessibility element displays.

## Declaration

```objectivec
@property NSRange accessibilitySharedCharacterRange;
```

<a id="Discussion"></a>

## Discussion

Use this property to manage text that is split across multiple elements—for example, an ebook reader that splits the text into multiple pages.
