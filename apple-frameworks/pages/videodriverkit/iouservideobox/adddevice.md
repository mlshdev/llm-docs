> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/adddevice](https://developer.apple.com/documentation/videodriverkit/iouservideobox/adddevice)

# AddDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Adds a video device to the video box.

## Declaration

```objectivec
kern_return_t AddDevice(IOUserVideoDevice *in_device);
```

## Parameters

- `in_device`: IOUserVideoDevice associated with the box.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if device was successfully added.

<a id="discussion"></a>

## Discussion

The box doesn’t own the device. The device’s reference count will be incremented if it was successfully added.

## See Also

### Managing box contents

- [RemoveDevice](removedevice.md): Removes a video device from the video box.
- [IOUserVideoDevice](../iouservideodevice.md): A video device.
- [AddClockDevice](addclockdevice.md): Adds a clock device video box.
- [RemoveClockDevice](removeclockdevice.md): Removes aa clock device from the video box.
- [IOUserVideoClockDevice](../iouservideoclockdevice.md): A clock device.
