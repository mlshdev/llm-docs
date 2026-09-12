> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitylayoutarea/accessibilitylabel()](https://developer.apple.com/documentation/appkit/nsaccessibilitylayoutarea/accessibilitylabel())

# accessibilityLabel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a short description of the layout area.

## Declaration

```swift
func accessibilityLabel() -> String
```

<a id="return-value"></a>

## Return Value

The description of the layout area.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md) property.

Do not include the control’s type in the label (for example, use `Canvas`, not `Canvas Layout Area`). If possible use a single word. To help ensure that accessibility clients such as VoiceOver read the label with the correct intonation, start this label with a capital letter. Do not put a period at the end. Always localize the label.

## See Also

### Supporting Accessibility

- [accessibilityChildren()](accessibilitychildren%28%29.md): Returns the accessibility element’s children in the accessibility hierarchy.
- [accessibilityFocusedUIElement](accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilitySelectedChildren()](accessibilityselectedchildren%28%29.md): Returns the layout area’s currently selected children.

# accessibilityLabel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a short description of the layout area.

## Declaration

```objectivec
- (NSString *) accessibilityLabel;
```

<a id="return-value"></a>

## Return Value

The description of the layout area.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md) property.

Do not include the control’s type in the label (for example, use `Canvas`, not `Canvas Layout Area`). If possible use a single word. To help ensure that accessibility clients such as VoiceOver read the label with the correct intonation, start this label with a capital letter. Do not put a period at the end. Always localize the label.

## See Also

### Related Documentation

- [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md): A short description of the accessibility element.

### Supporting Accessibility

- [accessibilityChildren](accessibilitychildren%28%29.md): Returns the accessibility element’s children in the accessibility hierarchy.
- [accessibilityFocusedUIElement](accessibilityfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilitySelectedChildren](accessibilityselectedchildren%28%29.md): Returns the layout area’s currently selected children.
