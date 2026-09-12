> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkgaugeprovider](https://developer.apple.com/documentation/clockkit/clkgaugeprovider)

# CLKGaugeProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

An abstract superclass that provides all the common behaviors for the gauge providers.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKGaugeProvider
```

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. Instead, create instances of the concrete subclasses based on the type of gauge you’re trying to create.

## Topics

### Setting the Gauge’s Appearance

- [gaugeColors](clkgaugeprovider/gaugecolors.md): Deprecated. The colors of the gauge.
- [gaugeColorLocations](clkgaugeprovider/gaugecolorlocations.md): Deprecated. The location of each color in a multicolor gauge’s gradient.
- [style](clkgaugeprovider/style.md): Deprecated. The style that defines the gauge’s appearance.

### Adding Accessibility

- [accessibilityLabel](clkgaugeprovider/accessibilitylabel.md): Deprecated. A localized string that describes the gague.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md)
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.

# CLKGaugeProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

An abstract superclass that provides all the common behaviors for the gauge providers.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKGaugeProvider : NSObject
```

<a id="overview"></a>

## Overview

Don’t create instances of this class yourself. Instead, create instances of the concrete subclasses based on the type of gauge you’re trying to create.

## Topics

### Setting the Gauge’s Appearance

- [gaugeColors](clkgaugeprovider/gaugecolors.md): Deprecated. The colors of the gauge.
- [gaugeColorLocations](clkgaugeprovider/gaugecolorlocations.md): Deprecated. The location of each color in a multicolor gauge’s gradient.
- [style](clkgaugeprovider/style.md): Deprecated. The style that defines the gauge’s appearance.

### Adding Accessibility

- [accessibilityLabel](clkgaugeprovider/accessibilitylabel.md): Deprecated. A localized string that describes the gague.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md)
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Gauge providers

- [CLKSimpleGaugeProvider](clksimplegaugeprovider.md): Deprecated. A gauge that shows a fractional value.
- [CLKTimeIntervalGaugeProvider](clktimeintervalgaugeprovider.md): Deprecated. A gauge that tracks time intervals.
- [CLKSimpleGaugeProviderFillFractionEmpty](clksimplegaugeproviderfillfractionempty.md): Deprecated. A fill value indicating an empty gauge.
- [CLKGaugeProviderStyle](clkgaugeproviderstyle.md): Deprecated. Visual styles available for gauges.
