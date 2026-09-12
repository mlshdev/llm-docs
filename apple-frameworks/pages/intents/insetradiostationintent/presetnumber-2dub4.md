> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetradiostationintent/presetnumber-2dub4](https://developer.apple.com/documentation/intents/insetradiostationintent/presetnumber-2dub4)

# presetNumber

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

The programmable preset assigned to the station.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var presetNumber: Int? { get }
```

<a id="Discussion"></a>

## Discussion

For most entertainment systems, users can assign favorite radio stations to one or more programmable presets. If the user specified a preset when asking to change the radio station, this property contains the specified preset number.

When the [channel](channel.md) property contains a valid value, this property `nil`.

## See Also

### Getting Details About the Radio Station to Set

- [radioType](radiotype.md): Deprecated. The type of radio tuner to use.
- [frequency](frequency-2ctw6.md): Deprecated. The broadcast frequency of the radio station.
- [stationName](stationname.md): Deprecated. The name associated with the radio station.
- [channel](channel.md): Deprecated. The channel number of the station.
