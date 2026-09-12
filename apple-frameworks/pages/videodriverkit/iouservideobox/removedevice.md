> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/removedevice](https://developer.apple.com/documentation/videodriverkit/iouservideobox/removedevice)

# RemoveDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Removes a video device from the video box.

## Declaration

```objectivec
kern_return_t RemoveDevice(IOUserVideoDevice *in_device);
```

## Parameters

- `in_device`: IOUserVideoDevice associated with the box.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if device was successfully removed.

<a id="discussion"></a>

## Discussion

The device’s reference count will be decremented if it was successfully removed.

## See Also

### Managing box contents

- [AddDevice](adddevice.md): Adds a video device to the video box.
- [IOUserVideoDevice](../iouservideodevice.md): A video device.
- [AddClockDevice](addclockdevice.md): Adds a clock device video box.
- [RemoveClockDevice](removeclockdevice.md): Removes aa clock device from the video box.
- [IOUserVideoClockDevice](../iouservideoclockdevice.md): A clock device.
