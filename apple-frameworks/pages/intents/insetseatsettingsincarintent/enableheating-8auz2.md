> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintent/enableheating-8auz2](https://developer.apple.com/documentation/intents/insetseatsettingsincarintent/enableheating-8auz2)

# enableHeating

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

A Boolean value indicating whether to enable the seat heating system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var enableHeating: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the user modifies the cooling or massage settings.

## See Also

### Getting the New Settings

- [enableCooling](enablecooling-8qqx3.md): Deprecated. A Boolean value indicating whether to enable the seat cooling system.
- [enableMassage](enablemassage-46ndx.md): Deprecated. A Boolean value indicating whether to enable the seat massage system.
- [level](level-94975.md): Deprecated. An integer value indicating the desired level for the seat setting.
- [relativeLevelSetting](relativelevelsetting.md): Deprecated. A relative change to the level value.
