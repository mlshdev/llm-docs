> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sostatus

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
