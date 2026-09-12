> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamsetclient(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamsetclient(_:_:_:_:))

# CFReadStreamSetClient(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Assigns a client to a stream, which receives callbacks when certain events occur.

## Declaration

```swift
func CFReadStreamSetClient(_ stream: CFReadStream!, _ streamEvents: CFOptionFlags, _ clientCB: CFReadStreamClientCallBack!, _ clientContext: UnsafeMutablePointer<CFStreamClientContext>!) -> Bool
```

## Parameters

- `stream`: The stream to modify.
- `streamEvents`: The set of events for which the client should receive callbacks. The events are listed in [CFStreamEventType](cfstreameventtype.md). If you pass [kCFStreamEventNone](cfstreameventtype/kcfstreameventnone.md), the current client for `stream` is removed.
- `clientCB`: The client callback function to be called when one of the events requested in `streamEvents` occurs. If `NULL`, the current client for `stream` is removed.
- `clientContext`: A structure holding contextual information for the stream client. The function copies the information out of the structure, so the memory pointed to by `clientContext` does not need to persist beyond the function call. If `NULL`, the current client for `stream` is removed.

<a id="return-value"></a>

## Return Value

`TRUE` if the stream supports asynchronous notification, otherwise `FALSE`.

<a id="Discussion"></a>

## Discussion

To avoid polling and blocking, you can register a client to hear about interesting events that occur on a stream. Only one client per stream is allowed; registering a new client replaces the previous one.

Once you have set a client, you need to schedule the stream in a run loop using [CFReadStreamScheduleWithRunLoop(\_:\_:\_:)](cfreadstreamschedulewithrunloop%28______%29.md) so that the client can receive the asynchronous notifications. You can schedule each stream in multiple run loops (for example, if you are using a thread pool). It is the caller’s responsibility to ensure that at least one of the scheduled run loops is being run, otherwise the callback cannot be called.

Although all Core Foundation streams currently support asynchronous notification, future stream types may not. If a stream does not support asynchronous notification, this function returns `false`. Typically, such streams never block for device I/O (for example, a stream reading memory) and don’t benefit from asynchronous notification.

## See Also

### Setting Stream Properties

- [CFReadStreamSetProperty(\_:\_:\_:)](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.

# CFReadStreamSetClient (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Assigns a client to a stream, which receives callbacks when certain events occur.

## Declaration

```objectivec
extern Boolean CFReadStreamSetClient(CFReadStreamRef stream, CFOptionFlags streamEvents, CFReadStreamClientCallBack clientCB, CFStreamClientContext *clientContext);
```

## Parameters

- `stream`: The stream to modify.
- `streamEvents`: The set of events for which the client should receive callbacks. The events are listed in [CFStreamEventType](cfstreameventtype.md). If you pass [kCFStreamEventNone](cfstreameventtype/kcfstreameventnone.md), the current client for `stream` is removed.
- `clientCB`: The client callback function to be called when one of the events requested in `streamEvents` occurs. If `NULL`, the current client for `stream` is removed.
- `clientContext`: A structure holding contextual information for the stream client. The function copies the information out of the structure, so the memory pointed to by `clientContext` does not need to persist beyond the function call. If `NULL`, the current client for `stream` is removed.

<a id="return-value"></a>

## Return Value

`TRUE` if the stream supports asynchronous notification, otherwise `FALSE`.

<a id="Discussion"></a>

## Discussion

To avoid polling and blocking, you can register a client to hear about interesting events that occur on a stream. Only one client per stream is allowed; registering a new client replaces the previous one.

Once you have set a client, you need to schedule the stream in a run loop using [CFReadStreamScheduleWithRunLoop](cfreadstreamschedulewithrunloop%28______%29.md) so that the client can receive the asynchronous notifications. You can schedule each stream in multiple run loops (for example, if you are using a thread pool). It is the caller’s responsibility to ensure that at least one of the scheduled run loops is being run, otherwise the callback cannot be called.

Although all Core Foundation streams currently support asynchronous notification, future stream types may not. If a stream does not support asynchronous notification, this function returns `false`. Typically, such streams never block for device I/O (for example, a stream reading memory) and don’t benefit from asynchronous notification.

## See Also

### Setting Stream Properties

- [CFReadStreamSetProperty](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.
