> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorcontrol/addcontrolvaluedescriptions](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorcontrol/addcontrolvaluedescriptions)

# AddControlValueDescriptions

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Add value descriptions to the selector control.

## Declaration

```objectivec
kern_return_t AddControlValueDescriptions(const IOUserAudioSelectorValueDescription *in_value_descriptions, size_t in_num_value_descriptions);
```

## Parameters

- `in_value_descriptions`: An array of [IOUserAudioSelectorValueDescription](../iouseraudioselectorvaluedescription.md) values to add as value descriptions for the selector.
- `in_num_value_descriptions`: The number of descriptions in `in_value_descriptions`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

## See Also

### Accessing the Selected Values

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Sets the current selections of the selector.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selections of the selector.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector values.
- [IOUserAudioSelectorValue](../iouseraudioselectorvalue.md): The type of values managed by a selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes value descriptions from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Gets value descriptions used by the selector control.
- [IOUserAudioSelectorValueDescription](../iouseraudioselectorvaluedescription.md): A type that describes a value in a selection control.
