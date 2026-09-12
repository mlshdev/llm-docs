> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/getcontrolvaluedescriptions](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/getcontrolvaluedescriptions)

# GetControlValueDescriptions

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the selector values for the control.

## Declaration

```objectivec
size_t GetControlValueDescriptions(IOUserVideoSelectorValueDescription *out_control_value_descriptions, size_t in_num_value_descriptions);
```

## Parameters

- `out_control_value_descriptions`: Pointer to an array of IOUserVideoSelectorValueDescriptions
- `in_num_value_descriptions`: Size_t for the number of values to store into out_control_values.

<a id="return-value"></a>

## Return Value

Size_t of number of values written to out_control_values.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the selector control value description.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Sets the current control value.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Selector value for controls.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector control values.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes selector control values from the selector control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): A selector control’s value and name.
