> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketdisablecallbacks(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketdisablecallbacks(_:_:))

# CFSocketDisableCallBacks(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Disables the callback function of a CFSocket object for certain types of socket activity.

## Declaration

```swift
func CFSocketDisableCallBacks(_ s: CFSocket!, _ callBackTypes: CFOptionFlags)
```

## Parameters

- `s`: The CFSocket object to modify.
- `callBackTypes`: A bitwise-OR combination of CFSocket activity types that should not cause the callback function of `s` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for a list of callback types.

<a id="Discussion"></a>

## Discussion

If you no longer want certain types of callbacks that you requested when creating `s`, you can use this function to temporarily disable the callback. Use [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md) to reenable a callback type.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

# CFSocketDisableCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Disables the callback function of a CFSocket object for certain types of socket activity.

## Declaration

```objectivec
extern void CFSocketDisableCallBacks(CFSocketRef s, CFOptionFlags callBackTypes);
```

## Parameters

- `s`: The CFSocket object to modify.
- `callBackTypes`: A bitwise-OR combination of CFSocket activity types that should not cause the callback function of `s` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for a list of callback types.

<a id="Discussion"></a>

## Discussion

If you no longer want certain types of callbacks that you requested when creating `s`, you can use this function to temporarily disable the callback. Use [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md) to reenable a callback type.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.
