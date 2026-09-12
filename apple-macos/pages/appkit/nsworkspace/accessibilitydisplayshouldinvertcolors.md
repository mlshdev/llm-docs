> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/accessibilitydisplayshouldinvertcolors](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayshouldinvertcolors)

# accessibilityDisplayShouldInvertColors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.

## Declaration

```swift
var accessibilityDisplayShouldInvertColors: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the system inverts the display. In this case, you may need to adjust your app’s drawing for optimal display.  To receive updates when this setting changes, register for the [accessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [isSwitchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [isVoiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

# accessibilityDisplayShouldInvertColors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.

## Declaration

```objectivec
@property (readonly) BOOL accessibilityDisplayShouldInvertColors;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the system inverts the display. In this case, you may need to adjust your app’s drawing for optimal display.  To receive updates when this setting changes, register for the [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [switchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [voiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.
