> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitylabel](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitylabel)

# accessibilityLabel

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A short description of the accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSString * accessibilityLabel;
```

<a id="Discussion"></a>

## Discussion

Do not include the accessibility element’s type in the label (for example, write `Play`, not `Play button`.). If possible, use a single word. To help ensure that accessibility clients such as VoiceOver read the label with the correct intonation, start this label with a capital letter. Do not put a period at the end. Always localize the label.

## See Also

### Related Documentation

- [accessibilityRoleDescription](accessibilityroledescription.md): A localized, human-intelligible description of the accessibility element’s role, such as *radio button*.

### Configuring accessibility

- [isAccessibilitySelectorAllowed:](../nsaccessibilityprotocol/isaccessibilityselectorallowed%28__%29.md): Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.
- [accessibilityElement](accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityEnabled](accessibilityenabled.md): A Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame](accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityHelp](accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityTitle](accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
- [accessibilityValue](accessibilityvalue.md): The accessibility element’s value.
