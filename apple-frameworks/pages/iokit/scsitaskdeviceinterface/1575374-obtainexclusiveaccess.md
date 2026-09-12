> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskdeviceinterface/1575374-obtainexclusiveaccess](https://developer.apple.com/documentation/iokit/scsitaskdeviceinterface/1575374-obtainexclusiveaccess)

# ObtainExclusiveAccess

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to obtain exclusive access to the device so that SCSITasks can be sent to it.

## Declaration

```objectivec
IOReturn (*ObtainExclusiveAccess)(void *self);
```

## Parameters

- `self`: Pointer to a SCSITaskDeviceInterface instance.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if exclusive access was granted, else if media is still mounted it returns kIOReturnBusy. If another client already has exclusive access, kIOReturnExclusiveAccess is returned.

<a id="discussion"></a>

## Discussion

Once a SCSITaskDeviceInterface is opened, the client may request exclusive access to the device. Once the client has successfully gained exclusive access, it becomes the Logical Unit Driver and all in-kernel Logical Unit Drivers are quiesced.
