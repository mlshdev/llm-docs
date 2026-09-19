> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552264-stop_speech_locations

# Stop Speech Locations

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Locations that indicate where speech should be paused or stopped.

## Declaration

```objectivec
enum : SInt32 {
    ...
};
```

## Topics

### Constants

- [kImmediate](1552264-stop_speech_locations/kimmediate.md): Speech should be paused or stopped immediately.
- [kEndOfWord](1552264-stop_speech_locations/kendofword.md): Speech should be paused or stopped at the endof the word.
- [kEndOfSentence](1552264-stop_speech_locations/kendofsentence.md): Speech should be paused or stopped at the end of the sentence.
