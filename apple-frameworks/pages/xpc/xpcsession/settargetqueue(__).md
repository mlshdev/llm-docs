> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/settargetqueue(_:)](https://developer.apple.com/documentation/xpc/xpcsession/settargetqueue(_:))

# setTargetQueue(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sets the target dispatch queue on an inactive session for processing messages.

## Declaration

```swift
func setTargetQueue(_ targetQueue: DispatchQueue)
```

## Parameters

- `targetQueue`: The dispatch queue where the session processes messages. The target queue can be a concurrent queue.

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
- [XPCSession.InitializationOptions](initializationoptions.md): Options that control the session’s configuration.
