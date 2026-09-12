> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552228-speech-channel_information_constants/soerrors](https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/soerrors)

# soErrors

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soErrors = 'erro'
```

<a id="discussion"></a>

## Discussion

Get saved error information for the speechchannel and clear its error registers. This selector lets you pollfor various run-time errors that occur during speaking, such asthe detection of badly formed embedded commands. Errors returneddirectly by Speech Synthesis Manager functions are not reportedhere. If your application defines an error callback function, thecallback should use the `soErrors` selectorto obtain error information. The `speechInfo` parameteris a pointer to a speech error information structure, describedin [SpeechErrorInfo](../speecherrorinfo.md).

This selector works with the `GetSpeechInfo` function.
