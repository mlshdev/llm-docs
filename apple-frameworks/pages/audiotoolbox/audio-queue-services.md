> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-queue-services](https://developer.apple.com/documentation/audiotoolbox/audio-queue-services)

# Audio Queue Services (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Connect to audio hardware and manage the recording or playback process.

<a id="overview"></a>

## Overview

This document describes Audio Queue Services, a C programming interface in the Audio Toolbox framework, which is part of Core Audio.

An audio queue is a software object you use for recording or playing audio. An audio queue does the work of:

- Connecting to audio hardware
- Managing memory
- Employing codecs, as needed, for compressed audio formats
- Mediating playback or recording

Audio Queue Services enables you to record and play audio in linear PCM, in compressed formats (such as Apple Lossless and AAC), and in other formats for which users have installed codecs. Audio Queue Services also supports scheduled playback and synchronization of multiple audio queues and synchronization of audio with video.

> **Note**

>  Audio Queue Services provides features similar to those previously offered by the Sound Manager and in macOS. It adds additional features such as synchronization. The Sound Manager is deprecated in OS X v10.5 and does not work with 64-bit applications. Audio Queue Services is recommended for all new development and as a replacement for the Sound Manager in existing Mac apps.

## Topics

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue(\_:\_:\_:\_:\_:)](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:)](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)

### Controlling Audio Queues

- [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush(\_:)](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause(\_:)](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset(\_:)](audioqueuereset%28__%29.md): Resets an audio queue.

### Handling Audio Queue Buffers

- [AudioQueueAllocateBuffer(\_:\_:\_:)](audioqueueallocatebuffer%28______%29.md): Asks an audio queue object to allocate an audio queue buffer.
- [AudioQueueAllocateBufferWithPacketDescriptions(\_:\_:\_:\_:)](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueFreeBuffer(\_:\_:)](audioqueuefreebuffer%28____%29.md): Asks an audio queue to dispose of an audio queue buffer.
- [AudioQueueEnqueueBuffer(\_:\_:\_:\_:)](audioqueueenqueuebuffer%28________%29.md): Adds a buffer to the buffer queue of a recording or playback audio queue.
- [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapNew(\_:\_:\_:\_:\_:\_:\_:)](audioqueueprocessingtapnew%28______________%29.md)
- [AudioQueueProcessingTapGetQueueTime(\_:\_:\_:)](audioqueueprocessingtapgetqueuetime%28______%29.md)
- [AudioQueueProcessingTapGetSourceAudio(\_:\_:\_:\_:\_:\_:)](audioqueueprocessingtapgetsourceaudio%28____________%29.md)
- [AudioQueueProcessingTapDispose(\_:)](audioqueueprocessingtapdispose%28__%29.md)

### Manipulating Audio Queue Parameters

- [AudioQueueGetParameter(\_:\_:\_:)](audioqueuegetparameter%28______%29.md): Gets an audio queue parameter value.
- [AudioQueueSetParameter(\_:\_:\_:)](audioqueuesetparameter%28______%29.md): Sets a playback audio queue parameter value.

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty(\_:\_:\_:\_:)](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty(\_:\_:\_:\_:)](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize(\_:\_:\_:)](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener(\_:\_:\_:\_:)](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.

### Managing the Timeline

- [AudioQueueCreateTimeline(\_:\_:)](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline(\_:\_:)](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime(\_:\_:)](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime(\_:\_:\_:)](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime(\_:\_:\_:)](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime(\_:\_:\_:\_:)](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

### Performing Offline Rendering

- [AudioQueueSetOfflineRenderFormat(\_:\_:\_:)](audioqueuesetofflinerenderformat%28______%29.md): Sets the rendering mode and audio format for a playback audio queue.
- [AudioQueueOfflineRender(\_:\_:\_:\_:)](audioqueueofflinerender%28________%29.md): Exports audio to a buffer, instead of to a device, using a playback audio queue.

### Callbacks

- [AudioQueueInputCallback](audioqueueinputcallback.md): Called by the system when a recording audio queue has finished filling an audio queue buffer.
- [AudioQueueOutputCallback](audioqueueoutputcallback.md): Called by the system when an audio queue buffer is available for reuse.
- [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md): Called by the system when a specified audio queue property changes value.

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [flag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
- [AudioUnitParameterValueName](audiounitparametervaluename.md)
- [AudioUnitParameterValueTranslation](audiounitparametervaluetranslation.md)
- [AudioUnitPresetMAS_SettingData](audiounitpresetmas_settingdata.md)
- [AudioUnitPresetMAS_Settings](audiounitpresetmas_settings.md)
- [AudioUnitProperty](audiounitproperty.md): A key-value pair that declares an attribute or behavior for an audio unit.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.
- [AU3DMixerRenderingFlags](au3dmixerrenderingflags.md)
- [AUChannelInfo](auchannelinfo.md): The audio input and output channel capabilities for an audio unit.
- [AUDependentParameter](audependentparameter.md): An audio unit parameter whose value can change in response to a change in its parent metaparameter.
- [AUDistanceAttenuationData](audistanceattenuationdata.md): Deprecated.
- [AUHostIdentifier](auhostidentifier.md)
- [AUHostTransportStateFlags](auhosttransportstateflags.md)
- [AUHostVersionIdentifier](auhostversionidentifier.md): The name and version of an audio unit’s host application.
- [AUInputSamplesInOutputCallbackStruct](auinputsamplesinoutputcallbackstruct.md): The callback function and custom data for providing input-to-output sample mapping for an audio unit.
- [AUMIDIEvent](aumidievent.md): A structure that describes a scheduled MIDI event.
- [AUMIDIOutputCallbackStruct](aumidioutputcallbackstruct.md): The callback function and custom data for an audio unit that provides MIDI output.
- [AUNumVersion](aunumversion.md)
- [AUParameterAutomationEvent](auparameterautomationevent.md)
- [AUParameterEvent](auparameterevent.md): A structure that describes a scheduled parameter event.
- [AUParameterMIDIMapping](auparametermidimapping.md)
- [AUParameterMIDIMappingFlags](auparametermidimappingflags.md)
- [AUPreset](aupreset.md): Used to set factory presets for an audio unit.
- [AUPresetEvent](aupresetevent.md): Describes an audio unit preset.
- [AURecordedParameterEvent](aurecordedparameterevent.md): An event recording the changing of a parameter at a particular host time.
- [AURenderCallbackStruct](aurendercallbackstruct.md): Used for registering an input callback function with an audio unit.
- [AURenderEvent](aurenderevent.md): A union of the various specific render event types.
- [AURenderEventHeader](aurendereventheader.md): The common header for a render event.
- [AUSamplerBankPresetData](ausamplerbankpresetdata.md)
- [AUSamplerInstrumentData](ausamplerinstrumentdata.md)
- [AUScheduledAudioSliceFlags](auscheduledaudiosliceflags.md)
- [AUSpatialMixerRenderingFlags](auspatialmixerrenderingflags.md)

### Enumerations

- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [Anonymous](1552627-anonymous.md)
- [Audio Queue Time Pitch Algorithms](1552630-audio-queue-time-pitch-algorithm.md)
- [Audio Queue Property IDs](1552629-audio-queue-property-ids.md)
- [Audio Queue Property IDs](1618733-audio-queue-property-ids.md)
- [Audio Queue Hardware Codec Policy](1618727-audio-queue-hardware-codec-polic.md)

### Constants

- [AudioQueuePropertyID](audioqueuepropertyid.md): Identifiers for audio queue properties.
- [Audio Queue Parameters](1552626-audio-queue-parameters.md): Identifiers for audio queue parameters.
- [Hardware Codec Policy Keys](1618724-hardware-codec-policy-keys.md): Indicates how an audio queue should choose between hardware and software implementations of a codec.

### Result Codes

This table lists result codes defined for Audio Queue Services.

- [kAudioQueueErr_InvalidBuffer](kaudioqueueerr_invalidbuffer.md): The specified audio queue buffer does not belong to the specified audio queue.
- [kAudioQueueErr_BufferEmpty](kaudioqueueerr_bufferempty.md): The audio queue buffer is empty (that is, the `mAudioDataByteSize` field = `0`).
- [kAudioQueueErr_DisposalPending](kaudioqueueerr_disposalpending.md): The function cannot act on the audio queue because it is being asynchronously disposed of.
- [kAudioQueueErr_InvalidProperty](kaudioqueueerr_invalidproperty.md): The specified property ID is invalid.
- [kAudioQueueErr_InvalidPropertySize](kaudioqueueerr_invalidpropertysize.md): The size of the specified property is invalid.
- [kAudioQueueErr_InvalidParameter](kaudioqueueerr_invalidparameter.md): The specified parameter ID is invalid.
- [kAudioQueueErr_CannotStart](kaudioqueueerr_cannotstart.md): The audio queue has encountered a problem and cannot start.
- [kAudioQueueErr_InvalidDevice](kaudioqueueerr_invaliddevice.md): The specified audio hardware device could not be located.
- [kAudioQueueErr_BufferInQueue](kaudioqueueerr_bufferinqueue.md): The audio queue buffer cannot be disposed of when it is enqueued.
- [kAudioQueueErr_InvalidRunState](kaudioqueueerr_invalidrunstate.md): The queue is running but the function can only operate on the queue when it is stopped, or vice versa.
- [kAudioQueueErr_InvalidQueueType](kaudioqueueerr_invalidqueuetype.md): The queue is an input queue but the function can only operate on an output queue, or vice versa.
- [kAudioQueueErr_Permissions](kaudioqueueerr_permissions.md): You do not have the required permissions to call the function.
- [kAudioQueueErr_InvalidPropertyValue](kaudioqueueerr_invalidpropertyvalue.md): The property value used is not valid.
- [kAudioQueueErr_PrimeTimedOut](kaudioqueueerr_primetimedout.md): During a call to the [AudioQueuePrime(\_:\_:\_:)](audioqueueprime%28______%29.md) function, the audio queue’s audio converter failed to convert the requested number of sample frames.
- [kAudioQueueErr_CodecNotFound](kaudioqueueerr_codecnotfound.md): The requested codec was not found.
- [kAudioQueueErr_InvalidCodecAccess](kaudioqueueerr_invalidcodecaccess.md): The codec could not be accessed.
- [kAudioQueueErr_QueueInvalidated](kaudioqueueerr_queueinvalidated.md): In iOS, the audio server has exited, causing the audio queue to become invalid.
- [kAudioQueueErr_RecordUnderrun](kaudioqueueerr_recordunderrun.md): During recording, data was lost because there was no enqueued buffer to store it in.
- [kAudioQueueErr_EnqueueDuringReset](kaudioqueueerr_enqueueduringreset.md): During a call to the [AudioQueueReset(\_:)](audioqueuereset%28__%29.md), [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md), or [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md) functions, the system does not allow you to enqueue buffers.
- [kAudioQueueErr_InvalidOfflineMode](kaudioqueueerr_invalidofflinemode.md): The operation requires the audio queue to be in offline mode but it isn’t, or vice versa.
- [kAudioFormatUnsupportedDataFormatError](kaudioformatunsupporteddataformaterror.md): The playback data format is unsupported (declared in `AudioFormat.h`).

## See Also

### Playback and Recording

- [Audio Services](audio-services.md): Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.
- [Music Player](music-player.md): Create and play a sequence of tracks, and manage aspects of playback in response to standard events.
- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.

# Audio Queue Services (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Connect to audio hardware and manage the recording or playback process.

<a id="overview"></a>

## Overview

This document describes Audio Queue Services, a C programming interface in the Audio Toolbox framework, which is part of Core Audio.

An audio queue is a software object you use for recording or playing audio. An audio queue does the work of:

- Connecting to audio hardware
- Managing memory
- Employing codecs, as needed, for compressed audio formats
- Mediating playback or recording

Audio Queue Services enables you to record and play audio in linear PCM, in compressed formats (such as Apple Lossless and AAC), and in other formats for which users have installed codecs. Audio Queue Services also supports scheduled playback and synchronization of multiple audio queues and synchronization of audio with video.

> **Note**

>  Audio Queue Services provides features similar to those previously offered by the Sound Manager and in macOS. It adds additional features such as synchronization. The Sound Manager is deprecated in OS X v10.5 and does not work with 64-bit applications. Audio Queue Services is recommended for all new development and as a replacement for the Sound Manager in existing Mac apps.

## Topics

### Creating and Disposing of Audio Queues

- [AudioQueueNewOutputWithDispatchQueue](audioqueuenewoutputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewInputWithDispatchQueue](audioqueuenewinputwithdispatchqueue%28__________%29.md)
- [AudioQueueNewOutput](audioqueuenewoutput%28______________%29.md): Creates a new playback audio queue object.
- [AudioQueueNewInput](audioqueuenewinput%28______________%29.md): Creates a new recording audio queue object.
- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.
- [AudioQueueRef](audioqueueref.md): Defines an opaque data type that represents an audio queue.
- [AudioQueueInputCallbackBlock](audioqueueinputcallbackblock.md)
- [AudioQueueOutputCallbackBlock](audioqueueoutputcallbackblock.md)

### Controlling Audio Queues

- [AudioQueueStart](audioqueuestart%28____%29.md): Begins playing or recording audio.
- [AudioQueuePrime](audioqueueprime%28______%29.md): Decodes enqueued buffers in preparation for playback.
- [AudioQueueFlush](audioqueueflush%28__%29.md): Resets an audio queue’s decoder state.
- [AudioQueueStop](audioqueuestop%28____%29.md): Stops playing or recording audio.
- [AudioQueuePause](audioqueuepause%28__%29.md): Pauses audio playback or recording.
- [AudioQueueReset](audioqueuereset%28__%29.md): Resets an audio queue.

### Handling Audio Queue Buffers

- [AudioQueueAllocateBuffer](audioqueueallocatebuffer%28______%29.md): Asks an audio queue object to allocate an audio queue buffer.
- [AudioQueueAllocateBufferWithPacketDescriptions](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueFreeBuffer](audioqueuefreebuffer%28____%29.md): Asks an audio queue to dispose of an audio queue buffer.
- [AudioQueueEnqueueBuffer](audioqueueenqueuebuffer%28________%29.md): Adds a buffer to the buffer queue of a recording or playback audio queue.
- [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

### Tapping the Queue’s Audio

- [AudioQueueProcessingTapNew](audioqueueprocessingtapnew%28______________%29.md)
- [AudioQueueProcessingTapGetQueueTime](audioqueueprocessingtapgetqueuetime%28______%29.md)
- [AudioQueueProcessingTapGetSourceAudio](audioqueueprocessingtapgetsourceaudio%28____________%29.md)
- [AudioQueueProcessingTapDispose](audioqueueprocessingtapdispose%28__%29.md)

### Manipulating Audio Queue Parameters

- [AudioQueueGetParameter](audioqueuegetparameter%28______%29.md): Gets an audio queue parameter value.
- [AudioQueueSetParameter](audioqueuesetparameter%28______%29.md): Sets a playback audio queue parameter value.

### Manipulating Audio Queue Properties

- [AudioQueueGetProperty](audioqueuegetproperty%28________%29.md): Gets an audio queue property value.
- [AudioQueueSetProperty](audioqueuesetproperty%28________%29.md): Sets an audio queue property value.
- [AudioQueueGetPropertySize](audioqueuegetpropertysize%28______%29.md): Gets the size of the value of an audio queue property.
- [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md): Adds a property listener callback to an audio queue.
- [AudioQueueRemovePropertyListener](audioqueueremovepropertylistener%28________%29.md): Removes a property listener callback from an audio queue.

### Managing the Timeline

- [AudioQueueCreateTimeline](audioqueuecreatetimeline%28____%29.md): Creates a timeline object for an audio queue.
- [AudioQueueDisposeTimeline](audioqueuedisposetimeline%28____%29.md): Disposes of an audio queue’s timeline object.
- [AudioQueueDeviceGetCurrentTime](audioqueuedevicegetcurrenttime%28____%29.md): Gets the current time of the audio hardware device associated with an audio queue.
- [AudioQueueDeviceGetNearestStartTime](audioqueuedevicegetneareststarttime%28______%29.md): Gets the start time, for an audio hardware device, that is closest to a requested start time.
- [AudioQueueDeviceTranslateTime](audioqueuedevicetranslatetime%28______%29.md): Converts the time for an audio queue’s associated audio hardware device from one time base representation to another.
- [AudioQueueGetCurrentTime](audioqueuegetcurrenttime%28________%29.md): Gets the current audio queue time.
- [AudioQueueTimelineRef](audioqueuetimelineref.md): Defines an opaque data type that represents an audio queue timeline object.

### Performing Offline Rendering

- [AudioQueueSetOfflineRenderFormat](audioqueuesetofflinerenderformat%28______%29.md): Sets the rendering mode and audio format for a playback audio queue.
- [AudioQueueOfflineRender](audioqueueofflinerender%28________%29.md): Exports audio to a buffer, instead of to a device, using a playback audio queue.

### Callbacks

- [AudioQueueInputCallback](audioqueueinputcallback.md): Called by the system when a recording audio queue has finished filling an audio queue buffer.
- [AudioQueueOutputCallback](audioqueueoutputcallback.md): Called by the system when an audio queue buffer is available for reuse.
- [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md): Called by the system when a specified audio queue property changes value.

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

### Structures

- [AudioUnitConnection](audiounitconnection.md): An audio unit source-to-destination connection specification.
- [AudioUnitEvent](audiounitevent.md)
- [AudioUnitExternalBuffer](audiounitexternalbuffer.md): Allows an audio unit host application to tell an audio unit to use a specified buffer for its input callback.
- [AudioUnitFrequencyResponseBin](audiounitfrequencyresponsebin.md): An audio unit’s audio level at a particular frequency.
- [AudioUnitMeterClipping](audiounitmeterclipping.md): Audio clipping that has occurred in a mixer unit.
- [AudioUnitMIDIControlMapping](audiounitmidicontrolmapping.md)
- [AudioUnitOtherPluginDesc](audiounitotherplugindesc.md)
- [AudioUnitParameter](audiounitparameter.md): An adjustable audio unit attribute such as volume, pitch, or filter cutoff frequency.
- [AudioUnitParameterEvent](audiounitparameterevent.md): A scheduled change to an audio unit parameter’s value.
- [AudioUnitParameterHistoryInfo](audiounitparameterhistoryinfo.md): The suggested update rate and history duration for parameters which have the [kAudioUnitParameterFlag_PlotHistory](audiounitparameteroptions/flag_plothistory.md) flag set.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterInfo](audiounitparameterinfo.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterStringFromValue](audiounitparameterstringfromvalue.md): A string representation of a parameter’s value.
- [AudioUnitParameterValueFromString](audiounitparametervaluefromstring.md): A parameter’s value based on a string representation of the value.
- [AudioUnitParameterValueName](audiounitparametervaluename.md)
- [AudioUnitParameterValueTranslation](audiounitparametervaluetranslation.md)
- [AudioUnitPresetMAS_SettingData](audiounitpresetmas_settingdata.md)
- [AudioUnitPresetMAS_Settings](audiounitpresetmas_settings.md)
- [AudioUnitProperty](audiounitproperty.md): A key-value pair that declares an attribute or behavior for an audio unit.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.
- [AU3DMixerRenderingFlags](au3dmixerrenderingflags.md)
- [AUChannelInfo](auchannelinfo.md): The audio input and output channel capabilities for an audio unit.
- [AUDependentParameter](audependentparameter.md): An audio unit parameter whose value can change in response to a change in its parent metaparameter.
- [AUDistanceAttenuationData](audistanceattenuationdata.md): Deprecated.
- [AUHostIdentifier](auhostidentifier.md)
- [AUHostTransportStateFlags](auhosttransportstateflags.md)
- [AUHostVersionIdentifier](auhostversionidentifier.md): The name and version of an audio unit’s host application.
- [AUInputSamplesInOutputCallbackStruct](auinputsamplesinoutputcallbackstruct.md): The callback function and custom data for providing input-to-output sample mapping for an audio unit.
- [AUMIDIEvent](aumidievent.md): A structure that describes a scheduled MIDI event.
- [AUMIDIOutputCallbackStruct](aumidioutputcallbackstruct.md): The callback function and custom data for an audio unit that provides MIDI output.
- [AUNumVersion](aunumversion.md)
- [AUParameterAutomationEvent](auparameterautomationevent.md)
- [AUParameterEvent](auparameterevent.md): A structure that describes a scheduled parameter event.
- [AUParameterMIDIMapping](auparametermidimapping.md)
- [AUParameterMIDIMappingFlags](auparametermidimappingflags.md)
- [AUPreset](aupreset.md): Used to set factory presets for an audio unit.
- [AUPresetEvent](aupresetevent.md): Describes an audio unit preset.
- [AURecordedParameterEvent](aurecordedparameterevent.md): An event recording the changing of a parameter at a particular host time.
- [AURenderCallbackStruct](aurendercallbackstruct.md): Used for registering an input callback function with an audio unit.
- [AURenderEvent](aurenderevent.md): A union of the various specific render event types.
- [AURenderEventHeader](aurendereventheader.md): The common header for a render event.
- [AUSamplerBankPresetData](ausamplerbankpresetdata.md)
- [AUSamplerInstrumentData](ausamplerinstrumentdata.md)
- [AUScheduledAudioSliceFlags](auscheduledaudiosliceflags.md)
- [AUSpatialMixerRenderingFlags](auspatialmixerrenderingflags.md)

### Enumerations

- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [Anonymous](1552627-anonymous.md)
- [Audio Queue Time Pitch Algorithms](1552630-audio-queue-time-pitch-algorithm.md)
- [Audio Queue Property IDs](1552629-audio-queue-property-ids.md)
- [Audio Queue Property IDs](1618733-audio-queue-property-ids.md)
- [Audio Queue Hardware Codec Policy](1618727-audio-queue-hardware-codec-polic.md)

### Constants

- [AudioQueuePropertyID](audioqueuepropertyid.md): Identifiers for audio queue properties.
- [Audio Queue Parameters](1552626-audio-queue-parameters.md): Identifiers for audio queue parameters.
- [Hardware Codec Policy Keys](1618724-hardware-codec-policy-keys.md): Indicates how an audio queue should choose between hardware and software implementations of a codec.

### Result Codes

This table lists result codes defined for Audio Queue Services.

- [kAudioQueueErr_InvalidBuffer](kaudioqueueerr_invalidbuffer.md): The specified audio queue buffer does not belong to the specified audio queue.
- [kAudioQueueErr_BufferEmpty](kaudioqueueerr_bufferempty.md): The audio queue buffer is empty (that is, the `mAudioDataByteSize` field = `0`).
- [kAudioQueueErr_DisposalPending](kaudioqueueerr_disposalpending.md): The function cannot act on the audio queue because it is being asynchronously disposed of.
- [kAudioQueueErr_InvalidProperty](kaudioqueueerr_invalidproperty.md): The specified property ID is invalid.
- [kAudioQueueErr_InvalidPropertySize](kaudioqueueerr_invalidpropertysize.md): The size of the specified property is invalid.
- [kAudioQueueErr_InvalidParameter](kaudioqueueerr_invalidparameter.md): The specified parameter ID is invalid.
- [kAudioQueueErr_CannotStart](kaudioqueueerr_cannotstart.md): The audio queue has encountered a problem and cannot start.
- [kAudioQueueErr_InvalidDevice](kaudioqueueerr_invaliddevice.md): The specified audio hardware device could not be located.
- [kAudioQueueErr_BufferInQueue](kaudioqueueerr_bufferinqueue.md): The audio queue buffer cannot be disposed of when it is enqueued.
- [kAudioQueueErr_InvalidRunState](kaudioqueueerr_invalidrunstate.md): The queue is running but the function can only operate on the queue when it is stopped, or vice versa.
- [kAudioQueueErr_InvalidQueueType](kaudioqueueerr_invalidqueuetype.md): The queue is an input queue but the function can only operate on an output queue, or vice versa.
- [kAudioQueueErr_Permissions](kaudioqueueerr_permissions.md): You do not have the required permissions to call the function.
- [kAudioQueueErr_InvalidPropertyValue](kaudioqueueerr_invalidpropertyvalue.md): The property value used is not valid.
- [kAudioQueueErr_PrimeTimedOut](kaudioqueueerr_primetimedout.md): During a call to the [AudioQueuePrime](audioqueueprime%28______%29.md) function, the audio queue’s audio converter failed to convert the requested number of sample frames.
- [kAudioQueueErr_CodecNotFound](kaudioqueueerr_codecnotfound.md): The requested codec was not found.
- [kAudioQueueErr_InvalidCodecAccess](kaudioqueueerr_invalidcodecaccess.md): The codec could not be accessed.
- [kAudioQueueErr_QueueInvalidated](kaudioqueueerr_queueinvalidated.md): In iOS, the audio server has exited, causing the audio queue to become invalid.
- [kAudioQueueErr_RecordUnderrun](kaudioqueueerr_recordunderrun.md): During recording, data was lost because there was no enqueued buffer to store it in.
- [kAudioQueueErr_EnqueueDuringReset](kaudioqueueerr_enqueueduringreset.md): During a call to the [AudioQueueReset](audioqueuereset%28__%29.md), [AudioQueueStop](audioqueuestop%28____%29.md), or [AudioQueueDispose](audioqueuedispose%28____%29.md) functions, the system does not allow you to enqueue buffers.
- [kAudioQueueErr_InvalidOfflineMode](kaudioqueueerr_invalidofflinemode.md): The operation requires the audio queue to be in offline mode but it isn’t, or vice versa.
- [kAudioFormatUnsupportedDataFormatError](kaudioformatunsupporteddataformaterror.md): The playback data format is unsupported (declared in `AudioFormat.h`).

## See Also

### Playback and Recording

- [Audio Services](audio-services.md): Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.
- [Music Player](music-player.md): Create and play a sequence of tracks, and manage aspects of playback in response to standard events.
- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.
