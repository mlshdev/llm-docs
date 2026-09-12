> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityquickaction(style:isactive:content:)](https://developer.apple.com/documentation/swiftui/view/accessibilityquickaction(style:isactive:content:))

# accessibilityQuickAction(style:isActive:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

Adds a quick action to be shown by the system when active.

## Declaration

```swift
nonisolated func accessibilityQuickAction<Style, Content>(style: Style, isActive: Binding<Bool>, @ContentBuilder content: () -> Content) -> some View where Style : AccessibilityQuickActionStyle, Content : View

```

<a id="discussion"></a>

## Discussion

The following example shows how to add a quick action to pause and resume a workout, with the [prompt](../accessibilityquickactionstyle/prompt.md) style.

```swift
@State private var isPaused = false
@State private var isQuickActionActive = false

var body: some View {
    WorkoutView(isPaused: $isPaused)
        .accessibilityQuickAction(style: .prompt, isActive: $isQuickActionActive) {
            Button(isPaused ? "Resume" : "Pause") {
                isPaused.toggle()
            }
        }
}
```

The following example shows how to add a quick action to play and pause music, with the [outline](../accessibilityquickactionstyle/outline.md) style.

```swift
@State private var isPlaying = false
@State private var isQuickActionActive = false

var body: some View {
    PlayButton(isPlaying: $isPlaying)
        .contentShape(.focusEffect, Circle())
        .accessibilityQuickAction(style: .outline, isActive: $isQuickActionActive) {
            Button(isPlaying ? "Pause" : "Play") {
                isPlaying.toggle()
            }
        }
}
```

## See Also

### Offering Quick Actions to people

- [accessibilityQuickAction(style:content:)](accessibilityquickaction%28style_content_%29.md): Adds a quick action to be shown by the system when active.
- [AccessibilityQuickActionStyle](../accessibilityquickactionstyle.md): A type that describes the presentation style of an accessibility quick action.
