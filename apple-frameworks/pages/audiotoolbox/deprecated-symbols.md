> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/deprecated-symbols](https://developer.apple.com/documentation/audiotoolbox/deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Inter-App Audio

Inter-App Audio is deprecated in iOS 13 and is unavailable when running iPad apps in macOS.

- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.

### Functions

- [AudioFileReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
- [AudioHardwareServiceAddPropertyListener(\_:\_:\_:\_:)](audiohardwareserviceaddpropertylistener%28________%29.md): Deprecated. Registers a HAL audio object property listener callback function to be invoked when a specified property changes.
- [AudioHardwareServiceGetPropertyData(\_:\_:\_:\_:\_:\_:)](audiohardwareservicegetpropertydata%28____________%29.md): Deprecated. Gets the value for a specified property.
- [AudioHardwareServiceGetPropertyDataSize(\_:\_:\_:\_:\_:)](audiohardwareservicegetpropertydatasize%28__________%29.md): Deprecated. Gets the payload size for a given property.
- [AudioHardwareServiceHasProperty(\_:\_:)](audiohardwareservicehasproperty%28____%29.md): Deprecated. Queries a HAL audio object about whether or not it has a specified property.
- [AudioHardwareServiceIsPropertySettable(\_:\_:\_:)](audiohardwareserviceispropertysettable%28______%29.md): Deprecated. Queries a HAL audio object about whether a specified property is settable.
- [AudioHardwareServiceRemovePropertyListener(\_:\_:\_:\_:)](audiohardwareserviceremovepropertylistener%28________%29.md): Deprecated. Unregisters a HAL audio object property listener callback function.
- [AudioHardwareServiceSetPropertyData(\_:\_:\_:\_:\_:\_:)](audiohardwareservicesetpropertydata%28____________%29.md): Deprecated. Asks a HAL audio object to change the value of a specified property.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md): Deprecated. Adds a property listener callback function to your application’s audio session object.
- [AudioSessionGetProperty(\_:\_:\_:)](audiosessiongetproperty%28______%29.md): Deprecated. Gets the value of a specified audio session property.
- [AudioSessionGetPropertySize(\_:\_:)](audiosessiongetpropertysize%28____%29.md): Deprecated. Gets the size of the value for a specified audio session property.
- [AudioSessionInitialize(\_:\_:\_:\_:)](audiosessioninitialize%28________%29.md): Deprecated. Initializes an iOS application’s audio session object.
- [AudioSessionRemovePropertyListener(\_:)](audiosessionremovepropertylistener%28__%29.md): Deprecated. Removes an audio session property listener callback function.
- [AudioSessionRemovePropertyListenerWithUserData(\_:\_:\_:)](audiosessionremovepropertylistenerwithuserdata%28______%29.md): Deprecated. Removes a property listener callback function from your application’s audio session object.
- [AudioSessionSetActive(\_:)](audiosessionsetactive%28__%29.md): Deprecated. Actives or deactivates your application’s audio session.
- [AudioSessionSetActiveWithFlags(\_:\_:)](audiosessionsetactivewithflags%28____%29.md): Deprecated. Activates or deactivates your application’s audio session; provides flags for use by other audio sessions.
- [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md): Deprecated. Sets the value of a specified audio session property.

### Callbacks

- [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md): Deprecated. Invoked when an audio interruption in iOS begins or ends.
- [AudioSessionPropertyListener](audiosessionpropertylistener.md): Deprecated. Invoked when an audio session property changes in iOS.

### Data Types

- [ExtendedControlEvent](extendedcontrolevent.md)
- [MIDIEndpointRef](../coremidi/midiendpointref.md): A MIDI source or destination an entity owns.
- [MagicCookieInfo](magiccookieinfo.md): Deprecated. A structure holding magic cookie information.
- [NoteInstanceID](noteinstanceid.md)
- [ReadBytesFDF](readbytesfdf.md)
- [ReadPacketDataFDF](readpacketdatafdf.md)
- [ReadPacketsFDF](readpacketsfdf.md)
- [SetPropertyFDF](setpropertyfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [WritePacketsFDF](writepacketsfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.

### Constants

- [Audio Unit Attenuation Properties](1534112-audio-unit-attenuation-propertie.md)
- [Audio Unit Instrument Errors](1584141-audio-unit-instrument-errors.md)
- [Anonymous](1534019-anonymous.md)
- [Anonymous](1534074-anonymous.md)
- [Audio Graph Errors](1537630-audio-graph-errors.md)
- [Audio Converter Property ID](1624333-audio-converter-property-id.md)
- [Anonymous](1621044-anonymous.md)
- [Anonymous](1618426-anonymous.md)
- [Anonymous](1618742-anonymous.md)
- [Anonymous](1619479-anonymous.md)
- [Anonymous](1619504-anonymous.md)
- [Anonymous](1533960-anonymous.md)
- [Anonymous](1534225-anonymous.md)
- [Music Device Properties](1534089-music-device-properties.md)
- [3D Mixer Audio Unit Properties](1534063-3d_mixer_audio_unit_properties.md): Properties for the Apple 3D Mixer audio unit.
- [kAudioSession_AudioRouteChangeKey_OldRoute](kaudiosession_audioroutechangekey_oldroute.md)
- [AU_SUPPORT_INTERAPP_AUDIO](au_support_interapp_audio.md)
- [Hardware Codec Capabilities](1620452-hardware-codec-capabilities.md): A constant to determine which hardware codecs can be used.
- [Deprecated Audio Codec Properties](1494107-deprecated-audio-codec-propertie.md)
- [Deprecated Constants Used With kAudioCodecBitRateFormat](1494081-deprecated-constants-used-with-k.md)
- [Deprecated Constants Used With kAudioCodecOutputPrecedence](1494070-deprecated-constants-used-with-k.md)
- [Deprecated Constants Used With kAudioSettings_Hint](1494142-deprecated-constants-used-with-k.md)
- [Deprecated Audio Session Categories](1618459-deprecated-audio-session-categor.md): Deprecated category identifiers for audio sessions. Do not use for new development.

### Audio Graphs

- [Audio Unit Processing Graph Services](audio-unit-processing-graph-services.md): Audio Unit Processing Graph Services provide interfaces for representing a set of audio units, connections between their inputs and outputs, and callbacks used to provide inputs. It also enables the embedding of sub (or child) processing graphs within parent graphs to allow for a logical organization of parts of an overall signal chain.

# Deprecated Symbols (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Inter-App Audio

Inter-App Audio is deprecated in iOS 13 and is unavailable when running iPad apps in macOS.

- [AudioOutputUnitPublish](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioOutputUnitGetHostIcon](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.

### Functions

- [AudioFileCreate](audiofilecreate.md): Deprecated.
- [AudioFileInitialize](audiofileinitialize.md): Deprecated.
- [AudioFileOpen](audiofileopen.md): Deprecated.
- [AudioFileReadPackets](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.
- [MusicSequenceLoadSMFDataWithFlags](musicsequenceloadsmfdatawithflags.md): Deprecated.
- [MusicSequenceLoadSMFWithFlags](musicsequenceloadsmfwithflags.md): Deprecated.
- [MusicSequenceSaveMIDIFile](musicsequencesavemidifile.md): Deprecated.
- [MusicSequenceSaveSMFData](musicsequencesavesmfdata.md): Deprecated.
- [MusicTrackNewExtendedControlEvent](musictracknewextendedcontrolevent.md): Deprecated.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
- [AudioFileComponentCreate](audiofilecomponentcreate.md): Deprecated.
- [AudioFileComponentDataIsThisFormat](audiofilecomponentdataisthisformat.md): Deprecated.
- [AudioFileComponentFileIsThisFormat](audiofilecomponentfileisthisformat.md): Deprecated.
- [AudioFileComponentInitialize](audiofilecomponentinitialize.md): Deprecated.
- [AudioFileComponentOpenFile](audiofilecomponentopenfile.md): Deprecated.
- [AudioHardwareServiceAddPropertyListener](audiohardwareserviceaddpropertylistener%28________%29.md): Deprecated. Registers a HAL audio object property listener callback function to be invoked when a specified property changes.
- [AudioHardwareServiceGetPropertyData](audiohardwareservicegetpropertydata%28____________%29.md): Deprecated. Gets the value for a specified property.
- [AudioHardwareServiceGetPropertyDataSize](audiohardwareservicegetpropertydatasize%28__________%29.md): Deprecated. Gets the payload size for a given property.
- [AudioHardwareServiceHasProperty](audiohardwareservicehasproperty%28____%29.md): Deprecated. Queries a HAL audio object about whether or not it has a specified property.
- [AudioHardwareServiceIsPropertySettable](audiohardwareserviceispropertysettable%28______%29.md): Deprecated. Queries a HAL audio object about whether a specified property is settable.
- [AudioHardwareServiceRemovePropertyListener](audiohardwareserviceremovepropertylistener%28________%29.md): Deprecated. Unregisters a HAL audio object property listener callback function.
- [AudioHardwareServiceSetPropertyData](audiohardwareservicesetpropertydata%28____________%29.md): Deprecated. Asks a HAL audio object to change the value of a specified property.
- [AudioOutputUnitGetHostIcon](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioOutputUnitPublish](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [MusicDevicePrepareInstrument](musicdeviceprepareinstrument.md): Deprecated.
- [MusicDeviceReleaseInstrument](musicdevicereleaseinstrument.md): Deprecated.
- [AudioSessionAddPropertyListener](audiosessionaddpropertylistener%28______%29.md): Deprecated. Adds a property listener callback function to your application’s audio session object.
- [AudioSessionGetProperty](audiosessiongetproperty%28______%29.md): Deprecated. Gets the value of a specified audio session property.
- [AudioSessionGetPropertySize](audiosessiongetpropertysize%28____%29.md): Deprecated. Gets the size of the value for a specified audio session property.
- [AudioSessionInitialize](audiosessioninitialize%28________%29.md): Deprecated. Initializes an iOS application’s audio session object.
- [AudioSessionRemovePropertyListener](audiosessionremovepropertylistener%28__%29.md): Deprecated. Removes an audio session property listener callback function.
- [AudioSessionRemovePropertyListenerWithUserData](audiosessionremovepropertylistenerwithuserdata%28______%29.md): Deprecated. Removes a property listener callback function from your application’s audio session object.
- [AudioSessionSetActive](audiosessionsetactive%28__%29.md): Deprecated. Actives or deactivates your application’s audio session.
- [AudioSessionSetActiveWithFlags](audiosessionsetactivewithflags%28____%29.md): Deprecated. Activates or deactivates your application’s audio session; provides flags for use by other audio sessions.
- [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md): Deprecated. Sets the value of a specified audio session property.

### Callbacks

- [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md): Deprecated. Invoked when an audio interruption in iOS begins or ends.
- [AudioSessionPropertyListener](audiosessionpropertylistener.md): Deprecated. Invoked when an audio session property changes in iOS.

### Data Types

- [ExtendedControlEvent](extendedcontrolevent.md)
- [MIDIEndpointRef](../coremidi/midiendpointref.md): A MIDI source or destination an entity owns.
- [MagicCookieInfo](magiccookieinfo.md): Deprecated. A structure holding magic cookie information.
- [NoteInstanceID](noteinstanceid.md)
- [ReadBytesFDF](readbytesfdf.md)
- [ReadPacketDataFDF](readpacketdatafdf.md)
- [ReadPacketsFDF](readpacketsfdf.md)
- [SetPropertyFDF](setpropertyfdf.md)
- [SetUserDataFDF](setuserdatafdf.md)
- [WriteBytesFDF](writebytesfdf.md)
- [WritePacketsFDF](writepacketsfdf.md)
- [AudioSessionPropertyID](audiosessionpropertyid.md): Deprecated. The data type for an audio session property identifier.

### Constants

- [Audio Unit Attenuation Properties](1534112-audio-unit-attenuation-propertie.md)
- [Audio Unit Instrument Errors](1584141-audio-unit-instrument-errors.md)
- [Anonymous](1534019-anonymous.md)
- [Anonymous](1534074-anonymous.md)
- [Audio Graph Errors](1537630-audio-graph-errors.md)
- [Audio Converter Property ID](1624333-audio-converter-property-id.md)
- [Anonymous](1621044-anonymous.md)
- [Anonymous](1618426-anonymous.md)
- [Anonymous](1618742-anonymous.md)
- [Anonymous](1619479-anonymous.md)
- [Anonymous](1619504-anonymous.md)
- [Anonymous](1533960-anonymous.md)
- [Anonymous](1534225-anonymous.md)
- [Music Device Properties](1534089-music-device-properties.md)
- [3D Mixer Audio Unit Properties](1534063-3d_mixer_audio_unit_properties.md): Properties for the Apple 3D Mixer audio unit.
- [kAudioSession_AudioRouteChangeKey_OldRoute](kaudiosession_audioroutechangekey_oldroute.md)
- [AU_SUPPORT_INTERAPP_AUDIO](au_support_interapp_audio.md)
- [Hardware Codec Capabilities](1620452-hardware-codec-capabilities.md): A constant to determine which hardware codecs can be used.
- [Deprecated Audio Codec Properties](1494107-deprecated-audio-codec-propertie.md)
- [Deprecated Constants Used With kAudioCodecBitRateFormat](1494081-deprecated-constants-used-with-k.md)
- [Deprecated Constants Used With kAudioCodecOutputPrecedence](1494070-deprecated-constants-used-with-k.md)
- [Deprecated Constants Used With kAudioSettings_Hint](1494142-deprecated-constants-used-with-k.md)
- [Deprecated Audio Session Categories](1618459-deprecated-audio-session-categor.md): Deprecated category identifiers for audio sessions. Do not use for new development.

### Audio Graphs

- [Audio Unit Processing Graph Services](audio-unit-processing-graph-services.md): Audio Unit Processing Graph Services provide interfaces for representing a set of audio units, connections between their inputs and outputs, and callbacks used to provide inputs. It also enables the embedding of sub (or child) processing graphs within parent graphs to allow for a logical organization of parts of an overall signal chain.
