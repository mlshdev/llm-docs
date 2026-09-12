> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slider/init(value:in:label:oneditingchanged:)](https://developer.apple.com/documentation/swiftui/slider/init(value:in:label:oneditingchanged:))

# init(value:in:label:onEditingChanged:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Creates a slider to select a value from a given range, which displays the provided label.

## Declaration

```swift
@export(implementation) nonisolated init<V>(value: Binding<V>, in bounds: ClosedRange<V> = 0...1, @ContentBuilder label: () -> Label, onEditingChanged: @escaping (Bool) -> Void = { _ in }) where V : BinaryFloatingPoint, V.Stride : BinaryFloatingPoint
```

## Parameters

- `value`: The selected value within `bounds`.
- `bounds`: The range of the valid values. Defaults to `0...1`.
- `label`: A `View` that describes the purpose of the instance. Not all slider styles show the label, but even in those cases, SwiftUI uses the label for accessibility. For example, VoiceOver uses the label to identify the purpose of the slider.
- `onEditingChanged`: A callback for when editing begins and ends.

<a id="discussion"></a>

## Discussion

The `value` of the created instance is equal to the position of the given value within `bounds`, mapped into `0...1`.

The slider calls `onEditingChanged` when editing begins and ends. For example, on iOS, editing begins when the user starts to drag the thumb along the slider’s track.

## See Also

### Creating a slider with labels

- [init(value:in:step:label:onEditingChanged:)](init%28value_in_step_label_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided label.
- [init(value:in:label:minimumValueLabel:maximumValueLabel:onEditingChanged:)](init%28value_in_label_minimumvaluelabel_maximumvaluelabel_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, which displays the provided labels.
- [init(value:in:step:label:minimumValueLabel:maximumValueLabel:onEditingChanged:)](init%28value_in_step_label_minimumvaluelabel_maximumvaluelabel_oneditingchanged_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a slider to select a value from a given range, subject to a step increment, which displays the provided labels.
