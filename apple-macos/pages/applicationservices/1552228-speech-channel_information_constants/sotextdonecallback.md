> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sotextdonecallback](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sotextdonecallback)

# soTextDoneCallBack

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soTextDoneCallBack = 'tdcb'
```

<a id="discussion"></a>

## Discussion

Set the callback function to be called whenthe Speech Synthesis Manager has finished processing speech beinggenerated on the speech channel. The `speechInfo` parameteris a pointer to an application-defined text-done callback function,whose syntax is described in [SpeechTextDoneProcPtr](../speechtextdoneprocptr.md). Passing `NULL` in `speechInfo` disablesthe text-done callback function.

This selector works with the `SetSpeechInfo` function.
