> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintent/relativelevelsetting](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/relativelevelsetting)

# relativeLevelSetting (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A relative change to the level value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var relativeLevelSetting: INRelativeSetting { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the heating, cooling, or massage level to the next or previous setting. The value of this property is [INRelativeSetting.unknown](../inrelativesetting/unknown.md) when the user modified the [level](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/level-5i2i) directly.

The intent object contains a value for this property or the [level](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/level-5i2i) property, but not both.

## See Also

### Getting the New Settings

- [enableCooling](enablecooling-8qqx3.md): Deprecated. A Boolean value indicating whether to enable the seat cooling system.
- [enableHeating](enableheating-8auz2.md): Deprecated. A Boolean value indicating whether to enable the seat heating system.
- [enableMassage](enablemassage-46ndx.md): Deprecated. A Boolean value indicating whether to enable the seat massage system.
- [level](level-94975.md): Deprecated. An integer value indicating the desired level for the seat setting.

# relativeLevelSetting (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A relative change to the level value.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INRelativeSetting relativeLevelSetting;
```

```objectivec
@property (atomic, assign, readonly) INRelativeSetting relativeLevelSetting;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the heating, cooling, or massage level to the next or previous setting. The value of this property is [INRelativeSettingUnknown](../inrelativesetting/unknown.md) when the user modified the [level](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/level-5i2i) directly.

The intent object contains a value for this property or the [level](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/level-5i2i) property, but not both.

## See Also

### Getting the New Settings

- [enableCooling](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enablecooling-6bcu7): Deprecated. A Boolean value indicating whether to enable the seat cooling system.
- [enableHeating](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enableheating-5qj7i): Deprecated. A Boolean value indicating whether to enable the seat heating system.
- [enableMassage](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enablemassage-5jf2s): Deprecated. A Boolean value indicating whether to enable the seat massage system.
- [level](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/level-5i2i): Deprecated. An integer value indicating the desired level for the seat setting.
