> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimplegaugeprovider/fillfraction](https://developer.apple.com/documentation/clockkit/clksimplegaugeprovider/fillfraction)

# fillFraction (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The value displayed by the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var fillFraction: Float { get }
```

<a id="Discussion"></a>

## Discussion

Contains a value between `0.0` and `1.0`, or `CLKSimpleGaugeProviderFillFractionEmpty` for an empty gauge.

# fillFraction (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The value displayed by the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, assign, readonly) float fillFraction;
```

<a id="Discussion"></a>

## Discussion

Contains a value between `0.0` and `1.0`, or `CLKSimpleGaugeProviderFillFractionEmpty` for an empty gauge.
