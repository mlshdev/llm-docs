> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/soreset

# soReset

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soReset = 'rset'
```

<a id="discussion"></a>

## Discussion

Set a speech channel back to its default state.For example, speech pitch and speech rate are set to default values.The `speechInfo` parametershould be set to `NULL`.

This selector works with the `SetSpeechInfo` function.
