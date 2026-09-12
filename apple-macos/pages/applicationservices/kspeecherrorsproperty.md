> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeecherrorsproperty](https://developer.apple.com/documentation/applicationservices/kspeecherrorsproperty)

# kSpeechErrorsProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get speech-error information for the speech channel.

## Declaration

```swift
let kSpeechErrorsProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains speech-error information. See [Speech Error Keys](speech_synthesis_manager/speech_error_keys.md) for a description of the keys present in the dictionary.

This property lets you get information about various run-time errors that occur during speaking, such as the detection of badly formed embedded commands. Errors returned directly by the Speech Synthesis Manager are not reported here. If your application defines an error callback function, the function can use this property to get error information.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) function.

# kSpeechErrorsProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get speech-error information for the speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechErrorsProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains speech-error information. See [Speech Error Keys](speech_synthesis_manager/speech_error_keys.md) for a description of the keys present in the dictionary.

This property lets you get information about various run-time errors that occur during speaking, such as the detection of badly formed embedded commands. Errors returned directly by the Speech Synthesis Manager are not reported here. If your application defines an error callback function, the function can use this property to get error information.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) function.
