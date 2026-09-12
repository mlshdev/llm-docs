> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/initializationoptions](https://developer.apple.com/documentation/xpc/xpclistener/initializationoptions)

# XPCListener.InitializationOptions

**Framework:** XPC  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Options that control the listener’s configuration, such as if it’s inactive at creation.

## Declaration

```swift
struct InitializationOptions
```

## Topics

### Listener creation options

- [inactive](initializationoptions/inactive.md): Indicates that the listener isn’t activated during its creation.
- [none](initializationoptions/none.md): Indicates that the listener uses a default configuration during creation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a listener

- [init(service:targetQueue:options:incomingSessionHandler:)](init%28service_targetqueue_options_incomingsessionhandler_%29.md): Creates the server side of an XPC service using the specified service name.
- [XPCListener.IncomingSessionRequest](incomingsessionrequest.md): A session request from a client that you accept or reject.
