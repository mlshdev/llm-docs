> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorcontrol/getcontrolvaluescount](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol/getcontrolvaluescount)

# GetControlValuesCount

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the number of available selector control values.

## Declaration

```objectivec
size_t GetControlValuesCount();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the selector control value count.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](setcurrentselectedvalues.md): Sets the current control value.
- [GetCurrentSelectedValues](getcurrentselectedvalues.md): Gets the current selected values of the control.
- [IOUserVideoSelectorValue](../iouservideoselectorvalue.md): Selector value for controls.
- [AddControlValueDescriptions](addcontrolvaluedescriptions.md): Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](removecontrolvaluedescriptions.md): Removes selector control values from the selector control.
- [GetControlValueDescriptions](getcontrolvaluedescriptions.md): Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](../iouservideoselectorvaluedescription.md): A selector control’s value and name.
