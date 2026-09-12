> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiostream](https://developer.apple.com/documentation/kernel/ioaudiostream)

# IOAudioStream

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.1+

This class wraps a single sample buffer in an audio driver.

## Declaration

```objectivec
class IOAudioStream : IOService
```

<a id="overview"></a>

## Overview

An IOAudioStream represents one hardware sample buffer as well as the direction of that buffer, the mix buffer that multiple clients mix into as well as a list of all of the formats to which this buffer can be set.

When an IOAudioEngine is created during init time in the driver, an IOAudioStream must be created for each sample buffer in the device. Typically, the sample buffer will be interleaved (or single channel), as a non-interleaved buffer should be divided into multiple single-channel buffers (and multiple IOAudioStreams).

Additionally, when an IOAudioStream is created it must have all of the possible formats (and allowed sample rates for each format) set and must have the currently set format specified (addAvailableFormat() and setFormat()).

## Topics

### Instance Methods

- [addAvailableFormat](ioaudiostream/1580021-addavailableformat.md): Deprecated.
- [addAvailableFormat](ioaudiostream/3516531-addavailableformat.md): Deprecated.
- [addAvailableFormat](ioaudiostream/3516532-addavailableformat.md): Deprecated.
- [addAvailableFormat](ioaudiostream/3516533-addavailableformat.md): Deprecated.
- [addClient](ioaudiostream/1580015-addclient.md): Deprecated.
- [addDefaultAudioControl](ioaudiostream/1580039-adddefaultaudiocontrol.md): Deprecated.
- [clearAvailableFormats](ioaudiostream/1580032-clearavailableformats.md): Deprecated.
- [clearSampleBuffer](ioaudiostream/1580056-clearsamplebuffer.md): Deprecated.
- [clipIfNecessary](ioaudiostream/1580058-clipifnecessary.md): Deprecated.
- [clipOutputSamples](ioaudiostream/1580040-clipoutputsamples.md): Deprecated.
- [free](ioaudiostream/1580016-free.md): Deprecated.
- [getDirection](ioaudiostream/1580048-getdirection.md): Deprecated.
- [getFormat](ioaudiostream/1580050-getformat.md): Deprecated.
- [getFormatExtension](ioaudiostream/1580019-getformatextension.md): Deprecated.
- [getMaxNumChannels](ioaudiostream/1580049-getmaxnumchannels.md): Deprecated.
- [getMetaClass](ioaudiostream/1580051-getmetaclass.md)
- [getMixBuffer](ioaudiostream/1580037-getmixbuffer.md): Deprecated.
- [getMixBufferSize](ioaudiostream/1580063-getmixbuffersize.md): Deprecated.
- [getNumClients](ioaudiostream/1580054-getnumclients.md): Deprecated.
- [getNumSampleFramesRead](ioaudiostream/1580061-getnumsampleframesread.md): Deprecated.
- [getSampleBuffer](ioaudiostream/1580022-getsamplebuffer.md): Deprecated.
- [getSampleBufferSize](ioaudiostream/1580028-getsamplebuffersize.md): Deprecated.
- [getStartingChannelID](ioaudiostream/1580018-getstartingchannelid.md): Deprecated.
- [getStreamAvailable](ioaudiostream/1580024-getstreamavailable.md): Deprecated.
- [getWorkLoop](ioaudiostream/1580023-getworkloop.md)
- [hardwareFormatChanged](ioaudiostream/1580044-hardwareformatchanged.md): Deprecated.
- [initWithAudioEngine](ioaudiostream/1580064-initwithaudioengine.md): Deprecated.
- [lockStreamForIO](ioaudiostream/1580035-lockstreamforio.md): Deprecated.
- [mixOutputSamples](ioaudiostream/1580043-mixoutputsamples.md): Deprecated.
- [numSampleFramesPerBufferChanged](ioaudiostream/1580030-numsampleframesperbufferchanged.md): Deprecated.
- [processOutputSamples](ioaudiostream/1580041-processoutputsamples.md): Deprecated.
- [readInputSamples](ioaudiostream/1580045-readinputsamples.md): Deprecated.
- [removeClient](ioaudiostream/1580057-removeclient.md): Deprecated.
- [removeDefaultAudioControls](ioaudiostream/1580034-removedefaultaudiocontrols.md): Deprecated.
- [resetClipInfo](ioaudiostream/1580053-resetclipinfo.md): Deprecated.
- [safeLogError](ioaudiostream/1580047-safelogerror.md): Deprecated.
- [setDefaultNumSampleFramesRead](ioaudiostream/1580062-setdefaultnumsampleframesread.md): Deprecated.
- [setDirection](ioaudiostream/1580060-setdirection.md): Deprecated.
- [setFormat](ioaudiostream/1580046-setformat.md): Deprecated.
- [setFormat](ioaudiostream/3516534-setformat.md): Deprecated.
- [setFormat](ioaudiostream/3516535-setformat.md): Deprecated.
- [setFormat](ioaudiostream/3516536-setformat.md): Deprecated.
- [setFormat](ioaudiostream/3516537-setformat.md): Deprecated.
- [setIOFunction](ioaudiostream/1580033-setiofunction.md): Deprecated.
- [setIOFunctionList](ioaudiostream/1580026-setiofunctionlist.md): Deprecated.
- [setMixBuffer](ioaudiostream/1580065-setmixbuffer.md): Deprecated.
- [setProperties](ioaudiostream/1580042-setproperties.md): Deprecated.
- [setSampleBuffer](ioaudiostream/1580036-setsamplebuffer.md): Deprecated.
- [setSampleLatency](ioaudiostream/1580055-setsamplelatency.md): Deprecated.
- [setStartingChannelNumber](ioaudiostream/1580052-setstartingchannelnumber.md): Deprecated.
- [setStreamAvailable](ioaudiostream/1580038-setstreamavailable.md): Deprecated.
- [setTerminalType](ioaudiostream/1580066-setterminaltype.md): Deprecated.
- [stop](ioaudiostream/1580017-stop.md): Deprecated.
- [unlockStreamForIO](ioaudiostream/1580020-unlockstreamforio.md): Deprecated.
- [updateNumClients](ioaudiostream/1580029-updatenumclients.md): Deprecated.
- [validateFormat](ioaudiostream/1580059-validateformat.md): Deprecated.
- [validateFormat](ioaudiostream/3516538-validateformat.md): Deprecated.
- [validateFormat](ioaudiostream/3516539-validateformat.md): Deprecated.

### Type Methods

- [createDictionaryFromFormat](ioaudiostream/1580027-createdictionaryfromformat.md): Deprecated.
- [createFormatFromDictionary](ioaudiostream/1580025-createformatfromdictionary.md): Deprecated.
- [initKeys](ioaudiostream/1580067-initkeys.md): Deprecated.
- [setFormatAction](ioaudiostream/1580031-setformataction.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Interfaces

- [IOAudioLevelControl](ioaudiolevelcontrol.md)
- [IOAudioSelectorControl](ioaudioselectorcontrol.md)
- [IOAudioToggleControl](ioaudiotogglecontrol.md)
- [IOAudioControl](ioaudiocontrol.md): Represents any controllable attribute of an IOAudioDevice.
- [IOAudioEngine](ioaudioengine.md): Abstract base class for a single audio audio / I/O engine.
- [IOAudioPort](ioaudioport.md): Represents a logical or physical port or functional unit in an audio device.
