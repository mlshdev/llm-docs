> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/current()](https://developer.apple.com/documentation/foundation/nsxpcconnection/current())

# current() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current connection, in the context of a call to a method on your exported object.

## Declaration

```swift
class func current() -> NSXPCConnection?
```

<a id="return-value"></a>

## Return Value

An [NSXPCConnection](../nsxpcconnection.md) object, representing a connection to another process.

<a id="Discussion"></a>

## Discussion

Use this method to determine what process invoked the current call.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the connection.
- [resume()](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate()](invalidate%28%29.md): Invalidates the connection.
- [suspend()](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [scheduleSendBarrierBlock(\_:)](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

# currentConnection (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current connection, in the context of a call to a method on your exported object.

## Declaration

```objectivec
+ (NSXPCConnection *) currentConnection;
```

<a id="return-value"></a>

## Return Value

An [NSXPCConnection](../nsxpcconnection.md) object, representing a connection to another process.

<a id="Discussion"></a>

## Discussion

Use this method to determine what process invoked the current call.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the connection.
- [resume](resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate](invalidate%28%29.md): Invalidates the connection.
- [suspend](suspend%28%29.md): Suspends the connection.
- [interruptionHandler](interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [scheduleSendBarrierBlock:](schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.
