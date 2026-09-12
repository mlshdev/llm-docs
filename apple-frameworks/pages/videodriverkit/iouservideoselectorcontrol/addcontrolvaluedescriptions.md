> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/addcontrolvaluedescriptions](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/addcontrolvaluedescriptions)

# AddControlValueDescriptions

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Adds control value descriptions to the selector control.

## Declaration

```objectivec
kern_return_t AddControlValueDescriptions(const IOUserVideoSelectorValueDescription *in_value_descriptions, size_t in_num_value_descriptions);
```

## Parameters

- `in_value_descriptions`: Pointer to an array of IOUserVideoSelectorValueDescriptions.
- `in_num_value_descriptions`: The number of items in the in_value_descriptions parameter.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if the method successfully adds the value descriptions.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Sets the current control value.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Selector value for controls.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector control values.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes selector control values from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): A selector control’s value and name.
