> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionmetadata/averagepauseduration](https://developer.apple.com/documentation/speech/sfspeechrecognitionmetadata/averagepauseduration)

# averagePauseDuration (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The average pause duration between words, measured in seconds.

## Declaration

```swift
var averagePauseDuration: TimeInterval { get }
```

## See Also

### Getting audio timing information

- [speakingRate](speakingrate.md): The number of words spoken per minute.
- [speechDuration](speechduration.md): The duration in seconds of speech in the audio.
- [speechStartTimestamp](speechstarttimestamp.md): The start timestamp of speech in the audio.

# averagePauseDuration (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

The average pause duration between words, measured in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval averagePauseDuration;
```

## See Also

### Getting audio timing information

- [speakingRate](speakingrate.md): The number of words spoken per minute.
- [speechDuration](speechduration.md): The duration in seconds of speech in the audio.
- [speechStartTimestamp](speechstarttimestamp.md): The start timestamp of speech in the audio.
