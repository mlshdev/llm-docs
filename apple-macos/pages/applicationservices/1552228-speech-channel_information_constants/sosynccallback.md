> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sosynccallback](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sosynccallback)

# soSyncCallBack

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soSyncCallBack = 'sycb'
```

<a id="discussion"></a>

## Discussion

Set the callback function to be called whenthe Speech Synthesis Manager encounters a synchronization commandwithin an embedded speech command in text being processed on thespeech channel. The `speechInfo` parameteris a pointer to an application-defined synchronization callback function,whose syntax is described in [SpeechSyncProcPtr](../speechsyncprocptr.md).Passing `NULL` in `speechInfo` disablesthe synchronization callback function.

This selector works with the `SetSpeechInfo` function.
