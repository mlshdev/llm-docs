> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/accessibilitypreferscrossfadetransitions](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilitypreferscrossfadetransitions)

# accessibilityPrefersCrossFadeTransitions

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

A Boolean value that indicates whether the Reduce Motion and the Prefer Cross-Fade Transitions settings are in an enabled state.

## Declaration

```swift
var accessibilityPrefersCrossFadeTransitions: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this property’s value is true, UI should avoid Slide animations and prefer Cross-Fade transitions instead

On macOS, this value returns solely whether the Reduce Motion setting is in an enabled state. On watchOS, this value always returns false.

## See Also

### Accessibility

- [accessibilityAssistiveAccessEnabled](accessibilityassistiveaccessenabled.md): A Boolean value that indicates whether Assistive Access is in use.
- [accessibilityDimFlashingLights](accessibilitydimflashinglights.md): Whether the setting to reduce flashing or strobing lights in video content is on. This setting can also be used to determine if UI in playback controls should be shown to indicate upcoming content that includes flashing or strobing lights.
- [accessibilityDifferentiateWithoutColor](accessibilitydifferentiatewithoutcolor.md): Whether the system preference for Differentiate without Color is enabled.
- [accessibilityEnabled](accessibilityenabled.md): A Boolean value that indicates whether the user has enabled an assistive technology.
- [accessibilityInvertColors](accessibilityinvertcolors.md): Whether the system preference for Invert Colors is enabled.
- [accessibilityLargeContentViewerEnabled](accessibilitylargecontentviewerenabled.md): Whether the Large Content Viewer is enabled.
- [accessibilityPlayAnimatedImages](accessibilityplayanimatedimages.md): Whether the setting for playing animations in an animated image is on. When this value is false, any presented image that contains animation should not play automatically.
- [accessibilityPrefersHeadAnchorAlternative](accessibilityprefersheadanchoralternative.md): Whether the system setting to prefer alternatives to head-anchored content is on.
- [accessibilityQuickActionsEnabled](accessibilityquickactionsenabled.md): A Boolean that indicates whether the quick actions feature is enabled.
- [accessibilityReduceMotion](accessibilityreducemotion.md): Whether the system preference for Reduce Motion is enabled.
- [accessibilityReduceTransparency](accessibilityreducetransparency.md): Whether the system preference for Reduce Transparency is enabled.
- [accessibilityShowButtonShapes](accessibilityshowbuttonshapes.md): Deprecated. Whether the system preference for Show Button Shapes is enabled.
- [accessibilitySwitchControlEnabled](accessibilityswitchcontrolenabled.md): A Boolean value that indicates whether the Switch Control motor accessibility feature is in use.
- [accessibilityVoiceOverEnabled](accessibilityvoiceoverenabled.md): A Boolean value that indicates whether the VoiceOver screen reader is in use.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
