> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-unit-v2-c-api](https://developer.apple.com/documentation/audiotoolbox/audio-unit-v2-c-api)

# Audio Unit v2 (C) API (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Configure an Audio Unit and prepare it to render audio.

## Topics

### Initializing the Audio Unit

- [AudioUnitInitialize(\_:)](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize(\_:)](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess(\_:\_:\_:\_:\_:)](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple(\_:\_:\_:\_:\_:\_:\_:\_:)](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset(\_:\_:\_:)](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.

### Starting and Stopping Output

- [AudioOutputUnitStart(\_:)](audiooutputunitstart%28__%29.md): Starts an I/O audio unit, which in turn starts the audio unit processing graph that it is connected to.
- [AudioOutputUnitStop(\_:)](audiooutputunitstop%28__%29.md): Stops an I/O audio unit, which in turn stops the audio unit processing graph that it is connected to.
- [AudioOutputUnitStartProc](audiooutputunitstartproc.md)
- [AudioOutputUnitStopProc](audiooutputunitstopproc.md)

### Rendering the Audio

- [AudioUnitRender(\_:\_:\_:\_:\_:\_:)](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitAddRenderNotify(\_:\_:\_:)](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AudioUnitRemoveRenderNotify(\_:\_:\_:)](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.

### Configuring Audio Unit Properties

- [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo(\_:\_:\_:\_:\_:\_:)](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener(\_:\_:\_:\_:)](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:)](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue(\_:\_:\_:\_:\_:)](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUEventListenerCreate(\_:\_:\_:\_:\_:\_:\_:)](aueventlistenercreate%28______________%29.md)
- [AUListenerDispose(\_:)](aulistenerdispose%28__%29.md)
- [AUEventListenerNotify(\_:\_:\_:)](aueventlistenernotify%28______%29.md)
- [AUEventListenerAddEventType(\_:\_:\_:)](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType(\_:\_:\_:)](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter(\_:\_:\_:)](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter(\_:\_:\_:)](aulistenerremoveparameter%28______%29.md)
- [AUEventListenerBlock](aueventlistenerblock.md)

### Getting and Setting Parameters

- [AudioUnitGetParameter(\_:\_:\_:\_:\_:)](audiounitgetparameter%28__________%29.md): Gets the value of an audio unit parameter.
- [AudioUnitScheduleParameters(\_:\_:\_:)](audiounitscheduleparameters%28______%29.md): Schedules changes to the value of an audio unit parameter.
- [AudioUnitSetParameter(\_:\_:\_:\_:\_:\_:)](audiounitsetparameter%28____________%29.md): Sets the value of an audio unit parameter.

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue(\_:\_:\_:\_:)](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate(\_:\_:\_:\_:\_:\_:)](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify(\_:\_:\_:)](auparameterlistenernotify%28______%29.md)
- [AUParameterFormatValue(\_:\_:\_:\_:)](auparameterformatvalue%28________%29.md)
- [AUParameterSet(\_:\_:\_:\_:\_:)](auparameterset%28__________%29.md)
- [AUParameterValueFromLinear(\_:\_:)](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear(\_:\_:)](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

### Getting the Configuration Information

- [kAudioUnitConfigurationInfo_BusCountWritable](kaudiounitconfigurationinfo_buscountwritable.md)
- [kAudioUnitConfigurationInfo_ChannelConfigurations](kaudiounitconfigurationinfo_channelconfigurations.md)
- [kAudioUnitConfigurationInfo_HasCustomView](kaudiounitconfigurationinfo_hascustomview.md)
- [kAudioUnitConfigurationInfo_IconURL](kaudiounitconfigurationinfo_iconurl.md)
- [kAudioUnitConfigurationInfo_InitialInputs](kaudiounitconfigurationinfo_initialinputs.md)
- [kAudioUnitConfigurationInfo_InitialOutputs](kaudiounitconfigurationinfo_initialoutputs.md)
- [kAudioUnitConfigurationInfo_SupportedChannelLayoutTags](kaudiounitconfigurationinfo_supportedchannellayouttags.md)

### Configuring the Audio Unit UI

- [AudioUnitCocoaViewInfo](audiounitcocoaviewinfo.md): The name and number of custom Cocoa views for an audio unit.
- [GetAudioUnitParameterDisplayType(\_:)](getaudiounitparameterdisplaytype%28__%29.md)
- [SetAudioUnitParameterDisplayType(\_:\_:)](setaudiounitparameterdisplaytype%28____%29.md)

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
- [MIDIChannelNumber](midichannelnumber.md): MIDI Channel, 0~15 (channels 1 through 16, respectively).
- [AUAudioObjectID](auaudioobjectid.md)
- [AUMIDICIProfileChangedBlock](aumidiciprofilechangedblock.md)
- [AUAudioChannelCount](auaudiochannelcount.md): A number of audio channels.
- [AUAudioFrameCount](auaudioframecount.md): A number of audio sample frames.
- [AUAudioUnitStatus](auaudiounitstatus.md): A result code returned from an audio unit’s render function.
- [AUEventListenerProc](aueventlistenerproc.md)
- [AUEventListenerRef](aueventlistenerref.md)
- [AUEventSampleTime](aueventsampletime.md): Expresses time as a sample count.
- [AUImplementorValueObserver](auimplementorvalueobserver.md): A block called to notify the audio unit implementation of changes to a parameter value.
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
- [AUNodeConnection](aunodeconnection.md)
- [AUParameterAddress](auparameteraddress.md): A numeric identifier for an audio unit parameter.
- [AUParameterAutomationObserver](auparameterautomationobserver.md)
- [AUParameterObserver](auparameterobserver.md): A block called after the value of a parameter changes.
- [AUParameterObserverToken](auparameterobservertoken.md): A token representing an installed parameter observer block.
- [AUParameterRecordingObserver](auparameterrecordingobserver.md): A block called to record parameter changes as automation events.
- [AURenderBlock](aurenderblock.md): A block to render the audio unit.
- [AURenderObserver](aurenderobserver.md): A block called when an audio unit renders audio.
- [AURenderPullInputBlock](aurenderpullinputblock.md): A block to supply audio input to a render block.
- [AUScheduleParameterBlock](auscheduleparameterblock.md): A block to schedule parameter changes.
- [AUValue](auvalue.md): A value of an audio unit parameter.
- [AudioUnitAddPropertyListenerProc](audiounitaddpropertylistenerproc.md)
- [AudioUnitAddRenderNotifyProc](audiounitaddrendernotifyproc.md)
- [AudioUnitComplexRenderProc](audiounitcomplexrenderproc.md)
- [AudioUnitElement](audiounitelement.md): The data type for an audio unit element identifier.
- [AudioUnitGetParameterProc](audiounitgetparameterproc.md)
- [AudioUnitGetPropertyInfoProc](audiounitgetpropertyinfoproc.md)
- [AudioUnitGetPropertyProc](audiounitgetpropertyproc.md)
- [AudioUnitInitializeProc](audiounitinitializeproc.md)
- [AudioUnitParameterID](audiounitparameterid.md): The data type for an audio unit parameter identifier.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterValue](audiounitparametervalue.md): The data type for an audio unit parameter value.
- [AudioUnitProcessMultipleProc](audiounitprocessmultipleproc.md)
- [AudioUnitProcessProc](audiounitprocessproc.md)
- [AudioUnitPropertyID](audiounitpropertyid.md): The data type for audio unit property keys.
- [AudioUnitPropertyListenerProc](audiounitpropertylistenerproc.md): Called by the system when the value of a specified audio unit property has changed.
- [AudioUnitRemoteControlEventListener](audiounitremotecontroleventlistener.md)
- [AudioUnitRemovePropertyListenerProc](audiounitremovepropertylistenerproc.md)
- [AudioUnitRemovePropertyListenerWithUserDataProc](audiounitremovepropertylistenerwithuserdataproc.md)
- [AudioUnitRemoveRenderNotifyProc](audiounitremoverendernotifyproc.md)
- [AudioUnitRenderProc](audiounitrenderproc.md)
- [AudioUnitResetProc](audiounitresetproc.md)
- [AudioUnitScheduleParametersProc](audiounitscheduleparametersproc.md)
- [AudioUnitScope](audiounitscope.md): The data type for audio unit scope identifiers.
- [AudioUnitSetParameterProc](audiounitsetparameterproc.md)
- [AudioUnitSetPropertyProc](audiounitsetpropertyproc.md)
- [AudioUnitUninitializeProc](audiounituninitializeproc.md)

### Enumerations

- [Audio Unit Types](1584142-audio_unit_types.md): The defined types of audio processing plug-ins known as audio units.
- [Inter-App Audio Unit Types](1619501-inter-app-audio-unit-types.md)
- [Audio Unit Manufacturer Identifier](1584143-audio_unit_manufacturer_identifi.md): The Apple audio unit manufacturer code.
- [Audio Unit Output Subtypes](1584148-audio-unit-output-subtypes.md)
- [I/O Audio Unit Subtypes](1619485-i-o-audio-unit-subtypes.md)
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Reserved Audio Unit Clump Identifier](1533986-reserved_audio_unit_clump_identi.md): Reserved for system use.
- [Offline Audio Unit Properties](1534054-offline_audio_unit_properties.md): Properties for audio units that perform offline processing—that is, processing in a nonplayback, nonrealtime mode.
- [MIDI Audio Unit Parameters](1389613-midi_audio_unit_parameters.md): Parameters for instrument units.
- [General Audio Unit Function Selectors](1584140-general_audio_unit_function_sele.md): General audio unit component selectors that correspond to functions in the audio unit API.
- [Generator Audio Unit Subtypes](1619493-generator_audio_unit_subtypes.md): Audio units that serve as sound sources.
- [Input/Output Audio Unit Subtypes](1584139-input_output_audio_unit_subtypes.md): Input/output audio unit subtypes for audio units provided by Apple.
- [Audio Unit Panner Subtypes](1584151-audio-unit-panner-subtypes.md)
- [Audio Unit Player Subtypes](1584155-audio-unit-player-subtypes.md)
- [Audio Unit Pitch Subtypes](1584152-audio-unit-pitch-subtypes.md)
- [AudioUnitEventType](audiouniteventtype.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterUnit](audiounitparameterunit.md): The unit-of-measure for an audio unit parameter.
- [AudioUnitRemoteControlEvent](audiounitremotecontrolevent.md)
- [Audio Unit Sample Rate Converter Complexity](1534173-audio_unit_sample_rate_converter.md): Quality levels for the audio sample-rate conversion algorithm.
- [Audio Unit Scopes](1534214-audio_unit_scopes.md): Programmatic roles and contexts for audio unit properties.
- [Audio Unit SRC Algorithms](1533994-audio-unit-src-algorithms.md)
- [Audio Unit Full Name Parameter](1534055-audio-unit-full-name-parameter.md)
- [Audio Unit Parameter Flags](1534035-audio-unit-parameter-flags.md)
- [Audio Unit Filter Parameters](1390052-audio-unit-filter-parameters.md)
- [Audio Unit Generic Properties](1533969-audio-unit-generic-properties.md)
- [Audio Unit Parameter Flags](1534166-audio-unit-parameter-flags.md)
- [Audio Unit Scheduled Sound Player Properties](1534024-audio-unit-scheduled-sound-playe.md)
- [Audio Unit Offline Preflight Flags](1534010-audio-unit-offline-preflight-fla.md)
- [Audio Unit Migration Properties](1534149-audio-unit-migration-properties.md)
- [Audio Unit File Player Properties](1534079-audio-unit-file-player-propertie.md)
- [Audio Unit Parameter Listener](1509425-audio-unit-parameter-listener.md)
- [Audio Unit Errors](1584138-audio-unit-errors.md)
- [AUAudioUnitBusType](auaudiounitbustype.md)
- [AUEventSampleTime](1387633-aueventsampletime.md): Expresses time as a sample count.
- [AUHostTransportStateFlags](auhosttransportstateflags.md)
- [AUParameterAutomationEventType](auparameterautomationeventtype.md)
- [AUParameterEventType](auparametereventtype.md): Audio unit parameter event types.
- [AURenderEventType](aurendereventtype.md)
- [AUScheduledAudioSliceFlags](auscheduledaudiosliceflags.md)
- [AUParameterMIDIMappingFlags](auparametermidimappingflags.md)

## See Also

### Audio Units

- [Generating spatial audio from a multichannel audio stream](generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Components](audio-components.md): Find, load, and configure audio components, such as Audio Units and audio codecs.
- [Audio Unit Properties](audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
- [Audio Unit Voice I/O](audio-unit-voice-i-o.md): Configure system voice processing and respond to speech events.

# Audio Unit v2 (C) API (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Configure an Audio Unit and prepare it to render audio.

## Topics

### Initializing the Audio Unit

- [AudioUnitInitialize](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess](audiounitprocess%28__________%29.md)
- [AudioUnitProcessMultiple](audiounitprocessmultiple%28________________%29.md)
- [AudioUnitReset](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.

### Starting and Stopping Output

- [AudioOutputUnitStart](audiooutputunitstart%28__%29.md): Starts an I/O audio unit, which in turn starts the audio unit processing graph that it is connected to.
- [AudioOutputUnitStop](audiooutputunitstop%28__%29.md): Stops an I/O audio unit, which in turn stops the audio unit processing graph that it is connected to.
- [AudioOutputUnitStartProc](audiooutputunitstartproc.md)
- [AudioOutputUnitStopProc](audiooutputunitstopproc.md)

### Rendering the Audio

- [AudioUnitRender](audiounitrender%28____________%29.md): Initiates a rendering cycle for an audio unit.
- [AudioUnitAddRenderNotify](audiounitaddrendernotify%28______%29.md): Registers a callback to receive audio unit render notifications.
- [AudioUnitRemoveRenderNotify](audiounitremoverendernotify%28______%29.md): Unregisters a previously-registered render listener callback function.
- [AURenderCallback](aurendercallback.md): Called by the system when an audio unit requires input samples, or before and after a render operation.
- [AudioUnitRenderActionFlags](audiounitrenderactionflags.md): Flags for configuring audio unit rendering.

### Configuring Audio Unit Properties

- [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.

### Responding to Events

- [AUEventListenerCreateWithDispatchQueue](aueventlistenercreatewithdispatchqueue%28__________%29.md)
- [AUEventListenerCreate](aueventlistenercreate%28______________%29.md)
- [AUListenerDispose](aulistenerdispose%28__%29.md)
- [AUEventListenerNotify](aueventlistenernotify%28______%29.md)
- [AUEventListenerAddEventType](aueventlisteneraddeventtype%28______%29.md)
- [AUEventListenerRemoveEventType](aueventlistenerremoveeventtype%28______%29.md)
- [AUListenerAddParameter](aulisteneraddparameter%28______%29.md)
- [AUListenerRemoveParameter](aulistenerremoveparameter%28______%29.md)
- [AUEventListenerBlock](aueventlistenerblock.md)

### Getting and Setting Parameters

- [AudioUnitGetParameter](audiounitgetparameter%28__________%29.md): Gets the value of an audio unit parameter.
- [AudioUnitScheduleParameters](audiounitscheduleparameters%28______%29.md): Schedules changes to the value of an audio unit parameter.
- [AudioUnitSetParameter](audiounitsetparameter%28____________%29.md): Sets the value of an audio unit parameter.

### Monitoring Parameter Changes

- [AUListenerCreateWithDispatchQueue](aulistenercreatewithdispatchqueue%28________%29.md)
- [AUListenerCreate](aulistenercreate%28____________%29.md)
- [AUParameterListenerNotify](auparameterlistenernotify%28______%29.md)
- [AUParameterFormatValue](auparameterformatvalue%28________%29.md)
- [AUParameterSet](auparameterset%28__________%29.md)
- [AUParameterValueFromLinear](auparametervaluefromlinear%28____%29.md)
- [AUParameterValueToLinear](auparametervaluetolinear%28____%29.md)
- [AUParameterListenerBlock](auparameterlistenerblock.md)
- [AUParameterListenerProc](auparameterlistenerproc.md)
- [AUParameterListenerRef](auparameterlistenerref.md)
- [AUImplementorDisplayNameWithLengthCallback](auimplementordisplaynamewithlengthcallback.md): A block called to obtain a parameter node’s display name, possibly truncated to a desired length.
- [AUImplementorStringFromValueCallback](auimplementorstringfromvaluecallback.md): A block called to convert a parameter value to a string representation.
- [AUImplementorValueFromStringCallback](auimplementorvaluefromstringcallback.md): A block called to convert a string to a parameter value.

### Getting Information from the Host

- [HostCallback_GetBeatAndTempo](hostcallback_getbeatandtempo.md): When called by the system, provides beat and tempo information to an audio unit from a host application.
- [HostCallback_GetMusicalTimeLocation](hostcallback_getmusicaltimelocation.md): When called by the system, provides musical timing information to an audio unit from a host application.
- [HostCallback_GetTransportState](hostcallback_gettransportstate.md): When called by the system, provides audio transport state and timeline information to an audio unit from a host application.
- [HostCallback_GetTransportState2](hostcallback_gettransportstate2.md)
- [AUInputSamplesInOutputCallback](auinputsamplesinoutputcallback.md): Called by the system when an audio unit has provided a buffer of output samples.
- [AUMIDIOutputCallback](aumidioutputcallback.md): When called by a host application, gets MIDI data from an audio unit.

### Getting the Configuration Information

- [kAudioUnitConfigurationInfo_BusCountWritable](kaudiounitconfigurationinfo_buscountwritable.md)
- [kAudioUnitConfigurationInfo_ChannelConfigurations](kaudiounitconfigurationinfo_channelconfigurations.md)
- [kAudioUnitConfigurationInfo_HasCustomView](kaudiounitconfigurationinfo_hascustomview.md)
- [kAudioUnitConfigurationInfo_IconURL](kaudiounitconfigurationinfo_iconurl.md)
- [kAudioUnitConfigurationInfo_InitialInputs](kaudiounitconfigurationinfo_initialinputs.md)
- [kAudioUnitConfigurationInfo_InitialOutputs](kaudiounitconfigurationinfo_initialoutputs.md)
- [kAudioUnitConfigurationInfo_SupportedChannelLayoutTags](kaudiounitconfigurationinfo_supportedchannellayouttags.md)

### Configuring the Audio Unit UI

- [AudioUnitCocoaViewInfo](audiounitcocoaviewinfo.md): The name and number of custom Cocoa views for an audio unit.
- [AUCocoaUIBase](aucocoauibase.md)
- [AudioUnitCarbonView](audiounitcarbonview.md)
- [AudioUnitCarbonViewEventID](audiounitcarbonvieweventid.md)
- [Audio Unit Carbon View Events](1579365-audio_unit_carbon_view_events.md)
- [Audio Unit Carbon View Selectors](1579372-audio_unit_carbon_view_selectors.md)
- [Audio Unit Carbon View Component Types](1579363-audio_unit_carbon_view_component.md)
- [GetAudioUnitParameterDisplayType](getaudiounitparameterdisplaytype%28__%29.md)
- [SetAudioUnitParameterDisplayType](setaudiounitparameterdisplaytype%28____%29.md)

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
- [MIDIChannelNumber](midichannelnumber.md): MIDI Channel, 0~15 (channels 1 through 16, respectively).
- [AUAudioObjectID](auaudioobjectid.md)
- [AUMIDICIProfileChangedBlock](aumidiciprofilechangedblock.md)
- [AUAudioChannelCount](auaudiochannelcount.md): A number of audio channels.
- [AUAudioFrameCount](auaudioframecount.md): A number of audio sample frames.
- [AUAudioUnitStatus](auaudiounitstatus.md): A result code returned from an audio unit’s render function.
- [AUEventListenerProc](aueventlistenerproc.md)
- [AUEventListenerRef](aueventlistenerref.md)
- [AUEventSampleTime](aueventsampletime.md): Expresses time as a sample count.
- [AUImplementorValueObserver](auimplementorvalueobserver.md): A block called to notify the audio unit implementation of changes to a parameter value.
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.
- [AUInputHandler](auinputhandler.md): A block to notify the host of an I/O unit that an input is available.
- [AUNodeConnection](aunodeconnection.md)
- [AUParameterAddress](auparameteraddress.md): A numeric identifier for an audio unit parameter.
- [AUParameterAutomationObserver](auparameterautomationobserver.md)
- [AUParameterObserver](auparameterobserver.md): A block called after the value of a parameter changes.
- [AUParameterObserverToken](auparameterobservertoken.md): A token representing an installed parameter observer block.
- [AUParameterRecordingObserver](auparameterrecordingobserver.md): A block called to record parameter changes as automation events.
- [AURenderBlock](aurenderblock.md): A block to render the audio unit.
- [AURenderObserver](aurenderobserver.md): A block called when an audio unit renders audio.
- [AURenderPullInputBlock](aurenderpullinputblock.md): A block to supply audio input to a render block.
- [AUScheduleParameterBlock](auscheduleparameterblock.md): A block to schedule parameter changes.
- [AUValue](auvalue.md): A value of an audio unit parameter.
- [AudioUnitAddPropertyListenerProc](audiounitaddpropertylistenerproc.md)
- [AudioUnitAddRenderNotifyProc](audiounitaddrendernotifyproc.md)
- [AudioUnitComplexRenderProc](audiounitcomplexrenderproc.md)
- [AudioUnitElement](audiounitelement.md): The data type for an audio unit element identifier.
- [AudioUnitGetParameterProc](audiounitgetparameterproc.md)
- [AudioUnitGetPropertyInfoProc](audiounitgetpropertyinfoproc.md)
- [AudioUnitGetPropertyProc](audiounitgetpropertyproc.md)
- [AudioUnitInitializeProc](audiounitinitializeproc.md)
- [AudioUnitParameterID](audiounitparameterid.md): The data type for an audio unit parameter identifier.
- [AudioUnitParameterNameInfo](audiounitparameternameinfo.md): A short version of the name for an audio unit parameter.
- [AudioUnitParameterIDName](audiounitparameteridname.md): A type definition for a data type that defines the short version of the name for an audio unit parameter.
- [AudioUnitParameterValue](audiounitparametervalue.md): The data type for an audio unit parameter value.
- [AudioUnitProcessMultipleProc](audiounitprocessmultipleproc.md)
- [AudioUnitProcessProc](audiounitprocessproc.md)
- [AudioUnitPropertyID](audiounitpropertyid.md): The data type for audio unit property keys.
- [AudioUnitPropertyListenerProc](audiounitpropertylistenerproc.md): Called by the system when the value of a specified audio unit property has changed.
- [AudioUnitRemoteControlEventListener](audiounitremotecontroleventlistener.md)
- [AudioUnitRemovePropertyListenerProc](audiounitremovepropertylistenerproc.md)
- [AudioUnitRemovePropertyListenerWithUserDataProc](audiounitremovepropertylistenerwithuserdataproc.md)
- [AudioUnitRemoveRenderNotifyProc](audiounitremoverendernotifyproc.md)
- [AudioUnitRenderProc](audiounitrenderproc.md)
- [AudioUnitResetProc](audiounitresetproc.md)
- [AudioUnitScheduleParametersProc](audiounitscheduleparametersproc.md)
- [AudioUnitScope](audiounitscope.md): The data type for audio unit scope identifiers.
- [AudioUnitSetParameterProc](audiounitsetparameterproc.md)
- [AudioUnitSetPropertyProc](audiounitsetpropertyproc.md)
- [AudioUnitUninitializeProc](audiounituninitializeproc.md)

### Enumerations

- [Audio Unit Types](1584142-audio_unit_types.md): The defined types of audio processing plug-ins known as audio units.
- [Inter-App Audio Unit Types](1619501-inter-app-audio-unit-types.md)
- [Audio Unit Manufacturer Identifier](1584143-audio_unit_manufacturer_identifi.md): The Apple audio unit manufacturer code.
- [Audio Unit Output Subtypes](1584148-audio-unit-output-subtypes.md)
- [I/O Audio Unit Subtypes](1619485-i-o-audio-unit-subtypes.md)
- [Converter Audio Unit Subtypes](1584145-converter_audio_unit_subtypes.md): Audio data format converter audio unit subtypes for audio units provided by Apple.
- [Reserved Audio Unit Clump Identifier](1533986-reserved_audio_unit_clump_identi.md): Reserved for system use.
- [Offline Audio Unit Properties](1534054-offline_audio_unit_properties.md): Properties for audio units that perform offline processing—that is, processing in a nonplayback, nonrealtime mode.
- [MIDI Audio Unit Parameters](1389613-midi_audio_unit_parameters.md): Parameters for instrument units.
- [General Audio Unit Function Selectors](1584140-general_audio_unit_function_sele.md): General audio unit component selectors that correspond to functions in the audio unit API.
- [Generator Audio Unit Subtypes](1619493-generator_audio_unit_subtypes.md): Audio units that serve as sound sources.
- [Input/Output Audio Unit Subtypes](1584139-input_output_audio_unit_subtypes.md): Input/output audio unit subtypes for audio units provided by Apple.
- [Audio Unit Panner Subtypes](1584151-audio-unit-panner-subtypes.md)
- [Audio Unit Player Subtypes](1584155-audio-unit-player-subtypes.md)
- [Audio Unit Pitch Subtypes](1584152-audio-unit-pitch-subtypes.md)
- [AudioUnitEventType](audiouniteventtype.md)
- [AudioUnitParameterOptions](audiounitparameteroptions.md): Value options for audio unit parameters.
- [AudioUnitParameterUnit](audiounitparameterunit.md): The unit-of-measure for an audio unit parameter.
- [AudioUnitRemoteControlEvent](audiounitremotecontrolevent.md)
- [Audio Unit Sample Rate Converter Complexity](1534173-audio_unit_sample_rate_converter.md): Quality levels for the audio sample-rate conversion algorithm.
- [Audio Unit Scopes](1534214-audio_unit_scopes.md): Programmatic roles and contexts for audio unit properties.
- [Audio Unit SRC Algorithms](1533994-audio-unit-src-algorithms.md)
- [Audio Unit Full Name Parameter](1534055-audio-unit-full-name-parameter.md)
- [Audio Unit Parameter Flags](1534035-audio-unit-parameter-flags.md)
- [Audio Unit Filter Parameters](1390052-audio-unit-filter-parameters.md)
- [Audio Unit Generic Properties](1533969-audio-unit-generic-properties.md)
- [Audio Unit Parameter Flags](1534166-audio-unit-parameter-flags.md)
- [Audio Unit Scheduled Sound Player Properties](1534024-audio-unit-scheduled-sound-playe.md)
- [Audio Unit Offline Preflight Flags](1534010-audio-unit-offline-preflight-fla.md)
- [Audio Unit Migration Properties](1534149-audio-unit-migration-properties.md)
- [Audio Unit File Player Properties](1534079-audio-unit-file-player-propertie.md)
- [Audio Unit Parameter Listener](1509425-audio-unit-parameter-listener.md)
- [Audio Unit Errors](1584138-audio-unit-errors.md)
- [AUAudioUnitBusType](auaudiounitbustype.md)
- [AUEventSampleTime](1387633-aueventsampletime.md): Expresses time as a sample count.
- [AUHostTransportStateFlags](auhosttransportstateflags.md)
- [AUParameterAutomationEventType](auparameterautomationeventtype.md)
- [AUParameterEventType](auparametereventtype.md): Audio unit parameter event types.
- [AURenderEventType](aurendereventtype.md)
- [AUScheduledAudioSliceFlags](auscheduledaudiosliceflags.md)
- [AUParameterMIDIMappingFlags](auparametermidimappingflags.md)

## See Also

### Audio Units

- [Generating spatial audio from a multichannel audio stream](generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Components](audio-components.md): Find, load, and configure audio components, such as Audio Units and audio codecs.
- [Audio Unit Properties](audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
- [Audio Unit Voice I/O](audio-unit-voice-i-o.md): Configure system voice processing and respond to speech events.
