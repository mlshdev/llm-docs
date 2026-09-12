> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechoutputtoaudiodeviceproperty](https://developer.apple.com/documentation/applicationservices/kspeechoutputtoaudiodeviceproperty)

# kSpeechOutputToAudioDeviceProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Set the speech output destination to an audio device file or to the computer’s speakers.

## Declaration

```swift
let kSpeechOutputToAudioDeviceProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that contains an [AudioDeviceID](https://developer.apple.com/documentation/coreaudio/audiodeviceid). To play the speech output to an audio device, use the [AudioDeviceID](https://developer.apple.com/documentation/coreaudio/audiodeviceid) that represents the device; to generate sound through the computer’s speakers, use `0`.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechOutputToAudioDeviceProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Set the speech output destination to an audio device file or to the computer’s speakers.

## Declaration

```objectivec
const CFStringRef kSpeechOutputToAudioDeviceProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that contains an [AudioDeviceID](https://developer.apple.com/documentation/coreaudio/audiodeviceid). To play the speech output to an audio device, use the [AudioDeviceID](https://developer.apple.com/documentation/coreaudio/audiodeviceid) that represents the device; to generate sound through the computer’s speakers, use `0`.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
