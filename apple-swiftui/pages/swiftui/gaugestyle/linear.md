> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gaugestyle/linear](https://developer.apple.com/documentation/swiftui/gaugestyle/linear)

# linear

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 7.0+

A gauge style that displays a bar with a marker that appears at a point along the bar to indicate the gauge’s current value.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var linear: LinearGaugeStyle { get }
```

<a id="discussion"></a>

## Discussion

Apply this style to a [Gauge](../gauge.md) or to a view hierarchy that contains gauges using the [gaugeStyle(\_:)](../view/gaugestyle%28__%29.md) modifier:

```swift
Gauge(value: batteryLevel, in: 0...100) {
    Text("Battery Level")
}
.gaugeStyle(.linear)
```

If you provide `minimumValueLabel` and `maximumValueLabel` parameters when you create the gauge, they appear on leading and trailing edges of the bar, respectively. Otherwise, the gauge displays the `currentValueLabel` value on the leading edge.

## See Also

### Getting linear gauge styles

- [linearCapacity](linearcapacity.md): Conforms when `Self` is `LinearCapacityGaugeStyle`. A gauge style that displays a bar that fills from leading to trailing edges as the gauge’s current value increases.
- [accessoryLinear](accessorylinear.md): Conforms when `Self` is `AccessoryLinearGaugeStyle`. A gauge style that displays bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
- [accessoryLinearCapacity](accessorylinearcapacity.md): Conforms when `Self` is `AccessoryLinearCapacityGaugeStyle`. A gauge style that displays bar that fills from leading to trailing edges as the gauge’s current value increases.
