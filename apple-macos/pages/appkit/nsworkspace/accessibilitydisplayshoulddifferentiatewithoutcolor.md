> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/accessibilitydisplayshoulddifferentiatewithoutcolor](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayshoulddifferentiatewithoutcolor)

# accessibilityDisplayShouldDifferentiateWithoutColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the app avoids conveying information through color alone.

## Declaration

```swift
var accessibilityDisplayShouldDifferentiateWithoutColor: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the user interface avoids conveying information using color alone. Instead, use shapes or glyphs to convey important information.

Users can change this setting by choosing System Preferences \> Accessibility \> Display and selecting the “Differentiate without color” option. To receive updates when this setting changes, register for the [accessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [isSwitchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [isVoiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

# accessibilityDisplayShouldDifferentiateWithoutColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the app avoids conveying information through color alone.

## Declaration

```objectivec
@property (readonly) BOOL accessibilityDisplayShouldDifferentiateWithoutColor;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the user interface avoids conveying information using color alone. Instead, use shapes or glyphs to convey important information.

Users can change this setting by choosing System Preferences \> Accessibility \> Display and selecting the “Differentiate without color” option. To receive updates when this setting changes, register for the [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [switchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [voiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.
