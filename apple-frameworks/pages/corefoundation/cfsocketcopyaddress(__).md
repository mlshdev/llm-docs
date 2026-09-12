> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketcopyaddress(_:)](https://developer.apple.com/documentation/corefoundation/cfsocketcopyaddress(_:))

# CFSocketCopyAddress(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the local address of a CFSocket object.

## Declaration

```swift
func CFSocketCopyAddress(_ s: CFSocket!) -> CFData!
```

## Parameters

- `s`: The CFSocket object to examine.

<a id="return-value"></a>

## Return Value

The local address, stored as a `struct sockaddr` appropriate for the protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example) in a CFData object, of `s`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Configuring Sockets

- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

# CFSocketCopyAddress (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the local address of a CFSocket object.

## Declaration

```objectivec
extern CFDataRefCFSocketCopyAddress(CFSocketRef s);
```

## Parameters

- `s`: The CFSocket object to examine.

<a id="return-value"></a>

## Return Value

The local address, stored as a `struct sockaddr` appropriate for the protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example) in a CFData object, of `s`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Configuring Sockets

- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.
