> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/sopitchbase](https://developer.apple.com/documentation/applicationservices/sopitchbase)

# soPitchBase

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soPitchBase: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get or set the speech channel’s baselinespeech pitch. This selector is intended for use by the Speech SynthesisManager; ordinarily, an application uses the [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md) and [SetSpeechPitch(\_:\_:)](1462674-setspeechpitch.md) functions.The `speechInfo` parameteris a pointer to a variable of type `Fixed`.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.

> **Note**

> The change in speech pitch may not be noticeable until the next sentence or paragraph is spoken.
