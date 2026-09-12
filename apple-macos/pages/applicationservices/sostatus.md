> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sostatus](https://developer.apple.com/documentation/applicationservices/sostatus)

# soStatus

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soStatus: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get a speech status information structure forthe speech channel. The `speechInfo` parameteris a pointer to a speech status information structure, describedin [SpeechStatusInfo](speechstatusinfo.md).

This selector works with the `GetSpeechInfo` function.
