> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechsynthesizerinfoproperty](https://developer.apple.com/documentation/applicationservices/kspeechsynthesizerinfoproperty)

# kSpeechSynthesizerInfoProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get information about the speech synthesizer being used on the specified speech channel.

## Declaration

```swift
let kSpeechSynthesizerInfoProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains information about the speech synthesizer being used on the specified speech channel. See [Speech Synthesizer Information Keys](speech_synthesis_manager/speech_synthesizer_information_keys.md) for a description of the keys present in the dictionary.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) function.

# kSpeechSynthesizerInfoProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get information about the speech synthesizer being used on the specified speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechSynthesizerInfoProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains information about the speech synthesizer being used on the specified speech channel. See [Speech Synthesizer Information Keys](speech_synthesis_manager/speech_synthesizer_information_keys.md) for a description of the keys present in the dictionary.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) function.
