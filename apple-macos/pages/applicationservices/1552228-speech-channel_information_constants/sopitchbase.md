> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sopitchbase

# soPitchBase

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soPitchBase = 'pbas'
```

<a id="discussion"></a>

## Discussion

Get or set the speech channel’s baselinespeech pitch. This selector is intended for use by the Speech SynthesisManager; ordinarily, an application uses the [GetSpeechPitch](../1464774-getspeechpitch.md) and [SetSpeechPitch](../1462674-setspeechpitch.md) functions.The `speechInfo` parameteris a pointer to a variable of type `Fixed`.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.

> **Note**

> The change in speech pitch may not be noticeable until the next sentence or paragraph is spoken.
