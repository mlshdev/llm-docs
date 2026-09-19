> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/kspeechstatusoutputbusy

# kSpeechStatusOutputBusy (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Indicates whether the speech channel is currently producing speech.

## Declaration

```swift
let kSpeechStatusOutputBusy: CFString
```

<a id="discussion"></a>

## Discussion

A speech channel is considered to be producing speech even at some times when no audio data is being produced through the computer’s speaker. This occurs, for example, when the Speech Synthesis Manager is processing input, but has not yet initiated speech or when speech output is paused.

# kSpeechStatusOutputBusy (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Indicates whether the speech channel is currently producing speech.

## Declaration

```objectivec
const CFStringRef kSpeechStatusOutputBusy;
```

<a id="discussion"></a>

## Discussion

A speech channel is considered to be producing speech even at some times when no audio data is being produced through the computer’s speaker. This occurs, for example, when the Speech Synthesis Manager is processing input, but has not yet initiated speech or when speech output is paused.
