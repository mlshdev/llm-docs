> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketenablecallbacks(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketenablecallbacks(_:_:))

# CFSocketEnableCallBacks(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enables the callback function of a CFSocket object for certain types of socket activity.

## Declaration

```swift
func CFSocketEnableCallBacks(_ s: CFSocket!, _ callBackTypes: CFOptionFlags)
```

## Parameters

- `s`: The CFSocket object to modify.
- `callBackTypes`: A bitwise-OR combination of CFSocket activity types that should cause the callback function of `s` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for a list of callback types.

<a id="Discussion"></a>

## Discussion

If a callback type is not automatically reenabled, you can use this function to enable the callback (once).

This call does not affect whether the callback type will be automatically reenabled in the future; use [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md) if you want to set a callback type to be reenabled automatically.

Be sure to enable only callback types that your CFSocket object actually possesses and has requested when creating the CFSocket object; the result of enabling other callback types is undefined.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

# CFSocketEnableCallBacks (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enables the callback function of a CFSocket object for certain types of socket activity.

## Declaration

```objectivec
extern void CFSocketEnableCallBacks(CFSocketRef s, CFOptionFlags callBackTypes);
```

## Parameters

- `s`: The CFSocket object to modify.
- `callBackTypes`: A bitwise-OR combination of CFSocket activity types that should cause the callback function of `s` to be called. See [CFSocketCallBackType](cfsocketcallbacktype.md) for a list of callback types.

<a id="Discussion"></a>

## Discussion

If a callback type is not automatically reenabled, you can use this function to enable the callback (once).

This call does not affect whether the callback type will be automatically reenabled in the future; use [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md) if you want to set a callback type to be reenabled automatically.

Be sure to enable only callback types that your CFSocket object actually possesses and has requested when creating the CFSocket object; the result of enabling other callback types is undefined.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.
