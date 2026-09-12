> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityelementprotocol/accessibilityframe()](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol/accessibilityframe())

# accessibilityFrame() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s frame in screen coordinates.

## Declaration

```swift
func accessibilityFrame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The element’s frame in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityFrame](../nsaccessibility-c.protocol/accessibilityframe.md) property. This method is called whenever accessibility clients request the [size](../nsaccessibility-swift.struct/attribute/size.md) or [position](../nsaccessibility-swift.struct/attribute/position.md) attributes.

> **Note**

>  If you are working with an [NSAccessibilityElement](../nsaccessibilityelement-swift.class.md) subclass, use the [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md) property instead. The [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md) property ensures that accessibility element objects move when their parents move.

## See Also

### Supporting Accessibility

- [accessibilityIdentifier()](accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [accessibilityParent()](accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.
- [isAccessibilityFocused()](isaccessibilityfocused%28%29.md): Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.

# accessibilityFrame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the accessibility element’s frame in screen coordinates.

## Declaration

```objectivec
- (NSRect) accessibilityFrame;
```

<a id="return-value"></a>

## Return Value

The element’s frame in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityFrame](../nsaccessibility-c.protocol/accessibilityframe.md) property. This method is called whenever accessibility clients request the [NSAccessibilitySizeAttribute](../nsaccessibility-swift.struct/attribute/size.md) or [NSAccessibilityPositionAttribute](../nsaccessibility-swift.struct/attribute/position.md) attributes.

> **Note**

>  If you are working with an [NSAccessibilityElement](../nsaccessibilityelement-swift.class.md) subclass, use the [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md) property instead. The [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md) property ensures that accessibility element objects move when their parents move.

## See Also

### Related Documentation

- [accessibilityFrame](../nsaccessibility-c.protocol/accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityFrameInParentSpace](../nsaccessibilityelement-swift.class/accessibilityframeinparentspace.md): The accessibility element’s frame in its parent’s coordinate system.

### Supporting Accessibility

- [accessibilityIdentifier](accessibilityidentifier%28%29.md): Returns the accessibility element’s identity.
- [accessibilityParent](accessibilityparent%28%29.md): Returns the accessibility element’s parent in the accessibility hierarchy.
- [isAccessibilityFocused](isaccessibilityfocused%28%29.md): Returns a Boolean value that indicates whether the accessibility element has the keyboard focus.
