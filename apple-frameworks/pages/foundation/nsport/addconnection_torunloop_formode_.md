> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsport/addconnection:torunloop:formode:](https://developer.apple.com/documentation/foundation/nsport/addconnection:torunloop:formode:)

# addConnection:toRunLoop:forMode:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Adds the receiver to the list of ports monitored by a given run loop for the given input mode.

> Use [NSXPCConnection](../nsxpcconnection.md) instead.

## Declaration

```objectivec
- (void) addConnection:(NSConnection *) conn toRunLoop:(NSRunLoop *) runLoop forMode:(NSRunLoopMode) mode;
```

## Parameters

- `conn`: The connection object that invoked this method.
- `runLoop`: The run loop to which to add the receiver.
- `mode`: The run loop mode in which to add the receiver.

<a id="Discussion"></a>

## Discussion

You should not call this method directly. The method is provided for subclassers who wish to provide their own custom types of `NSPort`. The `NSConnection` object, `conn`, calls this method at the appropriate times.

## See Also

### Related Documentation

- [addPort:forMode:](../runloop/add%28__formode_%29-6z982.md): Adds a port as an input source to the specified mode of the run loop.

### Creating connections

- [removeConnection:fromRunLoop:forMode:](removeconnection_fromrunloop_formode_.md): Deprecated. Removes the receiver from the list of ports monitored by `runLoop` in the given input mode, `mode`.
