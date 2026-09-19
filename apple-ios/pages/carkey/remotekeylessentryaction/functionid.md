> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carkey/remotekeylessentryaction/functionid

# functionID

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The vehicle-specific code that identifies which feature you want to control.

## Declaration

```swift
let functionID: FunctionIdentifier
```

<a id="discussion"></a>

## Discussion

You define the function identifiers for your vehicles and what features they represent.

## See Also

### Getting the Action Details

- [actionID](actionid.md): The vehicle-specific code that identifies what action to take on the targeted feature.
- [recipientVehicleID](recipientvehicleid.md): The vehicle to receive the action request.
