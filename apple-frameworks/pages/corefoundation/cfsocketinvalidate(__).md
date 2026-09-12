> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketinvalidate(_:)](https://developer.apple.com/documentation/corefoundation/cfsocketinvalidate(_:))

# CFSocketInvalidate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFSocket object, stopping it from sending or receiving any more messages.

## Declaration

```swift
func CFSocketInvalidate(_ s: CFSocket!)
```

## Parameters

- `s`: The CFSocket object to invalidate.

<a id="Discussion"></a>

## Discussion

You should always invalidate a socket object when you are through using it. Invalidating a CFSocket object prevents the object from sending or receiving any more messages, but does not release the socket object itself.

If a run loop source was created for `s`, the run loop source is invalidated.

If a release callback was specified in [CFSocketContext](cfsocketcontext.md) object, this function calls it to release the object in the  `info` field (which was provided when `s` was created).

By default, this call closes the underlying socket. If you have explicitly cleared the `kCFSocketCloseOnInvalidate` flag by calling [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md), you must close the socket yourself *after* calling this function.

## See Also

### Using Sockets

- [CFSocketConnectToAddress(\_:\_:\_:)](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID()](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketIsValid(\_:)](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

# CFSocketInvalidate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFSocket object, stopping it from sending or receiving any more messages.

## Declaration

```objectivec
extern void CFSocketInvalidate(CFSocketRef s);
```

## Parameters

- `s`: The CFSocket object to invalidate.

<a id="Discussion"></a>

## Discussion

You should always invalidate a socket object when you are through using it. Invalidating a CFSocket object prevents the object from sending or receiving any more messages, but does not release the socket object itself.

If a run loop source was created for `s`, the run loop source is invalidated.

If a release callback was specified in [CFSocketContext](cfsocketcontext.md) object, this function calls it to release the object in the  `info` field (which was provided when `s` was created).

By default, this call closes the underlying socket. If you have explicitly cleared the `kCFSocketCloseOnInvalidate` flag by calling [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md), you must close the socket yourself *after* calling this function.

## See Also

### Using Sockets

- [CFSocketConnectToAddress](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketIsValid](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.
