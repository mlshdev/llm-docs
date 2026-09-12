> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel/start(queue:)](https://developer.apple.com/documentation/network/nwethernetchannel/start(queue:))

# start(queue:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Starts the process of registering the channel, and sets the queue on which all channel events are delivered.

## Declaration

```swift
final func start(queue: DispatchQueue)
```

## See Also

### Managing Ethernet Channels

- [init(on:etherType:)](init%28on_ethertype_%29.md): Initializes an Ethernet channel on a specific interface with a custom Ethernet type.
- [cancel()](cancel%28%29.md): Unregisters the channel from the interface.
