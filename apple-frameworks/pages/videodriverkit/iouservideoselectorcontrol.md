> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoselectorcontrol

# IOUserVideoSelectorControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A control object that supports a 32-bit unsigned integer selector value.

## Declaration

```objectivec
class IOUserVideoSelectorControl;
```

## Topics

### Creating a selector control

- [Create](iouservideoselectorcontrol/create.md): Beta. A static factory method that allocates and initializes a selector control.
- [init](iouservideoselectorcontrol/init.md): Beta. Initializes a selector control.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.

### Freeing a selector control

- [free](iouservideoselectorcontrol/free.md): Beta. Frees the selector control.

### Getting information about the class

- [GetClassID](iouservideoselectorcontrol/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideoselectorcontrol/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Supporting value changes

- [HandleChangeSelectedValues](iouservideoselectorcontrol/handlechangeselectedvalues.md): Beta. The system calls this virtual method when the control’s selected values change.

### Accessing the value

- [SetCurrentSelectedValues](iouservideoselectorcontrol/setcurrentselectedvalues.md): Beta. Sets the current control value.
- [GetCurrentSelectedValues](iouservideoselectorcontrol/getcurrentselectedvalues.md): Beta. Gets the current selected values of the control.
- [IOUserVideoSelectorValue](iouservideoselectorvalue.md): Beta. Selector value for controls.
- [GetControlValuesCount](iouservideoselectorcontrol/getcontrolvaluescount.md): Beta. Gets the number of available selector control values.
- [AddControlValueDescriptions](iouservideoselectorcontrol/addcontrolvaluedescriptions.md): Beta. Adds control value descriptions to the selector control.
- [RemoveControlValueDescriptions](iouservideoselectorcontrol/removecontrolvaluedescriptions.md): Beta. Removes selector control values from the selector control.
- [GetControlValueDescriptions](iouservideoselectorcontrol/getcontrolvaluedescriptions.md): Beta. Gets the selector values for the control.
- [IOUserVideoSelectorValueDescription](iouservideoselectorvaluedescription.md): Beta. A selector control’s value and name.

## Relationships

### Inherits From

- [IOUserVideoControl](iouservideocontrol.md)

## See Also

### Video controls

- [IOUserVideoControl](iouservideocontrol.md): Beta. A base class for control objects.
- [IOUserVideoBooleanControl](iouservideobooleancontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoStereoPanControl](iouservideostereopancontrol.md): Beta. A control object that supports panning between stereo channels.
- [IOUserVideoSliderControl](iouservideoslidercontrol.md): Beta. A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoDirectionControl](iouservideodirectioncontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoLevelControl](iouservideolevelcontrol.md): Beta. A control object that supports a float value level.
