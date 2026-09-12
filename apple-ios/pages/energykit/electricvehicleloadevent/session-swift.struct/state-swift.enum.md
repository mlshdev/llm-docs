> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/session-swift.struct/state-swift.enum](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/session-swift.struct/state-swift.enum)

# ElectricVehicleLoadEvent.Session.State

**Framework:** EnergyKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The state of the session.

## Declaration

```swift
enum State
```

<a id="overview"></a>

## Overview

When a device transitions from from idle to consuming or generating electricity, it must create a load event with [ElectricVehicleLoadEvent.Session.State.begin](state-swift.enum/begin.md). As it reports events, it sends load events with [ElectricVehicleLoadEvent.Session.State.active](state-swift.enum/active.md). Once idle, it closes the session with [ElectricVehicleLoadEvent.Session.State.end](state-swift.enum/end.md).

## Topics

### Enumeration Cases

- [ElectricVehicleLoadEvent.Session.State.active](state-swift.enum/active.md): A state that represents all electricity consumption or production events with active states.
- [ElectricVehicleLoadEvent.Session.State.begin](state-swift.enum/begin.md): A state that represents the start of the session.
- [ElectricVehicleLoadEvent.Session.State.end](state-swift.enum/end.md): A state that represents the end of the session.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a load event

- [init(id:state:guidanceState:)](init%28id_state_guidancestate_%29.md): Creates an electrical load event session.
- [guidanceState](guidancestate-swift.property.md): Identifies the provided guidance and its usability by the load device
- [id](id.md): The unique identifier for the session.
- [state](state-swift.property.md): The state of the session.
- [ElectricVehicleLoadEvent.Session.GuidanceState](guidancestate-swift.struct.md): Identifies the provided guidance and its usability by the load device
