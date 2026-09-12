> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/enableclimatecontrol-4y9iz](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableclimatecontrol-4y9iz)

# enableClimateControl

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

A Boolean value indicating whether to turn on the climate control system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var enableClimateControl: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the user modified a different climate control setting.

## See Also

### Getting the Climate Control Settings

- [enableAutoMode](enableautomode-31bzq.md): Deprecated. A Boolean value indicating whether to enable automatic mode for the climate control system.
- [airCirculationMode](aircirculationmode.md): Deprecated. The air circulation mode for the climate control system.
- [temperature](temperature.md): Deprecated. The specific temperature to set for the climate control system.
- [relativeTemperatureSetting](relativetemperaturesetting.md): Deprecated. A relative temperature setting.
- [climateZone](climatezone.md): Deprecated. The seat position to have its climate settings modified.
