> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechphonemesymbolsproperty](https://developer.apple.com/documentation/applicationservices/kspeechphonemesymbolsproperty)

# kSpeechPhonemeSymbolsProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get a list of phoneme symbols and example words defined for the speech channel’s synthesizer.

## Declaration

```swift
let kSpeechPhonemeSymbolsProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains the phoneme symbols and example words defined for the current synthesizer. Your application might use this information to show the user what symbols to use when entering phonemic text directly. See [Phoneme Symbols Keys](speech_synthesis_manager/phoneme_symbols_keys.md) for a description of the keys present in the dictionary.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) function.

# kSpeechPhonemeSymbolsProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get a list of phoneme symbols and example words defined for the speech channel’s synthesizer.

## Declaration

```objectivec
const CFStringRef kSpeechPhonemeSymbolsProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains the phoneme symbols and example words defined for the current synthesizer. Your application might use this information to show the user what symbols to use when entering phonemic text directly. See [Phoneme Symbols Keys](speech_synthesis_manager/phoneme_symbols_keys.md) for a description of the keys present in the dictionary.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) function.
