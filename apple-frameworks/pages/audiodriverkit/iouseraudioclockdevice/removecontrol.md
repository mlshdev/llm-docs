> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/removecontrol](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/removecontrol)

# RemoveControl

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Removes a control from the clock device.

## Declaration

```objectivec
kern_return_t RemoveControl(IOUserAudioControl *in_control);
```

## Parameters

- `in_control`: The [IOUserAudioControl](../iouseraudiocontrol.md) to remove from the clock device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If removing the control succeeds, the control’s reference count decrements by one.

## See Also

### Managing Audio Controls

- [AddControl](addcontrol.md): Adds a control to the clock device.
- [IOUserAudioControl](../iouseraudiocontrol.md): The base class for audio control objects.
