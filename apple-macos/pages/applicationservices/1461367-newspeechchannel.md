> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461367-newspeechchannel](https://developer.apple.com/documentation/applicationservices/1461367-newspeechchannel)

# NewSpeechChannel(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Creates a new speech channel.

## Declaration

```swift
func NewSpeechChannel(_ voice: UnsafeMutablePointer<VoiceSpec>?, _ chan: UnsafeMutablePointer<SpeechChannel?>) -> OSErr
```

## Parameters

- `voice`: A pointer to the voice specification structure corresponding to the voice to be used for the new speech channel. Pass `NULL` to create a speech channel using the system default voice.

  Specifying a voice means the initial speaking rate is determined by the synthesizer’s default speaking rate; passing `NULL` means the speaking rate is automatically set to the rate the user specifies in Speech preferences.
- `chan`: On return, a pointer to a valid speech channel.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `NewSpeechChannel` functionallocates memory for a speech channel structure and sets the speechchannel variable pointed to by the `chan` parameterto point to this speech channel structure. The Speech SynthesisManager automatically locates and opens a connection to the propersynthesizer for the voice specified by the `voice` parameter.

There is no predefined limit to the number of speech channelsan application can create. However, system constraints on availableRAM, processor loading, and number of available sound channels limitthe number of speech channels actually possible.

Your application should not attempt to manipulate the datapointed to by a variable of type `SpeechChannel`.The internal format that the Speech Synthesis Manager uses for speech channeldata is not documented and may change in future versions of systemsoftware.

## See Also

### Managing Speech Channels

- [DisposeSpeechChannel(\_:)](1462081-disposespeechchannel.md): Deprecated. Disposes of an existing speech channel.

# NewSpeechChannel (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Creates a new speech channel.

## Declaration

```objectivec
OSErr NewSpeechChannel(VoiceSpec *voice, SpeechChannel  _Nullable *chan);
```

## Parameters

- `voice`: A pointer to the voice specification structure corresponding to the voice to be used for the new speech channel. Pass `NULL` to create a speech channel using the system default voice.

  Specifying a voice means the initial speaking rate is determined by the synthesizer’s default speaking rate; passing `NULL` means the speaking rate is automatically set to the rate the user specifies in Speech preferences.
- `chan`: On return, a pointer to a valid speech channel.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `NewSpeechChannel` functionallocates memory for a speech channel structure and sets the speechchannel variable pointed to by the `chan` parameterto point to this speech channel structure. The Speech SynthesisManager automatically locates and opens a connection to the propersynthesizer for the voice specified by the `voice` parameter.

There is no predefined limit to the number of speech channelsan application can create. However, system constraints on availableRAM, processor loading, and number of available sound channels limitthe number of speech channels actually possible.

Your application should not attempt to manipulate the datapointed to by a variable of type `SpeechChannel`.The internal format that the Speech Synthesis Manager uses for speech channeldata is not documented and may change in future versions of systemsoftware.

## See Also

### Managing Speech Channels

- [DisposeSpeechChannel](1462081-disposespeechchannel.md): Deprecated. Disposes of an existing speech channel.
