> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketsetaddress(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketsetaddress(_:_:))

# CFSocketSetAddress(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Binds a local address to a CFSocket object and configures it for listening.

## Declaration

```swift
func CFSocketSetAddress(_ s: CFSocket!, _ address: CFData!) -> CFSocketError
```

## Parameters

- `s`: The CFSocket object to modify.
- `address`: A CFData object containing a `struct sockaddr` appropriate for the protocol family of `s` (`struct sockaddr_in` or `struct sockaddr_in6`, for example). This data object is used only for the duration of the function call.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

This function binds the socket by calling bind, and if the socket supports it, configures the socket for listening by calling listen with a backlog of 256.

Once `s` is bound to `address`, depending on the socket’s protocol, other processes and computers can connect to `s`.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

# CFSocketSetAddress (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Binds a local address to a CFSocket object and configures it for listening.

## Declaration

```objectivec
extern CFSocketError CFSocketSetAddress(CFSocketRef s, CFDataRef address);
```

## Parameters

- `s`: The CFSocket object to modify.
- `address`: A CFData object containing a `struct sockaddr` appropriate for the protocol family of `s` (`struct sockaddr_in` or `struct sockaddr_in6`, for example). This data object is used only for the duration of the function call.

<a id="return-value"></a>

## Return Value

An error code indicating success or failure.

<a id="Discussion"></a>

## Discussion

This function binds the socket by calling bind, and if the socket supports it, configures the socket for listening by calling listen with a backlog of 256.

Once `s` is bound to `address`, depending on the socket’s protocol, other processes and computers can connect to `s`.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.
