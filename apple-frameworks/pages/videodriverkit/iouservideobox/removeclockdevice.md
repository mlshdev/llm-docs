> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/removeclockdevice

# RemoveClockDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [AddDevice](adddevice.md): Beta. Adds a video device to the video box.
- [RemoveDevice](removedevice.md): Beta. Removes a video device from the video box.
- [IOUserVideoDevice](../iouservideodevice.md): Beta. A video device.
- [AddClockDevice](addclockdevice.md): Beta. Adds a clock device video box.
- [IOUserVideoClockDevice](../iouservideoclockdevice.md): Beta. A clock device.
