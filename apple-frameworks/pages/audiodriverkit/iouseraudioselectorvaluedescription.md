> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorvaluedescription](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorvaluedescription)

# IOUserAudioSelectorValueDescription

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 21.0+

A type that describes a value in a selection control.

## Declaration

```objectivec
struct IOUserAudioSelectorValueDescription;
```

## Topics

### Accessing Description Properties

- [m_name](iouseraudioselectorvaluedescription/m_name.md): The name of the selector value.
- [m_value](iouseraudioselectorvaluedescription/m_value.md): The control value matched by this description.
- [IOUserAudioSelectorValue](iouseraudioselectorvalue.md): The type of values managed by a selector control.

## See Also

### Accessing the Selected Values

- [SetCurrentSelectedValues](iouseraudioselectorcontrol/setcurrentselectedvalues.md): Sets the current selections of the selector.
- [GetCurrentSelectedValues](iouseraudioselectorcontrol/getcurrentselectedvalues.md): Gets the current selections of the selector.
- [GetControlValuesCount](iouseraudioselectorcontrol/getcontrolvaluescount.md): Gets the number of available selector values.
- [IOUserAudioSelectorValue](iouseraudioselectorvalue.md): The type of values managed by a selector control.
- [AddControlValueDescriptions](iouseraudioselectorcontrol/addcontrolvaluedescriptions.md): Add value descriptions to the selector control.
- [RemoveControlValueDescriptions](iouseraudioselectorcontrol/removecontrolvaluedescriptions.md): Removes value descriptions from the selector control.
- [GetControlValueDescriptions](iouseraudioselectorcontrol/getcontrolvaluedescriptions.md): Gets value descriptions used by the selector control.
