> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechtextdonecallback](https://developer.apple.com/documentation/applicationservices/kspeechtextdonecallback)

# kSpeechTextDoneCallBack (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when the Speech Synthesis Manager has finished processing speech being generated on the speech channel.

## Declaration

```swift
let kSpeechTextDoneCallBack: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object whose value is a pointer to an application-defined text-done callback function, whose syntax is described in [SpeechTextDoneProcPtr](speechtextdoneprocptr.md). Passing a `CFNumber` object that contains the value `NULL` disables the text-done callback function.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechTextDoneCallBack (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when the Speech Synthesis Manager has finished processing speech being generated on the speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechTextDoneCallBack;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object whose value is a pointer to an application-defined text-done callback function, whose syntax is described in [SpeechTextDoneProcPtr](speechtextdoneprocptr.md). Passing a `CFNumber` object that contains the value `NULL` disables the text-done callback function.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
