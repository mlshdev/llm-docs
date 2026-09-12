> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox](https://developer.apple.com/documentation/audiotoolbox)

# Audio Toolbox (Swift)

**Framework:** Audio Toolbox  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Record or play audio, convert formats, parse audio streams, and configure your audio session.

<a id="overview"></a>

## Overview

The AudioToolbox framework provides interfaces for recording, playback, and stream parsing. In iOS, the framework provides additional interfaces for managing audio sessions.

## Topics

### Essentials

- [Porting your audio code to Apple silicon](apple-silicon/porting-your-audio-code-to-apple-silicon.md): Eliminate issues in your audio-specific code when running on Apple silicon Mac computers.

### Audio Units

- [Generating spatial audio from a multichannel audio stream](audiotoolbox/generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audiotoolbox/audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Components](audiotoolbox/audio-components.md): Find, load, and configure audio components, such as Audio Units and audio codecs.
- [Audio Unit v2 (C) API](audiotoolbox/audio-unit-v2-c-api.md): Configure an Audio Unit and prepare it to render audio.
- [Audio Unit Properties](audiotoolbox/audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
- [Audio Unit Voice I/O](audiotoolbox/audio-unit-voice-i-o.md): Configure system voice processing and respond to speech events.

### Playback and Recording

- [Audio Queue Services](audiotoolbox/audio-queue-services.md): Connect to audio hardware and manage the recording or playback process.
- [Audio Services](audiotoolbox/audio-services.md): Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.
- [Music Player](audiotoolbox/music-player.md): Create and play a sequence of tracks, and manage aspects of playback in response to standard events.
- [Anchoring sound to a window or volume](audiotoolbox/spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.

### Audio Files and Formats

- [Audio Format Services](audiotoolbox/audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audiotoolbox/audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](audiotoolbox/extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audiotoolbox/audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audiotoolbox/audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](audiotoolbox/core-audio-file-format.md): Parse the structure of Core Audio files.

### Utilities

- [Analyzing audio performance with Instruments](audiotoolbox/analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audiotoolbox/audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audiotoolbox/audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audiotoolbox/audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](audiotoolbox/workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audiotoolbox/audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](audiotoolbox/clock-utilities.md): Manage time-related information associated with audio playback.

### Deprecated

- [Deprecated Symbols](audiotoolbox/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Reference

- [AudioToolbox Structures](audiotoolbox/audiotoolbox-structures.md)
- [AudioToolbox Enumerations](audiotoolbox/audiotoolbox-enumerations.md)
- [AudioToolbox Constants](audiotoolbox/audiotoolbox-constants.md)
- [AudioToolbox Functions](audiotoolbox/audiotoolbox-functions.md)
- [AudioToolbox Data Types](audiotoolbox/audiotoolbox-data-types.md)

### Macros

- [Macros](audiotoolbox/audiotoolbox-macros.md)

### Protocols

- [SpatialAudioExperience](audiotoolbox/spatialaudioexperience.md): Configure an audio stream for spatial computing.

### Structures

- [AutomaticSpatialAudio](audiotoolbox/automaticspatialaudio.md): A spatial audio experience determined by the system.
- [BypassedSpatialAudio](audiotoolbox/bypassedspatialaudio.md): An experience in which the system does not apply spatial processing to the audio stream.
- [FixedSpatialAudio](audiotoolbox/fixedspatialaudio.md): A spatial experience that does not take user motion into account.
- [HeadTrackedSpatialAudio](audiotoolbox/headtrackedspatialaudio.md): A spatial experience that takes user motion into account.

### Variables

- [kAUAudioMixParameter_RemixAmount](audiotoolbox/kauaudiomixparameter_remixamount.md)
- [kAUAudioMixParameter_Style](audiotoolbox/kauaudiomixparameter_style.md)
- [kAUAudioMixProperty_EnableSpatialization](audiotoolbox/kauaudiomixproperty_enablespatialization.md)
- [kAUAudioMixProperty_SpatialAudioMixMetadata](audiotoolbox/kauaudiomixproperty_spatialaudiomixmetadata.md)
- [kAudioCodecContentSource_AV_Spatial_Live](audiotoolbox/kaudiocodeccontentsource_av_spatial_live.md)
- [kAudioCodecContentSource_AV_Spatial_Offline](audiotoolbox/kaudiocodeccontentsource_av_spatial_offline.md)
- [kAudioCodecContentSource_AV_Traditional_Live](audiotoolbox/kaudiocodeccontentsource_av_traditional_live.md)
- [kAudioCodecContentSource_AV_Traditional_Offline](audiotoolbox/kaudiocodeccontentsource_av_traditional_offline.md)
- [kAudioCodecContentSource_AppleAV_Spatial_Live](audiotoolbox/kaudiocodeccontentsource_appleav_spatial_live.md)
- [kAudioCodecContentSource_AppleAV_Spatial_Offline](audiotoolbox/kaudiocodeccontentsource_appleav_spatial_offline.md)
- [kAudioCodecContentSource_AppleAV_Traditional_Live](audiotoolbox/kaudiocodeccontentsource_appleav_traditional_live.md)
- [kAudioCodecContentSource_AppleAV_Traditional_Offline](audiotoolbox/kaudiocodeccontentsource_appleav_traditional_offline.md)
- [kAudioCodecContentSource_AppleCapture_Spatial](audiotoolbox/kaudiocodeccontentsource_applecapture_spatial.md)
- [kAudioCodecContentSource_AppleCapture_Spatial_Enhanced](audiotoolbox/kaudiocodeccontentsource_applecapture_spatial_enhanced.md)
- [kAudioCodecContentSource_AppleCapture_Traditional](audiotoolbox/kaudiocodeccontentsource_applecapture_traditional.md)
- [kAudioCodecContentSource_AppleMusic_Spatial](audiotoolbox/kaudiocodeccontentsource_applemusic_spatial.md)
- [kAudioCodecContentSource_AppleMusic_Traditional](audiotoolbox/kaudiocodeccontentsource_applemusic_traditional.md)
- [kAudioCodecContentSource_ApplePassthrough](audiotoolbox/kaudiocodeccontentsource_applepassthrough.md)
- [kAudioCodecContentSource_Capture_Spatial](audiotoolbox/kaudiocodeccontentsource_capture_spatial.md)
- [kAudioCodecContentSource_Capture_Spatial_Enhanced](audiotoolbox/kaudiocodeccontentsource_capture_spatial_enhanced.md)
- [kAudioCodecContentSource_Capture_Traditional](audiotoolbox/kaudiocodeccontentsource_capture_traditional.md)
- [kAudioCodecContentSource_Music_Spatial](audiotoolbox/kaudiocodeccontentsource_music_spatial.md)
- [kAudioCodecContentSource_Music_Traditional](audiotoolbox/kaudiocodeccontentsource_music_traditional.md)
- [kAudioCodecContentSource_Passthrough](audiotoolbox/kaudiocodeccontentsource_passthrough.md)
- [kAudioCodecContentSource_Reserved](audiotoolbox/kaudiocodeccontentsource_reserved.md)
- [kAudioCodecContentSource_Unspecified](audiotoolbox/kaudiocodeccontentsource_unspecified.md)
- [kAudioCodecDynamicRangeControlConfiguration_Capture](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_capture.md)
- [kAudioCodecDynamicRangeControlConfiguration_Movie](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_movie.md)
- [kAudioCodecDynamicRangeControlConfiguration_Music](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_music.md)
- [kAudioCodecDynamicRangeControlConfiguration_None](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_none.md)
- [kAudioCodecDynamicRangeControlConfiguration_Speech](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_speech.md)
- [kAudioCodecPropertyASPFrequency](audiotoolbox/kaudiocodecpropertyaspfrequency.md)
- [kAudioCodecPropertyContentSource](audiotoolbox/kaudiocodecpropertycontentsource.md)
- [kAudioCodecPropertyDynamicRangeControlConfiguration](audiotoolbox/kaudiocodecpropertydynamicrangecontrolconfiguration.md)
- [kAudioConverterPropertyChannelMixMap](audiotoolbox/kaudioconverterpropertychannelmixmap.md)
- [kAudioConverterPropertyPerformDownmix](audiotoolbox/kaudioconverterpropertyperformdownmix.md)
- [kAudioUnitErr_MultipleVoiceProcessors](audiotoolbox/kaudiouniterr_multiplevoiceprocessors.md)
- [kAudioUnitSubType_AUAudioMix](audiotoolbox/kaudiounitsubtype_auaudiomix.md)
- [kReverb2Param_LegacyMode](audiotoolbox/kreverb2param_legacymode.md)

### Functions

- [AudioConverterFillComplexBufferRealtimeSafe(\_:\_:\_:\_:\_:\_:)](audiotoolbox/audioconverterfillcomplexbufferrealtimesafe%28____________%29.md)
- [AudioConverterFillComplexBufferWithPacketDependencies(\_:\_:\_:\_:\_:\_:\_:)](audiotoolbox/audioconverterfillcomplexbufferwithpacketdependencies%28______________%29.md)
- [AudioFileWritePacketsWithDependencies(\_:\_:\_:\_:\_:\_:\_:\_:)](audiotoolbox/audiofilewritepacketswithdependencies%28________________%29.md)
- [AudioServicesPlayAlertSound(\_:spatialExperience:)](audiotoolbox/audioservicesplayalertsound%28__spatialexperience_%29.md): Play an alert sound with the provided spatial audio experience.
- [AudioServicesPlaySystemSound(\_:spatialExperience:)](audiotoolbox/audioservicesplaysystemsound%28__spatialexperience_%29.md): Play a system sound with the provided spatial audio experience.

### Type Aliases

- [AudioConverterComplexInputDataProcRealtimeSafe](audiotoolbox/audioconvertercomplexinputdataprocrealtimesafe.md)

### Enumerations

- [AUAudioMixRenderingStyle](audiotoolbox/auaudiomixrenderingstyle.md)
- [SpatialAudioExperiences](audiotoolbox/spatialaudioexperiences.md)

# Audio Toolbox (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Record or play audio, convert formats, parse audio streams, and configure your audio session.

<a id="overview"></a>

## Overview

The AudioToolbox framework provides interfaces for recording, playback, and stream parsing. In iOS, the framework provides additional interfaces for managing audio sessions.

## Topics

### Essentials

- [Porting your audio code to Apple silicon](apple-silicon/porting-your-audio-code-to-apple-silicon.md): Eliminate issues in your audio-specific code when running on Apple silicon Mac computers.

### Audio Units

- [Generating spatial audio from a multichannel audio stream](audiotoolbox/generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audiotoolbox/audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Components](audiotoolbox/audio-components.md): Find, load, and configure audio components, such as Audio Units and audio codecs.
- [Audio Unit v2 (C) API](audiotoolbox/audio-unit-v2-c-api.md): Configure an Audio Unit and prepare it to render audio.
- [Audio Unit Properties](audiotoolbox/audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
- [Audio Unit Voice I/O](audiotoolbox/audio-unit-voice-i-o.md): Configure system voice processing and respond to speech events.

### Playback and Recording

- [Audio Queue Services](audiotoolbox/audio-queue-services.md): Connect to audio hardware and manage the recording or playback process.
- [Audio Services](audiotoolbox/audio-services.md): Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.
- [Music Player](audiotoolbox/music-player.md): Create and play a sequence of tracks, and manage aspects of playback in response to standard events.
- [Anchoring sound to a window or volume](audiotoolbox/spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.

### Audio Files and Formats

- [Audio Format Services](audiotoolbox/audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audiotoolbox/audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](audiotoolbox/extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audiotoolbox/audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Audio File Components](audiotoolbox/audio-file-components.md): Get information about audio file formats, and about files containing audio data.
- [Core Audio File Format](audiotoolbox/core-audio-file-format.md): Parse the structure of Core Audio files.

### Utilities

- [Analyzing audio performance with Instruments](audiotoolbox/analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audiotoolbox/audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audiotoolbox/audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audiotoolbox/audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](audiotoolbox/workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audiotoolbox/audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](audiotoolbox/clock-utilities.md): Manage time-related information associated with audio playback.

### Deprecated

- [Deprecated Symbols](audiotoolbox/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Reference

- [AudioToolbox Structures](audiotoolbox/audiotoolbox-structures.md)
- [AudioToolbox Enumerations](audiotoolbox/audiotoolbox-enumerations.md)
- [AudioToolbox Constants](audiotoolbox/audiotoolbox-constants.md)
- [AudioToolbox Functions](audiotoolbox/audiotoolbox-functions.md)
- [AudioToolbox Data Types](audiotoolbox/audiotoolbox-data-types.md)

### Macros

- [Macros](audiotoolbox/audiotoolbox-macros.md)
- [AudioToolbox_AUAudioUnit_h](audiotoolbox/audiotoolbox_auaudiounit_h.md)
- [AudioToolbox_AUHeadTrackingBinauralRenderer_h](audiotoolbox/audiotoolbox_auheadtrackingbinauralrenderer_h.md)
- [AudioToolbox_AUParameters_h](audiotoolbox/audiotoolbox_auparameters_h.md)
- [AudioToolbox_AudioUnitProperties_h](audiotoolbox/audiotoolbox_audiounitproperties_h.md)
- [AudioUnit_AUComponent_h](audiotoolbox/audiounit_aucomponent_h.md)
- [AudioUnit_AudioCodec_h](audiotoolbox/audiounit_audiocodec_h.md)
- [AudioUnit_AudioComponent_h](audiotoolbox/audiounit_audiocomponent_h.md)
- [CASpatialAudioExperience_h](audiotoolbox/caspatialaudioexperience_h.md)

### Classes

- [CAAnchoringStrategy](audiotoolbox/caanchoringstrategy.md): The center of a head-tracked spatial experience.
- [CAAutomaticAnchoringStrategy](audiotoolbox/caautomaticanchoringstrategy.md): A system-defined anchoring strategy.
- [CAAutomaticSpatialAudio](audiotoolbox/caautomaticspatialaudio.md): A spatial audio experience determined by the system.
- [CABypassedSpatialAudio](audiotoolbox/cabypassedspatialaudio.md): An experience in which the system does not apply spatial processing to the audio stream.
- [CAFixedSpatialAudio](audiotoolbox/cafixedspatialaudio.md): A spatial experience that does not take user motion into account.
- [CAFrontAnchoringStrategy](audiotoolbox/cafrontanchoringstrategy.md): Anchor to the front of the user’s space.
- [CAHeadTrackedSpatialAudio](audiotoolbox/caheadtrackedspatialaudio.md): A spatial experience that takes user motion into account.
- [CASceneAnchoringStrategy](audiotoolbox/casceneanchoringstrategy.md): Anchor to the visual center of a particular UIScene.
- [CASpatialAudioExperience](audiotoolbox/caspatialaudioexperience.md): Configure an audio stream for spatial computing.

### Variables

- [kAudioServicesDetailIntendedSpatialExperience](audiotoolbox/kaudioservicesdetailintendedspatialexperience.md)

### Functions

- [AudioConverterFillComplexBufferRealtimeSafe](audiotoolbox/audioconverterfillcomplexbufferrealtimesafe%28____________%29.md)
- [AudioConverterFillComplexBufferWithPacketDependencies](audiotoolbox/audioconverterfillcomplexbufferwithpacketdependencies%28______________%29.md)
- [AudioFileWritePacketsWithDependencies](audiotoolbox/audiofilewritepacketswithdependencies%28________________%29.md)
- [AudioServicesPlayAlertSoundWithDetails](audiotoolbox/audioservicesplayalertsoundwithdetails.md)
- [AudioServicesPlaySystemSoundWithDetails](audiotoolbox/audioservicesplaysystemsoundwithdetails.md)

### Enumeration Cases

- [kAUAudioMixParameter_RemixAmount](audiotoolbox/kauaudiomixparameter_remixamount.md)
- [kAUAudioMixParameter_Style](audiotoolbox/kauaudiomixparameter_style.md)
- [kAUAudioMixProperty_EnableSpatialization](audiotoolbox/kauaudiomixproperty_enablespatialization.md)
- [kAUAudioMixProperty_SpatialAudioMixMetadata](audiotoolbox/kauaudiomixproperty_spatialaudiomixmetadata.md)
- [kAudioCodecContentSource_AV_Spatial_Live](audiotoolbox/kaudiocodeccontentsource_av_spatial_live.md)
- [kAudioCodecContentSource_AV_Spatial_Offline](audiotoolbox/kaudiocodeccontentsource_av_spatial_offline.md)
- [kAudioCodecContentSource_AV_Traditional_Live](audiotoolbox/kaudiocodeccontentsource_av_traditional_live.md)
- [kAudioCodecContentSource_AV_Traditional_Offline](audiotoolbox/kaudiocodeccontentsource_av_traditional_offline.md)
- [kAudioCodecContentSource_AppleAV_Spatial_Live](audiotoolbox/kaudiocodeccontentsource_appleav_spatial_live.md)
- [kAudioCodecContentSource_AppleAV_Spatial_Offline](audiotoolbox/kaudiocodeccontentsource_appleav_spatial_offline.md)
- [kAudioCodecContentSource_AppleAV_Traditional_Live](audiotoolbox/kaudiocodeccontentsource_appleav_traditional_live.md)
- [kAudioCodecContentSource_AppleAV_Traditional_Offline](audiotoolbox/kaudiocodeccontentsource_appleav_traditional_offline.md)
- [kAudioCodecContentSource_AppleCapture_Spatial](audiotoolbox/kaudiocodeccontentsource_applecapture_spatial.md)
- [kAudioCodecContentSource_AppleCapture_Spatial_Enhanced](audiotoolbox/kaudiocodeccontentsource_applecapture_spatial_enhanced.md)
- [kAudioCodecContentSource_AppleCapture_Traditional](audiotoolbox/kaudiocodeccontentsource_applecapture_traditional.md)
- [kAudioCodecContentSource_AppleMusic_Spatial](audiotoolbox/kaudiocodeccontentsource_applemusic_spatial.md)
- [kAudioCodecContentSource_AppleMusic_Traditional](audiotoolbox/kaudiocodeccontentsource_applemusic_traditional.md)
- [kAudioCodecContentSource_ApplePassthrough](audiotoolbox/kaudiocodeccontentsource_applepassthrough.md)
- [kAudioCodecContentSource_Capture_Spatial](audiotoolbox/kaudiocodeccontentsource_capture_spatial.md)
- [kAudioCodecContentSource_Capture_Spatial_Enhanced](audiotoolbox/kaudiocodeccontentsource_capture_spatial_enhanced.md)
- [kAudioCodecContentSource_Capture_Traditional](audiotoolbox/kaudiocodeccontentsource_capture_traditional.md)
- [kAudioCodecContentSource_Music_Spatial](audiotoolbox/kaudiocodeccontentsource_music_spatial.md)
- [kAudioCodecContentSource_Music_Traditional](audiotoolbox/kaudiocodeccontentsource_music_traditional.md)
- [kAudioCodecContentSource_Passthrough](audiotoolbox/kaudiocodeccontentsource_passthrough.md)
- [kAudioCodecContentSource_Reserved](audiotoolbox/kaudiocodeccontentsource_reserved.md)
- [kAudioCodecContentSource_Unspecified](audiotoolbox/kaudiocodeccontentsource_unspecified.md)
- [kAudioCodecDynamicRangeControlConfiguration_Capture](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_capture.md)
- [kAudioCodecDynamicRangeControlConfiguration_Movie](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_movie.md)
- [kAudioCodecDynamicRangeControlConfiguration_Music](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_music.md)
- [kAudioCodecDynamicRangeControlConfiguration_None](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_none.md)
- [kAudioCodecDynamicRangeControlConfiguration_Speech](audiotoolbox/kaudiocodecdynamicrangecontrolconfiguration_speech.md)
- [kAudioCodecPropertyASPFrequency](audiotoolbox/kaudiocodecpropertyaspfrequency.md)
- [kAudioCodecPropertyContentSource](audiotoolbox/kaudiocodecpropertycontentsource.md)
- [kAudioCodecPropertyDynamicRangeControlConfiguration](audiotoolbox/kaudiocodecpropertydynamicrangecontrolconfiguration.md)
- [kAudioConverterPropertyChannelMixMap](audiotoolbox/kaudioconverterpropertychannelmixmap.md)
- [kAudioConverterPropertyPerformDownmix](audiotoolbox/kaudioconverterpropertyperformdownmix.md)
- [kAudioOutputUnitProperty_IntendedSpatialExperience](audiotoolbox/kaudiooutputunitproperty_intendedspatialexperience.md)
- [kAudioQueueProperty_IntendedSpatialExperience](audiotoolbox/kaudioqueueproperty_intendedspatialexperience.md)
- [kAudioUnitErr_MultipleVoiceProcessors](audiotoolbox/kaudiouniterr_multiplevoiceprocessors.md)
- [kAudioUnitSubType_AUAudioMix](audiotoolbox/kaudiounitsubtype_auaudiomix.md)
- [kReverb2Param_LegacyMode](audiotoolbox/kreverb2param_legacymode.md)

### Type Aliases

- [AudioConverterComplexInputDataProcRealtimeSafe](audiotoolbox/audioconvertercomplexinputdataprocrealtimesafe.md)

### Enumerations

- [AUAudioMixRenderingStyle](audiotoolbox/auaudiomixrenderingstyle.md)
- [CASoundStageSize](audiotoolbox/casoundstagesize.md): Configure the distribution of audio channels in 3D space.
