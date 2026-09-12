> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sensoryfeedback(trigger:_:)](https://developer.apple.com/documentation/swiftui/view/sensoryfeedback(trigger:_:))

# sensoryFeedback(trigger:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Plays feedback when returned from the `feedback` closure after the provided `trigger` value changes.

## Declaration

```swift
@export(implementation) nonisolated func sensoryFeedback<T>(trigger: T, _ feedback: @escaping () -> SensoryFeedback?) -> some View where T : Equatable

```

## Parameters

- `trigger`: A value to monitor for changes to determine when to play.
- `feedback`: A closure to determine whether to play the feedback and what type of feedback to play when `trigger` changes.

<a id="discussion"></a>

## Discussion

For example, you could play different feedback for different state transitions:

```swift
struct MyView: View {
    @State private var isExpanded = false

    var body: some View {
        ContentView(isExpanded: $isExpanded)
            .sensoryFeedback(trigger: isExpanded) {
                isExpanded ? .impact : nil
            }
    }
}
```

When the value changes, the new version of the closure will be called, so any captured values will have their values from the time that the observed value has its new value.

## See Also

### Providing haptic feedback

- [sensoryFeedback(\_:trigger:)](sensoryfeedback%28__trigger_%29.md): Plays the specified `feedback` when the provided `trigger` value changes.
- [sensoryFeedback(\_:trigger:condition:)](sensoryfeedback%28__trigger_condition_%29.md): Plays the specified `feedback` when the provided `trigger` value changes and the `condition` closure returns `true`.
- [SensoryFeedback](../sensoryfeedback.md): Represents a type of haptic and/or audio feedback that can be played.
