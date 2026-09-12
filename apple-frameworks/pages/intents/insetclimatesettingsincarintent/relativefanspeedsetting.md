> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/relativefanspeedsetting](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/relativefanspeedsetting)

# relativeFanSpeedSetting (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A relative fan speed setting.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var relativeFanSpeedSetting: INRelativeSetting { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the fan speed to the next or previous setting. The value of this property is [INRelativeSetting.unknown](../inrelativesetting/unknown.md) when the user modified a different climate control setting.

## See Also

### Getting the Fan Settings

- [enableFan](enablefan-5srs9.md): Deprecated. A Boolean value indicating whether to turn on the cabin fan system.
- [fanSpeedIndex](fanspeedindex-wz49.md): Deprecated. An integer value indicating the desired fan speed position.
- [fanSpeedPercentage](fanspeedpercentage-7i2hq.md): Deprecated. A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.

# relativeFanSpeedSetting (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A relative fan speed setting.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INRelativeSetting relativeFanSpeedSetting;
```

```objectivec
@property (atomic, assign, readonly) INRelativeSetting relativeFanSpeedSetting;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the fan speed to the next or previous setting. The value of this property is [INRelativeSettingUnknown](../inrelativesetting/unknown.md) when the user modified a different climate control setting.

## See Also

### Getting the Fan Settings

- [enableFan](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enablefan-3bu9e): Deprecated. A Boolean value indicating whether to turn on the cabin fan system.
- [fanSpeedIndex](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedindex-4c1rr): Deprecated. An integer value indicating the desired fan speed position.
- [fanSpeedPercentage](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/fanspeedpercentage-ep0u): Deprecated. A floating-point value indicating the requested fan speed specified as a percentage of the maximum speed.
