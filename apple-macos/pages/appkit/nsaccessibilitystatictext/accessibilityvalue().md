> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitystatictext/accessibilityvalue()](https://developer.apple.com/documentation/appkit/nsaccessibilitystatictext/accessibilityvalue())

# accessibilityValue() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text that the accessibility element displays.

## Declaration

```swift
func accessibilityValue() -> String?
```

<a id="return-value"></a>

## Return Value

The text displayed by the element.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md) property.

## See Also

### Supporting Accessibility

- [accessibilityAttributedString(for:)](accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityVisibleCharacterRange()](accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.

# accessibilityValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text that the accessibility element displays.

## Declaration

```objectivec
- (NSString *) accessibilityValue;
```

<a id="return-value"></a>

## Return Value

The text displayed by the element.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md) property.

## See Also

### Related Documentation

- [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md): The accessibility element’s value.

### Supporting Accessibility

- [accessibilityAttributedStringForRange:](accessibilityattributedstring%28for_%29.md): Returns the attributed substring for the specified range of characters.
- [accessibilityVisibleCharacterRange](accessibilityvisiblecharacterrange%28%29.md): Returns the range of visible characters in the document.
