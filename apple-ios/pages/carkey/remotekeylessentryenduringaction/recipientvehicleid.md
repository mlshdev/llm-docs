> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryenduringaction/recipientvehicleid](https://developer.apple.com/documentation/carkey/remotekeylessentryenduringaction/recipientvehicleid)

# recipientVehicleID

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.3+ (deprecated in 15.0) · watchOS 9.0+ (deprecated in 11.0)

The vehicle to receive the action request.

> Use [perform(\_:continuationStrategy:)](../carkeyremotecontrolsession/perform%28__continuationstrategy_%29.md) instead.

## Declaration

```swift
let recipientVehicleID: String
```

<a id="discussion"></a>

## Discussion

This string is the same one that appears in the [identifier](../vehiclereport/identifier.md) property of one of the session’s vehicle reports.

## See Also

### Getting the Action Details

- [functionID](functionid.md): Deprecated. The vehicle-specific code that identifies which feature you want to control.
- [actionID](actionid.md): Deprecated. The vehicle-specific code that identifies what action to take on the targeted feature.
