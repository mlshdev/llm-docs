> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintent/stationname](https://developer.apple.com/documentation/intents/insetradiostationintent/stationname)

# stationName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The name associated with the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var stationName: String? { get }
```

<a id="Discussion"></a>

## Discussion

For stations that are identifiable by name, this property contains that name. If the user doesn’t provide other identifying information, use the station name to look up the appropriate channel or frequency information.

## See Also

### Getting Details About the Radio Station to Set

- [radioType](radiotype.md): Deprecated. The type of radio tuner to use.
- [frequency](frequency-2ctw6.md): Deprecated. The broadcast frequency of the radio station.
- [channel](channel.md): Deprecated. The channel number of the station.
- [presetNumber](presetnumber-2dub4.md): Deprecated. The programmable preset assigned to the station.

# stationName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The name associated with the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * stationName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * stationName;
```

<a id="Discussion"></a>

## Discussion

For stations that are identifiable by name, this property contains that name. If the user doesn’t provide other identifying information, use the station name to look up the appropriate channel or frequency information.

## See Also

### Getting Details About the Radio Station to Set

- [radioType](radiotype.md): Deprecated. The type of radio tuner to use.
- [frequency](https://developer.apple.com/documentation/intents/insetradiostationintent/frequency-63rbb): Deprecated. The broadcast frequency of the radio station.
- [channel](channel.md): Deprecated. The channel number of the station.
- [presetNumber](https://developer.apple.com/documentation/intents/insetradiostationintent/presetnumber-20pv7): Deprecated. The programmable preset assigned to the station.
