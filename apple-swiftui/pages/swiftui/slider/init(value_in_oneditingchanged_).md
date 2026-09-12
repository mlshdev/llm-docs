> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slider/init(value:in:oneditingchanged:)](https://developer.apple.com/documentation/swiftui/slider/init(value:in:oneditingchanged:))

# init(value:in:onEditingChanged:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Creates a slider to select a value from a given range.

## Declaration

```swift
nonisolated init<V>(value: Binding<V>, in bounds: ClosedRange<V> = 0...1, onEditingChanged: @escaping (Bool) -> Void = { _ in }) where V : BinaryFloatingPoint, V.Stride : BinaryFloatingPoint
```

## Parameters

- `value`: The selected value within `bounds`.
- `bounds`: The range of the valid values. Defaults to `0...1`.
- `onEditingChanged`: A callback for when editing begins and ends.

<a id="discussion"></a>

## Discussion

The `value` of the created instance is equal to the position of the given value within `bounds`, mapped into `0...1`.

The slider calls `onEditingChanged` when editing begins and ends. For example, on iOS, editing begins when the user starts to drag the thumb along the slider’s track.

## See Also

### Creating a slider

- [init(value:in:step:onEditingChanged:)](init%28value_in_step_oneditingchanged_%29.md): Conforms when `Label` is `EmptyView` and `ValueLabel` is `EmptyView`. Creates a slider to select a value from a given range, subject to a step increment.
