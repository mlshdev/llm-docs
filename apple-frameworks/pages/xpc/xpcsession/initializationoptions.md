> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/initializationoptions](https://developer.apple.com/documentation/xpc/xpcsession/initializationoptions)

# XPCSession.InitializationOptions

**Framework:** XPC  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Options that control the session’s configuration.

## Declaration

```swift
struct InitializationOptions
```

## Topics

### Session creation options

- [inactive](initializationoptions/inactive.md): Indicates that the session isn’t activated during its creation.
- [privileged](initializationoptions/privileged.md): Indicates that the Mach service is in the priviledged Mach bootstrap.
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

### Creating a session

- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-407h2.md): Establishes a connection to an XPC service with the name and decodable message handler you specify.
- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-9f4u0.md): Establishes a connection to an XPC service with the name and received message handler you specify.
- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-bel3.md): Establishes a connection to an XPC service with the name and dictionary message handler you specify.
- [init(xpcService:targetQueue:options:cancellationHandler:)](init%28xpcservice_targetqueue_options_cancellationhandler_%29.md): Establishes a connection to an XPC service with the name you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-l3rz.md): Establishes a connection to a launch agent or launch daemon with the name and decodable message handler you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-2xuyi.md): Establishes a connection to a launch agent or launch daemon with the name and received message handler you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-6jz7y.md): Establishes a connection to a launch agent or launch daemon with the name and dictionary message handler you specify.
- [init(machService:targetQueue:options:cancellationHandler:)](init%28machservice_targetqueue_options_cancellationhandler_%29.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [setTargetQueue(\_:)](settargetqueue%28__%29.md): Sets the target dispatch queue on an inactive session for processing messages.
