> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575371-settaskcompletioncallback](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575371-settaskcompletioncallback)

# SetTaskCompletionCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to set the asynchronous completion routine for the SCSITask.

## Declaration

```objectivec
IOReturn (*SetTaskCompletionCallback)(void *task, SCSITaskCallbackFunction callback, void *refCon);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `callback`: SCSITaskCallbackFunction to be called upon completion of the SCSITask.
- `refCon`: A value to be returned to the caller upon completion of the routine. This field is not used by the SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess, kIOReturnError, or kIOReturnNotPermitted if the client has not called AddCallbackDispatcherToRunLoop on the SCSITaskDeviceInterface.

<a id="discussion"></a>

## Discussion

This method can be used to set the asynchronous completion routine for the SCSITask.
