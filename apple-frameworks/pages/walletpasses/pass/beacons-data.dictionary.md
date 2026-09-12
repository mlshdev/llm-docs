> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/pass/beacons-data.dictionary](https://developer.apple.com/documentation/walletpasses/pass/beacons-data.dictionary)

# Pass.Beacons

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · watchOS 1.0+

An object that represents the identifier of a Bluetooth Low Energy beacon the system uses to show a relevant pass.

## Declaration

```
object Pass.Beacons
```

## Properties

- `major` — `16-bit unsigned integer`: The major identifier of a Bluetooth Low Energy location beacon.
- `minor` — `16-bit unsigned integer`: The minor identifier of a Bluetooth Low Energy location beacon.
- `proximityUUID` — `string` (required): The unique identifier of a Bluetooth Low Energy location beacon.
- `relevantText` — `string`: The text to display on the lock screen when the pass is relevant. For example, a description of a nearby location, such as `“Store nearby on 1st and Main”`.

## See Also

### Adding relevance

- [Showing a Pass on the Lock Screen](../showing-a-pass-on-the-lock-screen.md): Add information to your pass so the system can display it on the Lock Screen at a relevant time and place.
- [Pass.Locations](locations-data.dictionary.md): An object that represents a location that the system uses to show a relevant pass.
- [Pass.RelevantDates](relevantdates-data.dictionary.md): An object that represents a date interval that the system uses to show a relevant pass.
