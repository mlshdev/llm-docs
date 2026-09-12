> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechphonemeoptionsproperty](https://developer.apple.com/documentation/applicationservices/kspeechphonemeoptionsproperty)

# kSpeechPhonemeOptionsProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Get or set the options for the generation of phonetic output.

## Declaration

```swift
let kSpeechPhonemeOptionsProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a pointer to an `CFNumber` object containing the flags (options) you would pass to [soPhonemeOptions](sophonemeoptions.md). (See [Phoneme Generation Options](speech_synthesis_manager/1552233-phoneme_generation_options.md) for a complete list of options.)

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) and the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) functions.

# kSpeechPhonemeOptionsProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Get or set the options for the generation of phonetic output.

## Declaration

```objectivec
const CFStringRef kSpeechPhonemeOptionsProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a pointer to an `CFNumber` object containing the flags (options) you would pass to [soPhonemeOptions](1552228-speech-channel_information_constants/sophonemeoptions.md). (See [Phoneme Generation Options](1552233-phoneme_generation_options.md) for a complete list of options.)

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) and the [CopySpeechProperty](1459075-copyspeechproperty.md) functions.
