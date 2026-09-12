> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimeline/moveplayhead(to:)](https://developer.apple.com/documentation/professional_video_applications/fcpxtimeline/moveplayhead(to:))

# movePlayhead(to:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

Sets the Final Cut Pro timeline playhead to a specified time.

## Declaration

```swift
func movePlayhead(to newTime: CMTime) -> CMTime
```

## Parameters

- `newTime`: Specifies a new timeline position.

<a id="return-value"></a>

## Return Value

The new playhead position in the Final Cut Pro timeline.

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

Workflow extensions can use this method to move the playhead to a new location in the Final Cut Pro timeline. The movement of the playhead is limited to the valid time range of the current timeline sequence. Use the [sequenceTimeRange](sequencetimerange.md) property to find the time range of a sequence in the Final Cut Pro timeline.

## See Also

### Observing the Final Cut Pro Timeline

- [add(\_:)](add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [playheadTime()](playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
- [remove(\_:)](remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

# movePlayheadTo: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the Final Cut Pro timeline playhead to a specified time.

## Declaration

```objectivec
- (CMTime) movePlayheadTo:(CMTime) newTime;
```

## Parameters

- `newTime`: Specifies a new timeline position.

<a id="return-value"></a>

## Return Value

The new playhead position in the Final Cut Pro timeline.

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

Workflow extensions can use this method to move the playhead to a new location in the Final Cut Pro timeline. The movement of the playhead is limited to the valid time range of the current timeline sequence. Use the [sequenceTimeRange](sequencetimerange.md) property to find the time range of a sequence in the Final Cut Pro timeline.

## See Also

### Observing the Final Cut Pro Timeline

- [addTimelineObserver:](add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [playheadTime](playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
- [removeTimelineObserver:](remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.
