> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechinputmodeproperty](https://developer.apple.com/documentation/applicationservices/kspeechinputmodeproperty)

# kSpeechInputModeProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech channel’s current text-processing mode.

## Declaration

```swift
let kSpeechInputModeProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFString` object that specifies whether the channel is currently in text input mode or phoneme input mode. The constants `kSpeechModeText` and `kSpeechModePhoneme` (defined in [Speech-Channel Modes for Core Foundation-based Functions](speech_synthesis_manager/speech-channel_modes_for_core_foundation-based_functions.md)) are the possible values of this string.

When in phoneme-processing mode, a text string is interpreted to be a series of characters representing various phonemes and prosodic controls. Some synthesizers might support additional input-processing modes and define constants for these modes.

When in text-processing mode, you can also specify how characters and numbers should be processed using the [kSpeechCharacterModeProperty](kspeechcharactermodeproperty.md) and [kSpeechNumberModeProperty](kspeechnumbermodeproperty.md).

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) and [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) functions.

# kSpeechInputModeProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech channel’s current text-processing mode.

## Declaration

```objectivec
const CFStringRef kSpeechInputModeProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFString` object that specifies whether the channel is currently in text input mode or phoneme input mode. The constants `kSpeechModeText` and `kSpeechModePhoneme` (defined in [Speech-Channel Modes for Core Foundation-based Functions](speech_synthesis_manager/speech-channel_modes_for_core_foundation-based_functions.md)) are the possible values of this string.

When in phoneme-processing mode, a text string is interpreted to be a series of characters representing various phonemes and prosodic controls. Some synthesizers might support additional input-processing modes and define constants for these modes.

When in text-processing mode, you can also specify how characters and numbers should be processed using the [kSpeechCharacterModeProperty](kspeechcharactermodeproperty.md) and [kSpeechNumberModeProperty](kspeechnumbermodeproperty.md).

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) and [SetSpeechProperty](1459256-setspeechproperty.md) functions.
