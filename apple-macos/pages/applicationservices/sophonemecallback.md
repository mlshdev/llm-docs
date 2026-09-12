> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sophonemecallback](https://developer.apple.com/documentation/applicationservices/sophonemecallback)

# soPhonemeCallBack

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soPhonemeCallBack: OSType { get }
```

<a id="discussion"></a>

## Discussion

Set the callback function to be called everytime the Speech Synthesis Manager is about to generate a phonemeon the speech channel. The `speechInfo` parameteris a pointer to an application-defined phoneme callback function,whose syntax is described in [SpeechPhonemeProcPtr](speechphonemeprocptr.md). Passing `NULL` in `speechInfo` disablesthe phoneme callback function.

This selector works with the `SetSpeechInfo` function.
