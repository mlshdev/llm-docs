> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoslidercontrol/setcontrolvalue](https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/setcontrolvalue)

# SetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current control value.

## Declaration

```objectivec
kern_return_t SetControlValue(uint32_t in_control_value);
```

## Parameters

- `in_control_value`: uint32_t slider control value

<a id="discussion"></a>

## Discussion

Changing the control value will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [GetControlValue](getcontrolvalue.md): Gets the current value of the control.
- [SetRange](setrange.md): Sets the current range of the slider control.
- [GetRange](getrange.md): Gets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): The minimum and maximum range for the slider value.
