> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/gaugestyle(_:)](https://developer.apple.com/documentation/swiftui/view/gaugestyle(_:))

# gaugeStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the style for gauges within this view.

## Declaration

```swift
nonisolated func gaugeStyle<S>(_ style: S) -> some View where S : GaugeStyle

```

## See Also

### Indicating a value

- [Gauge](../gauge.md): A view that shows a value within a range.
- [ProgressView](../progressview.md): A view that shows the progress toward completion of a task.
- [progressViewStyle(\_:)](progressviewstyle%28__%29.md): Sets the style for progress views in this view.
- [DefaultDateProgressLabel](../defaultdateprogresslabel.md): The default type of the current value label when used by a date-relative progress view.
- [DefaultButtonLabel](../defaultbuttonlabel.md): The default label to use for a button.
