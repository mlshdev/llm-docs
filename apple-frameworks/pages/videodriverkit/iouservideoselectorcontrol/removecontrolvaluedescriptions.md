> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/removecontrolvaluedescriptions

# RemoveControlValueDescriptions

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Removes selector control values from the selector control.

## Declaration

```objectivec
kern_return_t RemoveControlValueDescriptions(const IOUserVideoSelectorValueDescription *in_value_descriptions, size_t in_num_value_descriptions);
```

## Parameters

- `in_value_descriptions`: Pointer to an array of IOUserVideoSelectorValueDescriptions
- `in_num_value_descriptions`: Size_t of number of values in the in_value_descriptions parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if selector control values were successfully removed.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Beta. Sets the current control value.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Beta. Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Beta. Selector value for controls.
- [GetControlValuesCount](getcontrolvaluescount.md): Beta. Gets the number of available selector control values.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Beta. Adds control value descriptions to the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Beta. Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): Beta. A selector control’s value and name.
