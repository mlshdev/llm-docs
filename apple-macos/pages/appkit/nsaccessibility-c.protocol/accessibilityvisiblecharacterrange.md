> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityvisiblecharacterrange](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityvisiblecharacterrange)

# accessibilityVisibleCharacterRange

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The range of visible characters in the document.

## Declaration

```objectivec
@property NSRange accessibilityVisibleCharacterRange;
```

<a id="Discussion"></a>

## Discussion

Use this property to store the range for entire lines. Characters that are horizontally clipped are included in this range.
