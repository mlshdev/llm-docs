> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/getcurrentselectedvalues](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/getcurrentselectedvalues)

# GetCurrentSelectedValues

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current selected values of the control.

## Declaration

```objectivec
size_t GetCurrentSelectedValues(IOUserVideoSelectorValue *out_values, size_t in_num_values);
```

## Parameters

- `out_values`: Pointer to an array of IOUserVideoSelectorValues that will be updated with the currently selected control values
- `in_num_values`: The number of IOUserVideoSelectorValues in the out_values array

<a id="return-value"></a>

## Return Value

Size_t indicating the number of values returning in out_values

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Sets the current control value.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Selector value for controls.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector control values.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes selector control values from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): A selector control’s value and name.
