> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/session-swift.struct/guidancestate-swift.struct](https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/guidancestate-swift.struct)

# ElectricHVACLoadEvent.Session.GuidanceState

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Identifies the provided guidance and its usability by the load device

## Declaration

```swift
struct GuidanceState
```

## Topics

### Checking the guidance state

- [init(wasFollowingGuidance:guidanceToken:)](guidancestate-swift.struct/init%28wasfollowingguidance_guidancetoken_%29.md): Initialize the GuidanceState for the [ElectricHVACLoadEvent](../../electrichvacloadevent.md)
- [guidanceToken](guidancestate-swift.struct/guidancetoken.md): The guidance token for the guidance that you requested.
- [wasFollowingGuidance](guidancestate-swift.struct/wasfollowingguidance.md): A Boolean value that indicates whether the device was applying the electricity guidance at the time of the event.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the guidance state

- [guidanceState](guidancestate-swift.property.md): Identifies the provided guidance and its usability by the load device
