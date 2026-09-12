> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimplegaugeproviderfillfractionempty](https://developer.apple.com/documentation/clockkit/clksimplegaugeproviderfillfractionempty)

# CLKSimpleGaugeProviderFillFractionEmpty (Swift)

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A fill value indicating an empty gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
let CLKSimpleGaugeProviderFillFractionEmpty: Float
```

<a id="Discussion"></a>

## Discussion

For [CLKGaugeProviderStyle.ring](clkgaugeproviderstyle/ring.md) style gauges, the [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md) value hides the ring, while setting a `0.0` fill value still shows the ring.

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.

# CLKSimpleGaugeProviderFillFractionEmpty (Objective-C)

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A fill value indicating an empty gauge.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
extern const float CLKSimpleGaugeProviderFillFractionEmpty;
```

<a id="Discussion"></a>

## Discussion

For [CLKGaugeProviderStyleRing](clkgaugeproviderstyle/ring.md) style gauges, the [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md) value hides the ring, while setting a `0.0` fill value still shows the ring.

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.
