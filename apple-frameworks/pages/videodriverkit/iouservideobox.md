> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox

# IOUserVideoBox

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A container for other objects.

## Declaration

```objectivec
class IOUserVideoBox;
```

<a id="overview"></a>

## Overview

The objects in a video box are typically [IOUserVideoDevice](iouservideodevice.md) and [IOUserVideoClockDevice](iouservideoclockdevice.md) objects. An [IOUserVideoBox](iouservideobox.md) publishes identifying information about itself and can be enabled or disabled. A box’s contents are only available to the system when the box is enabled.

## Topics

### Creating a video box

- [Create](iouservideobox/create.md): Beta. Static factory method to allocate and initialize an IOUserVideoBox.
- [init](iouservideobox/init.md): Beta. Initializes a video box.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.

### Freeing a video device

- [free](iouservideobox/free.md): Beta. Frees the IOUserVideoBox.

### Getting information about the class

- [GetClassID](iouservideobox/getclassid.md): Beta. Gets the class identifier of the object
- [GetBaseClassID](iouservideobox/getbaseclassid.md): Beta. Gets the class identifier of the base class object
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Identifying the box

- [GetUID](iouservideobox/getuid.md): Beta. Gets the unique identifier of the video box.

### Managing box contents

- [AddDevice](iouservideobox/adddevice.md): Beta. Adds a video device to the video box.
- [RemoveDevice](iouservideobox/removedevice.md): Beta. Removes a video device from the video box.
- [IOUserVideoDevice](iouservideodevice.md): Beta. A video device.
- [AddClockDevice](iouservideobox/addclockdevice.md): Beta. Adds a clock device video box.
- [RemoveClockDevice](iouservideobox/removeclockdevice.md): Beta. Removes aa clock device from the video box.
- [IOUserVideoClockDevice](iouservideoclockdevice.md): Beta. A clock device.

### Managing protection state

- [SetIsProtected](iouservideobox/setisprotected.md): Beta. Sets the value indicating the box’s protection state.
- [IsProtected](iouservideobox/isprotected.md): Beta. A Boolean value indicating if box is protected.

### Managing acquirability

- [HandleChangeAcquireBox](iouservideobox/handlechangeacquirebox.md): Beta. Called when host is attempting to the change the box acquisition
- [SetIsAcquired](iouservideobox/setisacquired.md): Beta. Sets the value indicating the box’s acquisition state.
- [IsAcquired](iouservideobox/isacquired.md): Beta. A Boolean value indicating if box is acquired.
- [SetIsAcquirable](iouservideobox/setisacquirable.md): Beta. Sets the value for the box’s acquirability.
- [IsAcquirable](iouservideobox/isacquirable.md): Beta. A Boolean value indicating if box can be acquired.
- [SetAcquisitionFailure](iouservideobox/setacquisitionfailure.md): Beta. Sets the error for the box’s acquisition failure.
- [GetAcquisitionFailure](iouservideobox/getacquisitionfailure.md): Beta. Gets the acquisition failure of the video box.

### Determining media support

- [SetHasAudio](iouservideobox/sethasaudio.md): Beta. Sets the value indicating the box’s audio support.
- [HasAudio](iouservideobox/hasaudio.md): Beta. A Boolean value indicating if box has audio capabilities.
- [SetHasVideo](iouservideobox/sethasvideo.md): Beta. Sets the value indicating the box’s video support.
- [HasVideo](iouservideobox/hasvideo.md): Beta. A Boolean value indicating if box has video capabilities.
- [SetHasMIDI](iouservideobox/sethasmidi.md): Beta. Sets the value indicating the box’s MIDI support
- [HasMIDI](iouservideobox/hasmidi.md): Beta. A Boolean value indicating if box has MIDI capabilities.

### Working with transport types

- [GetTransportType](iouservideobox/gettransporttype.md): Beta. Gets the transport type of the video box.
- [SetTransportType](iouservideobox/settransporttype.md): Beta. Sets the transport type of the IOUserVideoBox.
- [IOUserVideoTransportType](videodriverkit/iouservideotransporttype.md): Beta. The transport type of a video stream.

## Relationships

### Inherits From

- [IOUserVideoObject](iouservideoobject.md)
