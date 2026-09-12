> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelementprotocol/accessibilityidentifier()](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol/accessibilityidentifier())

# accessibilityIdentifier() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s identity.

## Declaration

```swift
optional func accessibilityIdentifier() -> String
```

<a id="return-value"></a>

## Return Value

Returns the unique ID for the accessibility element. It is often used in automated testing.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityIdentifier](../nsaccessibility-c.protocol/accessibilityidentifier.md) property.

## See Also

### Supporting Accessibility

- [accessibilityFrame()](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [accessibilityParent()](accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.
- [isAccessibilityFocused()](isaccessibilityfocused%28%29.md): Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.

# accessibilityIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s identity.

## Declaration

```objectivec
- (NSString *) accessibilityIdentifier;
```

<a id="return-value"></a>

## Return Value

Returns the unique ID for the accessibility element. It is often used in automated testing.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityIdentifier](../nsaccessibility-c.protocol/accessibilityidentifier.md) property.

## See Also

### Related Documentation

- [accessibilityIdentifier](../nsaccessibility-c.protocol/accessibilityidentifier.md): The accessibility element’s identity.

### Supporting Accessibility

- [accessibilityFrame](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [accessibilityParent](accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.
- [isAccessibilityFocused](isaccessibilityfocused%28%29.md): Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.
