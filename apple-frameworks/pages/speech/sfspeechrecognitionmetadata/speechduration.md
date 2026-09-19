> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeechrecognitionmetadata/speechduration

# speechDuration (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The duration in seconds of speech in the audio.

## Declaration

```swift
var speechDuration: TimeInterval { get }
```

## See Also

### Getting audio timing information

- [averagePauseDuration](averagepauseduration.md): The average pause duration between words, measured in seconds.
- [speakingRate](speakingrate.md): The number of words spoken per minute.
- [speechStartTimestamp](speechstarttimestamp.md): The start timestamp of speech in the audio.

# speechDuration (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The duration in seconds of speech in the audio.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval speechDuration;
```

## See Also

### Getting audio timing information

- [averagePauseDuration](averagepauseduration.md): The average pause duration between words, measured in seconds.
- [speakingRate](speakingrate.md): The number of words spoken per minute.
- [speechStartTimestamp](speechstarttimestamp.md): The start timestamp of speech in the audio.
