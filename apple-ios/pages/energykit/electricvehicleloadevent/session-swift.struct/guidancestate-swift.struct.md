> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/session-swift.struct/guidancestate-swift.struct](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/session-swift.struct/guidancestate-swift.struct)

# ElectricVehicleLoadEvent.Session.GuidanceState

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Identifies the provided guidance and its usability by the load device

## Declaration

```swift
struct GuidanceState
```

## Topics

### Initializers

- [init(wasFollowingGuidance:guidanceToken:)](guidancestate-swift.struct/init%28wasfollowingguidance_guidancetoken_%29.md): Initialize the GuidanceState for the [ElectricVehicleLoadEvent](../../electricvehicleloadevent.md)

### Instance Properties

- [guidanceToken](guidancestate-swift.struct/guidancetoken.md): The guidance token for the guidance that you requested.
- [wasFollowingGuidance](guidancestate-swift.struct/wasfollowingguidance.md): A Boolean value that indicates whether the device was applying the electricity guidance at the time of the event.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a load event

- [init(id:state:guidanceState:)](init%28id_state_guidancestate_%29.md): Creates an electrical load event session.
- [guidanceState](guidancestate-swift.property.md): Identifies the provided guidance and its usability by the load device
- [id](id.md): The unique identifier for the session.
- [state](state-swift.property.md): The state of the session.
- [ElectricVehicleLoadEvent.Session.State](state-swift.enum.md): The state of the session.
