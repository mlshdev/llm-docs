> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressviewstyleconfiguration](https://developer.apple.com/documentation/swiftui/progressviewstyleconfiguration)

# ProgressViewStyleConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The properties of a progress view instance.

## Declaration

```swift
struct ProgressViewStyleConfiguration
```

## Topics

### Configuring the label

- [label](progressviewstyleconfiguration/label-swift.property.md): A view that describes the task represented by the progress view.
- [ProgressViewStyleConfiguration.Label](progressviewstyleconfiguration/label-swift.struct.md): A type-erased label describing the task represented by the progress view.

### Configuring the current value label

- [currentValueLabel](progressviewstyleconfiguration/currentvaluelabel-swift.property.md): A view that describes the current value of a progress view.
- [ProgressViewStyleConfiguration.CurrentValueLabel](progressviewstyleconfiguration/currentvaluelabel-swift.struct.md): A type-erased label that describes the current value of a progress view.

### Configuring progress completion

- [fractionCompleted](progressviewstyleconfiguration/fractioncompleted.md): The completed fraction of the task represented by the progress view, from `0.0` (not yet started) to `1.0` (fully complete), or `nil` if the progress is indeterminate or relative to a date interval.

## See Also

### Styling indicators

- [gaugeStyle(\_:)](view/gaugestyle%28__%29.md): Sets the style for gauges within this view.
- [GaugeStyle](gaugestyle.md): Defines the implementation of all gauge instances within a view hierarchy.
- [GaugeStyleConfiguration](gaugestyleconfiguration.md): The properties of a gauge instance.
- [progressViewStyle(\_:)](view/progressviewstyle%28__%29.md): Sets the style for progress views in this view.
- [ProgressViewStyle](progressviewstyle.md): A type that applies standard interaction behavior to all progress views within a view hierarchy.
