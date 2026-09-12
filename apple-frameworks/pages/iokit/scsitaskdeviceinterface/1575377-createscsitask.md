> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskdeviceinterface/1575377-createscsitask](https://developer.apple.com/documentation/iokit/scsitaskdeviceinterface/1575377-createscsitask)

# CreateSCSITask

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to create SCSITasks.

## Declaration

```objectivec
SCSITaskInterface **(*CreateSCSITask)(void *self);
```

## Parameters

- `self`: Pointer to a SCSITaskDeviceInterface instance.

<a id="return_value"></a>

## Return Value

Returns a handle to an instance of a SCSITaskInterface or NULL if one could not be allocated.

<a id="discussion"></a>

## Discussion

Once a SCSITaskDeviceInterface is opened, the client may request exclusive access to the device. Once the client has successfully gained exclusive access, it becomes the Logical Unit Driver. It then can use this method to allocate SCSITasks to be sent to the device.
