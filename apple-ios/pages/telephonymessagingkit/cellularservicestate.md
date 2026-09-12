> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/cellularservicestate](https://developer.apple.com/documentation/telephonymessagingkit/cellularservicestate)

# CellularServiceState

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about a cellular service.

## Declaration

```swift
struct CellularServiceState
```

## Mentioned In

- [Creating a carrier messaging app](creating-a-carrier-messaging-app.md)

## Topics

### Accessing state properties

- [id](cellularservicestate/id.md): The cellular service identifier associated with this instance.
- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [label](cellularservicestate/label.md): The label for a service, as set by the person using the device.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining service availability

- [cellularServices](telephonymessagingsession/cellularservices.md): An array of cellular services available on the system.
- [cellularServiceStateUpdates](telephonymessagingsession/cellularservicestateupdates.md): An asynchronous sequence of cellular service state updates produced by this session.
