> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintent/channel](https://developer.apple.com/documentation/intents/insetradiostationintent/channel)

# channel (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The channel number of the station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var channel: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the channel number (if any) you can use to locate the radio station. You use this property to identify satellite radio stations or any radio station with a unique integer identifier in your system.

When the [presetNumber](https://developer.apple.com/documentation/intents/insetradiostationintent/presetnumber-20pv7) property contains a valid value, this property is `nil`.

## See Also

### Getting Details About the Radio Station to Set

- [radioType](radiotype.md): Deprecated. The type of radio tuner to use.
- [frequency](frequency-2ctw6.md): Deprecated. The broadcast frequency of the radio station.
- [stationName](stationname.md): Deprecated. The name associated with the radio station.
- [presetNumber](presetnumber-2dub4.md): Deprecated. The programmable preset assigned to the station.

# channel (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The channel number of the station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * channel;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * channel;
```

<a id="Discussion"></a>

## Discussion

This property contains the channel number (if any) you can use to locate the radio station. You use this property to identify satellite radio stations or any radio station with a unique integer identifier in your system.

When the [presetNumber](https://developer.apple.com/documentation/intents/insetradiostationintent/presetnumber-20pv7) property contains a valid value, this property is `nil`.

## See Also

### Getting Details About the Radio Station to Set

- [radioType](radiotype.md): Deprecated. The type of radio tuner to use.
- [frequency](https://developer.apple.com/documentation/intents/insetradiostationintent/frequency-63rbb): Deprecated. The broadcast frequency of the radio station.
- [stationName](stationname.md): Deprecated. The name associated with the radio station.
- [presetNumber](https://developer.apple.com/documentation/intents/insetradiostationintent/presetnumber-20pv7): Deprecated. The programmable preset assigned to the station.
