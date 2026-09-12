> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/soerrors](https://developer.apple.com/documentation/applicationservices/soerrors)

# soErrors

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soErrors: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get saved error information for the speechchannel and clear its error registers. This selector lets you pollfor various run-time errors that occur during speaking, such asthe detection of badly formed embedded commands. Errors returneddirectly by Speech Synthesis Manager functions are not reportedhere. If your application defines an error callback function, thecallback should use the `soErrors` selectorto obtain error information. The `speechInfo` parameteris a pointer to a speech error information structure, describedin [SpeechErrorInfo](speecherrorinfo.md).

This selector works with the `GetSpeechInfo` function.
