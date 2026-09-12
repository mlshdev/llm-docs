> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/accessibilitydisplayshouldreducemotion](https://developer.apple.com/documentation/appkit/nsworkspace/accessibilitydisplayshouldreducemotion)

# accessibilityDisplayShouldReduceMotion (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.

## Declaration

```swift
var accessibilityDisplayShouldReduceMotion: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), avoid large animations, especially those that simulate the third dimension. To receive updates when this setting changes, register for the [accessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [isSwitchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [isVoiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

# accessibilityDisplayShouldReduceMotion (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.

## Declaration

```objectivec
@property (readonly) BOOL accessibilityDisplayShouldReduceMotion;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), avoid large animations, especially those that simulate the third dimension. To receive updates when this setting changes, register for the [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](accessibilitydisplayoptionsdidchangenotification.md) notification using [notificationCenter](notificationcenter.md).

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [switchControlEnabled](isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [voiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.
