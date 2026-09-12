> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/session-swift.struct/init(id:state:guidancestate:)](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/session-swift.struct/init(id:state:guidancestate:))

# init(id:state:guidanceState:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Creates an electrical load event session.

## Declaration

```swift
init(id: UUID, state: ElectricVehicleLoadEvent.Session.State, guidanceState: ElectricVehicleLoadEvent.Session.GuidanceState)
```

## Parameters

- `id`: The unique identifier for the session.
- `state`: The state of the session.
- `guidanceState`: Identifies the provided guidance and its usability by the load device

## See Also

### Creating a load event

- [guidanceState](guidancestate-swift.property.md): Identifies the provided guidance and its usability by the load device
- [id](id.md): The unique identifier for the session.
- [state](state-swift.property.md): The state of the session.
- [ElectricVehicleLoadEvent.Session.GuidanceState](guidancestate-swift.struct.md): Identifies the provided guidance and its usability by the load device
- [ElectricVehicleLoadEvent.Session.State](state-swift.enum.md): The state of the session.
