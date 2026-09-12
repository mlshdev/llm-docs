> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryaction/actionid](https://developer.apple.com/documentation/carkey/remotekeylessentryaction/actionid)

# actionID

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The vehicle-specific code that identifies what action to take on the targeted feature.

## Declaration

```swift
let actionID: ActionIdentifier
```

<a id="discussion"></a>

## Discussion

You define the action identifiers for your vehicles and what actions they perform on the vehicle function.

## See Also

### Getting the Action Details

- [functionID](functionid.md): The vehicle-specific code that identifies which feature you want to control.
- [recipientVehicleID](recipientvehicleid.md): The vehicle to receive the action request.
