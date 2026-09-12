> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:)](https://developer.apple.com/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:))

# init(value:in:label:currentValueLabel:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a gauge showing a value within a range and that describes the gauge’s purpose and current value.

## Declaration

```swift
nonisolated init<V>(value: V, in bounds: ClosedRange<V> = 0...1, @ContentBuilder label: () -> Label, @ContentBuilder currentValueLabel: () -> CurrentValueLabel) where BoundsLabel == EmptyView, MarkedValueLabels == EmptyView, V : BinaryFloatingPoint
```

## Parameters

- `value`: The value to show on the gauge.
- `bounds`: The range of the valid values. Defaults to `0...1`.
- `label`: A view that describes the purpose of the gauge.
- `currentValueLabel`: A view that describes the current value of the gauge.

<a id="discussion"></a>

## Discussion

Use this method to create a gauge that displays a value within a range you supply with labels that describe the purpose of the gauge and its current value. In the example below, a gauge using the [circular](../gaugestyle/circular.md) style shows its current value of `67` along with a label describing the (BPM) for the gauge:

```swift
struct SimpleGauge: View {
    @State private var current = 67.0

    var body: some View {
        Gauge(value: current, in: 0...170) {
            Text("BPM")
        } currentValueLabel: {
            Text("\(current)")
        }
        .gaugeStyle(.circular)
   }
}
```

![A screenshot showing a circular gauge describing heart rate in beats](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Gauge-LabelCurrentValueCircular@2x.png)

## See Also

### Creating a gauge

- [init(value:in:label:)](init%28value_in_label_%29.md): Creates a gauge showing a value within a range and describes the gauge’s purpose and current value.
- [init(value:in:label:currentValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_%29.md): Creates a gauge showing a value within a range and describes the gauge’s current, minimum, and maximum values.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
