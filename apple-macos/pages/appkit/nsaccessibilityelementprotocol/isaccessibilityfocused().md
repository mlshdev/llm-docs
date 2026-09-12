> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelementprotocol/isaccessibilityfocused()](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol/isaccessibilityfocused())

# isAccessibilityFocused() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.

## Declaration

```swift
optional func isAccessibilityFocused() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this element has the keyboard focus; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityFocused](../nsaccessibility-c.protocol/accessibilityfocused.md) property.

## See Also

### Supporting Accessibility

- [accessibilityFrame()](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [accessibilityIdentifier()](accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [accessibilityParent()](accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.

# isAccessibilityFocused (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.

## Declaration

```objectivec
- (BOOL) isAccessibilityFocused;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this element has the keyboard focus; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityFocused](../nsaccessibility-c.protocol/accessibilityfocused.md) property.

## See Also

### Related Documentation

- [accessibilityFocused](../nsaccessibility-c.protocol/accessibilityfocused.md): A Boolean value that determines whether the accessibility element has the keyboard focus.

### Supporting Accessibility

- [accessibilityFrame](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [accessibilityIdentifier](accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [accessibilityParent](accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.
