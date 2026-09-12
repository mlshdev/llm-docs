> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/fanspeedpercentage-7i2hq](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedpercentage-7i2hq)

# fanSpeedPercentage

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var fanSpeedPercentage: Double? { get }
```

<a id="Discussion"></a>

## Discussion

Convert the value in this property to an appropriate fan speed setting in your vehicle. For example, if the user asks to set the fan speed to 50%, select a fan speed halfway between the minimum and maximum values.

This property is `nil` when the user modified a different climate control setting.

## See Also

### Getting the Fan Settings

- [enableFan](enablefan-5srs9.md): Deprecated. A Boolean value indicating whether to turn on the cabin fan system.
- [fanSpeedIndex](fanspeedindex-wz49.md): Deprecated. An integer value indicating the desired fan speed position.
- [relativeFanSpeedSetting](relativefanspeedsetting.md): Deprecated. A relative fan speed setting.
