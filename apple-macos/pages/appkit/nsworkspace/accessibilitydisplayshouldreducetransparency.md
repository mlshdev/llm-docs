> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/accessibilitydisplayshouldreducetransparency](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayshouldreducetransparency)

# accessibilityDisplayShouldReduceTransparency (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the app avoids using semitransparent backgrounds.

## Declaration

```swift
var accessibilityDisplayShouldReduceTransparency: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), don’t use semitransparent backgrounds in the user interface. For example, use only opaque windows.

Users can change this setting by choosing System Preferences \> Accessibility \> Display and selecting the “Reduce transparency” option. To receive updates when this setting changes, register to the [accessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [isSwitchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [isVoiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

# accessibilityDisplayShouldReduceTransparency (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the app avoids using semitransparent backgrounds.

## Declaration

```objectivec
@property (readonly) BOOL accessibilityDisplayShouldReduceTransparency;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), don’t use semitransparent backgrounds in the user interface. For example, use only opaque windows.

Users can change this setting by choosing System Preferences \> Accessibility \> Display and selecting the “Reduce transparency” option. To receive updates when this setting changes, register to the [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [switchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [voiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.
