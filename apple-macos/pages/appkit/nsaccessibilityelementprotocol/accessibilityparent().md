> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelementprotocol/accessibilityparent()](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol/accessibilityparent())

# accessibilityParent() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s parent in the accessibility hierarchy.

## Declaration

```swift
func accessibilityParent() -> Any?
```

<a id="return-value"></a>

## Return Value

The element’s parent in the accessibility hierarchy.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityParent](../nsaccessibility-c.protocol/accessibilityparent.md) property.

## See Also

### Supporting Accessibility

- [accessibilityFrame()](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [accessibilityIdentifier()](accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [isAccessibilityFocused()](isaccessibilityfocused%28%29.md): Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.

# accessibilityParent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s parent in the accessibility hierarchy.

## Declaration

```objectivec
- (id) accessibilityParent;
```

<a id="return-value"></a>

## Return Value

The element’s parent in the accessibility hierarchy.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityParent](../nsaccessibility-c.protocol/accessibilityparent.md) property.

## See Also

### Related Documentation

- [accessibilityParent](../nsaccessibility-c.protocol/accessibilityparent.md): The accessibility element’s parent in the accessibility hierarchy.

### Supporting Accessibility

- [accessibilityFrame](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [accessibilityIdentifier](accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [isAccessibilityFocused](isaccessibilityfocused%28%29.md): Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.
