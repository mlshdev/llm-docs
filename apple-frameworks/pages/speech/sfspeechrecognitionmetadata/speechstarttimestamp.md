> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionmetadata/speechstarttimestamp](https://developer.apple.com/documentation/speech/sfspeechrecognitionmetadata/speechstarttimestamp)

# speechStartTimestamp (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The start timestamp of speech in the audio.

## Declaration

```swift
var speechStartTimestamp: TimeInterval { get }
```

## See Also

### Getting audio timing information

- [averagePauseDuration](averagepauseduration.md): The average pause duration between words, measured in seconds.
- [speakingRate](speakingrate.md): The number of words spoken per minute.
- [speechDuration](speechduration.md): The duration in seconds of speech in the audio.

# speechStartTimestamp (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The start timestamp of speech in the audio.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval speechStartTimestamp;
```

## See Also

### Getting audio timing information

- [averagePauseDuration](averagepauseduration.md): The average pause duration between words, measured in seconds.
- [speakingRate](speakingrate.md): The number of words spoken per minute.
- [speechDuration](speechduration.md): The duration in seconds of speech in the audio.
