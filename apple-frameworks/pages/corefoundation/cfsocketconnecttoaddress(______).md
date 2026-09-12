> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketconnecttoaddress(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketconnecttoaddress(_:_:_:))

# CFSocketConnectToAddress(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Opens a connection to a remote socket.

## Declaration

```swift
func CFSocketConnectToAddress(_ s: CFSocket!, _ address: CFData!, _ timeout: CFTimeInterval) -> CFSocketError
```

## Parameters

- `s`: The CFSocket object with which to connect to `address`.
- `address`: A CFData object containing a `struct sockaddr` appropriate for the protocol family of `s` (`struct sockaddr_in` or `struct sockaddr_in6`, for example), indicating the remote address to which to connect. This data object is used only for the duration of the function call.
- `timeout`: The time to wait for a connection to succeed. If a negative value is used, this function does not wait for the connection and instead lets the connection attempt happen in the background. If `s` requested a `kCFSocketConnectCallBack`, you will receive a callback when the background connection succeeds or fails.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure of the connection attempt.

## See Also

### Using Sockets

- [CFSocketCreateRunLoopSource(\_:\_:\_:)](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID()](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate(\_:)](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid(\_:)](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData(\_:\_:\_:\_:)](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.

# CFSocketConnectToAddress (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Opens a connection to a remote socket.

## Declaration

```objectivec
extern CFSocketError CFSocketConnectToAddress(CFSocketRef s, CFDataRef address, CFTimeInterval timeout);
```

## Parameters

- `s`: The CFSocket object with which to connect to `address`.
- `address`: A CFData object containing a `struct sockaddr` appropriate for the protocol family of `s` (`struct sockaddr_in` or `struct sockaddr_in6`, for example), indicating the remote address to which to connect. This data object is used only for the duration of the function call.
- `timeout`: The time to wait for a connection to succeed. If a negative value is used, this function does not wait for the connection and instead lets the connection attempt happen in the background. If `s` requested a `kCFSocketConnectCallBack`, you will receive a callback when the background connection succeeds or fails.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure of the connection attempt.

## See Also

### Using Sockets

- [CFSocketCreateRunLoopSource](cfsocketcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFSocket object.
- [CFSocketGetTypeID](cfsocketgettypeid%28%29.md): Returns the type identifier for the CFSocket opaque type.
- [CFSocketInvalidate](cfsocketinvalidate%28__%29.md): Invalidates a CFSocket object, stopping it from sending or receiving any more messages.
- [CFSocketIsValid](cfsocketisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFSocket object is valid and able to send or receive messages.
- [CFSocketSendData](cfsocketsenddata%28________%29.md): Sends data over a CFSocket object.
