> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speech_synthesis_manager](https://developer.apple.com/documentation/applicationservices/speech_synthesis_manager)

# Speech Synthesis Manager (Swift)

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

The Speech Synthesis Manager, formerly called the Speech Manager, is the part of macOS that provides a standardized method for Mac apps to generate synthesized speech. For example, you may want your application to incorporate the capability to speak its dialog box messages to the user. A word-processing application might use the Speech Synthesis Manager to implement a command that speaks a selected section of a document to the user. Because sound samples can take up large amounts of room on disk, using text in place of sampled sound is extremely efficient. For example, a multimedia application might use the Speech Synthesis Manager to provide a narration of a QuickTime movie instead of including sampled-sound data on a movie track.

OS X v10.5 introduces native support for performing speech synthesis tasks using Core Foundation-based objects, such as speaking text represented as `CFString` objects and managing speech channel properties using a `CFDictionary`-based property dictionary. You should begin using these Core Foundation-based programming interfaces as soon as it’s convenient, because future synthesizers will accept Core Foundation strings and data structures directly through the speech synthesis framework. In the meantime, existing buffer-based clients and synthesizers will continue to work as before, with strings and other data structures getting automatically converted as necessary.

<a id="1679841"></a>

### Gestalt Constants

You can check for version and feature availability information by using the Speech Synthesis Manager selectors defined in the [Gestalt Manager](https://developer.apple.com/documentation/coreservices/carbon_core/gestalt_manager).

## Topics

### Changing Speech Attributes

- [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechPitch(\_:\_:)](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.
- [SetSpeechRate(\_:\_:)](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.

### Converting Text To Phonemes

- [CopyPhonemesFromText(\_:\_:\_:)](1460918-copyphonemesfromtext.md): Deprecated. Converts the specified text string into its equivalent phonemic representation.

### Installing a Pronunciation Dictionary

- [UseSpeechDictionary(\_:\_:)](1463688-usespeechdictionary.md): Deprecated. Registers a speech dictionary with a speech channel.

### Managing Speech Channels

- [DisposeSpeechChannel(\_:)](1462081-disposespeechchannel.md): Deprecated. Disposes of an existing speech channel.
- [NewSpeechChannel(\_:\_:)](1461367-newspeechchannel.md): Deprecated. Creates a new speech channel.

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate(\_:\_:)](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy()](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide()](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion()](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

### Getting Information About Voices

- [CountVoices(\_:)](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice(\_:\_:)](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription(\_:\_:\_:)](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo(\_:\_:\_:)](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec(\_:\_:\_:)](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech(\_:)](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt(\_:\_:)](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [StopSpeech(\_:)](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt(\_:\_:)](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

### Registering and Unregistering Synthesizers and Voices

- [SpeechSynthesisRegisterModuleURL(\_:)](1459624-speechsynthesisregistermoduleurl.md): Deprecated. Registers and makes available a speech synthesizer or voice.
- [SpeechSynthesisUnregisterModuleURL(\_:)](1462511-speechsynthesisunregistermoduleu.md): Deprecated. Unregisters a registered speech synthesizer or voice.

### Callbacks

- [SpeechDoneProcPtr](speechdoneprocptr.md): Defines a pointer to a speech-done callback functionwhich is called when the Speech Synthesis Manager finishes speakinga buffer of text.
- [SpeechErrorProcPtr](speecherrorprocptr.md): Defines a pointer to an error callback functionthat handles syntax errors within commands embedded in a text bufferbeing processed by the Speech Synthesis Manager.
- [SpeechErrorCFProcPtr](speecherrorcfprocptr.md): Defines a pointer to an error callback function that handles syntax errors within commands embedded in a `CFString` object being processed by the Speech Synthesis Manager.
- [SpeechPhonemeProcPtr](speechphonemeprocptr.md): Defines a pointer to a phoneme callback functionthat is called by the Speech Synthesis Manager before it pronouncesa phoneme.
- [SpeechSyncProcPtr](speechsyncprocptr.md): Defines a pointer to a synchronization callbackfunction that is called when the Speech Synthesis Manager encountersa synchronization command embedded in a text buffer.
- [SpeechTextDoneProcPtr](speechtextdoneprocptr.md): Defines a pointer to a text-done callback functionthat is called when the Speech Synthesis Manager has finished processinga buffer of text.
- [SpeechWordProcPtr](speechwordprocptr.md): Defines a pointer to a word callback functionthat is called by the Speech Synthesis Manager before it pronouncesa word.
- [SpeechWordCFProcPtr](speechwordcfprocptr.md): Defines a pointer to a Core Foundation-based word callback function that is called by the Speech Synthesis Manager before it pronounces a word.

### Data Types

- [DelimiterInfo](delimiterinfo.md): Defines a delimiter information structure.
- [PhonemeDescriptor](phonemedescriptor.md): Defines a phoneme descriptor structure.
- [PhonemeInfo](phonemeinfo.md): Defines a structure that stores information about a phoneme.
- [SpeechChannelRecord](speechchannelrecord.md): Represents a speech channel.
- [SpeechChannel](speechchannel.md): Defines a pointer to a speech channel record.
- [SpeechDoneUPP](speechdoneupp.md): Defines a universal procedure pointer (UPP) to a speech-done callback function.
- [SpeechErrorInfo](speecherrorinfo.md): Defines a speech error information structure.
- [SpeechErrorUPP](speecherrorupp.md): Defines a universal procedure pointer (UPP) to an error callback function.
- [SpeechPhonemeUPP](speechphonemeupp.md): Defines a universal procedure pointer (UPP) to a phoneme callback function.
- [SpeechStatusInfo](speechstatusinfo.md): Defines a speech status information structure, which stores information about the status of a speech channel.
- [SpeechSyncUPP](speechsyncupp.md): Defines a universal procedure pointer (UPP) to a synchronization callback function.
- [SpeechTextDoneUPP](speechtextdoneupp.md): Defines a universal procedure pointer (UPP) to a text-done callback function.
- [SpeechVersionInfo](speechversioninfo.md): Defines a speech version information structure.
- [SpeechWordUPP](speechwordupp.md): Defines a universal procedure pointer (UPP) to a word callback function.
- [SpeechXtndData](speechxtnddata.md): Defines a speech extension data structure.
- [VoiceDescription](voicedescription.md): Defines a voice description structure.
- [VoiceFileInfo](voicefileinfo.md): Defines a voice file information structure.
- [VoiceSpec](voicespec.md): Defines a voice specification structure.

### Constants

- [Control Flags Constants](speech_synthesis_manager/1552213-control_flags_constants.md): Flags that indicate which synthesizer features are active.
- [Gender Constants](speech_synthesis_manager/1552246-gender_constants.md): Constants that indicate the gender of the individual represented by avoice.
- [Audio Unit Constants](speech_synthesis_manager/1552263-audio_unit_constants.md): Constants that identify values in a speech synthesis audio unit.
- [Stop Speech Locations](speech_synthesis_manager/1552264-stop_speech_locations.md): Locations that indicate where speech should be paused or stopped.
- [Speech Synthesis Manager Operating System Types](speech_synthesis_manager/1552231-speech_synthesis_manager_operati.md): The `OSType` definitions used by the Speech Synthesis Manager.
- [Speech-Channel Modes](speech_synthesis_manager/1552256-speech-channel_modes.md): The available text-processing and number-processing modes for a speech channel.
- [Speech-Channel Modes for Core Foundation-based Functions](speech_synthesis_manager/speech-channel_modes_for_core_foundation-based_functions.md): The available text-processing and number-processing modes for a speech channel.
- [Voice Information Selectors](speech_synthesis_manager/1552254-voice_information_selectors.md): The types of voice data that can be requested by the `GetVoiceInfo` function.
- [Speech-Channel Information Constants](speech_synthesis_manager/1552228-speech-channel_information_constants.md): Selectors that can be passed to the `GetSpeechInfo` or `SetSpeechInfo` functions.
- [Phoneme Generation Options](speech_synthesis_manager/1552233-phoneme_generation_options.md): Flags that specify options for the generation of phonetic output.
- [Speech-Channel Properties](speech_synthesis_manager/speech-channel_properties.md): Properties used with [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) or [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) to get or set the characteristics of a speech channel.
- [Synthesizer Option Keys](speech_synthesis_manager/synthesizer_option_keys.md): Keys used to specify synthesizer options.
- [Speech Status Keys](speech_synthesis_manager/speech_status_keys.md): Keys used with the `kSpeechStatusProperty` property to specify the status of the speech channel.
- [Speech Error Keys](speech_synthesis_manager/speech_error_keys.md): Keys used with the `kSpeechErrorsProperty` property to describe errors encountered during speech processing and production.
- [Speech Synthesizer Information Keys](speech_synthesis_manager/speech_synthesizer_information_keys.md): Keys used with the `kSpeechSynthesizerInfoProperty` property to get information about the synthesizer.
- [Phoneme Symbols Keys](speech_synthesis_manager/phoneme_symbols_keys.md): Keys used with the `kSpeechPhonemeSymbolsProperty` property to provide information about the phoneme being processed.
- [Current Voice Keys](speech_synthesis_manager/current_voice_keys.md): Keys used with the `kSpeechCurrentVoiceProperty` property to specify information about the current voice.
- [Command Delimiter Keys](speech_synthesis_manager/command_delimiter_keys.md): Keys used with the `kSpeechCommandDelimiterProperty` property to specify information about the command delimiter strings.
- [Speech Dictionary Keys](speech_synthesis_manager/speech_dictionary_keys.md): Keys used in a speech dictionary to override the synthesizer’s default pronunciation of a word.
- [Error Callback User-Information String](speech_synthesis_manager/error_callback_user-information_string.md): Specifies information about the text being synthesized when an error occurs.

### Result Codes

- [noSynthFound](https://developer.apple.com/documentation/coreservices/nosynthfound): Could not find the specified speech synthesizer
- [synthOpenFailed](https://developer.apple.com/documentation/coreservices/synthopenfailed): Could not open another speech synthesizerchannel
- [synthNotReady](https://developer.apple.com/documentation/coreservices/synthnotready): Speech synthesizer is still busy speaking
- [bufTooSmall](https://developer.apple.com/documentation/coreservices/buftoosmall): Output buffer is too small to hold result
- [voiceNotFound](https://developer.apple.com/documentation/coreservices/voicenotfound): Voice resource not found
- [incompatibleVoice](https://developer.apple.com/documentation/coreservices/incompatiblevoice): Specified voice cannot be used with synthesizer
- [badDictFormat](https://developer.apple.com/documentation/coreservices/baddictformat): Pronunciation dictionary format error
- [badInputText](https://developer.apple.com/documentation/coreservices/badinputtext): Raw phoneme text contains invalid characters

## See Also

### Managers

- [Apple Event Manager](apple_event_manager.md)
- [ColorSync Manager](colorsync_manager.md)

# Speech Synthesis Manager (Objective-C)

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

The Speech Synthesis Manager, formerly called the Speech Manager, is the part of macOS that provides a standardized method for Mac apps to generate synthesized speech. For example, you may want your application to incorporate the capability to speak its dialog box messages to the user. A word-processing application might use the Speech Synthesis Manager to implement a command that speaks a selected section of a document to the user. Because sound samples can take up large amounts of room on disk, using text in place of sampled sound is extremely efficient. For example, a multimedia application might use the Speech Synthesis Manager to provide a narration of a QuickTime movie instead of including sampled-sound data on a movie track.

OS X v10.5 introduces native support for performing speech synthesis tasks using Core Foundation-based objects, such as speaking text represented as `CFString` objects and managing speech channel properties using a `CFDictionary`-based property dictionary. You should begin using these Core Foundation-based programming interfaces as soon as it’s convenient, because future synthesizers will accept Core Foundation strings and data structures directly through the speech synthesis framework. In the meantime, existing buffer-based clients and synthesizers will continue to work as before, with strings and other data structures getting automatically converted as necessary.

<a id="1679841"></a>

### Gestalt Constants

You can check for version and feature availability information by using the Speech Synthesis Manager selectors defined in the [Gestalt Manager](https://developer.apple.com/documentation/coreservices/carbon_core/gestalt_manager).

## Topics

### Changing Speech Attributes

- [SetSpeechInfo](1552223-setspeechinfo.md): Deprecated. Changes a setting of a particular speech channel.
- [SetSpeechProperty](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechPitch](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.
- [SetSpeechRate](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.

### Converting Text To Phonemes

- [TextToPhonemes](1552235-texttophonemes.md): Deprecated. Converts a buffer of textual data into phonemic data.
- [CopyPhonemesFromText](1460918-copyphonemesfromtext.md): Deprecated. Converts the specified text string into its equivalent phonemic representation.

### Installing a Pronunciation Dictionary

- [UseDictionary](1552255-usedictionary.md): Deprecated. Installs the designated dictionary into a speech channel.
- [UseSpeechDictionary](1463688-usespeechdictionary.md): Deprecated. Registers a speech dictionary with a speech channel.

### Managing Speech Channels

- [DisposeSpeechChannel](1462081-disposespeechchannel.md): Deprecated. Disposes of an existing speech channel.
- [NewSpeechChannel](1461367-newspeechchannel.md): Deprecated. Creates a new speech channel.

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

### Getting Information About Voices

- [CountVoices](1459947-countvoices.md): Deprecated. Determines how many voices are available.
- [GetIndVoice](1464595-getindvoice.md): Deprecated. Gets a voice specification structure for a voice bypassing an index to the `GetIndVoice` function.
- [GetVoiceDescription](1463940-getvoicedescription.md): Deprecated. Gets a description of a voice by using the `GetVoiceDescription` function.
- [GetVoiceInfo](1461410-getvoiceinfo.md): Deprecated. Gets the same information about a voice that the `GetVoiceDescription` function provides,or to determine in which file and resource a voice is stored.
- [MakeVoiceSpec](1461446-makevoicespec.md): Deprecated. Sets the fields of a voice specification structure.

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

### Registering and Unregistering Synthesizers and Voices

- [SpeechSynthesisRegisterModuleURL](1459624-speechsynthesisregistermoduleurl.md): Deprecated. Registers and makes available a speech synthesizer or voice.
- [SpeechSynthesisUnregisterModuleURL](1462511-speechsynthesisunregistermoduleu.md): Deprecated. Unregisters a registered speech synthesizer or voice.

### Creating, Invoking, and Disposing Universal Procedure Pointers

- [DisposeSpeechDoneUPP](1552237-disposespeechdoneupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a speech-donecallback function.
- [DisposeSpeechErrorUPP](1552245-disposespeecherrorupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to anerror callback function.
- [DisposeSpeechPhonemeUPP](1552226-disposespeechphonemeupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a phonemecallback function.
- [DisposeSpeechSyncUPP](1552219-disposespeechsyncupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a synchronizationcallback function.
- [DisposeSpeechTextDoneUPP](1552229-disposespeechtextdoneupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a text-donecallback function.
- [DisposeSpeechWordUPP](1552222-disposespeechwordupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a wordcallback function.
- [InvokeSpeechDoneUPP](1552215-invokespeechdoneupp.md): Deprecated. Invokes your speech-done callback function.
- [InvokeSpeechErrorUPP](1552214-invokespeecherrorupp.md): Deprecated. Invokes your error callback function.
- [InvokeSpeechPhonemeUPP](1552234-invokespeechphonemeupp.md): Deprecated. Invokes your phoneme callback function.
- [InvokeSpeechSyncUPP](1552243-invokespeechsyncupp.md): Deprecated. Invokes your synchronization callback function.
- [InvokeSpeechTextDoneUPP](1552249-invokespeechtextdoneupp.md): Deprecated. Invokes your text-done callback function.
- [InvokeSpeechWordUPP](1552227-invokespeechwordupp.md): Deprecated. Invokes your word callback function.
- [NewSpeechDoneUPP](1552218-newspeechdoneupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a speech-donecallback function.
- [NewSpeechErrorUPP](1552224-newspeecherrorupp.md): Deprecated. Creates a new universal procedure pointer to an errorcallback function.
- [NewSpeechPhonemeUPP](1552225-newspeechphonemeupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to a phonemecallback function.
- [NewSpeechSyncUPP](1552244-newspeechsyncupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a synchronizationcallback function.
- [NewSpeechTextDoneUPP](1552247-newspeechtextdoneupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a text-donecallback function.
- [NewSpeechWordUPP](1552230-newspeechwordupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a wordcallback function.

### Callbacks

- [SpeechDoneProcPtr](speechdoneprocptr.md): Defines a pointer to a speech-done callback functionwhich is called when the Speech Synthesis Manager finishes speakinga buffer of text.
- [SpeechErrorProcPtr](speecherrorprocptr.md): Defines a pointer to an error callback functionthat handles syntax errors within commands embedded in a text bufferbeing processed by the Speech Synthesis Manager.
- [SpeechErrorCFProcPtr](speecherrorcfprocptr.md): Defines a pointer to an error callback function that handles syntax errors within commands embedded in a `CFString` object being processed by the Speech Synthesis Manager.
- [SpeechPhonemeProcPtr](speechphonemeprocptr.md): Defines a pointer to a phoneme callback functionthat is called by the Speech Synthesis Manager before it pronouncesa phoneme.
- [SpeechSyncProcPtr](speechsyncprocptr.md): Defines a pointer to a synchronization callbackfunction that is called when the Speech Synthesis Manager encountersa synchronization command embedded in a text buffer.
- [SpeechTextDoneProcPtr](speechtextdoneprocptr.md): Defines a pointer to a text-done callback functionthat is called when the Speech Synthesis Manager has finished processinga buffer of text.
- [SpeechWordProcPtr](speechwordprocptr.md): Defines a pointer to a word callback functionthat is called by the Speech Synthesis Manager before it pronouncesa word.
- [SpeechWordCFProcPtr](speechwordcfprocptr.md): Defines a pointer to a Core Foundation-based word callback function that is called by the Speech Synthesis Manager before it pronounces a word.

### Data Types

- [DelimiterInfo](delimiterinfo.md): Defines a delimiter information structure.
- [PhonemeDescriptor](phonemedescriptor.md): Defines a phoneme descriptor structure.
- [PhonemeInfo](phonemeinfo.md): Defines a structure that stores information about a phoneme.
- [SpeechChannelRecord](speechchannelrecord.md): Represents a speech channel.
- [SpeechChannel](speechchannel.md): Defines a pointer to a speech channel record.
- [SpeechDoneUPP](speechdoneupp.md): Defines a universal procedure pointer (UPP) to a speech-done callback function.
- [SpeechErrorInfo](speecherrorinfo.md): Defines a speech error information structure.
- [SpeechErrorUPP](speecherrorupp.md): Defines a universal procedure pointer (UPP) to an error callback function.
- [SpeechPhonemeUPP](speechphonemeupp.md): Defines a universal procedure pointer (UPP) to a phoneme callback function.
- [SpeechStatusInfo](speechstatusinfo.md): Defines a speech status information structure, which stores information about the status of a speech channel.
- [SpeechSyncUPP](speechsyncupp.md): Defines a universal procedure pointer (UPP) to a synchronization callback function.
- [SpeechTextDoneUPP](speechtextdoneupp.md): Defines a universal procedure pointer (UPP) to a text-done callback function.
- [SpeechVersionInfo](speechversioninfo.md): Defines a speech version information structure.
- [SpeechWordUPP](speechwordupp.md): Defines a universal procedure pointer (UPP) to a word callback function.
- [SpeechXtndData](speechxtnddata.md): Defines a speech extension data structure.
- [VoiceDescription](voicedescription.md): Defines a voice description structure.
- [VoiceFileInfo](voicefileinfo.md): Defines a voice file information structure.
- [VoiceSpec](voicespec.md): Defines a voice specification structure.

### Constants

- [Control Flags Constants](1552213-control_flags_constants.md): Flags that indicate which synthesizer features are active.
- [Gender Constants](1552246-gender_constants.md): Constants that indicate the gender of the individual represented by avoice.
- [Audio Unit Constants](1552263-audio_unit_constants.md): Constants that identify values in a speech synthesis audio unit.
- [Stop Speech Locations](1552264-stop_speech_locations.md): Locations that indicate where speech should be paused or stopped.
- [Speech Synthesis Manager Operating System Types](1552231-speech_synthesis_manager_operati.md): The `OSType` definitions used by the Speech Synthesis Manager.
- [Speech-Channel Modes](1552256-speech-channel_modes.md): The available text-processing and number-processing modes for a speech channel.
- [Speech-Channel Modes for Core Foundation-based Functions](speech_synthesis_manager/speech-channel_modes_for_core_foundation-based_functions.md): The available text-processing and number-processing modes for a speech channel.
- [Voice Information Selectors](1552254-voice_information_selectors.md): The types of voice data that can be requested by the `GetVoiceInfo` function.
- [Speech-Channel Information Constants](1552228-speech-channel_information_constants.md): Selectors that can be passed to the `GetSpeechInfo` or `SetSpeechInfo` functions.
- [Phoneme Generation Options](1552233-phoneme_generation_options.md): Flags that specify options for the generation of phonetic output.
- [Speech-Channel Properties](speech_synthesis_manager/speech-channel_properties.md): Properties used with [CopySpeechProperty](1459075-copyspeechproperty.md) or [SetSpeechProperty](1459256-setspeechproperty.md) to get or set the characteristics of a speech channel.
- [Synthesizer Option Keys](speech_synthesis_manager/synthesizer_option_keys.md): Keys used to specify synthesizer options.
- [Speech Status Keys](speech_synthesis_manager/speech_status_keys.md): Keys used with the `kSpeechStatusProperty` property to specify the status of the speech channel.
- [Speech Error Keys](speech_synthesis_manager/speech_error_keys.md): Keys used with the `kSpeechErrorsProperty` property to describe errors encountered during speech processing and production.
- [Speech Synthesizer Information Keys](speech_synthesis_manager/speech_synthesizer_information_keys.md): Keys used with the `kSpeechSynthesizerInfoProperty` property to get information about the synthesizer.
- [Phoneme Symbols Keys](speech_synthesis_manager/phoneme_symbols_keys.md): Keys used with the `kSpeechPhonemeSymbolsProperty` property to provide information about the phoneme being processed.
- [Current Voice Keys](speech_synthesis_manager/current_voice_keys.md): Keys used with the `kSpeechCurrentVoiceProperty` property to specify information about the current voice.
- [Command Delimiter Keys](speech_synthesis_manager/command_delimiter_keys.md): Keys used with the `kSpeechCommandDelimiterProperty` property to specify information about the command delimiter strings.
- [Speech Dictionary Keys](speech_synthesis_manager/speech_dictionary_keys.md): Keys used in a speech dictionary to override the synthesizer’s default pronunciation of a word.
- [Error Callback User-Information String](speech_synthesis_manager/error_callback_user-information_string.md): Specifies information about the text being synthesized when an error occurs.

### Result Codes

- [noSynthFound](https://developer.apple.com/documentation/coreservices/1560017-anonymous/nosynthfound): Could not find the specified speech synthesizer
- [synthOpenFailed](https://developer.apple.com/documentation/coreservices/1560017-anonymous/synthopenfailed): Could not open another speech synthesizerchannel
- [synthNotReady](https://developer.apple.com/documentation/coreservices/1560017-anonymous/synthnotready): Speech synthesizer is still busy speaking
- [bufTooSmall](https://developer.apple.com/documentation/coreservices/1560017-anonymous/buftoosmall): Output buffer is too small to hold result
- [voiceNotFound](https://developer.apple.com/documentation/coreservices/1560017-anonymous/voicenotfound): Voice resource not found
- [incompatibleVoice](https://developer.apple.com/documentation/coreservices/1560017-anonymous/incompatiblevoice): Specified voice cannot be used with synthesizer
- [badDictFormat](https://developer.apple.com/documentation/coreservices/1560017-anonymous/baddictformat): Pronunciation dictionary format error
- [badInputText](https://developer.apple.com/documentation/coreservices/1560017-anonymous/badinputtext): Raw phoneme text contains invalid characters

## See Also

### Managers

- [Apple Event Manager](apple_event_manager.md)
- [ColorSync Manager](colorsync_manager.md)
