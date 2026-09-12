> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/session-swift.struct](https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct)

# ElectricHVACLoadEvent.Session

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A session that tracks the event.

## Declaration

```swift
struct Session
```

<a id="overview"></a>

## Overview

A session starts when a device transitions from idle to consuming electricity. It’s active when consuming electricity. It ends when the device stops consuming electricity.

## Topics

### Creating a session

- [init(id:state:guidanceState:)](session-swift.struct/init%28id_state_guidancestate_%29.md): Creates an electrical load event session.

### Getting the session information

- [id](session-swift.struct/id.md): The unique identifier for the session.
- [state](session-swift.struct/state-swift.property.md): The state of the session.
- [ElectricHVACLoadEvent.Session.State](session-swift.struct/state-swift.enum.md): The state of the session.

### Identifying the guidance state

- [ElectricHVACLoadEvent.Session.GuidanceState](session-swift.struct/guidancestate-swift.struct.md): Identifies the provided guidance and its usability by the load device
- [guidanceState](session-swift.struct/guidancestate-swift.property.md): Identifies the provided guidance and its usability by the load device

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting load event information

- [id](id.md): The unique identifier of the electrical load event.
- [timestamp](timestamp.md): The timestamp for when the event occurred.
- [session](session-swift.property.md): The session information.
