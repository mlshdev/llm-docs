> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechnumbermodeproperty](https://developer.apple.com/documentation/applicationservices/kspeechnumbermodeproperty)

# kSpeechNumberModeProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech channel’s current number-processing mode.

## Declaration

```swift
let kSpeechNumberModeProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFString` object that specifies whether the speech channel is currently in normal or literal number-processing mode. The constants `kSpeechModeNormal` and `kSpeechModeLiteral` (defined in [Speech-Channel Modes for Core Foundation-based Functions](speech_synthesis_manager/speech-channel_modes_for_core_foundation-based_functions.md)) are the possible values of this string.

When the number-processing mode is `kSpeechModeNormal`, the synthesizer assembles digits into numbers (so that “12” is spoken as “twelve”). When the mode is `kSpeechModeLiteral`, each digit is spoken literally (so that “12” is spoken as “one, two”).

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) and [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) functions.

# kSpeechNumberModeProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech channel’s current number-processing mode.

## Declaration

```objectivec
const CFStringRef kSpeechNumberModeProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFString` object that specifies whether the speech channel is currently in normal or literal number-processing mode. The constants `kSpeechModeNormal` and `kSpeechModeLiteral` (defined in [Speech-Channel Modes for Core Foundation-based Functions](speech_synthesis_manager/speech-channel_modes_for_core_foundation-based_functions.md)) are the possible values of this string.

When the number-processing mode is `kSpeechModeNormal`, the synthesizer assembles digits into numbers (so that “12” is spoken as “twelve”). When the mode is `kSpeechModeLiteral`, each digit is spoken literally (so that “12” is spoken as “one, two”).

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) and [SetSpeechProperty](1459256-setspeechproperty.md) functions.
