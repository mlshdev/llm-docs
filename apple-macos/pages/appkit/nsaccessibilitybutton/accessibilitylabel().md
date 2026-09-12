> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitybutton/accessibilitylabel()](https://developer.apple.com/documentation/appkit/nsaccessibilitybutton/accessibilitylabel())

# accessibilityLabel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a short description of the button.

## Declaration

```swift
func accessibilityLabel() -> String?
```

<a id="return-value"></a>

## Return Value

The description of this button.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md) property.

Do not include the accessibility element’s type in the label (for example, write `Play` not `Play button`.). If possible, use a single word. To help ensure that accessibility clients like VoiceOver read the label with the correct intonation, this label should start with a capital letter. Do not put a period at the end. Always localize the label.

## See Also

### Supporting Accessibility

- [accessibilityPerformPress()](accessibilityperformpress%28%29.md): Simulates clicking the button.

# accessibilityLabel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a short description of the button.

## Declaration

```objectivec
- (NSString *) accessibilityLabel;
```

<a id="return-value"></a>

## Return Value

The description of this button.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md) property.

Do not include the accessibility element’s type in the label (for example, write `Play` not `Play button`.). If possible, use a single word. To help ensure that accessibility clients like VoiceOver read the label with the correct intonation, this label should start with a capital letter. Do not put a period at the end. Always localize the label.

## See Also

### Related Documentation

- [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md): A short description of the accessibility element.

### Supporting Accessibility

- [accessibilityPerformPress](accessibilityperformpress%28%29.md): Simulates clicking the button.
