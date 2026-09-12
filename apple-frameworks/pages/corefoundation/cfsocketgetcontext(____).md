> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketgetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketgetcontext(_:_:))

# CFSocketGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFSocket object.

## Declaration

```swift
func CFSocketGetContext(_ s: CFSocket!, _ context: UnsafeMutablePointer<CFSocketContext>!)
```

## Parameters

- `s`: The CFSocket object to examine.
- `context`: A pointer to the structure into which the context information for `s` is to be copied. The information being returned is usually the same information you passed to [CFSocketCreate(\_:\_:\_:\_:\_:\_:\_:)](cfsocketcreate%28______________%29.md), [CFSocketCreateConnectedToSocketSignature(\_:\_:\_:\_:\_:\_:)](cfsocketcreateconnectedtosocketsignature%28____________%29.md), [CFSocketCreateWithNative(\_:\_:\_:\_:\_:)](cfsocketcreatewithnative%28__________%29.md), or [CFSocketCreateWithSocketSignature(\_:\_:\_:\_:\_:)](cfsocketcreatewithsocketsignature%28__________%29.md) when creating the CFSocket object. However, if [CFSocketCreateWithNative(\_:\_:\_:\_:\_:)](cfsocketcreatewithnative%28__________%29.md) returned a cached CFSocket object instead of creating a new object, `context` is filled with information from the original CFSocket object instead of the information you passed to the function.

<a id="Discussion"></a>

## Discussion

The context version number for CFSocket is currently 0. Before calling this function, you need to initialize the `version` member of `context` to 0.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

# CFSocketGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFSocket object.

## Declaration

```objectivec
extern void CFSocketGetContext(CFSocketRef s, CFSocketContext *context);
```

## Parameters

- `s`: The CFSocket object to examine.
- `context`: A pointer to the structure into which the context information for `s` is to be copied. The information being returned is usually the same information you passed to [CFSocketCreate](cfsocketcreate%28______________%29.md), [CFSocketCreateConnectedToSocketSignature](cfsocketcreateconnectedtosocketsignature%28____________%29.md), [CFSocketCreateWithNative](cfsocketcreatewithnative%28__________%29.md), or [CFSocketCreateWithSocketSignature](cfsocketcreatewithsocketsignature%28__________%29.md) when creating the CFSocket object. However, if [CFSocketCreateWithNative](cfsocketcreatewithnative%28__________%29.md) returned a cached CFSocket object instead of creating a new object, `context` is filled with information from the original CFSocket object instead of the information you passed to the function.

<a id="Discussion"></a>

## Discussion

The context version number for CFSocket is currently 0. Before calling this function, you need to initialize the `version` member of `context` to 0.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.
