> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodevice

# IOUserVideoDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A video device.

## Declaration

```objectivec
class IOUserVideoDevice;
```

<a id="overview"></a>

## Overview

The device has `IOUserVideoDeviceStream` objects.

## Topics

### Creating a video device

- [Create](iouservideodevice/create.md): Beta. A static factory method that allocates and initializes a video device.
- [init](iouservideodevice/init.md): Beta. Initializes a video device.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.

### Freeing a video device

- [free](iouservideodevice/free.md): Beta. Frees the IOUserVideoDevice.

### Getting information about the class

- [GetClassID](iouservideodevice/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideodevice/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Performing I/O

- [StartIO](iouservideodevice/startio.md): Beta. Tells the device to start IO.
- [StopIO](iouservideodevice/stopio.md): Beta. Tells the device to stop IO.
- [IOUserVideoStartStopFlags](videodriverkit/iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.
- [GetCurrentClientIOTime](iouservideodevice/getcurrentclientiotime.md): Beta. Gets the current sample/host time pair in the ring buffer written to or read from by the client
- [SetIOOperationHandler](iouservideodevice/setiooperationhandler.md): Beta. Sets the IOOperationHandler block on the device.
- [IOOperationHandler](videodriverkit/iooperationhandler.md): Beta. A block that tells the device to perform an IOUserVideoIOOperation.

### Supporting device configuration changes

- [PerformDeviceConfigurationChange](iouservideodevice/performdeviceconfigurationchange.md): Beta. The host calls this method to allow the device to perform a configuration change it previously requested by calling RequestDeviceConfigurationChange(), or a change to an IO state that requires a configuration change.
- [AbortDeviceConfigurationChange](iouservideodevice/abortdeviceconfigurationchange.md): Beta. The host calls this method to tell the driver not to perform a configuration change it requested by calling RequestDeviceConfigurationChange(). Subclass and override this method to handle any aborted custom configuration change requests. Then call the superclass implementation to update state.

### Supporting sample rate changes

- [HandleChangeSampleRate](iouservideodevice/handlechangesamplerate.md): Beta. The system calls this virtual method when the device’s sample rate changes.

### Supporting stream format changes

- [StreamFormatChanged](iouservideodevice/streamformatchanged.md): Beta.

### Working with video streams

- [AddStream](iouservideodevice/addstream.md): Beta. Adds an video stream to the device.
- [RemoveStream](iouservideodevice/removestream.md): Beta. Removes a video stream from the device.
- [IOUserVideoStream](iouservideostream.md): Beta. A video stream.

### Working with default device behavior

- [SetCanBeDefaultInputDevice](iouservideodevice/setcanbedefaultinputdevice.md): Beta. Specify if device can be used as default input device.
- [CanBeDefaultInputDevice](iouservideodevice/canbedefaultinputdevice.md): Beta. Returns a Boolean value indicating if device can be used for default input.
- [SetCanBeDefaultOutputDevice](iouservideodevice/setcanbedefaultoutputdevice.md): Beta. Specifies if device can be used as default output device.
- [CanBeDefaultOutputDevice](iouservideodevice/canbedefaultoutputdevice.md): Beta. Returns a Boolean value indicating if device can be used for default output.
- [SetCanBeDefaultSystemOutputDevice](iouservideodevice/setcanbedefaultsystemoutputdevice.md): Beta. Specifies if device can be used as default system output device
- [CanBeDefaultSystemOutputDevice](iouservideodevice/canbedefaultsystemoutputdevice.md): Beta. Returns a Boolean value indicating if device can be used for default system output.

### Working with safety offset behavior

- [SetInputSafetyOffset](iouservideodevice/setinputsafetyoffset.md): Beta. Specifies the input safety offset of the device.
- [GetInputSafetyOffset](iouservideodevice/getinputsafetyoffset.md): Beta. Gets the input safety offset of the device.
- [SetOutputSafetyOffset](iouservideodevice/setoutputsafetyoffset.md): Beta. Specifies the output safety offset of the device.
- [GetOutputSafetyOffset](iouservideodevice/getoutputsafetyoffset.md): Beta. Gets the output safety offset of the device.

### Working with channel layouts

- [SetPreferredChannelsForStereo](iouservideodevice/setpreferredchannelsforstereo.md): Beta. Sets the channel indices for the preferred stereo pair
- [GetPreferredChannelsForStereo](iouservideodevice/getpreferredchannelsforstereo.md): Beta. Gets the channel indices for the preferred stereo pair.
- [SetPreferredInputChannelLayout](iouservideodevice/setpreferredinputchannellayout.md): Beta. Sets the input channel layout with IOUserVideoChannelLabel values
- [SetPreferredOutputChannelLayout](iouservideodevice/setpreferredoutputchannellayout.md): Beta. Sets the output channel layout.
- [IOUserVideoChannelLabel](videodriverkit/iouservideochannellabel.md): Beta. These constants are to set the preferred channel layout on video device.

### Working with controls

- [SetControlValue](iouservideodevice/setcontrolvalue.md): Beta.

## Relationships

### Inherits From

- [IOUserVideoClockDevice](iouservideoclockdevice.md)

## See Also

### Video devices

- [IOUserVideoClockDevice](iouservideoclockdevice.md): Beta. A clock device.
