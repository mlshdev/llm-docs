> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimeline/playheadtime()](https://developer.apple.com/documentation/professional_video_applications/fcpxtimeline/playheadtime())

# playheadTime() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

Returns the current playhead position in the Final Cut Pro timeline.

## Declaration

```swift
func playheadTime() -> CMTime
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

When Final Cut Pro invokes a registered observer to send a notification of a change in the playhead time of an active sequence, use this method to find the new playhead position in the Final Cut Pro timeline. The method returns [invalid](../../coremedia/cmtime/invalid.md) (Swift) or [invalid](../../coremedia/cmtime/invalid.md) (Objective-C) if the Final Cut Pro timeline has no valid sequence.

## See Also

### Observing the Final Cut Pro Timeline

- [add(\_:)](add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [movePlayhead(to:)](moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [remove(\_:)](remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

# playheadTime (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the current playhead position in the Final Cut Pro timeline.

## Declaration

```objectivec
- (CMTime) playheadTime;
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

When Final Cut Pro invokes a registered observer to send a notification of a change in the playhead time of an active sequence, use this method to find the new playhead position in the Final Cut Pro timeline. The method returns [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) (Swift) or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) (Objective-C) if the Final Cut Pro timeline has no valid sequence.

## See Also

### Observing the Final Cut Pro Timeline

- [addTimelineObserver:](add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [movePlayheadTo:](moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [removeTimelineObserver:](remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.
