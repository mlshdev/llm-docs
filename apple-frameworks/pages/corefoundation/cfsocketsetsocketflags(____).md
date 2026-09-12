> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketsetsocketflags(_:_:)](https://developer.apple.com/documentation/corefoundation/cfsocketsetsocketflags(_:_:))

# CFSocketSetSocketFlags(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets flags that control certain behaviors of a CFSocket object.

## Declaration

```swift
func CFSocketSetSocketFlags(_ s: CFSocket!, _ flags: CFOptionFlags)
```

## Parameters

- `s`: The CFSocket object to modify.
- `flags`: A bitwise-OR combination of flags controlling the behavior of `s`. See [CFSocket Flags](1560944-cfsocket-flags.md) for the list of available flags.

<a id="Discussion"></a>

## Discussion

The `flags` argument controls whether callbacks of a given type are automatically reenabled after they are triggered, and whether the underlying native socket is closed when `s` is invalidated.

To set and clear flags, you must set and mask bits in the flag set, respectively. First, call [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md), then modify the value returned. For example:

```objc
    CFOptionFlags sockopt = CFSocketGetSocketFlags (mysock );
 
    /* Set the read callback to be automatically reenabled. */
    sockopt |= kCFSocketAutomaticallyReenableReadCallBack;
 
    /* Clear the close-on-invalidate flag. */
    sockopt &= ~kCFSocketCloseOnInvalidate;
 
    CFSocketSetSocketFlags(s, sockopt);
```

By default `kCFSocketReadCallBack`, `kCFSocketAcceptCallBack`, and `kCFSocketDataCallBack` callbacks are automatically reenabled after they are triggered, whereas `kCFSocketWriteCallBack` callbacks are not; `kCFSocketConnectCallBack` callbacks can only occur once, so they cannot be reenabled.

If a callback is automatically reenabled, it is called every time the condition becomes true. For example, a read callback is called as long as there is data on the socket waiting to be read. If a callback is not automatically reenabled, then it gets called exactly once, and is not called again until you manually reenable that callback by calling [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md).

Be careful about automatically reenabling read and write callbacks. If you do, the callbacks will be called repeatedly as long as the socket remains readable or writable, respectively.

Be sure to set these flags only for callback types that your CFSocket object actually possesses; the result of setting them for other callback types is undefined.

By default the underlying native socket is closed when `s` is invalidated. To disable that, clear (zero) the `kCFSocketCloseOnInvalidate` flag. This can be useful when you want to destroy a CFSocket object but continue to use the underlying native socket. The CFSocket object must still be invalidated when you no longer need it.

Do not close the underlying native socket without invalidating the CFSocket object first.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags(\_:)](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.

# CFSocketSetSocketFlags (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets flags that control certain behaviors of a CFSocket object.

## Declaration

```objectivec
extern void CFSocketSetSocketFlags(CFSocketRef s, CFOptionFlags flags);
```

## Parameters

- `s`: The CFSocket object to modify.
- `flags`: A bitwise-OR combination of flags controlling the behavior of `s`. See [CFSocket Flags](1560944-cfsocket-flags.md) for the list of available flags.

<a id="Discussion"></a>

## Discussion

The `flags` argument controls whether callbacks of a given type are automatically reenabled after they are triggered, and whether the underlying native socket is closed when `s` is invalidated.

To set and clear flags, you must set and mask bits in the flag set, respectively. First, call [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md), then modify the value returned. For example:

```objc
    CFOptionFlags sockopt = CFSocketGetSocketFlags (mysock );
 
    /* Set the read callback to be automatically reenabled. */
    sockopt |= kCFSocketAutomaticallyReenableReadCallBack;
 
    /* Clear the close-on-invalidate flag. */
    sockopt &= ~kCFSocketCloseOnInvalidate;
 
    CFSocketSetSocketFlags(s, sockopt);
```

By default `kCFSocketReadCallBack`, `kCFSocketAcceptCallBack`, and `kCFSocketDataCallBack` callbacks are automatically reenabled after they are triggered, whereas `kCFSocketWriteCallBack` callbacks are not; `kCFSocketConnectCallBack` callbacks can only occur once, so they cannot be reenabled.

If a callback is automatically reenabled, it is called every time the condition becomes true. For example, a read callback is called as long as there is data on the socket waiting to be read. If a callback is not automatically reenabled, then it gets called exactly once, and is not called again until you manually reenable that callback by calling [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md).

Be careful about automatically reenabling read and write callbacks. If you do, the callbacks will be called repeatedly as long as the socket remains readable or writable, respectively.

Be sure to set these flags only for callback types that your CFSocket object actually possesses; the result of setting them for other callback types is undefined.

By default the underlying native socket is closed when `s` is invalidated. To disable that, clear (zero) the `kCFSocketCloseOnInvalidate` flag. This can be useful when you want to destroy a CFSocket object but continue to use the underlying native socket. The CFSocket object must still be invalidated when you no longer need it.

Do not close the underlying native socket without invalidating the CFSocket object first.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketGetSocketFlags](cfsocketgetsocketflags%28__%29.md): Returns flags that control certain behaviors of a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
