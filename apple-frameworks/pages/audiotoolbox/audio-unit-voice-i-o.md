> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-unit-voice-i-o](https://developer.apple.com/documentation/audiotoolbox/audio-unit-voice-i-o)

# Audio Unit Voice I/O

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

Configure system voice processing and respond to speech events.

## Topics

### Observing muted speech

- [kAUVoiceIOProperty_MutedSpeechActivityEventListener](kauvoiceioproperty_mutedspeechactivityeventlistener.md): A property to register a listener that the system calls when it detects speech while the user has the microphone muted.
- [AUVoiceIOMutedSpeechActivityEventListener](auvoiceiomutedspeechactivityeventlistener.md): A block that the system calls to indicate speech activity while the user has the microphone muted.
- [AUVoiceIOSpeechActivityEvent](auvoiceiospeechactivityevent.md): Constants that indicate the state of muted speech.

### Configuring voice processing

- [kAUVoiceIOProperty_BypassVoiceProcessing](kauvoiceioproperty_bypassvoiceprocessing.md): A property that bypasses all processing for microphone uplink done by the voice processing unit.
- [kAUVoiceIOProperty_VoiceProcessingEnableAGC](kauvoiceioproperty_voiceprocessingenableagc.md): A property to enable automatic gain control on the processed microphone uplink.
- [kAUVoiceIOProperty_MuteOutput](kauvoiceioproperty_muteoutput.md): A property to mute the output of the processed microphone uplink.

### Configuring ducking of other audio

- [AUVoiceIOOtherAudioDuckingConfiguration](auvoiceiootheraudioduckingconfiguration.md): A structure that you use to configure ducking of other non-voice audio in a voice chat.

### Inspecting errors

- [kAUVoiceIOErr_UnexpectedNumberOfInputChannels](kauvoiceioerr_unexpectednumberofinputchannels.md): An error that indicates that the audio unit encountered an unexpected number of input channels during initialization.

## See Also

### Audio Units

- [Generating spatial audio from a multichannel audio stream](generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Components](audio-components.md): Find, load, and configure audio components, such as Audio Units and audio codecs.
- [Audio Unit v2 (C) API](audio-unit-v2-c-api.md): Configure an Audio Unit and prepare it to render audio.
- [Audio Unit Properties](audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
