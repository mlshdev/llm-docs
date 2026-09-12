> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:markedvaluelabels:)](https://developer.apple.com/documentation/swiftui/gauge/init(value:in:label:currentvaluelabel:markedvaluelabels:))

# init(value:in:label:currentValueLabel:markedValueLabels:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a gauge representing a value within a range.

## Declaration

```swift
nonisolated init<V>(value: V, in bounds: ClosedRange<V> = 0...1, @ContentBuilder label: () -> Label, @ContentBuilder currentValueLabel: () -> CurrentValueLabel, @ContentBuilder markedValueLabels: () -> MarkedValueLabels) where BoundsLabel == EmptyView, V : BinaryFloatingPoint
```

## Parameters

- `value`: The value to show in the instance.
- `bounds`: The range of the valid values. Defaults to `0...1`.
- `label`: A view that describes the purpose of the gauge.
- `currentValueLabel`: A view that describes the current value of the gauge.
- `markedValueLabels`: A content builder containing tagged views, each of which describes a particular value of the gauge. The method ignores this parameter.

## See Also

### Creating a gauge

- [init(value:in:label:)](init%28value_in_label_%29.md): Creates a gauge showing a value within a range and describes the gauge’s purpose and current value.
- [init(value:in:label:currentValueLabel:)](init%28value_in_label_currentvaluelabel_%29.md): Creates a gauge showing a value within a range and that describes the gauge’s purpose and current value.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_%29.md): Creates a gauge showing a value within a range and describes the gauge’s current, minimum, and maximum values.
- [init(value:in:label:currentValueLabel:minimumValueLabel:maximumValueLabel:markedValueLabels:)](init%28value_in_label_currentvaluelabel_minimumvaluelabel_maximumvaluelabel_markedvaluelabels_%29.md): Creates a gauge representing a value within a range.
