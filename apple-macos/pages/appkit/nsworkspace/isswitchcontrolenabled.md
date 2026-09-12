> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/isswitchcontrolenabled](https://developer.apple.com/documentation/appkit/nsworkspace/isswitchcontrolenabled)

# isSwitchControlEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that indicates whether Switch Control is currently running.

## Declaration

```swift
var isSwitchControlEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You can observe this property with key-value observing.

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [isVoiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

# switchControlEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that indicates whether Switch Control is currently running.

## Declaration

```objectivec
@property (readonly, getter=isSwitchControlEnabled) BOOL switchControlEnabled;
```

<a id="Discussion"></a>

## Discussion

You can observe this property with key-value observing.

## See Also

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [voiceOverEnabled](isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.
