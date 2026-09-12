> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/enablefan-5srs9](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enablefan-5srs9)

# enableFan

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

A Boolean value indicating whether to turn on the cabin fan system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var enableFan: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

Enabling the fan typically disengages the automated climate control systems and causes the vehicle to enter a manual mode. Check the [fanSpeedIndex](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedindex-4c1rr), [fanSpeedPercentage](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedpercentage-ep0u), or [relativeFanSpeedSetting](relativefanspeedsetting.md) properties to determine whether the user specified a speed for the fan.

This property is `nil` when the user modified a different climate control setting.

## See Also

### Getting the Fan Settings

- [fanSpeedIndex](fanspeedindex-wz49.md): Deprecated. An integer value indicating the desired fan speed position.
- [fanSpeedPercentage](fanspeedpercentage-7i2hq.md): Deprecated. A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.
- [relativeFanSpeedSetting](relativefanspeedsetting.md): Deprecated. A relative fan speed setting.
