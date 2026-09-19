> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideocontrol

# IOUserVideoControl

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A base class for control objects.

## Declaration

```objectivec
class IOUserVideoControl;
```

<a id="overview"></a>

## Overview

Don’t subclass [IOUserVideoControl](iouservideocontrol.md) or allocated instances directly.

## Topics

### Creating a control

- [init](iouservideocontrol/init.md): Beta. Initializes a video control.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.

### Freeing a control

- [free](iouservideocontrol/free.md): Beta. Frees the user video object.

### Getting information about the class

- [GetClassID](iouservideocontrol/getclassid.md): Beta. Gets the class identifier of the object
- [GetBaseClassID](iouservideocontrol/getbaseclassid.md): Beta. Gets the class identifier of the base class object
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Working with control properties

- [GetControlScope](iouservideocontrol/getcontrolscope.md): Beta. Returns an object property scope for the control.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [GetControlElement](iouservideocontrol/getcontrolelement.md): Beta. Returns an object property element for the control.
- [GetIsSettable](iouservideocontrol/getissettable.md): Beta. Returns a Boolean value indicating if the control value can be set.

### Working with devices

- [GetOwningDeviceID](iouservideocontrol/getowningdeviceid.md): Beta. Returns the video object identifier of the control’s owning device.

## Relationships

### Inherits From

- [IOUserVideoObject](iouservideoobject.md)

### Inherited By

- [IOUserVideoBooleanControl](iouservideobooleancontrol.md)
- [IOUserVideoDirectionControl](iouservideodirectioncontrol.md)
- [IOUserVideoLevelControl](iouservideolevelcontrol.md)
- [IOUserVideoSelectorControl](iouservideoselectorcontrol.md)
- [IOUserVideoSliderControl](iouservideoslidercontrol.md)
- [IOUserVideoStereoPanControl](iouservideostereopancontrol.md)

## See Also

### Video controls

- [IOUserVideoBooleanControl](iouservideobooleancontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoStereoPanControl](iouservideostereopancontrol.md): Beta. A control object that supports panning between stereo channels.
- [IOUserVideoSliderControl](iouservideoslidercontrol.md): Beta. A control object that supports a 32-bit unsigned integer value slider.
- [IOUserVideoDirectionControl](iouservideodirectioncontrol.md): Beta. A control object that supports Boolean values.
- [IOUserVideoSelectorControl](iouservideoselectorcontrol.md): Beta. A control object that supports a 32-bit unsigned integer selector value.
- [IOUserVideoLevelControl](iouservideolevelcontrol.md): Beta. A control object that supports a float value level.
