> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimeline](https://developer.apple.com/documentation/professional_video_applications/fcpxtimeline)

# FCPXTimeline (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** ProVideo Workflow Extensions 1.0+

An interface that has methods and properties to communicate and interact with the Final Cut Pro timeline.

## Declaration

```swift
class FCPXTimeline
```

<a id="overview"></a>

## Overview

For certain workflows, you will want to observe changes to the Final Cut Pro timeline and reflect those changes in the extension interface. Workflow extensions can use methods in this class to observe for state changes in the Final Cut Pro timeline. See [add(\_:)](fcpxtimeline/add%28__%29.md)/[remove(\_:)](fcpxtimeline/remove%28__%29.md) for details.

You can use the properties of this object to access certain aspects of the Final Cut Pro timeline, such as an active sequence, playhead time, or current sequence range.

> **Note**

>  Workflow extensions should register an observer that conforms to the [FCPXTimelineObserver](fcpxtimelineobserver.md) protocol to find out when to fetch an up-to-date timeline property value. Doing so before Final Cut Pro invokes the observer may cause the property to return `nil`.

## Topics

### Fetching Details of an Active Sequence

- [activeSequence](fcpxtimeline/activesequence.md): The sequence played in the Final Cut Pro timeline.
- [sequenceTimeRange](fcpxtimeline/sequencetimerange.md): The time range of an active sequence in the Final Cut Pro timeline.

### Observing the Final Cut Pro Timeline

- [add(\_:)](fcpxtimeline/add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [movePlayhead(to:)](fcpxtimeline/moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [playheadTime()](fcpxtimeline/playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
- [remove(\_:)](fcpxtimeline/remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Interactions

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md): Extend your workflows beyond media exchange by enabling a workflow extension to interact with the Final Cut Pro timeline.
- [FCPXHost](fcpxhost.md): A protocol that provides an interface to retrieve the Final Cut Pro timeline proxy objects and details of the host app.
- [ProExtensionHostSingleton()](proextensionhostsingleton%28%29.md): Returns the singleton proxy instance of the host object.
- [FCPXTimelineObserver](fcpxtimelineobserver.md): An interface with optional methods implemented by observers of [FCPXTimeline](fcpxtimeline.md) objects.

# FCPXTimeline (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

An interface that has methods and properties to communicate and interact with the Final Cut Pro timeline.

## Declaration

```objectivec
@interface FCPXTimeline : NSObject
```

<a id="overview"></a>

## Overview

For certain workflows, you will want to observe changes to the Final Cut Pro timeline and reflect those changes in the extension interface. Workflow extensions can use methods in this class to observe for state changes in the Final Cut Pro timeline. See [addTimelineObserver:](fcpxtimeline/add%28__%29.md)/[removeTimelineObserver:](fcpxtimeline/remove%28__%29.md) for details.

You can use the properties of this object to access certain aspects of the Final Cut Pro timeline, such as an active sequence, playhead time, or current sequence range.

> **Note**

>  Workflow extensions should register an observer that conforms to the [FCPXTimelineObserver](fcpxtimelineobserver.md) protocol to find out when to fetch an up-to-date timeline property value. Doing so before Final Cut Pro invokes the observer may cause the property to return `nil`.

## Topics

### Fetching Details of an Active Sequence

- [activeSequence](fcpxtimeline/activesequence.md): The sequence played in the Final Cut Pro timeline.
- [sequenceTimeRange](fcpxtimeline/sequencetimerange.md): The time range of an active sequence in the Final Cut Pro timeline.

### Observing the Final Cut Pro Timeline

- [addTimelineObserver:](fcpxtimeline/add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [movePlayheadTo:](fcpxtimeline/moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [playheadTime](fcpxtimeline/playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
- [removeTimelineObserver:](fcpxtimeline/remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### FCPX Interactions

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md): Extend your workflows beyond media exchange by enabling a workflow extension to interact with the Final Cut Pro timeline.
- [FCPXHost](fcpxhost.md): A protocol that provides an interface to retrieve the Final Cut Pro timeline proxy objects and details of the host app.
- [ProExtensionHostSingleton](proextensionhostsingleton%28%29.md): Returns the singleton proxy instance of the host object.
- [FCPXTimelineObserver](fcpxtimelineobserver.md): An interface with optional methods implemented by observers of [FCPXTimeline](fcpxtimeline.md) objects.
