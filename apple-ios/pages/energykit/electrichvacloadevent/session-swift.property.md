> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/session-swift.property](https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.property)

# session

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The session information.

## Declaration

```swift
let session: ElectricHVACLoadEvent.Session
```

<a id="discussion"></a>

## Discussion

An HVAC system between its cooling or heating cycles can be idling and load events must not be generated

## See Also

### Getting load event information

- [id](id.md): The unique identifier of the electrical load event.
- [timestamp](timestamp.md): The timestamp for when the event occurred.
- [ElectricHVACLoadEvent.Session](session-swift.struct.md): A session that tracks the event.
