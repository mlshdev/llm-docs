> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportinvalidate(_:)](https://developer.apple.com/documentation/corefoundation/cfmachportinvalidate(_:))

# CFMachPortInvalidate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFMachPort object, stopping it from receiving any more messages.

## Declaration

```swift
func CFMachPortInvalidate(_ port: CFMachPort!)
```

## Parameters

- `port`: The CFMachPort object to invalidate.

<a id="Discussion"></a>

## Discussion

Invalidating a CFMachPort object prevents the port from ever receiving any more messages. The CFMachPort object is not deallocated, though. If the port has not already been invalidated, the port’s invalidation callback function is invoked, if one has been set with [CFMachPortSetInvalidationCallBack(\_:\_:)](cfmachportsetinvalidationcallback%28____%29.md). The [CFMachPortContext](cfmachportcontext.md)  `info` information for `port` is also released, if a release callback was specified in the port’s context structure. Finally, if a run loop source was created for `port`, the run loop source is invalidated, as well.

If the underlying Mach port is destroyed, the CFMachPort object is automatically invalidated.

## See Also

### Configuring a CFMachPort Object

- [CFMachPortCreateRunLoopSource(\_:\_:\_:)](cfmachportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMachPort object.
- [CFMachPortSetInvalidationCallBack(\_:\_:)](cfmachportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMachPort object is invalidated.

# CFMachPortInvalidate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFMachPort object, stopping it from receiving any more messages.

## Declaration

```objectivec
extern void CFMachPortInvalidate(CFMachPortRef port);
```

## Parameters

- `port`: The CFMachPort object to invalidate.

<a id="Discussion"></a>

## Discussion

Invalidating a CFMachPort object prevents the port from ever receiving any more messages. The CFMachPort object is not deallocated, though. If the port has not already been invalidated, the port’s invalidation callback function is invoked, if one has been set with [CFMachPortSetInvalidationCallBack](cfmachportsetinvalidationcallback%28____%29.md). The [CFMachPortContext](cfmachportcontext.md)  `info` information for `port` is also released, if a release callback was specified in the port’s context structure. Finally, if a run loop source was created for `port`, the run loop source is invalidated, as well.

If the underlying Mach port is destroyed, the CFMachPort object is automatically invalidated.

## See Also

### Configuring a CFMachPort Object

- [CFMachPortCreateRunLoopSource](cfmachportcreaterunloopsource%28______%29.md): Creates a CFRunLoopSource object for a CFMachPort object.
- [CFMachPortSetInvalidationCallBack](cfmachportsetinvalidationcallback%28____%29.md): Sets the callback function invoked when a CFMachPort object is invalidated.
