> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimelineobserver/activesequencechanged()](https://developer.apple.com/documentation/professional_video_applications/fcpxtimelineobserver/activesequencechanged())

# activeSequenceChanged() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

A callback method that gets invoked when there is a change in the current timeline sequence.

## Declaration

```swift
optional func activeSequenceChanged()
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

Implement this method in your workflow extension observer object to receive notifications when an active sequence changes in the Final Cut Pro timeline. Inside the implementation, use the [activeSequence](../fcpxtimeline/activesequence.md) property to obtain details of the new sequence. Access the container object of the new sequence using the [container](../fcpxobject/container.md) property.

**Swift**

```swift
let container = sequence.container
```

**Objective-C**

```objc
FCPXObject* container = [sequence container];
```

## See Also

### Handling Final Cut Pro Timeline Changes

- [playheadTimeChanged()](playheadtimechanged%28%29.md): A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.
- [sequenceTimeRangeChanged()](sequencetimerangechanged%28%29.md): A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.

# activeSequenceChanged (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

A callback method that gets invoked when there is a change in the current timeline sequence.

## Declaration

```objectivec
- (void) activeSequenceChanged;
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

Implement this method in your workflow extension observer object to receive notifications when an active sequence changes in the Final Cut Pro timeline. Inside the implementation, use the [activeSequence](../fcpxtimeline/activesequence.md) property to obtain details of the new sequence. Access the container object of the new sequence using the [container](../fcpxobject/container.md) property.

**Swift**

```swift
let container = sequence.container
```

**Objective-C**

```objc
FCPXObject* container = [sequence container];
```

## See Also

### Handling Final Cut Pro Timeline Changes

- [playheadTimeChanged](playheadtimechanged%28%29.md): A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.
- [sequenceTimeRangeChanged](sequencetimerangechanged%28%29.md): A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.
