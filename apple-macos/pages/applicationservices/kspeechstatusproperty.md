> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechstatusproperty](https://developer.apple.com/documentation/applicationservices/kspeechstatusproperty)

# kSpeechStatusProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get speech-status information for the speech channel.

## Declaration

```swift
let kSpeechStatusProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains speech-status information for the speech channel. See [Speech Status Keys](speech_synthesis_manager/speech_status_keys.md) for a description of the keys present in the dictionary.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) function.

# kSpeechStatusProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get speech-status information for the speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechStatusProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFDictionary` object that contains speech-status information for the speech channel. See [Speech Status Keys](speech_synthesis_manager/speech_status_keys.md) for a description of the keys present in the dictionary.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) function.
