> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusicsequenceloadoptions/avmusicsequenceloadsmf_preservetracks](https://developer.apple.com/documentation/avfaudio/avmusicsequenceloadoptions/avmusicsequenceloadsmf_preservetracks)

# AVMusicSequenceLoadSMF_PreserveTracks

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that preserves the tracks as they are.

## Declaration

```objectivec
AVMusicSequenceLoadSMF_PreserveTracks
```

<a id="Discussion"></a>

## Discussion

The MIDI sequence contains one track for each track in the SMF, plus a tempo track (if it isn’t in the SMF).
