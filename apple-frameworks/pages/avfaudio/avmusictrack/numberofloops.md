> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmusictrack/numberofloops](https://developer.apple.com/documentation/avfaudio/avmusictrack/numberofloops)

# numberOfLoops (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of times the track’s loop repeats.

## Declaration

```swift
var numberOfLoops: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use the value [AVMusicTrackLoopCount.forever](../avmusictrackloopcount/forever.md) to loop the track forever. Otherwise, valid values start at `1`.

## See Also

### Configuring the Looping State

- [isLoopingEnabled](isloopingenabled.md): A Boolean value that indicates whether the track is in a looping state.
- [loopRange](looprange.md): The timestamp range for the loop, in beats.

# numberOfLoops (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of times the track’s loop repeats.

## Declaration

```objectivec
@property (nonatomic) NSInteger numberOfLoops;
```

<a id="Discussion"></a>

## Discussion

Use the value [AVMusicTrackLoopCountForever](../avmusictrackloopcount/forever.md) to loop the track forever. Otherwise, valid values start at `1`.

## See Also

### Configuring the Looping State

- [loopingEnabled](isloopingenabled.md): A Boolean value that indicates whether the track is in a looping state.
- [loopRange](looprange.md): The timestamp range for the loop, in beats.
