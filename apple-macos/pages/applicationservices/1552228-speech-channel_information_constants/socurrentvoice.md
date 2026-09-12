> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/socurrentvoice](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/socurrentvoice)

# soCurrentVoice

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soCurrentVoice = 'cvox'
```

<a id="discussion"></a>

## Discussion

Set the current voice on the current speechchannel to the specified voice. The `speechInfo` parameteris a pointer to a voice specification structure. Your applicationshould create the structure by calling [MakeVoiceSpec](../1461446-makevoicespec.md). `SetSpeechInfo` willreturn an `incompatibleVoice` errorif the specified voice is incompatible with the speech synthesizerassociated with the speech channel. If you have a speech channelopen using a voice from a particular synthesizer and you try toswitch to a voice that works with a different synthesizer, you receivean `incompatibleVoice` error.You need to create a new channel to use with the new voice.

This selector works with the `SetSpeechInfo` function.
