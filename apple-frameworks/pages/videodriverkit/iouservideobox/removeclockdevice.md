> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/removeclockdevice](https://developer.apple.com/documentation/videodriverkit/iouservideobox/removeclockdevice)

# RemoveClockDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Removes aa clock device from the video box.

## Declaration

```objectivec
kern_return_t RemoveClockDevice(IOUserVideoClockDevice *in_clock_device);
```

## Parameters

- `in_clock_device`: IOUserVideoClockDevice associated with the box.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if clock device was successfully removed.

<a id="discussion"></a>

## Discussion

The clock device’s reference count will be decremented if it was successfully removed.

## See Also

### Managing box contents

- [AddDevice](adddevice.md): Adds a video device to the video box.
- [RemoveDevice](removedevice.md): Removes a video device from the video box.
- [IOUserVideoDevice](../iouservideodevice.md): A video device.
- [AddClockDevice](addclockdevice.md): Adds a clock device video box.
- [IOUserVideoClockDevice](../iouservideoclockdevice.md): A clock device.
