> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitydragpoint(_:description:)](https://developer.apple.com/documentation/swiftui/view/accessibilitydragpoint(_:description:))

# accessibilityDragPoint(\_:description:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The point an assistive technology should use to begin a drag interaction.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityDragPoint(_ point: UnitPoint, description: LocalizedStringResource) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

<a id="discussion"></a>

## Discussion

Use this modifier when you need to provide a description to users when prompted begin a drag interaction.

```swift
struct FileView: View {
    var filename: String

    var body: some View {
        FileIcon(filename: filename)
            .accessibilityDragPoint(.center, description: "Move \(filename)")
    }
}
```

By default, if an accessible view or its subtree has drag and/or drop interactions, they will be automatically exposed by assistive technologies. However, if there is more than one such interaction, each drag or drop should have a description to disambiguate it and give a good user experience.

> **Note**

> An accessibility element can have multiple points for a drag, provided they have different descriptions.

## See Also

### Making gestures accessible

- [accessibilityActivationPoint(\_:)](accessibilityactivationpoint%28__%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityActivationPoint(\_:isEnabled:)](accessibilityactivationpoint%28__isenabled_%29.md): The activation point for an element is the location assistive technologies use to initiate gestures.
- [accessibilityDragPoint(\_:description:isEnabled:)](accessibilitydragpoint%28__description_isenabled_%29.md): The point an assistive technology should use to begin a drag interaction.
- [accessibilityDropPoint(\_:description:)](accessibilitydroppoint%28__description_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDropPoint(\_:description:isEnabled:)](accessibilitydroppoint%28__description_isenabled_%29.md): The point an assistive technology should use to end a drag interaction.
- [accessibilityDirectTouch(\_:options:)](accessibilitydirecttouch%28__options_%29.md): Explicitly set whether this accessibility element is a direct touch area. Direct touch areas passthrough touch events to the app rather than being handled through an assistive technology, such as VoiceOver. The modifier accepts an optional `AccessibilityDirectTouchOptions` option set to customize the functionality of the direct touch area.
- [accessibilityZoomAction(\_:)](accessibilityzoomaction%28__%29.md): Adds an accessibility zoom action to the view. Actions allow assistive technologies, such as VoiceOver, to interact with the view by invoking the action.
- [AccessibilityDirectTouchOptions](../accessibilitydirecttouchoptions.md): An option set that defines the functionality of a view’s direct touch area.
- [AccessibilityZoomGestureAction](../accessibilityzoomgestureaction.md): Position and direction information of a zoom gesture that someone performs with an assistive technology like VoiceOver.
