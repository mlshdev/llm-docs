> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/setcontrolvalue

# SetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetControlValue](getcontrolvalue.md): Beta. Gets the current value of the control.
- [SetRange](setrange.md): Beta. Sets the current range of the slider control.
- [GetRange](getrange.md): Beta. Gets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): Beta. The minimum and maximum range for the slider value.
