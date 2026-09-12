> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskdeviceinterface/1575344-releaseexclusiveaccess](https://developer.apple.com/documentation/iokit/scsitaskdeviceinterface/1575344-releaseexclusiveaccess)

# ReleaseExclusiveAccess

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to release exclusive access to the device so that other clients can send commands to it.

## Declaration

```objectivec
IOReturn (*ReleaseExclusiveAccess)(void *self);
```

## Parameters

- `self`: Pointer to a SCSITaskDeviceInterface instance.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if exclusive access was released, else some appropriate error.

<a id="discussion"></a>

## Discussion

Once a SCSITaskDeviceInterface is opened, the client may request exclusive access to the device. Once the client has successfully gained exclusive access, it becomes the Logical Unit Driver and all in-kernel Logical Unit Drivers (if any are matched on the device) are quiesced. This method releases this access and unquiesces the in-kernel drivers (if any).
