> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel/state-swift.enum/preparing](https://developer.apple.com/documentation/network/nwethernetchannel/state-swift.enum/preparing)

# NWEthernetChannel.State.preparing

**Framework:** Network  
**Kind:** Case  
**Availability:** macOS 10.15+

The channel is registering with the interface.

## Declaration

```swift
case preparing
```

## See Also

### States

- [NWEthernetChannel.State.setup](setup.md): The channel has been initialized but not started.
- [NWEthernetChannel.State.waiting(\_:)](waiting%28__%29.md): The channel is waiting for its interface to become available.
- [NWEthernetChannel.State.ready](ready.md): The channel is able to send and receive Ethernet frames.
- [NWEthernetChannel.State.failed(\_:)](failed%28__%29.md): The channel has encountered a fatal error.
- [NWEthernetChannel.State.cancelled](cancelled.md): The channel has been canceled.
