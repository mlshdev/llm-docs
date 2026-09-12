> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoslidercontrol/getcontrolvalue](https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/getcontrolvalue)

# GetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current value of the control.

## Declaration

```objectivec
uint32_t GetControlValue();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetControlValue](setcontrolvalue.md): Sets the current control value.
- [SetRange](setrange.md): Sets the current range of the slider control.
- [GetRange](getrange.md): Gets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): The minimum and maximum range for the slider value.
