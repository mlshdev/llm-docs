> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel/queue](https://developer.apple.com/documentation/network/nwethernetchannel/queue)

# queue

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The queue on which channel events will be delivered.

## Declaration

```swift
final var queue: DispatchQueue? { get }
```

## See Also

### Inspecting Ethernet Channels

- [etherType](ethertype.md): The custom Ethernet type with which the channel was initialized.
- [interface](interface.md): The interface with which the channel was initialized.
