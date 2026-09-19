> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/kspeechrelativeduration

# kSpeechRelativeDuration

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

## Declaration

```swift
var kSpeechRelativeDuration: Int32 { get }
```

<a id="discussion"></a>

## Discussion

Specify the duration in the tune, relative to the current speech rate (this makes it easier to reuse the tune at a different rate).
