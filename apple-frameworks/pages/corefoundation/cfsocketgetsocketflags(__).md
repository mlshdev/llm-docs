> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketgetsocketflags(_:)](https://developer.apple.com/documentation/corefoundation/cfsocketgetsocketflags(_:))

# CFSocketGetSocketFlags(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns flags that control certain behaviors of a CFSocket object.

## Declaration

```swift
func CFSocketGetSocketFlags(_ s: CFSocket!) -> CFOptionFlags
```

## Parameters

- `s`: The CFSocket to examine.

<a id="return-value"></a>

## Return Value

A bitwise-OR combination of flags controlling the behavior of `s`. See [CFSocket Flags](1560944-cfsocket-flags.md) for the list of available flags.

<a id="Discussion"></a>

## Discussion

See [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md) for details on what the flags of a CFSocket mean.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress(\_:)](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress(\_:)](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext(\_:\_:)](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative(\_:)](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketSetAddress(\_:\_:)](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.

# CFSocketGetSocketFlags (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns flags that control certain behaviors of a CFSocket object.

## Declaration

```objectivec
extern CFOptionFlags CFSocketGetSocketFlags(CFSocketRef s);
```

## Parameters

- `s`: The CFSocket to examine.

<a id="return-value"></a>

## Return Value

A bitwise-OR combination of flags controlling the behavior of `s`. See [CFSocket Flags](1560944-cfsocket-flags.md) for the list of available flags.

<a id="Discussion"></a>

## Discussion

See [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md) for details on what the flags of a CFSocket mean.

## See Also

### Configuring Sockets

- [CFSocketCopyAddress](cfsocketcopyaddress%28__%29.md): Returns the local address of a CFSocket object.
- [CFSocketCopyPeerAddress](cfsocketcopypeeraddress%28__%29.md): Returns the remote address to which a CFSocket object is connected.
- [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md): Disables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md): Enables the callback function of a CFSocket object for certain types of socket activity.
- [CFSocketGetContext](cfsocketgetcontext%28____%29.md): Returns the context information for a CFSocket object.
- [CFSocketGetNative](cfsocketgetnative%28__%29.md): Returns the native socket associated with a CFSocket object.
- [CFSocketSetAddress](cfsocketsetaddress%28____%29.md): Binds a local address to a CFSocket object and configures it for listening.
- [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md): Sets flags that control certain behaviors of a CFSocket object.
