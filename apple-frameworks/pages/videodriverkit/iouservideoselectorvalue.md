> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoselectorvalue

# IOUserVideoSelectorValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 27.0+ beta

Selector value for controls.

## Declaration

```objectivec
typedef uint32_t IOUserVideoSelectorValue;
```

## See Also

### Accessing the value

- [SetCurrentSelectedValues](iouservideoselectorcontrol/setcurrentselectedvalues.md): Beta. Sets the current control value.
- [GetCurrentSelectedValues](iouservideoselectorcontrol/getcurrentselectedvalues.md): Beta. Gets the current selected values of the control.
- [GetControlValuesCount](iouservideoselectorcontrol/getcontrolvaluescount.md): Beta. Gets the number of available selector control values.
- [AddControlValueDescriptions](iouservideoselectorcontrol/addcontrolvaluedescriptions.md): Beta. Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](iouservideoselectorcontrol/removecontrolvaluedescriptions.md): Beta. Removes selector control values from the selector control.
- [GetControlValueDescriptions](iouservideoselectorcontrol/getcontrolvaluedescriptions.md): Beta. Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](iouservideoselectorvaluedescription.md): Beta. A selector control’s value and name.
