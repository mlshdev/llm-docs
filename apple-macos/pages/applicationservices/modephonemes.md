> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/modephonemes

# modePhonemes

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Used with [soInputMode](soinputmode.md) to indicate that the speech channel is in phoneme-processing mode. When in phoneme-processing mode, a text buffer is interpreted to be a series of characters representing various phonemes and prosodic controls.

## Declaration

```swift
var modePhonemes: OSType { get }
```
