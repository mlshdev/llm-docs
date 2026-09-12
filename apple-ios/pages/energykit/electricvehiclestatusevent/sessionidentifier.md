> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/sessionidentifier](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/sessionidentifier)

# sessionIdentifier

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A unique identifier for the session.

## Declaration

```swift
let sessionIdentifier: UUID?
```

<a id="discussion"></a>

## Discussion

Provide the session identifier if the status event corresponds to an active charging session. The session identifier associates status snapshots with session-based energy flow data.

## See Also

### Identifying the event

- [id](id.md): A unique identifier for the status event.
- [timestamp](timestamp.md): The time when the status event occurs.
