> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityvalue](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityvalue)

# accessibilityValue

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The accessibility element’s value.

## Declaration

```objectivec
@property (strong, nullable) id accessibilityValue;
```

<a id="Discussion"></a>

## Discussion

The accessibility protocols for roles that support values typically redefine this property to take a more specific value type. For example, the [NSAccessibilityStaticTextRole](../nsaccessibility-swift.struct/role/statictext.md) protocol uses [NSString](https://developer.apple.com/documentation/foundation/nsstring) values, and the [NSAccessibilityProgressIndicatorRole](../nsaccessibility-swift.struct/role/progressindicator.md) protocol uses [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) values.

## See Also

### Configuring accessibility

- [isAccessibilitySelectorAllowed:](../nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.
- [accessibilityElement](accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityEnabled](accessibilityenabled.md): A Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame](accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityHelp](accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityLabel](accessibilitylabel.md): A short description of the accessibility element.
- [accessibilityTitle](accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
