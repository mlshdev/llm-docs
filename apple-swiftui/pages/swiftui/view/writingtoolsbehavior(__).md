> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/writingtoolsbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/writingtoolsbehavior(_:))

# writingToolsBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.4+

Specifies the Writing Tools behavior for text and text input in the environment.

## Declaration

```swift
nonisolated func writingToolsBehavior(_ behavior: WritingToolsBehavior) -> some View

```

## Parameters

- `behavior`: The Writing Tools behavior for text and text input in the environment.

<a id="return-value"></a>

## Return Value

A view preferring the specified Writing Tools behavior.

<a id="discussion"></a>

## Discussion

Use this view modifier to customize or disable the Writing Tools editing experience for [Text](../text.md) (when selectable), [TextField](../textfield.md), and [TextEditor](../texteditor.md) views.

## See Also

### Configuring the Writing Tools behavior

- [WritingToolsBehavior](../writingtoolsbehavior.md): The Writing Tools editing experience for text and text input.
- [writingToolsAffordanceVisibility(\_:)](writingtoolsaffordancevisibility%28__%29.md): Specifies whether the system should show the Writing Tools affordance for text input views affected by the environment.
