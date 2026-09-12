> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gaugestyle/accessorylinearcapacity](https://developer.apple.com/documentation/swiftui/gaugestyle/accessorylinearcapacity)

# accessoryLinearCapacity

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A gauge style that displays bar that fills from leading to trailing edges as the gauge’s current value increases.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var accessoryLinearCapacity: AccessoryLinearCapacityGaugeStyle { get }
```

<a id="discussion"></a>

## Discussion

Apply this style to a [Gauge](../gauge.md) or to a view hierarchy that contains gauges using the [gaugeStyle(\_:)](../view/gaugestyle%28__%29.md) modifier:

```swift
Gauge(value: batteryLevel, in: 0...100) {
    Text("Battery Level")
}
.gaugeStyle(.accessoryLinearCapacity)
```

If you provide `minimumValueLabel` and `maximumValueLabel` parameters when you create the gauge, they appear on leading and trailing edges of the bar, respectively. The `label` appears above the gauge, and the `currentValueLabel` appears below.

## See Also

### Getting linear gauge styles

- [linear](linear.md): Conforms when `Self` is `LinearGaugeStyle`. A gauge style that displays a bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
- [linearCapacity](linearcapacity.md): Conforms when `Self` is `LinearCapacityGaugeStyle`. A gauge style that displays a bar that fills from leading to trailing edges as the gauge’s current value increases.
- [accessoryLinear](accessorylinear.md): Conforms when `Self` is `AccessoryLinearGaugeStyle`. A gauge style that displays bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
