> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorcontrol/setcurrentselectedvalues](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorcontrol/setcurrentselectedvalues)

# SetCurrentSelectedValues

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the current selections of the selector.

## Declaration

```objectivec
kern_return_t SetCurrentSelectedValues(const IOUserAudioSelectorValue *in_values, size_t in_num_values);
```

## Parameters

- `in_values`: An array of [IOUserAudioSelectorValue](../iouseraudioselectorvalue.md) values to set as the current selection of the control.
- `in_num_values`: The number of values in `in_values`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the control’s selected values sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Selected Values

- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selections of the selector.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector values.
- [IOUserAudioSelectorValue](../iouseraudioselectorvalue.md): The type of values managed by a selector control.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Add value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes value descriptions from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Gets value descriptions used by the selector control.
- [IOUserAudioSelectorValueDescription](../iouseraudioselectorvaluedescription.md): A type that describes a value in a selection control.
