> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/defaultgaugestyle](https://developer.apple.com/documentation/swiftui/defaultgaugestyle)

# DefaultGaugeStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The default gauge view style in the current context of the view being styled.

## Declaration

```swift
@MainActor @preconcurrency struct DefaultGaugeStyle
```

<a id="overview"></a>

## Overview

You can also use [automatic](gaugestyle/automatic.md) to construct this style.

## Topics

### Creating the gauge style

- [init()](defaultgaugestyle/init%28%29.md): Creates a default gauge style.

## Relationships

### Conforms To

- [GaugeStyle](gaugestyle.md)

## See Also

### Supporting types

- [CircularGaugeStyle](circulargaugestyle.md): A gauge style that displays an open ring with a marker that appears at a point along the ring to indicate the gauge’s current value.
- [AccessoryCircularGaugeStyle](accessorycirculargaugestyle.md): A gauge style that displays an open ring with a marker that appears at a point along the ring to indicate the gauge’s current value.
- [AccessoryCircularCapacityGaugeStyle](accessorycircularcapacitygaugestyle.md): A gauge style that displays a closed ring that’s partially filled in to indicate the gauge’s current value.
- [LinearGaugeStyle](lineargaugestyle.md): A gauge style that displays a bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
- [LinearCapacityGaugeStyle](linearcapacitygaugestyle.md): A gauge style that displays bar that fills from leading to trailing edges as the gauge’s current value increases.
- [AccessoryLinearGaugeStyle](accessorylineargaugestyle.md): A gauge style that displays bar with a marker that appears at a point along the bar to indicate the gauge’s current value.
- [AccessoryLinearCapacityGaugeStyle](accessorylinearcapacitygaugestyle.md): A gauge style that displays bar that fills from leading to trailing edges as the gauge’s current value increases.
