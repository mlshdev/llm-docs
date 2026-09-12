> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/improving-the-accessibility-of-realitykit-apps](https://developer.apple.com/documentation/realitykit/improving-the-accessibility-of-realitykit-apps)

# Improving the Accessibility of RealityKit Apps

**Framework:** RealityKit  
**Kind:** Article

Incorporate assistive technologies in your augmented reality app.

<a id="Overview"></a>

## Overview

To support assistive technologies such as VoiceOver in your RealityKit apps, set the properties on each visible [Entity](entity.md) in your scene. You can configure accessibility in Reality Composer, and in code.

> **Note**

> To see an example of accessibility support in a RealityKit app, check out the \<doc:[Configuring Collision in RealityKit](configuring-collision-in-realitykit.md)\> sample code project.

<a id="Configure-accessibility-in-Reality-Composer"></a>

### Configure accessibility in Reality Composer

When you create a scene in Reality Composer, you can configure the accessibility properties of your entities right in the properties inspector. Select one or more entities in your scene and click the Accessibility Enabled checkbox in the properties inspector. In the Label field, give the entity a name to be used by assistive technologies. In the Detailed Description field, you can optionally add a more in-depth description.

![The accessibility portion of Reality Composer’s property inspector, showing the Accessibility Enabled checkbox checked, with two additional fields for providing accessibility information about the selected entity.](https://developer.apple.com/images/com.apple.RealityKit/improving-the-accessibility-of-realitykit-apps-1@2x.png)

<a id="Configure-accessibility-in-code"></a>

### Configure accessibility in code

You can also configure entities to work with assistive technologies in code. To enable accessibility support for an [Entity](entity.md), set its  [isAccessibilityElement](entity/isaccessibilityelement.md) property to `True` and provide a short descriptive name using [accessibilityLabel](entity/accessibilitylabel.md). If you want to provide a more detailed description, set [accessibilityDescription](entity/accessibilitydescription.md).

Because these properties were introduced in iOS 14, any code that sets or reads their values should be wrapped in an availability macro if your project’s deployment target is iOS 13. Setting these values on an older version of iOS results in a runtime exception.

```swift
if #available(iOS 14.0, *) {
    ball.isAccessibilityElement = true
    ball.accessibilityLabel = "a bowling ball"
    ball.accessibilityDescription = "Tap and drag to roll the ball towards the pins."
}
```

## See Also

### Related Documentation

- [Configuring Collision in RealityKit](configuring-collision-in-realitykit.md): Use collision groups and collision filters to control which objects collide.

### Configuring accessibility features

- [isAccessibilityElement](entity/isaccessibilityelement.md): A Boolean value indicating whether the receiver is an accessibility element that an assistive application can access.
- [accessibilityLabelKey](entity/accessibilitylabelkey.md): A succinct label that identifies the entity, in a localized string key.
- [accessibilityCustomActions](entity/accessibilitycustomactions.md): An array of custom actions supported by the entity, identified by their localized string key.
- [accessibilityCustomContent](entity/accessibilitycustomcontent.md): The Custom Content API is useful for delivering accessibility information from complex data sets to your users in measured portions. Using this API allows you to leverage assistive technologies to present only the accessible content your app’s users need, when they need it.
- [accessibilityCustomRotors](entity/accessibilitycustomrotors.md): An array of supported rotors.
- [accessibilityLabelKey](entity/accessibilitylabelkey.md): A succinct label that identifies the entity, in a localized string key.
- [accessibilitySystemActions](entity/accessibilitysystemactions.md): The set of supported accessibility actions.
- [accessibilityTraits](entity/accessibilitytraits.md): The combination of accessibility traits that best characterize the entity.
- [accessibilityValue](entity/accessibilityvalue.md): A localized string key that represents the current value of the entity.
- [accessibilityDescription](entity/accessibilitydescription.md): Deprecated. A longer description of the entity for use by assistive technologies.
- [accessibilityLabel](entity/accessibilitylabel.md): Deprecated. A succinct label that identifies the purpose of the image.
- [accessibilityDescription](entity/accessibilitydescription.md): Deprecated. A longer description of the entity for use by assistive technologies.
