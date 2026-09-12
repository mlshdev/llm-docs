> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketsenddata(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketsenddata(_:_:_:_:))

# CFSocketSendData(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sends data over a CFSocket object.

## Declaration

```swift
func CFSocketSendData(_ s: CFSocket!, _ address: CFData!, _ data: CFData!, _ timeout: CFTimeInterval) -> CFSocketError
```

## Parameters

- `s`: The CFSocket object to use.
- `address`: The address, stored as a `struct sockaddr` appropriate for the protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example) in a CFData object, to which to send the contents of `data`. If `NULL`, the data are sent to the address to which `s` is already connected. This data object is used only for the duration of the function call.
- `data`: The data to send.
- `timeout`: The time to wait for the data to be sent.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

This function sets the send timeout of the underlying socket (the `SO_SNDTIMEO` option at the `SOL_SOCKET` level), then calls send (or sendto if you provided an address) with the provided data.

This function makes no attempt to queue data for delivery beyond the queueing provided by the socket buffer itself. This means:

- If this function returns [CFSocketError.success](cfsocketerror/success.md), then by the time it returns, the data has been queued in the socket buffer for delivery.
- If the socket buffer is full and the timeout is nonzero, the function may return an error. If this happens, the app should wait for the socket buffer to have enough space available for writing before calling this function again.

## See Also

### Using Sockets

- [CFSocketConnectToAddress(\_:\_:\_:)](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID()](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate(\_:)](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid(\_:)](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.

# CFSocketSendData (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sends data over a CFSocket object.

## Declaration

```objectivec
extern CFSocketError CFSocketSendData(CFSocketRef s, CFDataRef address, CFDataRef data, CFTimeInterval timeout);
```

## Parameters

- `s`: The CFSocket object to use.
- `address`: The address, stored as a `struct sockaddr` appropriate for the protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example) in a CFData object, to which to send the contents of `data`. If `NULL`, the data are sent to the address to which `s` is already connected. This data object is used only for the duration of the function call.
- `data`: The data to send.
- `timeout`: The time to wait for the data to be sent.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

This function sets the send timeout of the underlying socket (the `SO_SNDTIMEO` option at the `SOL_SOCKET` level), then calls send (or sendto if you provided an address) with the provided data.

This function makes no attempt to queue data for delivery beyond the queueing provided by the socket buffer itself. This means:

- If this function returns [kCFSocketSuccess](cfsocketerror/success.md), then by the time it returns, the data has been queued in the socket buffer for delivery.
- If the socket buffer is full and the timeout is nonzero, the function may return an error. If this happens, the app should wait for the socket buffer to have enough space available for writing before calling this function again.

## See Also

### Using Sockets

- [CFSocketConnectToAddress](cfsocketconnecttoaddress%28______%29.md): Opens a connection to a remote socket.
- [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
