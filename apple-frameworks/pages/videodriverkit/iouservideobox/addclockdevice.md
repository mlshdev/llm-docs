> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/addclockdevice

# AddClockDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [AddDevice](adddevice.md): Beta. Adds a video device to the video box.
- [RemoveDevice](removedevice.md): Beta. Removes a video device from the video box.
- [IOUserVideoDevice](../iouservideodevice.md): Beta. A video device.
- [RemoveClockDevice](removeclockdevice.md): Beta. Removes aa clock device from the video box.
- [IOUserVideoClockDevice](../iouservideoclockdevice.md): Beta. A clock device.
