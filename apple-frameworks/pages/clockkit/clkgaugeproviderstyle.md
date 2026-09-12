> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkgaugeproviderstyle](https://developer.apple.com/documentation/clockkit/clkgaugeproviderstyle)

# CLKGaugeProviderStyle (Swift)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Visual styles available for gauges.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
enum CLKGaugeProviderStyle
```

## Topics

### Styles

- [CLKGaugeProviderStyle.fill](clkgaugeproviderstyle/fill.md): Deprecated. A gauge that fills in as the value increases.
- [CLKGaugeProviderStyle.ring](clkgaugeproviderstyle/ring.md): Deprecated. A gauge that indicates a value with a sliding ring.

### Initializers

- [init(rawValue:)](clkgaugeproviderstyle/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.

# CLKGaugeProviderStyle (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

Visual styles available for gauges.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
enum CLKGaugeProviderStyle : NSInteger;
```

## Topics

### Styles

- [CLKGaugeProviderStyleFill](clkgaugeproviderstyle/fill.md): Deprecated. A gauge that fills in as the value increases.
- [CLKGaugeProviderStyleRing](clkgaugeproviderstyle/ring.md): Deprecated. A gauge that indicates a value with a sliding ring.

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKGaugeProvider](clkgaugeprovider.md): Deprecated. An abstract superclass that provides all the common behaviors for the gauge providers.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
