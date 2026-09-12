> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sensoryfeedback(_:trigger:condition:)](https://developer.apple.com/documentation/swiftui/view/sensoryfeedback(_:trigger:condition:))

# sensoryFeedback(\_:trigger:condition:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Plays the specified `feedback` when the provided `trigger` value changes and the `condition` closure returns `true`.

## Declaration

```swift
nonisolated func sensoryFeedback<T>(_ feedback: SensoryFeedback, trigger: T, condition: @escaping (T, T) -> Bool) -> some View where T : Equatable

```

## Parameters

- `feedback`: Which type of feedback to play.
- `trigger`: A value to monitor for changes to determine when to play.
- `condition`: A closure to determine whether to play the feedback when `trigger` changes.

<a id="discussion"></a>

## Discussion

For example, you could play feedback for certain state transitions:

```swift
struct MyView: View {
    @State private var phase = Phase.inactive

    var body: some View {
        ContentView(phase: $phase)
            .sensoryFeedback(.selection, trigger: phase) { old, new in
                old == .inactive || new == .expanded
            }
    }

    enum Phase {
        case inactive
        case preparing
        case active
        case expanded
    }
}
```

When the value changes, the new version of the closure will be called, so any captured values will have their values from the time that the observed value has its new value.

## See Also

### Providing haptic feedback

- [sensoryFeedback(\_:trigger:)](sensoryfeedback%28__trigger_%29.md): Plays the specified `feedback` when the provided `trigger` value changes.
- [sensoryFeedback(trigger:\_:)](sensoryfeedback%28trigger___%29.md): Plays feedback when returned from the `feedback` closure after the provided `trigger` value changes.
- [SensoryFeedback](../sensoryfeedback.md): Represents a type of haptic and/or audio feedback that can be played.
