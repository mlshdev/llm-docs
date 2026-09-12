> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimelineobserver](https://developer.apple.com/documentation/professional_video_applications/fcpxtimelineobserver)

# FCPXTimelineObserver (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** ProVideo Workflow Extensions 1.0+

An interface with optional methods implemented by observers of [FCPXTimeline](fcpxtimeline.md) objects.

## Declaration

```swift
protocol FCPXTimelineObserver : NSObjectProtocol
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="overview"></a>

## Overview

Observers of [FCPXTimeline](fcpxtimeline.md) objects implement methods of this protocol to get notified of changes in the Final Cut Pro timeline. Based on the methods implemented in this protocol, Final Cut Pro invokes an observer for changes in an active sequence, playhead time, or sequence time range.

## Topics

### Handling Final Cut Pro Timeline Changes

- [activeSequenceChanged()](fcpxtimelineobserver/activesequencechanged%28%29.md): A callback method that gets invoked when there is a change in the current timeline sequence.
- [playheadTimeChanged()](fcpxtimelineobserver/playheadtimechanged%28%29.md): A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.
- [sequenceTimeRangeChanged()](fcpxtimelineobserver/sequencetimerangechanged%28%29.md): A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Interactions

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md): Extend your workflows beyond media exchange by enabling a workflow extension to interact with the Final Cut Pro timeline.
- [FCPXHost](fcpxhost.md): A protocol that provides an interface to retrieve the Final Cut Pro timeline proxy objects and details of the host app.
- [ProExtensionHostSingleton()](proextensionhostsingleton%28%29.md): Returns the singleton proxy instance of the host object.
- [FCPXTimeline](fcpxtimeline.md): An interface that has methods and properties to communicate and interact with the Final Cut Pro timeline.

# FCPXTimelineObserver (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An interface with optional methods implemented by observers of [FCPXTimeline](fcpxtimeline.md) objects.

## Declaration

```objectivec
@protocol FCPXTimelineObserver <NSObject>
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="overview"></a>

## Overview

Observers of [FCPXTimeline](fcpxtimeline.md) objects implement methods of this protocol to get notified of changes in the Final Cut Pro timeline. Based on the methods implemented in this protocol, Final Cut Pro invokes an observer for changes in an active sequence, playhead time, or sequence time range.

## Topics

### Handling Final Cut Pro Timeline Changes

- [activeSequenceChanged](fcpxtimelineobserver/activesequencechanged%28%29.md): A callback method that gets invoked when there is a change in the current timeline sequence.
- [playheadTimeChanged](fcpxtimelineobserver/playheadtimechanged%28%29.md): A callback method that gets invoked when the playhead position changes in the Final Cut Pro timeline.
- [sequenceTimeRangeChanged](fcpxtimelineobserver/sequencetimerangechanged%28%29.md): A callback method that gets invoked when the time range of an active sequence changes in the Final Cut Pro timeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Interactions

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md): Extend your workflows beyond media exchange by enabling a workflow extension to interact with the Final Cut Pro timeline.
- [FCPXHost](fcpxhost.md): A protocol that provides an interface to retrieve the Final Cut Pro timeline proxy objects and details of the host app.
- [ProExtensionHostSingleton](proextensionhostsingleton%28%29.md): Returns the singleton proxy instance of the host object.
- [FCPXTimeline](fcpxtimeline.md): An interface that has methods and properties to communicate and interact with the Final Cut Pro timeline.
