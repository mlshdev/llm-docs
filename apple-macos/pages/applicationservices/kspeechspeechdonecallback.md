> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechspeechdonecallback](https://developer.apple.com/documentation/applicationservices/kspeechspeechdonecallback)

# kSpeechSpeechDoneCallBack (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when the Speech Synthesis Manager has finished generating speech on the speech channel.

## Declaration

```swift
let kSpeechSpeechDoneCallBack: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined speech-done callback function, whose syntax is described in [SpeechDoneProcPtr](speechdoneprocptr.md). Passing `NULL` for the value of this property disables the speech-done callback function.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechSpeechDoneCallBack (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when the Speech Synthesis Manager has finished generating speech on the speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechSpeechDoneCallBack;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined speech-done callback function, whose syntax is described in [SpeechDoneProcPtr](speechdoneprocptr.md). Passing `NULL` for the value of this property disables the speech-done callback function.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
