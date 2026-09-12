> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintent/frequency-2ctw6](https://developer.apple.com/documentation/intents/insetradiostationintent/frequency-2ctw6)

# frequency

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

The broadcast frequency of the radio station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var frequency: Double? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a floating-point number indicating the frequency for AM or FM stations. For example, the value might be 88.5 for an FM station or 660.0 for an AM station.

## See Also

### Getting Details About the Radio Station to Set

- [radioType](radiotype.md): Deprecated. The type of radio tuner to use.
- [stationName](stationname.md): Deprecated. The name associated with the radio station.
- [channel](channel.md): Deprecated. The channel number of the station.
- [presetNumber](presetnumber-2dub4.md): Deprecated. The programmable preset assigned to the station.
