> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/sosynthextension

# soSynthExtension

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soSynthExtension: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get or set synthesizer-specific informationor settings. The `speechInfo` parameteris a pointer to a speech extension data structure, described in [SpeechXtndData](speechxtnddata.md). Yourapplication should set the `synthCreator` fieldof this structure before calling `GetSpeechInfo` or `SetSpeechInfo`.Ordinarily, your application must pass additional information tothe synthesizer in the `synthData` field.

This selector works with both the `GetSpeechInfo` and `SetSpeechInfo` functions.
