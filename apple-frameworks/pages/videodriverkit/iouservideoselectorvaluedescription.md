> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoselectorvaluedescription

# IOUserVideoSelectorValueDescription

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

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

- [m_name](iouservideoselectorvaluedescription/m_name.md): Beta.
- [m_value](iouservideoselectorvaluedescription/m_value.md): Beta.
- [IOUserVideoSelectorValue](iouservideoselectorvalue.md): Beta. Selector value for controls.

## See Also

### Accessing the value

- [SetCurrentSelectedValues](iouservideoselectorcontrol/setcurrentselectedvalues.md): Beta. Sets the current control value.
- [GetCurrentSelectedValues](iouservideoselectorcontrol/getcurrentselectedvalues.md): Beta. Gets the current selected values of the control.
- [IOUserVideoSelectorValue](iouservideoselectorvalue.md): Beta. Selector value for controls.
- [GetControlValuesCount](iouservideoselectorcontrol/getcontrolvaluescount.md): Beta. Gets the number of available selector control values.
- [AddControlValueDescriptions](iouservideoselectorcontrol/addcontrolvaluedescriptions.md): Beta. Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](iouservideoselectorcontrol/removecontrolvaluedescriptions.md): Beta. Removes selector control values from the selector control.
- [GetControlValueDescriptions](iouservideoselectorcontrol/getcontrolvaluedescriptions.md): Beta. Gets the selector values for the control.
