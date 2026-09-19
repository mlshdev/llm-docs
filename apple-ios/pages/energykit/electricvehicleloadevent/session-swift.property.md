> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricvehicleloadevent/session-swift.property

# session

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The session information.

## Declaration

```swift
let session: ElectricVehicleLoadEvent.Session
```

<a id="discussion"></a>

## Discussion

An electric vehicle between charging or discharging sessions can be idling and load events must not be generated

## See Also

### Getting load event information

- [id](id.md): The unique identifier of the electrical load event.
- [timestamp](timestamp.md): The timestamp for when the event occurred.
- [ElectricVehicleLoadEvent.Session](session-swift.struct.md): A session that tracks the event.
