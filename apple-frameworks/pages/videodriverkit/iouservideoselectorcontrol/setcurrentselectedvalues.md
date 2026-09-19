> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/setcurrentselectedvalues

# SetCurrentSelectedValues

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the current control value.

## Declaration

```objectivec
kern_return_t SetCurrentSelectedValues(const IOUserVideoSelectorValue *in_values, size_t in_num_values);
```

## Parameters

- `in_values`: Pointer to an array of IOUserVideoSelectorValues
- `in_num_values`: Number of IOUserVideoSelectorValues in in_values

<a id="discussion"></a>

## Discussion

Changing the control value will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Beta. Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Beta. Selector value for controls.
- [GetControlValuesCount](getcontrolvaluescount.md): Beta. Gets the number of available selector control values.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Beta. Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Beta. Removes selector control values from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Beta. Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): Beta. A selector control’s value and name.
