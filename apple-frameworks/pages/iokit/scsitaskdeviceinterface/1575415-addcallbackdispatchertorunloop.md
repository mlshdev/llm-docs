> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskdeviceinterface/1575415-addcallbackdispatchertorunloop](https://developer.apple.com/documentation/iokit/scsitaskdeviceinterface/1575415-addcallbackdispatchertorunloop)

# AddCallbackDispatcherToRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Convenience method to add asynchronous callback mechanisms to the CFRunLoop of choice.

## Declaration

```objectivec
IOReturn (*AddCallbackDispatcherToRunLoop)(void *self, CFRunLoopRef cfRunLoopRef);
```

## Parameters

- `self`: Pointer to a SCSITaskDeviceInterface instance.
- `cfRunLoopRef`: The CFRunLoop to which asynchronous callback notifications should be attached.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnNoMemory if a mach port could not be allocated and initialized properly.

<a id="discussion"></a>

## Discussion

Once a SCSITaskDeviceInterface is opened, the client may make synchronous or asynchronous requests to the device. This method creates and initializes a mach_port_t for receiving asynchronous callback notifications via the CFRunLoop mechanism.
