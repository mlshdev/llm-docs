> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants)

# Speech-Channel Information Constants

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Selectors that can be passed to the `GetSpeechInfo` or `SetSpeechInfo` functions.

## Declaration

```objectivec
enum : OSType {
    ...
};
```

## Topics

### Constants

- [soStatus](1552228-speech-channel_information_constants/sostatus.md)
- [soErrors](1552228-speech-channel_information_constants/soerrors.md)
- [soInputMode](1552228-speech-channel_information_constants/soinputmode.md)
- [soCharacterMode](1552228-speech-channel_information_constants/socharactermode.md)
- [soNumberMode](1552228-speech-channel_information_constants/sonumbermode.md)
- [soRate](1552228-speech-channel_information_constants/sorate.md)
- [soPitchBase](1552228-speech-channel_information_constants/sopitchbase.md)
- [soPitchMod](1552228-speech-channel_information_constants/sopitchmod.md)
- [soVolume](1552228-speech-channel_information_constants/sovolume.md)
- [soSynthType](1552228-speech-channel_information_constants/sosynthtype.md)
- [soRecentSync](1552228-speech-channel_information_constants/sorecentsync.md)
- [soPhonemeSymbols](1552228-speech-channel_information_constants/sophonemesymbols.md)
- [soCurrentVoice](1552228-speech-channel_information_constants/socurrentvoice.md)
- [soCommandDelimiter](1552228-speech-channel_information_constants/socommanddelimiter.md)
- [soReset](1552228-speech-channel_information_constants/soreset.md)
- [soCurrentA5](1552228-speech-channel_information_constants/socurrenta5.md)
- [soRefCon](1552228-speech-channel_information_constants/sorefcon.md)
- [soTextDoneCallBack](1552228-speech-channel_information_constants/sotextdonecallback.md)
- [soSpeechDoneCallBack](1552228-speech-channel_information_constants/sospeechdonecallback.md)
- [soSyncCallBack](1552228-speech-channel_information_constants/sosynccallback.md)
- [soErrorCallBack](1552228-speech-channel_information_constants/soerrorcallback.md)
- [soPhonemeCallBack](1552228-speech-channel_information_constants/sophonemecallback.md)
- [soWordCallBack](1552228-speech-channel_information_constants/sowordcallback.md)
- [soSynthExtension](1552228-speech-channel_information_constants/sosynthextension.md)
- [soSoundOutput](1552228-speech-channel_information_constants/sosoundoutput.md): Deprecated. Get or set the speech channel’s current outputchannel.
- [soOutputToFileWithCFURL](1552228-speech-channel_information_constants/sooutputtofilewithcfurl.md): Pass a `CFURLRef` in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.
- [soOutputToExtAudioFile](1552228-speech-channel_information_constants/sooutputtoextaudiofile.md): Pass an [ExtAudioFileRef](https://developer.apple.com/documentation/audiotoolbox/extaudiofileref) in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.
- [soPhonemeOptions](1552228-speech-channel_information_constants/sophonemeoptions.md): Get or set options for the generation of phonetic output. See [Phoneme Generation Options](1552233-phoneme_generation_options.md) for a complete list of options.
- [soOutputToAudioDevice](1552228-speech-channel_information_constants/sooutputtoaudiodevice.md)
