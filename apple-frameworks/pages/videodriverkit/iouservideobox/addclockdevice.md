> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/addclockdevice](https://developer.apple.com/documentation/videodriverkit/iouservideobox/addclockdevice)

# AddClockDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Adds a clock device video box.

## Declaration

```objectivec
kern_return_t AddClockDevice(IOUserVideoClockDevice *in_clock_device);
```

## Parameters

- `in_clock_device`: IOUserVideoClockDevice associated with the box.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if device was successfully added.

<a id="discussion"></a>

## Discussion

The box doesn’t own the clock device. The clock device’s reference count will be incremented if it was successfully added.

## See Also

### Managing box contents

- [AddDevice](adddevice.md): Adds a video device to the video box.
- [RemoveDevice](removedevice.md): Removes a video device from the video box.
- [IOUserVideoDevice](../iouservideodevice.md): A video device.
- [RemoveClockDevice](removeclockdevice.md): Removes aa clock device from the video box.
- [IOUserVideoClockDevice](../iouservideoclockdevice.md): A clock device.
