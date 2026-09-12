> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimelineobserver/playheadtimechanged()](https://developer.apple.com/documentation/professional_video_applications/fcpxtimelineobserver/playheadtimechanged())

# playheadTimeChanged() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.

## Declaration

```swift
optional func playheadTimeChanged()
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

Implement this method in your workflow extension observer object to receive notifications about changes in the playhead position of the current sequence. Final Cut Pro invokes this method when:

- A user clicks the Final Cut Pro timeline view to move the playhead to a new position.
- A user drags the timeline playhead to a new position.
- Playback of the timeline sequence stops.
- A user clicks one of the markers displayed in the Tags tab on the Index panel.

> **Note**

>  Final Cut Pro does not invoke this method while a user is skimming through the timeline or when the timeline sequence is playing.

## See Also

### Handling Final Cut Pro Timeline Changes

- [activeSequenceChanged()](activesequencechanged%28%29.md): A callback method that gets invoked when there is a change in the current timeline sequence.
- [sequenceTimeRangeChanged()](sequencetimerangechanged%28%29.md): A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.

# playheadTimeChanged (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.

## Declaration

```objectivec
- (void) playheadTimeChanged;
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

Implement this method in your workflow extension observer object to receive notifications about changes in the playhead position of the current sequence. Final Cut Pro invokes this method when:

- A user clicks the Final Cut Pro timeline view to move the playhead to a new position.
- A user drags the timeline playhead to a new position.
- Playback of the timeline sequence stops.
- A user clicks one of the markers displayed in the Tags tab on the Index panel.

> **Note**

>  Final Cut Pro does not invoke this method while a user is skimming through the timeline or when the timeline sequence is playing.

## See Also

### Handling Final Cut Pro Timeline Changes

- [activeSequenceChanged](activesequencechanged%28%29.md): A callback method that gets invoked when there is a change in the current timeline sequence.
- [sequenceTimeRangeChanged](sequencetimerangechanged%28%29.md): A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.
