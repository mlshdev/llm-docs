> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/addcontrol](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/addcontrol)

# AddControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Adds a video control to the video clock device.

## Declaration

```objectivec
kern_return_t AddControl(IOUserVideoControl *in_control);
```

## Parameters

- `in_control`: IOUserVideoControl to add to the clock device.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if control was successfully added.

<a id="discussion"></a>

## Discussion

The control’s reference count will be incremented if it was successfully added to the clock device.

## See Also

### Managing video controls

- [RemoveControl](removecontrol.md): Removes a user video control from the video clock device.
- [IOUserVideoControl](../iouservideocontrol.md): A base class for control objects.
