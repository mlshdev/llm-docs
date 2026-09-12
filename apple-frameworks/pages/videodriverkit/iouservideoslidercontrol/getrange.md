> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoslidercontrol/getrange](https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/getrange)

# GetRange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current range of the slider control.

## Declaration

```objectivec
IOUserVideoSliderRange GetRange();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetControlValue](setcontrolvalue.md): Sets the current control value.
- [GetControlValue](getcontrolvalue.md): Gets the current value of the control.
- [SetRange](setrange.md): Sets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): The minimum and maximum range for the slider value.
