> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/sowordcallback

# soWordCallBack

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soWordCallBack: OSType { get }
```

<a id="discussion"></a>

## Discussion

Set the callback function to be called everytime the Speech Synthesis Manager is about to generate a word onthe speech channel. The `speechInfo` parameteris a pointer to an application-defined word callback function, whose syntax is described in [SpeechWordProcPtr](speechwordprocptr.md).Passing `NULL` in `speechInfo` disablesthe word callback function.

This selector works with the `SetSpeechInfo` function.
