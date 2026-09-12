> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speech_synthesis_manager/speech-channel_properties](https://developer.apple.com/documentation/applicationservices/speech_synthesis_manager/speech-channel_properties)

# Speech-Channel Properties (Swift)

**Framework:** Application Services  
**Kind:** API Collection

Properties used with [CopySpeechProperty(\_:\_:\_:)](../1459075-copyspeechproperty.md) or [SetSpeechProperty(\_:\_:\_:)](../1459256-setspeechproperty.md) to get or set the characteristics of a speech channel.

## Topics

### Constants

- [kSpeechStatusProperty](../kspeechstatusproperty.md): Get speech-status information for the speech channel.
- [kSpeechErrorsProperty](../kspeecherrorsproperty.md): Get speech-error information for the speech channel.
- [kSpeechInputModeProperty](../kspeechinputmodeproperty.md): Get or set the speech channel’s current text-processing mode.
- [kSpeechCharacterModeProperty](../kspeechcharactermodeproperty.md): Get or set the speech channel’s current character-processing mode.
- [kSpeechNumberModeProperty](../kspeechnumbermodeproperty.md): Get or set the speech channel’s current number-processing mode.
- [kSpeechRateProperty](../kspeechrateproperty.md): Get or set a speech channel’s speech rate.
- [kSpeechPitchBaseProperty](../kspeechpitchbaseproperty.md): Get or set the speech channel’s baseline speech pitch.
- [kSpeechPitchModProperty](../kspeechpitchmodproperty.md): Get or set a speech channel’s pitch modulation.
- [kSpeechVolumeProperty](../kspeechvolumeproperty.md): Get or set the speech volume for a speech channel.
- [kSpeechSynthesizerInfoProperty](../kspeechsynthesizerinfoproperty.md): Get information about the speech synthesizer being used on the specified speech channel.
- [kSpeechRecentSyncProperty](../kspeechrecentsyncproperty.md): Get the message code for the most recently encountered synchronization command.
- [kSpeechPhonemeSymbolsProperty](../kspeechphonemesymbolsproperty.md): Get a list of phoneme symbols and example words defined for the speech channel’s synthesizer.
- [kSpeechCurrentVoiceProperty](../kspeechcurrentvoiceproperty.md): Set the current voice on the current speech channel to the specified voice.
- [kSpeechCommandDelimiterProperty](../kspeechcommanddelimiterproperty.md): Set the embedded speech command delimiter characters to be used for the speech channel.
- [kSpeechResetProperty](../kspeechresetproperty.md): Set a speech channel back to its default state.
- [kSpeechOutputToFileURLProperty](../kspeechoutputtofileurlproperty.md): Set the speech output destination to a file or to the computer’s speakers.
- [kSpeechOutputToExtAudioFileProperty](../kspeechoutputtoextaudiofileproperty.md): Set the speech output destination to an extended audio file or to the computer’s speakers.
- [kSpeechRefConProperty](../kspeechrefconproperty.md): Set a speech channel’s reference constant value.
- [kSpeechTextDoneCallBack](../kspeechtextdonecallback.md): Set the callback function to be called when the Speech Synthesis Manager has finished processing speech being generated on the speech channel.
- [kSpeechSpeechDoneCallBack](../kspeechspeechdonecallback.md): Set the callback function to be called when the Speech Synthesis Manager has finished generating speech on the speech channel.
- [kSpeechSyncCallBack](../kspeechsynccallback.md): Set the callback function to be called when the Speech Synthesis Manager encounters a synchronization command within an embedded speech command in text being processed on the speech channel.
- [kSpeechPhonemeCallBack](../kspeechphonemecallback.md): Set the callback function to be called every time the Speech Synthesis Manager is about to generate a phoneme on the speech channel.
- [kSpeechErrorCFCallBack](../kspeecherrorcfcallback.md): Set the callback function to be called when an error is encountered during the processing of an embedded command.
- [kSpeechWordCFCallBack](../kspeechwordcfcallback.md): Set the callback function to be called every time the Speech Synthesis Manager is about to generate a word on the speech channel.
- [kSpeechPhonemeOptionsProperty](../kspeechphonemeoptionsproperty.md): Get or set the options for the generation of phonetic output.
- [kSpeechOutputToAudioDeviceProperty](../kspeechoutputtoaudiodeviceproperty.md): Set the speech output destination to an audio device file or to the computer’s speakers.

# Speech-Channel Properties (Objective-C)

**Framework:** Application Services  
**Kind:** API Collection

Properties used with [CopySpeechProperty](../1459075-copyspeechproperty.md) or [SetSpeechProperty](../1459256-setspeechproperty.md) to get or set the characteristics of a speech channel.

## Topics

### Constants

- [kSpeechStatusProperty](../kspeechstatusproperty.md): Get speech-status information for the speech channel.
- [kSpeechErrorsProperty](../kspeecherrorsproperty.md): Get speech-error information for the speech channel.
- [kSpeechInputModeProperty](../kspeechinputmodeproperty.md): Get or set the speech channel’s current text-processing mode.
- [kSpeechCharacterModeProperty](../kspeechcharactermodeproperty.md): Get or set the speech channel’s current character-processing mode.
- [kSpeechNumberModeProperty](../kspeechnumbermodeproperty.md): Get or set the speech channel’s current number-processing mode.
- [kSpeechRateProperty](../kspeechrateproperty.md): Get or set a speech channel’s speech rate.
- [kSpeechPitchBaseProperty](../kspeechpitchbaseproperty.md): Get or set the speech channel’s baseline speech pitch.
- [kSpeechPitchModProperty](../kspeechpitchmodproperty.md): Get or set a speech channel’s pitch modulation.
- [kSpeechVolumeProperty](../kspeechvolumeproperty.md): Get or set the speech volume for a speech channel.
- [kSpeechSynthesizerInfoProperty](../kspeechsynthesizerinfoproperty.md): Get information about the speech synthesizer being used on the specified speech channel.
- [kSpeechRecentSyncProperty](../kspeechrecentsyncproperty.md): Get the message code for the most recently encountered synchronization command.
- [kSpeechPhonemeSymbolsProperty](../kspeechphonemesymbolsproperty.md): Get a list of phoneme symbols and example words defined for the speech channel’s synthesizer.
- [kSpeechCurrentVoiceProperty](../kspeechcurrentvoiceproperty.md): Set the current voice on the current speech channel to the specified voice.
- [kSpeechCommandDelimiterProperty](../kspeechcommanddelimiterproperty.md): Set the embedded speech command delimiter characters to be used for the speech channel.
- [kSpeechResetProperty](../kspeechresetproperty.md): Set a speech channel back to its default state.
- [kSpeechOutputToFileURLProperty](../kspeechoutputtofileurlproperty.md): Set the speech output destination to a file or to the computer’s speakers.
- [kSpeechOutputToExtAudioFileProperty](../kspeechoutputtoextaudiofileproperty.md): Set the speech output destination to an extended audio file or to the computer’s speakers.
- [kSpeechRefConProperty](../kspeechrefconproperty.md): Set a speech channel’s reference constant value.
- [kSpeechTextDoneCallBack](../kspeechtextdonecallback.md): Set the callback function to be called when the Speech Synthesis Manager has finished processing speech being generated on the speech channel.
- [kSpeechSpeechDoneCallBack](../kspeechspeechdonecallback.md): Set the callback function to be called when the Speech Synthesis Manager has finished generating speech on the speech channel.
- [kSpeechSyncCallBack](../kspeechsynccallback.md): Set the callback function to be called when the Speech Synthesis Manager encounters a synchronization command within an embedded speech command in text being processed on the speech channel.
- [kSpeechPhonemeCallBack](../kspeechphonemecallback.md): Set the callback function to be called every time the Speech Synthesis Manager is about to generate a phoneme on the speech channel.
- [kSpeechErrorCFCallBack](../kspeecherrorcfcallback.md): Set the callback function to be called when an error is encountered during the processing of an embedded command.
- [kSpeechWordCFCallBack](../kspeechwordcfcallback.md): Set the callback function to be called every time the Speech Synthesis Manager is about to generate a word on the speech channel.
- [kSpeechPhonemeOptionsProperty](../kspeechphonemeoptionsproperty.md): Get or set the options for the generation of phonetic output.
- [kSpeechOutputToAudioDeviceProperty](../kspeechoutputtoaudiodeviceproperty.md): Set the speech output destination to an audio device file or to the computer’s speakers.
