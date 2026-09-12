> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxsequence/duration](https://developer.apple.com/documentation/professional_video_applications/fcpxsequence/duration)

# duration (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** ProVideo Workflow Extensions 1.0+

The duration of a sequence opened in the Final Cut Pro timeline.

## Declaration

```swift
var duration: CMTime { get }
```

## See Also

### Getting Details of an Active Sequence

- [frameDuration](frameduration.md): The amount of time to play a frame in a sequence.
- [startTime](starttime.md): The start time of a sequence opened in the Final Cut Pro timeline.
- [timecodeFormat](timecodeformat.md): The timecode format of the frames in a sequence.
- [name](name.md): The name of the active sequence in the Final Cut Pro timeline.

# duration (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

The duration of a sequence opened in the Final Cut Pro timeline.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime duration;
```

## See Also

### Getting Details of an Active Sequence

- [frameDuration](frameduration.md): The amount of time to play a frame in a sequence.
- [startTime](starttime.md): The start time of a sequence opened in the Final Cut Pro timeline.
- [timecodeFormat](timecodeformat.md): The timecode format of the frames in a sequence.
- [name](name.md): The name of the active sequence in the Final Cut Pro timeline.
