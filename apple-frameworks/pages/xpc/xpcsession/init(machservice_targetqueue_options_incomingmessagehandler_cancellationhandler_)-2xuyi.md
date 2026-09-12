> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/init(machservice:targetqueue:options:incomingmessagehandler:cancellationhandler:)-2xuyi](https://developer.apple.com/documentation/xpc/xpcsession/init(machservice:targetqueue:options:incomingmessagehandler:cancellationhandler:)-2xuyi)

# init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Establishes a connection to a launch agent or launch daemon with the name and received message handler you specify.

## Declaration

```swift
@preconcurrency convenience init(machService: String, targetQueue: DispatchQueue? = nil, options: XPCSession.InitializationOptions = .none, incomingMessageHandler: (@Sendable (XPCReceivedMessage) -> (any Encodable)?)? = nil, cancellationHandler: (@Sendable (XPCRichError) -> Void)? = nil) throws
```

## Parameters

- `machService`: The name of the Mach service to connect to. The service name must exist in the Mach bootstrap accessible to the process and advertised in a `launchd.plist`.
- `targetQueue`: The dispatch queue to use for session events. You can specify a concurrent dispatch queue. If you specify [nil](../../objectivec/nil-227m0.md), the session uses `DISPATCH_TARGET_QUEUE_DEFAULT`.
- `options`: Attributes the session uses when establishing the connection.
- `incomingMessageHandler`: A closure the system calls when a client initiates a connection to the server.
- `cancellationHandler`: A closure the system calls when it cancels a session.

<a id="Discussion"></a>

## Discussion

If the service isn’t found or is unavailable, the connection fails and this method throws an error.

By default, this method activates the session it creates and the session is ready to accept messages. To create an inactive session, specify [inactive](initializationoptions/inactive.md) in the `options` parameter.

## See Also

### Creating a session

- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-407h2.md): Establishes a connection to an XPC service with the name and decodable message handler you specify.
- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-9f4u0.md): Establishes a connection to an XPC service with the name and received message handler you specify.
- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-bel3.md): Establishes a connection to an XPC service with the name and dictionary message handler you specify.
- [init(xpcService:targetQueue:options:cancellationHandler:)](init%28xpcservice_targetqueue_options_cancellationhandler_%29.md): Establishes a connection to an XPC service with the name you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-l3rz.md): Establishes a connection to a launch agent or launch daemon with the name and decodable message handler you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-6jz7y.md): Establishes a connection to a launch agent or launch daemon with the name and dictionary message handler you specify.
- [init(machService:targetQueue:options:cancellationHandler:)](init%28machservice_targetqueue_options_cancellationhandler_%29.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [XPCSession.InitializationOptions](initializationoptions.md): Options that control the session’s configuration.
- [setTargetQueue(\_:)](settargetqueue%28__%29.md): Sets the target dispatch queue on an inactive session for processing messages.
