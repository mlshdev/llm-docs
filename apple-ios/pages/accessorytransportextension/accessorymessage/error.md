> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/error](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/error)

# AccessoryMessage.Error

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

An enumeration of errors that can occur during message transmission.

## Declaration

```swift
enum Error
```

## Topics

### Identifying error types

- [AccessoryMessage.Error.transportFailed](error/transportfailed.md): An error indicating the transport failed but may recover.
- [AccessoryMessage.Error.transportUnavailable](error/transportunavailable.md): An error indicating the transport is unavailable.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assessing outcomes

- [AccessoryMessage.Result](result.md): An enumeration of results for message transmission.
