> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:)](https://developer.apple.com/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:minimumvaluelabel:maximumvaluelabel:))

# init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a gauge showing a value within a range and describes the gauge’s current, minimum, and maximum values.

## Declaration

```swift
nonisolated init<V>(value: V, in bounds: ClosedRange<V> = 0...1, @ContentBuilder label: () -> Label, @ContentBuilder currentValueLabel: () -> CurrentValueLabel, @ContentBuilder minimumValueLabel: () -> BoundsLabel, @ContentBuilder maximumValueLabel: () -> BoundsLabel) where MarkedValueLabels == EmptyView, V : BinaryFloatingPoint
```

## Parameters

- `value`: The value to show on the gauge.
- `bounds`: The range of the valid values. Defaults to `0...1`.
- `label`: A view that describes the purpose of the gauge.
- `currentValueLabel`: A view that describes the current value of the gauge.
- `minimumValueLabel`: A view that describes the lower bounds of the gauge.
- `maximumValueLabel`: A view that describes the upper bounds of the gauge.

<a id="discussion"></a>

## Discussion

Use this method to create a gauge that shows a value within a prescribed bounds. The gauge has labels that describe its purpose, and for the gauge’s current, minimum, and maximum values.

```swift
struct LabeledGauge: View {
    @State private var current = 67.0
    @State private var minValue = 0.0
    @State private var maxValue = 170.0

    var body: some View {
        Gauge(value: current, in: minValue...maxValue) {
            Text("BPM")
        } currentValueLabel: {
            Text("\(Int(current))")
        } minimumValueLabel: {
            Text("\(Int(minValue))")
        } maximumValueLabel: {
            Text("\(Int(maxValue))")
        }
    }
}
```

![A screenshot of a gauge, labeled BPM, that’s represented by a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Gauge-LabeledCircular@2x.png)

## See Also

### Creating a gauge

- [init(value:in:label:)](init%28value_in_label_%29.md): Creates a gauge showing a value within a range and describes the gauge’s purpose and current value.
- [init(value:in:label:currentValueLabel:)](init%28value_in_label_currentvaluelabel_%29.md): Creates a gauge showing a value within a range and that describes the gauge’s purpose and current value.
- [init(value:in:label:currentValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
