> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeecherrorcfcallback](https://developer.apple.com/documentation/applicationservices/kspeecherrorcfcallback)

# kSpeechErrorCFCallBack (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when an error is encountered during the processing of an embedded command.

## Declaration

```swift
let kSpeechErrorCFCallBack: CFString
```

<a id="discussion"></a>

## Discussion

When a Speech Synthesis Manager function returns an error directly, the error callback function is not called. The callback function is passed information about the most recent error; it can determine information about the oldest pending error by using the speech information property `kSpeechErrorsProperty`. The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined error callback function, whose syntax is described in [SpeechErrorCFProcPtr](speecherrorcfprocptr.md). Passing a `CFNumber` object that contains the value `NULL` for the value of this property disables the error callback function.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechErrorCFCallBack (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when an error is encountered during the processing of an embedded command.

## Declaration

```objectivec
const CFStringRef kSpeechErrorCFCallBack;
```

<a id="discussion"></a>

## Discussion

When a Speech Synthesis Manager function returns an error directly, the error callback function is not called. The callback function is passed information about the most recent error; it can determine information about the oldest pending error by using the speech information property `kSpeechErrorsProperty`. The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined error callback function, whose syntax is described in [SpeechErrorCFProcPtr](speecherrorcfprocptr.md). Passing a `CFNumber` object that contains the value `NULL` for the value of this property disables the error callback function.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
