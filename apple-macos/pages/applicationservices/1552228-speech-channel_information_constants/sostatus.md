> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/sostatus](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sostatus)

# soStatus

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soStatus = 'stat'
```

<a id="discussion"></a>

## Discussion

Get a speech status information structure forthe speech channel. The `speechInfo` parameteris a pointer to a speech status information structure, describedin [SpeechStatusInfo](../speechstatusinfo.md).

This selector works with the `GetSpeechInfo` function.
