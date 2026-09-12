> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/addcontrol](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/addcontrol)

# AddControl

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Adds a control to the clock device.

## Declaration

```objectivec
kern_return_t AddControl(IOUserAudioControl *in_control);
```

## Parameters

- `in_control`: The [IOUserAudioControl](../iouseraudiocontrol.md) to add to the clock device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If adding the control succeeds, the control’s reference count increments by one.

## See Also

### Managing Audio Controls

- [RemoveControl](removecontrol.md): Removes a control from the clock device.
- [IOUserAudioControl](../iouseraudiocontrol.md): The base class for audio control objects.
