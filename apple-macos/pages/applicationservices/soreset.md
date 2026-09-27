> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/soreset

# soReset

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soReset: OSType { get }
```

<a id="discussion"></a>

## Discussion

Set a speech channel back to its default state.For example, speech pitch and speech rate are set to default values.The `speechInfo` parametershould be set to `NULL`.

This selector works with the `SetSpeechInfo` function.
