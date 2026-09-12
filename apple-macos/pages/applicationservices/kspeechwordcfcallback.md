> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechwordcfcallback](https://developer.apple.com/documentation/applicationservices/kspeechwordcfcallback)

# kSpeechWordCFCallBack (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called every time the Speech Synthesis Manager is about to generate a word on the speech channel.

## Declaration

```swift
let kSpeechWordCFCallBack: CFString
```

<a id="discussion"></a>

## Discussion

 The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined word callback function, whose syntax is described in [SpeechWordCFProcPtr](speechwordcfprocptr.md). Passing a `CFNumber` object that contains the value `NULL` for the value of this property disables the word callback function.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechWordCFCallBack (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called every time the Speech Synthesis Manager is about to generate a word on the speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechWordCFCallBack;
```

<a id="discussion"></a>

## Discussion

 The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined word callback function, whose syntax is described in [SpeechWordCFProcPtr](speechwordcfprocptr.md). Passing a `CFNumber` object that contains the value `NULL` for the value of this property disables the word callback function.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
