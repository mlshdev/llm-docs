> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitydirecttouchoptions](https://developer.apple.com/documentation/swiftui/accessibilitydirecttouchoptions)

# AccessibilityDirectTouchOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An option set that defines the functionality of a view’s direct touch area.

## Declaration

```swift
struct AccessibilityDirectTouchOptions
```

## Topics

### Getting the options

- [requiresActivation](accessibilitydirecttouchoptions/requiresactivation.md): Prevents touch passthrough with the direct touch area until an assistive technology, such as VoiceOver, has activated the direct touch area through a user action, for example a double tap.
- [silentOnTouch](accessibilitydirecttouchoptions/silentontouch.md): Allows a direct touch area to immediately receive touch events without an assitive technology, such as VoiceOver, speaking. Appropriate for apps that provide direct audio feedback on touch that would conflict with speech feedback.

### Creating a set of options

- [init(rawValue:)](accessibilitydirecttouchoptions/init%28rawvalue_%29.md): Create a set of direct touch options

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Making gestures accessible

- [accessibilityActivationPoint(\_:)](view/accessibilityactivationpoint%28__%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityActivationPoint(\_:isEnabled:)](view/accessibilityactivationpoint%28__isenabled_%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityDragPoint(\_:description:)](view/accessibilitydragpoint%28__description_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDragPoint(\_:description:isEnabled:)](view/accessibilitydragpoint%28__description_isenabled_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDropPoint(\_:description:)](view/accessibilitydroppoint%28__description_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDropPoint(\_:description:isEnabled:)](view/accessibilitydroppoint%28__description_isenabled_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDirectTouch(\_:options:)](view/accessibilitydirecttouch%28__options_%29.md): Explicitly set whether this accessibility element is a direct touch area. Direct touch areas passthrough touch events to the app rather than being handled through an assistive technology, such as VoiceOver. The modifier accepts an optional `AccessibilityDirectTouchOptions` option set to customize the functionality of the direct touch area.
- [accessibilityZoomAction(\_:)](view/accessibilityzoomaction%28__%29.md): Adds an accessibility zoom action to the view. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action.
- [AccessibilityZoomGestureAction](accessibilityzoomgestureaction.md): Position and direction information of a zoom gesture that someone performs with an assistive technology like VoiceOver.
