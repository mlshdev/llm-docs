> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sospeechdonecallback

# soSpeechDoneCallBack

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soSpeechDoneCallBack = 'sdcb'
```

<a id="discussion"></a>

## Discussion

Set the callback function to be called whenthe Speech Synthesis Manager has finished generating speech on thespeech channel. The `speechInfo` parameteris a pointer to an application-defined speech-done callback function,whose syntax is described in [SpeechDoneProcPtr](../speechdoneprocptr.md).Passing `NULL` in `speechInfo` disablesthe speech-done callback function.

This selector works with the `SetSpeechInfo` function.
