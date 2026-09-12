> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimeline/sequencetimerange](https://developer.apple.com/documentation/professional_video_applications/fcpxtimeline/sequencetimerange)

# sequenceTimeRange (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Property  
**Availability:** ProVideo Workflow Extensions 1.0+

The time range of an active sequence in the Final Cut Pro timeline.

## Declaration

```swift
var sequenceTimeRange: CMTimeRange { get }
```

<a id="discussion"></a>

## Discussion

The `sequenceTimeRange` property has a time range that includes a start time and the duration of a sequence.

## See Also

### Fetching Details of an Active Sequence

- [activeSequence](activesequence.md): The sequence played in the Final Cut Pro timeline.

# sequenceTimeRange (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Property

The time range of an active sequence in the Final Cut Pro timeline.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange sequenceTimeRange;
```

<a id="discussion"></a>

## Discussion

The `sequenceTimeRange` property has a time range that includes a start time and the duration of a sequence.

## See Also

### Fetching Details of an Active Sequence

- [activeSequence](activesequence.md): The sequence played in the Final Cut Pro timeline.
