> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sensoryfeedback(_:trigger:)](https://developer.apple.com/documentation/swiftui/view/sensoryfeedback(_:trigger:))

# sensoryFeedback(\_:trigger:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Plays the specified `feedback` when the provided `trigger` value changes.

## Declaration

```swift
nonisolated func sensoryFeedback<T>(_ feedback: SensoryFeedback, trigger: T) -> some View where T : Equatable

```

## Parameters

- `feedback`: Which type of feedback to play.
- `trigger`: A value to monitor for changes to determine when to play.

<a id="discussion"></a>

## Discussion

For example, you could play feedback when a state value changes:

```swift
struct MyView: View {
    @State private var showAccessory = false

    var body: some View {
        ContentView()
            .sensoryFeedback(.selection, trigger: showAccessory)
            .onLongPressGesture {
                showAccessory.toggle()
            }

        if showAccessory {
            AccessoryView()
        }
    }
}
```

## See Also

### Providing haptic feedback

- [sensoryFeedback(trigger:\_:)](sensoryfeedback%28trigger___%29.md): Plays feedback when returned from the `feedback` closure after the provided `trigger` value changes.
- [sensoryFeedback(\_:trigger:condition:)](sensoryfeedback%28__trigger_condition_%29.md): Plays the specified `feedback` when the provided `trigger` value changes and the `condition` closure returns `true`.
- [SensoryFeedback](../sensoryfeedback.md): Represents a type of haptic and/or audio feedback that can be played.
