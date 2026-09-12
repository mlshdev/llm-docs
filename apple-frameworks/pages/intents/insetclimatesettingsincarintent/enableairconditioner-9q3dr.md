> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/enableairconditioner-9q3dr](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/enableairconditioner-9q3dr)

# enableAirConditioner

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

A Boolean value indicating whether to turn on the air conditioner system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var enableAirConditioner: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when the user modified a different climate control setting.
