> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/circulargaugestyle](https://developer.apple.com/documentation/swiftui/circulargaugestyle)

# CircularGaugeStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 7.0+

A gauge style that displays an open ring with a marker that appears at a point along the ring to indicate the gauge’s current value.

## Declaration

```swift
nonisolated struct CircularGaugeStyle
```

<a id="overview"></a>

## Overview

Use [circular](gaugestyle/circular.md) to construct this style.

## Topics

### Creating the gauge style

- [init()](circulargaugestyle/init%28%29.md): Creates a circular gauge.
- [init(tint:)](circulargaugestyle/init%28tint_%29.md): Creates a circular gauge that draws with a specified color.

## Relationships

### Conforms To

- [GaugeStyle](gaugestyle.md)

## See Also

### Supporting types

- [DefaultGaugeStyle](defaultgaugestyle.md): The default gauge view style in the current context of the view being styled.
- [AccessoryCircularGaugeStyle](accessorycirculargaugestyle.md): A gauge style that displays an open ring with a marker that appears at a point along the ring to indicate the gauge’s current value.
- [AccessoryCircularCapacityGaugeStyle](accessorycircularcapacitygaugestyle.md): A gauge style that displays a closed ring that’s partially filled in to indicate the gauge’s current value.
- [LinearGaugeStyle](lineargaugestyle.md): A gauge style that displays a bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
- [LinearCapacityGaugeStyle](linearcapacitygaugestyle.md): A gauge style that displays bar that fills from leading to trailing edges as the gauge’s current value increases.
- [AccessoryLinearGaugeStyle](accessorylineargaugestyle.md): A gauge style that displays bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
- [AccessoryLinearCapacityGaugeStyle](accessorylinearcapacitygaugestyle.md): A gauge style that displays bar that fills from leading to trailing edges as the gauge’s current value increases.
