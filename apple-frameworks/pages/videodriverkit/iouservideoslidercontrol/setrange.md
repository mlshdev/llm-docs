> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoslidercontrol/setrange](https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/setrange)

# SetRange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current range of the slider control.

## Declaration

```objectivec
kern_return_t SetRange(IOUserVideoSliderRange in_range);
```

## Parameters

- `in_range`: IOUserVideoSliderRange slider control range

<a id="discussion"></a>

## Discussion

Changing the range will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetControlValue](setcontrolvalue.md): Sets the current control value.
- [GetControlValue](getcontrolvalue.md): Gets the current value of the control.
- [GetRange](getrange.md): Gets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): The minimum and maximum range for the slider value.
