> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/removecontrol](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/removecontrol)

# RemoveControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Removes a user video control from the video clock device.

## Declaration

```objectivec
kern_return_t RemoveControl(IOUserVideoControl *in_control);
```

## Parameters

- `in_control`: IOUserVideoControl to remove from the clock device.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if control was successfully removed.

<a id="discussion"></a>

## Discussion

The control’s reference count will be decremented if it was successfully removed from the clock device.

## See Also

### Managing video controls

- [AddControl](addcontrol.md): Adds a video control to the video clock device.
- [IOUserVideoControl](../iouservideocontrol.md): A base class for control objects.
