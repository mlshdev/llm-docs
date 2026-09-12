> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitystatictext/accessibilityvisiblecharacterrange()](https://developer.apple.com/documentation/appkit/nsaccessibilitystatictext/accessibilityvisiblecharacterrange())

# accessibilityVisibleCharacterRange() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of visible characters in the document.

## Declaration

```swift
optional func accessibilityVisibleCharacterRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The range of the visible characters in the document. This method should return the range for entire lines. Characters that are horizontally clipped are included in this range.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityVisibleCharacterRange](../nsaccessibility-c.protocol/accessibilityvisiblecharacterrange.md) property.

## See Also

### Supporting Accessibility

- [accessibilityAttributedString(for:)](accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityValue()](accessibilityvalue%28%29.md): Returns the text that the accessibility element displays.

# accessibilityVisibleCharacterRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of visible characters in the document.

## Declaration

```objectivec
- (NSRange) accessibilityVisibleCharacterRange;
```

<a id="return-value"></a>

## Return Value

The range of the visible characters in the document. This method should return the range for entire lines. Characters that are horizontally clipped are included in this range.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityVisibleCharacterRange](../nsaccessibility-c.protocol/accessibilityvisiblecharacterrange.md) property.

## See Also

### Related Documentation

- [accessibilityVisibleCharacterRange](../nsaccessibility-c.protocol/accessibilityvisiblecharacterrange.md): The range of visible characters in the document.

### Supporting Accessibility

- [accessibilityAttributedStringForRange:](accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityValue](accessibilityvalue%28%29.md): Returns the text that the accessibility element displays.
