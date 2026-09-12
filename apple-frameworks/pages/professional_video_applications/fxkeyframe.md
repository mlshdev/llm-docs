> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframe](https://developer.apple.com/documentation/professional_video_applications/fxkeyframe)

# FxKeyframe (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** FxPlug 4.0+

## Declaration

```swift
struct FxKeyframe
```

## Topics

### Properties

- [version](fxkeyframe/version.md)
- [time](fxkeyframe/time.md)
- [segmentStyle](fxkeyframe/segmentstyle.md): The type of segment between this keyframe and the next.
- [inTangentX](fxkeyframe/intangentx.md)
- [inTangentY](fxkeyframe/intangenty.md)
- [outTangentX](fxkeyframe/outtangentx.md)
- [outTangentY](fxkeyframe/outtangenty.md)

### Initializers

- [init()](fxkeyframe/init%28%29.md)
- [init(version:time:segmentStyle:inTangentX:inTangentY:outTangentX:outTangentY:)](fxkeyframe/init%28version_time_segmentstyle_intangentx_intangenty_outtangentx_outtangenty_%29.md): Contains information about a single keyframe.

### Enumerations

- [FxKeyframeSegmentStyle](fxkeyframesegmentstyle.md): Styles for the segment between keyframes.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# FxKeyframe (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Structure

## Declaration

```objectivec
typedef struct FxKeyframe { ... } FxKeyframe;
```

## Topics

### Properties

- [version](fxkeyframe/version.md)
- [time](fxkeyframe/time.md)
- [segmentStyle](fxkeyframe/segmentstyle.md): The type of segment between this keyframe and the next.
- [inTangentX](fxkeyframe/intangentx.md)
- [inTangentY](fxkeyframe/intangenty.md)
- [outTangentX](fxkeyframe/outtangentx.md)
- [outTangentY](fxkeyframe/outtangenty.md)

### Enumerations

- [FxKeyframeSegmentStyle](fxkeyframesegmentstyle.md): Styles for the segment between keyframes.
