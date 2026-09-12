> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508787-addcallbackdispatchertorunloop](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508787-addcallbackdispatchertorunloop)

# addCallbackDispatcherToRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Adds a dispatcher for kernel callbacks to the specified runloop.

## Declaration

```objectivec
IOReturn (*addCallbackDispatcherToRunLoop)(void *self, CFRunLoopRef cfRunLoopRef);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibUnitInterface.
- `cfRunLoopRef`: Reference to a run loop.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success.

<a id="discussion"></a>

## Discussion

The user space portions of the AVC API communicate with the in-kernel services by messaging the kernel. Similarly, the kernel messages the user space services in response. These responses need to be picked up by a piece of code. This call adds that code to the specified run loop. Most drivers will call this method on the run loop that was created when your task was created. To avoid deadlock you must avoid sleeping (or spin waiting) the run loop to wait for AVC response. If you do this the dispatcher will never get to run and you will wait forever.
