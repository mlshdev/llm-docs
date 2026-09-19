> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carkey/remotekeylessentryaction/recipientvehicleid

# recipientVehicleID

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The vehicle to receive the action request.

## Declaration

```swift
let recipientVehicleID: String
```

<a id="discussion"></a>

## Discussion

This string is the same one that appears in the [identifier](../vehiclereport/identifier.md) property of one of the session’s vehicle reports.

## See Also

### Getting the Action Details

- [functionID](functionid.md): The vehicle-specific code that identifies which feature you want to control.
- [actionID](actionid.md): The vehicle-specific code that identifies what action to take on the targeted feature.
