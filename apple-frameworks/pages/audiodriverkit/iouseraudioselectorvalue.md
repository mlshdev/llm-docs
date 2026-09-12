> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioselectorvalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudioselectorvalue)

# IOUserAudioSelectorValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 21.0+

The type of values managed by a selector control.

## Declaration

```objectivec
typedef uint32_t IOUserAudioSelectorValue;
```

<a id="Discussion"></a>

## Discussion

AudioDriverKit selectors use [uint32_t](https://developer.apple.com/documentation/kernel/uint32_t) values.

## See Also

### Accessing the Selected Values

- [SetCurrentSelectedValues](iouseraudioselectorcontrol/setcurrentselectedvalues.md): Sets the current selections of the selector.
- [GetCurrentSelectedValues](iouseraudioselectorcontrol/getcurrentselectedvalues.md): Gets the current selections of the selector.
- [GetControlValuesCount](iouseraudioselectorcontrol/getcontrolvaluescount.md): Gets the number of available selector values.
- [AddControlValueDescriptions](iouseraudioselectorcontrol/addcontrolvaluedescriptions.md): Add value descriptions to the selector control.
- [RemoveControlValueDescriptions](iouseraudioselectorcontrol/removecontrolvaluedescriptions.md): Removes value descriptions from the selector control.
- [GetControlValueDescriptions](iouseraudioselectorcontrol/getcontrolvaluedescriptions.md): Gets value descriptions used by the selector control.
- [IOUserAudioSelectorValueDescription](iouseraudioselectorvaluedescription.md): A type that describes a value in a selection control.
