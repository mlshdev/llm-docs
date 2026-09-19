> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwethernetchannel/queue

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
