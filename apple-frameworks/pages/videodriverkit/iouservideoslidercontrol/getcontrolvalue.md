> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoslidercontrol/getcontrolvalue

# GetControlValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetControlValue](setcontrolvalue.md): Beta. Sets the current control value.
- [SetRange](setrange.md): Beta. Sets the current range of the slider control.
- [GetRange](getrange.md): Beta. Gets the current range of the slider control.
- [IOUserVideoSliderRange](../iouservideosliderrange.md): Beta. The minimum and maximum range for the slider value.
