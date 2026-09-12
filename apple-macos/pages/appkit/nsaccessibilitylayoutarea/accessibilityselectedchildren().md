> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitylayoutarea/accessibilityselectedchildren()](https://developer.apple.com/documentation/appkit/nsaccessibilitylayoutarea/accessibilityselectedchildren())

# accessibilitySelectedChildren() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout area’s currently selected children.

## Declaration

```swift
func accessibilitySelectedChildren() -> [Any]?
```

<a id="return-value"></a>

## Return Value

An array containing the currently selected children. If no children are selected, this method returns an empty array.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilitySelectedChildren](../nsaccessibility-c.protocol/accessibilityselectedchildren.md) property.

## See Also

### Supporting Accessibility

- [accessibilityChildren()](accessibilitychildren%28%29.md): Returns the accessibility element’s children in the accessibility hierarchy.
- [accessibilityFocusedUIElement](accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the layout area.

# accessibilitySelectedChildren (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the layout area’s currently selected children.

## Declaration

```objectivec
- (NSArray *) accessibilitySelectedChildren;
```

<a id="return-value"></a>

## Return Value

An array containing the currently selected children. If no children are selected, this method returns an empty array.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilitySelectedChildren](../nsaccessibility-c.protocol/accessibilityselectedchildren.md) property.

## See Also

### Supporting Accessibility

- [accessibilityChildren](accessibilitychildren%28%29.md): Returns the accessibility element’s children in the accessibility hierarchy.
- [accessibilityFocusedUIElement](accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the layout area.
