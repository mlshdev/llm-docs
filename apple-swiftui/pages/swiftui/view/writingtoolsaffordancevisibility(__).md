> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/writingtoolsaffordancevisibility(_:)](https://developer.apple.com/documentation/swiftui/view/writingtoolsaffordancevisibility(_:))

# writingToolsAffordanceVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Specifies whether the system should show the Writing Tools affordance for text input views affected by the environment.

## Declaration

```swift
nonisolated func writingToolsAffordanceVisibility(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: Whether the affordance may be shown for text input views.

<a id="return-value"></a>

## Return Value

A view with the specified Writing Tools affordance visibility.

<a id="discussion"></a>

## Discussion

Use this view modifier to disable the Writing Tools affordance for [TextField](../textfield.md) views when running on macOS or Mac Catalyst.

## See Also

### Configuring the Writing Tools behavior

- [writingToolsBehavior(\_:)](writingtoolsbehavior%28__%29.md): Specifies the Writing Tools behavior for text and text input in the environment.
- [WritingToolsBehavior](../writingtoolsbehavior.md): The Writing Tools editing experience for text and text input.
