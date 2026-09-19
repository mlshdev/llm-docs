> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobooleancontrol

# IOUserVideoBooleanControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A control object that supports Boolean values.

## Declaration

```objectivec
class IOUserVideoBooleanControl;
```

## Topics

### Creating a Boolean control

- [Create](iouservideobooleancontrol/create.md): Beta. A static factory method that allocates and initializes a video Boolean control.
- [init](iouservideobooleancontrol/init.md): Beta. Initializes an IOUserVideoBooleanControl.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.

### Freeing a Boolean control

- [free](iouservideobooleancontrol/free.md): Beta. Frees the control.

### Getting information about the class

- [GetClassID](iouservideobooleancontrol/getclassid.md): Beta. Gets the class identifier of the object
- [GetBaseClassID](iouservideobooleancontrol/getbaseclassid.md): Beta. Gets the class identifier of the base class object
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Supporting value changes

- [HandleChangeControlValue](iouservideobooleancontrol/handlechangecontrolvalue.md): Beta. The system calls this virtual method when the control’s value changes.

### Accessing the value

- [SetControlValue](iouservideobooleancontrol/setcontrolvalue.md): Beta. Sets the current control value.
- [GetControlValue](iouservideobooleancontrol/getcontrolvalue.md): Beta. Gets the current value of the control.

## Relationships

### Inherits From

- [IOUserVideoControl](iouservideocontrol.md)

## See Also

### Video controls

- [IOUserVideoControl](iouservideocontrol.md): Beta. A base class for control objects.
- [IOUserVideoStereoPanControl](iouservideostereopancontrol.md): Beta. A control object that supports panning between stereo channels.
- [IOUserVideoSliderControl](iouservideoslidercontrol.md): Beta. A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoDirectionControl](iouservideodirectioncontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoSelectorControl](iouservideoselectorcontrol.md): Beta. A control object that supports a 32-bit unsigned integer selector value.
- [IOUserVideoLevelControl](iouservideolevelcontrol.md): Beta. A control object that supports a float value level.
