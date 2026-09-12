> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/status-swift.enum](https://developer.apple.com/documentation/network/nwpath/status-swift.enum)

# NWPath.Status

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Status values indicating whether a path can be used by connections.

## Declaration

```swift
enum Status
```

## Topics

### Status Values

- [NWPath.Status.unsatisfied](status-swift.enum/unsatisfied.md): The path is not available for use.
- [NWPath.Status.satisfied](status-swift.enum/satisfied.md): The path is available to establish connections and send data.
- [NWPath.Status.requiresConnection](status-swift.enum/requiresconnection.md): The path is not currently available, but establishing a new connection may activate the path.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking Path Availability

- [status](status-swift.property.md): A status indicating whether a path can be used by connections.
