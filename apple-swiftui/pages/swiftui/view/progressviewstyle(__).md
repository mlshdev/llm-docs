> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/progressviewstyle(_:)](https://developer.apple.com/documentation/swiftui/view/progressviewstyle(_:))

# progressViewStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the style for progress views in this view.

## Declaration

```swift
nonisolated func progressViewStyle<S>(_ style: S) -> some View where S : ProgressViewStyle

```

## Parameters

- `style`: The progress view style to use for this view.

<a id="discussion"></a>

## Discussion

For example, the following code creates a progress view that uses the “circular” style:

```swift
ProgressView()
    .progressViewStyle(.circular)
```

## See Also

### Indicating a value

- [Gauge](../gauge.md): A view that shows a value within a range.
- [gaugeStyle(\_:)](gaugestyle%28__%29.md): Sets the style for gauges within this view.
- [ProgressView](../progressview.md): A view that shows the progress toward completion of a task.
- [DefaultDateProgressLabel](../defaultdateprogresslabel.md): The default type of the current value label when used by a date-relative progress view.
- [DefaultButtonLabel](../defaultbuttonlabel.md): The default label to use for a button.
