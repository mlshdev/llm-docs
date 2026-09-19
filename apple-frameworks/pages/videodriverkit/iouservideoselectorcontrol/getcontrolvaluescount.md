> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/getcontrolvaluescount

# GetControlValuesCount

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the number of available selector control values.

## Declaration

```objectivec
size_t GetControlValuesCount();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the selector control value count.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Beta. Sets the current control value.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Beta. Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Beta. Selector value for controls.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Beta. Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Beta. Removes selector control values from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Beta. Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): Beta. A selector control’s value and name.
