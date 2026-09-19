> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostereopancontrol

# IOUserVideoStereoPanControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A control object that supports panning between stereo channels.

## Declaration

```objectivec
class IOUserVideoStereoPanControl;
```

## Topics

### Creating a stereo pan control

- [Create](iouservideostereopancontrol/create.md): Beta. A static factory method that allocates and initializes an stereo pan control.
- [init](iouservideostereopancontrol/init.md): Beta. Initializes an stereo pan control.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.

### Freeing a stereo pan control

- [free](iouservideostereopancontrol/free.md): Beta. Frees the stereo pan control.

### Getting information about the class

- [GetClassID](iouservideostereopancontrol/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideostereopancontrol/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Supporting value changes

- [HandleChangeControlValue](iouservideostereopancontrol/handlechangecontrolvalue.md): Beta. The system calls this virtual method when the control’s value changes.

### Accessing the value

- [SetControlValue](iouservideostereopancontrol/setcontrolvalue.md): Beta. Sets the current control value.
- [GetControlValue](iouservideostereopancontrol/getcontrolvalue.md): Beta. Gets the current value of the control.
- [SetPanningChannels](iouservideostereopancontrol/setpanningchannels.md): Beta. Sets the current stereo panning channels.
- [GetPanningChannels](iouservideostereopancontrol/getpanningchannels.md): Beta. Gets the current stereo panning channels.

## Relationships

### Inherits From

- [IOUserVideoControl](iouservideocontrol.md)

## See Also

### Video controls

- [IOUserVideoControl](iouservideocontrol.md): Beta. A base class for control objects.
- [IOUserVideoBooleanControl](iouservideobooleancontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoSliderControl](iouservideoslidercontrol.md): Beta. A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoDirectionControl](iouservideodirectioncontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoSelectorControl](iouservideoselectorcontrol.md): Beta. A control object that supports a 32-bit unsigned integer selector value.
- [IOUserVideoLevelControl](iouservideolevelcontrol.md): Beta. A control object that supports a float value level.
