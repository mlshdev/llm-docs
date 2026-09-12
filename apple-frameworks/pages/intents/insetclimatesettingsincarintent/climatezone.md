> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/climatezone](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/climatezone)

# climateZone (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The seat position to have its climate settings modified.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var climateZone: INCarSeat { get }
```

<a id="Discussion"></a>

## Discussion

If your climate control system supports different settings for different parts of the car, use this property to determine which zone’s settings you need to adjust. If your vehicle supports only one climate control zone, you can ignore the value in this property.

The value of this property is [INCarSeat.unknown](../incarseat/unknown.md) when the user modified a different climate control setting or didn’t specify a seat position.

## See Also

### Getting the Climate Control Settings

- [enableClimateControl](enableclimatecontrol-4y9iz.md): Deprecated. A Boolean value indicating whether to turn on the climate control system.
- [enableAutoMode](enableautomode-31bzq.md): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [relativeTemperatureSetting](relativetemperaturesetting.md): Deprecated. A relative temperature setting.

# climateZone (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The seat position to have its climate settings modified.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCarSeat climateZone;
```

```objectivec
@property (atomic, assign, readonly) INCarSeat climateZone;
```

<a id="Discussion"></a>

## Discussion

If your climate control system supports different settings for different parts of the car, use this property to determine which zone’s settings you need to adjust. If your vehicle supports only one climate control zone, you can ignore the value in this property.

The value of this property is [INCarSeatUnknown](../incarseat/unknown.md) when the user modified a different climate control setting or didn’t specify a seat position.

## See Also

### Getting the Climate Control Settings

- [enableClimateControl](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableclimatecontrol-tviy): Deprecated. A Boolean value indicating whether to turn on the climate control system.
- [enableAutoMode](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableautomode-6ye2n): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [relativeTemperatureSetting](relativetemperaturesetting.md): Deprecated. A relative temperature setting.
