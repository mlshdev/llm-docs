> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitydirecttouch(_:options:)](https://developer.apple.com/documentation/swiftui/view/accessibilitydirecttouch(_:options:))

# accessibilityDirectTouch(\_:options:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Explicitly set whether this accessibility element is a direct touch area. Direct touch areas passthrough touch events to the app rather than being handled through an assistive technology, such as VoiceOver. The modifier accepts an optional `AccessibilityDirectTouchOptions` option set to customize the functionality of the direct touch area.

## Declaration

```swift
nonisolated func accessibilityDirectTouch(_ isDirectTouchArea: Bool = true, options: AccessibilityDirectTouchOptions = []) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

<a id="discussion"></a>

## Discussion

For example, this is how a direct touch area would allow a VoiceOver user to interact with a view with a `rotationEffect` controlled by a `RotationGesture`. The direct touch area would require a user to activate the area before using the direct touch area.

```swift
var body: some View {
    Rectangle()
        .frame(width: 200, height: 200, alignment: .center)
        .rotationEffect(angle)
        .gesture(rotation)
        .accessibilityDirectTouch(options: .requiresActivation)
}
```

## See Also

### Making gestures accessible

- [accessibilityActivationPoint(\_:)](accessibilityactivationpoint%28__%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityActivationPoint(\_:isEnabled:)](accessibilityactivationpoint%28__isenabled_%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityDragPoint(\_:description:)](accessibilitydragpoint%28__description_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDragPoint(\_:description:isEnabled:)](accessibilitydragpoint%28__description_isenabled_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDropPoint(\_:description:)](accessibilitydroppoint%28__description_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDropPoint(\_:description:isEnabled:)](accessibilitydroppoint%28__description_isenabled_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityZoomAction(\_:)](accessibilityzoomaction%28__%29.md): Adds an accessibility zoom action to the view. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action.
- [AccessibilityDirectTouchOptions](../accessibilitydirecttouchoptions.md): An option set that defines the functionality of a view’s direct touch area.
- [AccessibilityZoomGestureAction](../accessibilityzoomgestureaction.md): Position and direction information of a zoom gesture that someone performs with an assistive technology like VoiceOver.
