> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/setcurrentselectedvalues](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/setcurrentselectedvalues)

# SetCurrentSelectedValues

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Selector value for controls.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector control values.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes selector control values from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): A selector control’s value and name.
