> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechcurrentvoiceproperty](https://developer.apple.com/documentation/applicationservices/kspeechcurrentvoiceproperty)

# kSpeechCurrentVoiceProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the current voice on the current speech channel to the specified voice.

## Declaration

```swift
let kSpeechCurrentVoiceProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains the phoneme symbols and example words defined for the current synthesizer. Your application might use this information to show the user what symbols to use when entering phonemic text directly. See [Phoneme Symbols Keys](speech_synthesis_manager/phoneme_symbols_keys.md) for the keys you can use to specify values in this dictionary.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechCurrentVoiceProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the current voice on the current speech channel to the specified voice.

## Declaration

```objectivec
const CFStringRef kSpeechCurrentVoiceProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains the phoneme symbols and example words defined for the current synthesizer. Your application might use this information to show the user what symbols to use when entering phonemic text directly. See [Phoneme Symbols Keys](speech_synthesis_manager/phoneme_symbols_keys.md) for the keys you can use to specify values in this dictionary.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
