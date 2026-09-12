> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimelineobserver/sequencetimerangechanged()](https://developer.apple.com/documentation/professional_video_applications/fcpxtimelineobserver/sequencetimerangechanged())

# sequenceTimeRangeChanged() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.

## Declaration

```swift
optional func sequenceTimeRangeChanged()
```

<a id="discussion"></a>

## Discussion

Inside this method implementation, obtain the new time range by using the [sequenceTimeRange](../fcpxtimeline/sequencetimerange.md) property. By observing for the changes in the time range of an active sequence, an extension can verify whether the data it has for the sequence is in sync with what is presented in Final Cut Pro.

## See Also

### Handling Final Cut Pro Timeline Changes

- [activeSequenceChanged()](activesequencechanged%28%29.md): A callback method that gets invoked when there is a change in the current timeline sequence.
- [playheadTimeChanged()](playheadtimechanged%28%29.md): A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.

# sequenceTimeRangeChanged (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.

## Declaration

```objectivec
- (void) sequenceTimeRangeChanged;
```

<a id="discussion"></a>

## Discussion

Inside this method implementation, obtain the new time range by using the [sequenceTimeRange](../fcpxtimeline/sequencetimerange.md) property. By observing for the changes in the time range of an active sequence, an extension can verify whether the data it has for the sequence is in sync with what is presented in Final Cut Pro.

## See Also

### Handling Final Cut Pro Timeline Changes

- [activeSequenceChanged](activesequencechanged%28%29.md): A callback method that gets invoked when there is a change in the current timeline sequence.
- [playheadTimeChanged](playheadtimechanged%28%29.md): A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.
