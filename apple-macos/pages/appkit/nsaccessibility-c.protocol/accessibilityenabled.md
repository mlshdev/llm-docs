> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityenabled](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityenabled)

# accessibilityEnabled

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the accessibility element responds to user events.

## Declaration

```objectivec
@property (getter=isAccessibilityEnabled) BOOL accessibilityEnabled;
```

<a id="Discussion"></a>

## Discussion

Returns YES if the element is enabled; otherwise, NO. Enabled elements respond to user events.

## See Also

### Configuring accessibility

- [isAccessibilitySelectorAllowed:](../nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.
- [accessibilityElement](accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityFrame](accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityHelp](accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityLabel](accessibilitylabel.md): A short description of the accessibility element.
- [accessibilityTitle](accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
- [accessibilityValue](accessibilityvalue.md): The accessibility element’s value.
