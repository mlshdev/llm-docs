> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechsynccallback](https://developer.apple.com/documentation/applicationservices/kspeechsynccallback)

# kSpeechSyncCallBack (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when the Speech Synthesis Manager encounters a synchronization command within an embedded speech command in text being processed on the speech channel.

## Declaration

```swift
let kSpeechSyncCallBack: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined synchronization callback function, whose syntax is described in [SpeechSyncProcPtr](speechsyncprocptr.md). Passing a `CFNumber` object that contains the value `NULL` for the value of this property disables the synchronization callback function.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechSyncCallBack (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set the callback function to be called when the Speech Synthesis Manager encounters a synchronization command within an embedded speech command in text being processed on the speech channel.

## Declaration

```objectivec
const CFStringRef kSpeechSyncCallBack;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is `CFNumber` object whose value is a pointer to an application-defined synchronization callback function, whose syntax is described in [SpeechSyncProcPtr](speechsyncprocptr.md). Passing a `CFNumber` object that contains the value `NULL` for the value of this property disables the synchronization callback function.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
