> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/error](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/error)

# AccessoryTransportSession.Error

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.2+

Errors that can occur with an accessory transport session.

## Declaration

```swift
enum Error
```

## Topics

### Identifying session errors

- [AccessoryTransportSession.Error.invalidated](error/invalidated.md): An error that indicates the session is invalidated.
- [AccessoryTransportSession.Error.unsupported](error/unsupported.md): An error that indicates the framework doesn’t support an client-provided value or operation.
- [AccessoryTransportSession.Error.unknown](error/unknown.md): An error that indicates a failure with an unknown cause.

### Describing an error

- [description](error/description.md): A string that describes the transport-session error.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
