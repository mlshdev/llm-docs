> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoselectorvaluedescription](https://developer.apple.com/documentation/videodriverkit/iouservideoselectorvaluedescription)

# IOUserVideoSelectorValueDescription

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+

A selector control’s value and name.

## Declaration

```objectivec
struct IOUserVideoSelectorValueDescription;
```

<a id="overview"></a>

## Overview

`m_value` is the IOUserVideoSelectorValue of the control. `m_name` is the name of the control value.

## Topics

### Accessing description properties

- [m_name](iouservideoselectorvaluedescription/m_name.md)
- [m_value](iouservideoselectorvaluedescription/m_value.md)
- [IOUserVideoSelectorValue](iouservideoselectorvalue.md): Selector value for controls.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](iouservideoselectorcontrol/setcurrentselectedvalues.md): Sets the current control value.
- [GetCurrentSelectedValues](iouservideoselectorcontrol/getcurrentselectedvalues.md): Gets the current selected values of the control.
- [IOUserVideoSelectorValue](iouservideoselectorvalue.md): Selector value for controls.
- [GetControlValuesCount](iouservideoselectorcontrol/getcontrolvaluescount.md): Gets the number of available selector control values.
- [AddControlValueDescriptions](iouservideoselectorcontrol/addcontrolvaluedescriptions.md): Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](iouservideoselectorcontrol/removecontrolvaluedescriptions.md): Removes selector control values from the selector control.
- [GetControlValueDescriptions](iouservideoselectorcontrol/getcontrolvaluedescriptions.md): Gets the selector values for the control.
