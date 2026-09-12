> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sotextdonecallback](https://developer.apple.com/documentation/applicationservices/sotextdonecallback)

# soTextDoneCallBack

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soTextDoneCallBack: OSType { get }
```

<a id="discussion"></a>

## Discussion

Set the callback function to be called whenthe Speech Synthesis Manager has finished processing speech beinggenerated on the speech channel. The `speechInfo` parameteris a pointer to an application-defined text-done callback function,whose syntax is described in [SpeechTextDoneProcPtr](speechtextdoneprocptr.md). Passing `NULL` in `speechInfo` disablesthe text-done callback function.

This selector works with the `SetSpeechInfo` function.
