> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electrichvacloadevent/session-swift.struct/state-swift.enum](https://developer.apple.com/documentation/energykit/electrichvacloadevent/session-swift.struct/state-swift.enum)

# ElectricHVACLoadEvent.Session.State

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

When a device transitions from from idle to consuming electricity, it must create a load event with [ElectricHVACLoadEvent.Session.State.begin](state-swift.enum/begin.md). As it reports events, it sends load events with [ElectricHVACLoadEvent.Session.State.active](state-swift.enum/active.md). Once idle, it closes the session with [ElectricHVACLoadEvent.Session.State.end](state-swift.enum/end.md).

## Topics

### Setting session states

- [ElectricHVACLoadEvent.Session.State.active](state-swift.enum/active.md): A state that represents all electricity consumption events with active states.
- [ElectricHVACLoadEvent.Session.State.begin](state-swift.enum/begin.md): A state that represents the start of the session.
- [ElectricHVACLoadEvent.Session.State.end](state-swift.enum/end.md): A state that represents the end of the session.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the session information

- [id](id.md): The unique identifier for the session.
- [state](state-swift.property.md): The state of the session.
