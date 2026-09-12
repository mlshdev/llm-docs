> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/relativetemperaturesetting](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/relativetemperaturesetting)

# relativeTemperatureSetting (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A relative temperature setting.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var relativeTemperatureSetting: INRelativeSetting { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the temperature up or down based relative to its current position. When adjusting temperatures up or down to the next setting, you define the number of degrees to add or subtract from the current setting. The value of this property is [INRelativeSetting.unknown](../inrelativesetting/unknown.md) when the user modified a different climate control setting.

## See Also

### Getting the Climate Control Settings

- [enableClimateControl](enableclimatecontrol-4y9iz.md): Deprecated. A Boolean value indicating whether to turn on the climate control system.
- [enableAutoMode](enableautomode-31bzq.md): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [climateZone](climatezone.md): Deprecated. The seat position to have its climate settings modified.

# relativeTemperatureSetting (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A relative temperature setting.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INRelativeSetting relativeTemperatureSetting;
```

```objectivec
@property (atomic, assign, readonly) INRelativeSetting relativeTemperatureSetting;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the temperature up or down based relative to its current position. When adjusting temperatures up or down to the next setting, you define the number of degrees to add or subtract from the current setting. The value of this property is [INRelativeSettingUnknown](../inrelativesetting/unknown.md) when the user modified a different climate control setting.

## See Also

### Getting the Climate Control Settings

- [enableClimateControl](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableclimatecontrol-tviy): Deprecated. A Boolean value indicating whether to turn on the climate control system.
- [enableAutoMode](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableautomode-6ye2n): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [climateZone](climatezone.md): Deprecated. The seat position to have its climate settings modified.
