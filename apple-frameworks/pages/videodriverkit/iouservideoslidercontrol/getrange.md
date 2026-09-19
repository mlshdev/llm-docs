> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/getrange

# GetRange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetControlValue](setcontrolvalue.md): Beta. Sets the current control value.
- [GetControlValue](getcontrolvalue.md): Beta. Gets the current value of the control.
- [SetRange](setrange.md): Beta. Sets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): Beta. The minimum and maximum range for the slider value.
