> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gaugestyleconfiguration](https://developer.apple.com/documentation/swiftui/gaugestyleconfiguration)

# GaugeStyleConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The properties of a gauge instance.

## Declaration

```swift
struct GaugeStyleConfiguration
```

## Topics

### Describing the purpose of the gauge

- [label](gaugestyleconfiguration/label-swift.property.md): A view that describes the purpose of the gauge.
- [GaugeStyleConfiguration.Label](gaugestyleconfiguration/label-swift.struct.md): A type-erased label of a gauge, describing its purpose.

### Reporting the range

- [minimumValueLabel](gaugestyleconfiguration/minimumvaluelabel-swift.property.md): A view that describes the minimum of the range for the current value.
- [GaugeStyleConfiguration.MinimumValueLabel](gaugestyleconfiguration/minimumvaluelabel-swift.struct.md): A type-erased value label of a gauge describing the minimum value.
- [maximumValueLabel](gaugestyleconfiguration/maximumvaluelabel-swift.property.md): A view that describes the maximum of the range for the current value.
- [GaugeStyleConfiguration.MaximumValueLabel](gaugestyleconfiguration/maximumvaluelabel-swift.struct.md): A type-erased value label of a gauge describing the maximum value.

### Setting the value

- [value](gaugestyleconfiguration/value.md): The current value of the gauge.
- [currentValueLabel](gaugestyleconfiguration/currentvaluelabel-swift.property.md): A view that describes the current value.
- [GaugeStyleConfiguration.CurrentValueLabel](gaugestyleconfiguration/currentvaluelabel-swift.struct.md): A type-erased value label of a gauge that contains the current value.
- [GaugeStyleConfiguration.MarkedValueLabel](gaugestyleconfiguration/markedvaluelabel.md): A type-erased label describing a specific value of a gauge.

## See Also

### Styling indicators

- [gaugeStyle(\_:)](view/gaugestyle%28__%29.md): Sets the style for gauges within this view.
- [GaugeStyle](gaugestyle.md): Defines the implementation of all gauge instances within a view hierarchy.
- [progressViewStyle(\_:)](view/progressviewstyle%28__%29.md): Sets the style for progress views in this view.
- [ProgressViewStyle](progressviewstyle.md): A type that applies standard interaction behavior to all progress views within a view hierarchy.
- [ProgressViewStyleConfiguration](progressviewstyleconfiguration.md): The properties of a progress view instance.
