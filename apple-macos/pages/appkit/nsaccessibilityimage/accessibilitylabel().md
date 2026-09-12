> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityimage/accessibilitylabel()](https://developer.apple.com/documentation/appkit/nsaccessibilityimage/accessibilitylabel())

# accessibilityLabel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a short description of the image’s label.

## Declaration

```swift
func accessibilityLabel() -> String?
```

<a id="return-value"></a>

## Return Value

The description of the images label.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md) property.

Do not include the accessibility element’s type in the label (for example, write `Play`, not `Play button`.). If possible, use a single word. To help ensure that accessibility clients such as VoiceOver read the label with the correct intonation, start this label with a capital letter. Do not put a period at the end. Always localize the label.

# accessibilityLabel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a short description of the image’s label.

## Declaration

```objectivec
- (NSString *) accessibilityLabel;
```

<a id="return-value"></a>

## Return Value

The description of the images label.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md) property.

Do not include the accessibility element’s type in the label (for example, write `Play`, not `Play button`.). If possible, use a single word. To help ensure that accessibility clients such as VoiceOver read the label with the correct intonation, start this label with a capital letter. Do not put a period at the end. Always localize the label.

## See Also

### Related Documentation

- [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md): A short description of the accessibility element.
