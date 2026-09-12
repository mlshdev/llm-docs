> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/isaccessibilityelement](https://developer.apple.com/documentation/realitykit/entity/isaccessibilityelement)

# isAccessibilityElement

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 26.0+ · visionOS

A Boolean value indicating whether the receiver is an accessibility element that an assistive application can access.

## Declaration

```swift
@MainActor @preconcurrency var isAccessibilityElement: Bool { get set }
```

## Mentioned In

- [Improving the Accessibility of RealityKit Apps](../improving-the-accessibility-of-realitykit-apps.md)

## See Also

### Configuring accessibility features

- [Improving the Accessibility of RealityKit Apps](../improving-the-accessibility-of-realitykit-apps.md): Incorporate assistive technologies in your augmented reality app.
- [accessibilityLabelKey](accessibilitylabelkey.md): A succinct label that identifies the entity, in a localized string key.
- [accessibilityCustomActions](accessibilitycustomactions.md): An array of custom actions supported by the entity, identified by their localized string key.
- [accessibilityCustomContent](accessibilitycustomcontent.md): The Custom Content API is useful for delivering accessibility information from complex data sets to your users in measured portions. Using this API allows you to leverage assistive technologies to present only the accessible content your app’s users need, when they need it.
- [accessibilityCustomRotors](accessibilitycustomrotors.md): An array of supported rotors.
- [accessibilityLabelKey](accessibilitylabelkey.md): A succinct label that identifies the entity, in a localized string key.
- [accessibilitySystemActions](accessibilitysystemactions.md): The set of supported accessibility actions.
- [accessibilityTraits](accessibilitytraits.md): The combination of accessibility traits that best characterize the entity.
- [accessibilityValue](accessibilityvalue.md): A localized string key that represents the current value of the entity.
- [accessibilityDescription](accessibilitydescription.md): Deprecated. A longer description of the entity for use by assistive technologies.
- [accessibilityLabel](accessibilitylabel.md): Deprecated. A succinct label that identifies the purpose of the image.
- [accessibilityDescription](accessibilitydescription.md): Deprecated. A longer description of the entity for use by assistive technologies.
