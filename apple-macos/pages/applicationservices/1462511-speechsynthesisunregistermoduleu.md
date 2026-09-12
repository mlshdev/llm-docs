> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462511-speechsynthesisunregistermoduleu](https://developer.apple.com/documentation/applicationservices/1462511-speechsynthesisunregistermoduleu)

# SpeechSynthesisUnregisterModuleURL(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 13.0)

Unregisters a registered speech synthesizer or voice.

## Declaration

```swift
func SpeechSynthesisUnregisterModuleURL(_ url: CFURL) -> OSErr
```

## Parameters

- `url`: The file URL of the synthesizer plug-in or voice to unregister.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SpeechSynthesisUnregisterModuleURL` function unregisters the speech synthesizer or voice specified by `url`. When a synthesizer is unregistered, all voices that require that synthesizer are automatically unregistered.

Note that if a speech channel is currently using a synthesizer or voice that becomes unregistered, the speech channel is considered inactive and will return an error when the application tries to access it.

An application that called [SpeechSynthesisRegisterModuleURL(\_:)](1459624-speechsynthesisregistermoduleurl.md) to register a synthesizer or voice should do the following if the volume containing the synthesizer or voice is about to be unmounted:

- Call [DisposeSpeechChannel(\_:)](1462081-disposespeechchannel.md) to dispose of each speech channel that uses the synthesizer or voice
- Call `SpeechSynthesisUnregisterModuleURL` to unregister the synthesizer or voice

If you call `SpeechSynthesisUnregisterModuleURL` to unregister a synthesizer or voice and you receive either the [noSynthFound](https://developer.apple.com/documentation/coreservices/nosynthfound) or [voiceNotFound](https://developer.apple.com/documentation/coreservices/voicenotfound) result codes, it means that the synthesizer or voice is not currently registered.

## See Also

### Registering and Unregistering Synthesizers and Voices

- [SpeechSynthesisRegisterModuleURL(\_:)](1459624-speechsynthesisregistermoduleurl.md): Deprecated. Registers and makes available a speech synthesizer or voice.

# SpeechSynthesisUnregisterModuleURL (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 13.0)

Unregisters a registered speech synthesizer or voice.

## Declaration

```objectivec
OSErr SpeechSynthesisUnregisterModuleURL(CFURLRef url);
```

## Parameters

- `url`: The file URL of the synthesizer plug-in or voice to unregister.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SpeechSynthesisUnregisterModuleURL` function unregisters the speech synthesizer or voice specified by `url`. When a synthesizer is unregistered, all voices that require that synthesizer are automatically unregistered.

Note that if a speech channel is currently using a synthesizer or voice that becomes unregistered, the speech channel is considered inactive and will return an error when the application tries to access it.

An application that called [SpeechSynthesisRegisterModuleURL](1459624-speechsynthesisregistermoduleurl.md) to register a synthesizer or voice should do the following if the volume containing the synthesizer or voice is about to be unmounted:

- Call [DisposeSpeechChannel](1462081-disposespeechchannel.md) to dispose of each speech channel that uses the synthesizer or voice
- Call `SpeechSynthesisUnregisterModuleURL` to unregister the synthesizer or voice

If you call `SpeechSynthesisUnregisterModuleURL` to unregister a synthesizer or voice and you receive either the [noSynthFound](https://developer.apple.com/documentation/coreservices/1560017-anonymous/nosynthfound) or [voiceNotFound](https://developer.apple.com/documentation/coreservices/1560017-anonymous/voicenotfound) result codes, it means that the synthesizer or voice is not currently registered.

## See Also

### Registering and Unregistering Synthesizers and Voices

- [SpeechSynthesisRegisterModuleURL](1459624-speechsynthesisregistermoduleurl.md): Deprecated. Registers and makes available a speech synthesizer or voice.
