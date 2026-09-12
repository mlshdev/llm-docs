> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorcontrol/getcontrolvaluedescriptions](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorcontrol/getcontrolvaluedescriptions)

# GetControlValueDescriptions

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets value descriptions used by the selector control.

## Declaration

```objectivec
size_t GetControlValueDescriptions(IOUserAudioSelectorValueDescription *out_control_value_descriptions, size_t in_num_value_descriptions);
```

## Parameters

- `out_control_value_descriptions`: A pointer to a buffer of type [IOUserAudioSelectorValueDescription](../iouseraudioselectorvaluedescription.md), with a size of `in_num_value_descriptions`. On return, this buffer contains the value descriptions.
- `in_num_value_descriptions`: The number of descriptions in `out_control_value_descriptions`.

<a id="return-value"></a>

## Return Value

The number of values populated in the `out_control_value_descriptions` buffer.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Accessing the Selected Values

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Sets the current selections of the selector.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selections of the selector.
- [GetControlValuesCount](getcontrolvaluescount.md): Gets the number of available selector values.
- [IOUserAudioSelectorValue](../iouseraudioselectorvalue.md): The type of values managed by a selector control.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Add value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes value descriptions from the selector control.
- [IOUserAudioSelectorValueDescription](../iouseraudioselectorvaluedescription.md): A type that describes a value in a selection control.
