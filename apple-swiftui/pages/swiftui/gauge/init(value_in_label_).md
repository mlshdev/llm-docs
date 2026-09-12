> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gauge/init(value:in:label:)](https://developer.apple.com/documentation/swiftui/gauge/init(value:in:label:))

# init(value:in:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a gauge showing a value within a range and describes the gauge’s purpose and current value.

## Declaration

```swift
nonisolated init<V>(value: V, in bounds: ClosedRange<V> = 0...1, @ContentBuilder label: () -> Label) where CurrentValueLabel == EmptyView, BoundsLabel == EmptyView, MarkedValueLabels == EmptyView, V : BinaryFloatingPoint
```

## Parameters

- `value`: The value to show in the gauge.
- `bounds`: The range of the valid values. Defaults to `0...1`.
- `label`: A view that describes the purpose of the gauge.

<a id="discussion"></a>

## Discussion

Use this modifier to create a gauge that shows the value at its relative position along the gauge and a label describing the gauge’s purpose. In the example below, the gauge has a range of `0...1`, the indicator is set to `0.4`, or 40 percent of the distance along the gauge:

```swift
struct SimpleGauge: View {
    @State private var batteryLevel = 0.4

    var body: some View {
        Gauge(value: batteryLevel) {
            Text("Battery Level")
        }
    }
}
```

![A linear gauge that shows an indicator at 40 percent along the length](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Gauge-ValueLabelLinear@2x.png)

## See Also

### Creating a gauge

- [init(value:in:label:currentValueLabel:)](init%28value_in_label_currentvaluelabel_%29.md): Creates a gauge showing a value within a range and that describes the gauge’s purpose and current value.
- [init(value:in:label:currentValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_%29.md): Creates a gauge showing a value within a range and describes the gauge’s current, minimum, and maximum values.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
