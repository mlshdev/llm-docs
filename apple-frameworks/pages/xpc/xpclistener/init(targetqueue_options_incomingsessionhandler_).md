> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/init(targetqueue:options:incomingsessionhandler:)](https://developer.apple.com/documentation/xpc/xpclistener/init(targetqueue:options:incomingsessionhandler:))

# init(targetQueue:options:incomingSessionHandler:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Creates an anonymous listener

## Declaration

```swift
@preconcurrency init(targetQueue: DispatchQueue? = nil, options: XPCListener.InitializationOptions = .none, incomingSessionHandler: @escaping @Sendable (XPCListener.IncomingSessionRequest) -> XPCListener.IncomingSessionRequest.Decision)
```

<a id="return-value"></a>

## Return Value

Returns a new listener object. The returned listener is activated by default and will begin receiving incoming session requests

<a id="discussion"></a>

## Discussion

- targetQueue: The GCD queue onto which listener events will be submitted. This may be a concurrent queue. This parameter is optional, if the target queue is not specified the target queue will be libdispatch’s default target queue, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`.
- options: Additional attributes to create the listener
- incomingSessionHandler: The handler block to be called when a peer is attempting to establish a connection with this listener. The incoming session handler is mandatory.
