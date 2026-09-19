> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/4030009-invokespeecherrorupp

# InvokeSpeechErrorUPP(\_:\_:\_:\_:\_:)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 16.0+ (deprecated in 16.0) · Xcode 14.0+ (deprecated in 14.0)

## Declaration

```swift
func InvokeSpeechErrorUPP(_ chan: SpeechChannel, _ refCon: SRefCon, _ theError: OSErr, _ bytePos: Int, _ userUPP: SpeechErrorUPP)
```
