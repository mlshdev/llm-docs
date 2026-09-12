> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/accessibilitydisplayshouldincreasecontrast](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayshouldincreasecontrast)

# accessibilityDisplayShouldIncreaseContrast (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the app presents a high-contrast user interface.

## Declaration

```swift
var accessibilityDisplayShouldIncreaseContrast: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this method returns [true](https://developer.apple.com/documentation/swift/true), present a high-contrast UI. For example, use a less subtle color palette or bolder lines.

Users can change this setting by choosing System Preferences \> Accessibility \> Display and selecting the “Increase contrast” option. To receive updates when this setting changes, register for the [accessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [isSwitchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [isVoiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

# accessibilityDisplayShouldIncreaseContrast (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the app presents a high-contrast user interface.

## Declaration

```objectivec
@property (readonly) BOOL accessibilityDisplayShouldIncreaseContrast;
```

<a id="Discussion"></a>

## Discussion

When this method returns [true](https://developer.apple.com/documentation/swift/true), present a high-contrast UI. For example, use a less subtle color palette or bolder lines.

Users can change this setting by choosing System Preferences \> Accessibility \> Display and selecting the “Increase contrast” option. To receive updates when this setting changes, register for the [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [switchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [voiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.
