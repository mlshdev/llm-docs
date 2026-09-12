> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityquickactionstyle/prompt](https://developer.apple.com/documentation/swiftui/accessibilityquickactionstyle/prompt)

# prompt

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 9.0+

A presentation style that displays a prompt to the user when the accessibility quick action is active.

## Declaration

```swift
@export(implementation) static var prompt: AccessibilityQuickActionPromptStyle { get }
```

<a id="discussion"></a>

## Discussion

The following example shows how to add an [accessibilityQuickAction(style:content:)](../view/accessibilityquickaction%28style_content_%29.md) to pause and resume a workout.

```swift
@State private var isPaused = false

var body: some View {
    WorkoutView(isPaused: $isPaused)
        .accessibilityQuickAction(style: .prompt) {
            Button(isPaused ? "Resume" : "Pause") {
                isPaused.toggle()
            }
        }
}
```

## See Also

### Getting built-in menu styles

- [outline](outline.md): Conforms when `Self` is `AccessibilityQuickActionOutlineStyle`. A presentation style that animates an outline around the view when the accessibility quick action is active.
