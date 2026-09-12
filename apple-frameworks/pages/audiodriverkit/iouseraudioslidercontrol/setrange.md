> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioslidercontrol/setrange](https://developer.apple.com/documentation/audiodriverkit/iouseraudioslidercontrol/setrange)

# SetRange

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the range of possible values for the slider.

## Declaration

```objectivec
kern_return_t SetRange(IOUserAudioSliderRange in_range);
```

## Parameters

- `in_range`: The range to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the range sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Value

- [SetControlValue](setcontrolvalue.md): Sets the value of the slider control.
- [GetControlValue](getcontrolvalue.md): Gets the value of the slider control.
- [GetRange](getrange.md): Gets the range of possible values for the slider.
- [IOUserAudioSliderRange](../iouseraudiosliderrange.md): A type that indicates minimum and maximum values for slider controls.
