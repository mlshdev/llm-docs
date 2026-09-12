> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/speech_synthesis_manager/1552228-speech-channel_information_constants](https://developer.apple.com/documentation/applicationservices/speech_synthesis_manager/1552228-speech-channel_information_constants)

# Speech-Channel Information Constants

**Framework:** Application Services

Selectors that can be passed to the `GetSpeechInfo` or `SetSpeechInfo` functions.

<a id="overview"></a>

## Overview

See the [GetSpeechInfo](../1552220-getspeechinfo.md) and [SetSpeechInfo](../1552223-setspeechinfo.md) functions.

## Topics

### Constants

- [soStatus](../sostatus.md)
- [soErrors](../soerrors.md)
- [soInputMode](../soinputmode.md)
- [soCharacterMode](../socharactermode.md)
- [soNumberMode](../sonumbermode.md)
- [soRate](../sorate.md)
- [soPitchBase](../sopitchbase.md)
- [soPitchMod](../sopitchmod.md)
- [soVolume](../sovolume.md)
- [soSynthType](../sosynthtype.md)
- [soRecentSync](../sorecentsync.md)
- [soPhonemeSymbols](../sophonemesymbols.md)
- [soCurrentVoice](../socurrentvoice.md)
- [soCommandDelimiter](../socommanddelimiter.md)
- [soReset](../soreset.md)
- [soCurrentA5](../socurrenta5.md)
- [soRefCon](../sorefcon.md)
- [soTextDoneCallBack](../sotextdonecallback.md)
- [soSpeechDoneCallBack](../sospeechdonecallback.md)
- [soSyncCallBack](../sosynccallback.md)
- [soErrorCallBack](../soerrorcallback.md)
- [soPhonemeCallBack](../sophonemecallback.md)
- [soWordCallBack](../sowordcallback.md)
- [soSynthExtension](../sosynthextension.md)
- [soSoundOutput](../sosoundoutput.md): Deprecated. Get or set the speech channel’s current outputchannel.
- [soOutputToFileWithCFURL](../sooutputtofilewithcfurl.md): Pass a `CFURLRef` in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.
- [soOutputToExtAudioFile](../sooutputtoextaudiofile.md): Pass an [ExtAudioFileRef](https://developer.apple.com/documentation/audiotoolbox/extaudiofileref) in the `speechInfo` parameter to write to this file, or `NULL` to generate sound.
- [soPhonemeOptions](../sophonemeoptions.md): Get or set options for the generation of phonetic output. See [Phoneme Generation Options](1552233-phoneme_generation_options.md) for a complete list of options.
- [soOutputToAudioDevice](../sooutputtoaudiodevice.md)
