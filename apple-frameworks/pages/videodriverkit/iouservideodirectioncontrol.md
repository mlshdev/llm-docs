> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodirectioncontrol

# IOUserVideoDirectionControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A control object that supports Boolean values.

## Declaration

```objectivec
class IOUserVideoDirectionControl;
```

## Topics

### Creating a direction control

- [Create](iouservideodirectioncontrol/create.md): Beta. A static factory method that allocates and initializes a video direction control.
- [init](iouservideodirectioncontrol/init.md): Beta. Initializes a video direction control.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.

### Freeing a slider control

- [free](iouservideodirectioncontrol/free.md): Beta. Frees the video direction control.

### Getting information about the class

- [GetClassID](iouservideodirectioncontrol/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideodirectioncontrol/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Supporting value changes

- [HandleChangeControlValue](iouservideodirectioncontrol/handlechangecontrolvalue.md): Beta. The system calls this virtual method when the control’s value changes.

### Accessing the value

- [SetControlValue](iouservideodirectioncontrol/setcontrolvalue.md): Beta. Sets the current control value.
- [GetControlValue](iouservideodirectioncontrol/getcontrolvalue.md): Beta. Gets the current value of the control.

## Relationships

### Inherits From

- [IOUserVideoControl](iouservideocontrol.md)

## See Also

### Video controls

- [IOUserVideoControl](iouservideocontrol.md): Beta. A base class for control objects.
- [IOUserVideoBooleanControl](iouservideobooleancontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoStereoPanControl](iouservideostereopancontrol.md): Beta. A control object that supports panning between stereo channels.
- [IOUserVideoSliderControl](iouservideoslidercontrol.md): Beta. A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoSelectorControl](iouservideoselectorcontrol.md): Beta. A control object that supports a 32-bit unsigned integer selector value.
- [IOUserVideoLevelControl](iouservideolevelcontrol.md): Beta. A control object that supports a float value level.
