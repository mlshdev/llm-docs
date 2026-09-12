> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityquickactionstyle/outline](https://developer.apple.com/documentation/swiftui/accessibilityquickactionstyle/outline)

# outline

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 9.0+

A presentation style that animates an outline around the view when the accessibility quick action is active.

## Declaration

```swift
@export(implementation) static var outline: AccessibilityQuickActionOutlineStyle { get }
```

<a id="discussion"></a>

## Discussion

Use the [contentShape(\_:\_:eoFill:)](../view/contentshape%28____eofill_%29.md) modifier to provide a shape for [focusEffect](../contentshapekinds/focuseffect.md) if necessary.

The following example shows how to add an [accessibilityQuickAction(style:content:)](../view/accessibilityquickaction%28style_content_%29.md) to play and pause music.

```swift
@State private var isPlaying = false

var body: some View {
    PlayButton(isPlaying: $isPlaying)
        .contentShape(.focusEffect, Circle())
        .accessibilityQuickAction(style: .outline) {
            Button(isPlaying ? "Pause" : "Play") {
                isPlaying.toggle()
            }
        }
}
```

## See Also

### Getting built-in menu styles

- [prompt](prompt.md): Conforms when `Self` is `AccessibilityQuickActionPromptStyle`. A presentation style that displays a prompt to the user when the accessibility quick action is active.
