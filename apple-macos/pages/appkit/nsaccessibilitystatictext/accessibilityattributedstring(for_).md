> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitystatictext/accessibilityattributedstring(for:)](https://developer.apple.com/documentation/appkit/nsaccessibilitystatictext/accessibilityattributedstring(for:))

# accessibilityAttributedString(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the attributed substring for the specified range of characters.

## Declaration

```swift
optional func accessibilityAttributedString(for range: NSRange) -> NSAttributedString?
```

## Parameters

- `range`: The range of characters.

<a id="return-value"></a>

## Return Value

An attributed string representing the specified characters.

## See Also

### Supporting Accessibility

- [accessibilityValue()](accessibilityvalue%28%29.md): Returns the text that the accessibility element displays.
- [accessibilityVisibleCharacterRange()](accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.

# accessibilityAttributedStringForRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the attributed substring for the specified range of characters.

## Declaration

```objectivec
- (NSAttributedString *) accessibilityAttributedStringForRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="return-value"></a>

## Return Value

An attributed string representing the specified characters.

## See Also

### Supporting Accessibility

- [accessibilityValue](accessibilityvalue%28%29.md): Returns the text that the accessibility element displays.
- [accessibilityVisibleCharacterRange](accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.
