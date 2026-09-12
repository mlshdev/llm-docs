> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575360-executetaskasync](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575360-executetaskasync)

# ExecuteTaskAsync

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to execute the SCSITask asynchronously.

## Declaration

```objectivec
IOReturn (*ExecuteTaskAsync)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns a valid IOReturn code such as kIOReturnSuccess, kIOReturnError, kIOReturnVMError, kIOReturnCannotWire, etc. It will return kIOReturnNotPermitted if the client has not called AddCallbackDispatcherToRunLoop on the SCSITaskDeviceInterface. NOTE: IOReturn is defined as kern_return_t and as such, you may get errors back that do not fall under the IOKit subsystem error domain (sys_iokit) defined in IOReturn.h.

<a id="discussion"></a>

## Discussion

This method can be used to execute the SCSITask asynchronously.
