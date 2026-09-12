> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel/state-swift.enum](https://developer.apple.com/documentation/network/nwethernetchannel/state-swift.enum)

# NWEthernetChannel.State

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

States indicating whether an Ethernet channel is able to send and receive frames.

## Declaration

```swift
enum State
```

## Topics

### States

- [NWEthernetChannel.State.setup](state-swift.enum/setup.md): The channel has been initialized but not started.
- [NWEthernetChannel.State.waiting(\_:)](state-swift.enum/waiting%28__%29.md): The channel is waiting for its interface to become available.
- [NWEthernetChannel.State.preparing](state-swift.enum/preparing.md): The channel is registering with the interface.
- [NWEthernetChannel.State.ready](state-swift.enum/ready.md): The channel is able to send and receive Ethernet frames.
- [NWEthernetChannel.State.failed(\_:)](state-swift.enum/failed%28__%29.md): The channel has encountered a fatal error.
- [NWEthernetChannel.State.cancelled](state-swift.enum/cancelled.md): The channel has been canceled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling State Updates

- [state](state-swift.property.md): The current state of the channel.
- [stateUpdateHandler](stateupdatehandler.md): A handler that delivers channel state updates.
