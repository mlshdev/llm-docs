> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/fanspeedindex-wz49](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedindex-wz49)

# fanSpeedIndex

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

An integer value indicating the desired fan speed position.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var fanSpeedIndex: Int? { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property maps to the manual fan speed control in your vehicle. For example, the value 1 corresponds to the first position of the fan speed knob, the value 2 corresponds to the second position of the fan speed knob, and so on. Use this property to set the fan speed to the specific level requested by the user.

This property is `nil` when the user modified a different climate control setting.

## See Also

### Getting the Fan Settings

- [enableFan](enablefan-5srs9.md): Deprecated. A Boolean value indicating whether to turn on the cabin fan system.
- [fanSpeedPercentage](fanspeedpercentage-7i2hq.md): Deprecated. A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.
- [relativeFanSpeedSetting](relativefanspeedsetting.md): Deprecated. A relative fan speed setting.
