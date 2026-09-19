> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/recipientvehicleid

# recipientVehicleID

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

The vehicle to receive the action request.

## Declaration

```swift
let recipientVehicleID: String
```

<a id="discussion"></a>

## Discussion

This string is the same one that appears in the [identifier](../vehiclereport/identifier.md) property of one of the session’s vehicle reports.
