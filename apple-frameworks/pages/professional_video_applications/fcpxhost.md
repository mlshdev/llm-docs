> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxhost](https://developer.apple.com/documentation/professional_video_applications/fcpxhost)

# FCPXHost (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** ProVideo Workflow Extensions 1.0+

A protocol that provides an interface to retrieve the Final Cut Pro timeline proxy objects and details of the host app.

## Declaration

```swift
protocol FCPXHost : NSObjectProtocol
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="overview"></a>

## Overview

Workflow extensions can use the [timeline](fcpxhost/timeline.md) property of this protocol as a starting point for communicating with the Final Cut Pro timeline.

## Topics

### Getting the Host Object Details

- [bundleIdentifier](fcpxhost/bundleidentifier.md): A unique string that identifies a host app to the system.
- [name](fcpxhost/name.md): The name of the host app.
- [timeline](fcpxhost/timeline.md): A pointer to the Final Cut Pro timeline proxy object.
- [versionString](fcpxhost/versionstring.md): The version number of the host app.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Interactions

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md): Extend your workflows beyond media exchange by enabling a workflow extension to interact with the Final Cut Pro timeline.
- [ProExtensionHostSingleton()](proextensionhostsingleton%28%29.md): Returns the singleton proxy instance of the host object.
- [FCPXTimeline](fcpxtimeline.md): An interface that has methods and properties to communicate and interact with the Final Cut Pro timeline.
- [FCPXTimelineObserver](fcpxtimelineobserver.md): An interface with optional methods implemented by observers of [FCPXTimeline](fcpxtimeline.md) objects.

# FCPXHost (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that provides an interface to retrieve the Final Cut Pro timeline proxy objects and details of the host app.

## Declaration

```objectivec
@protocol FCPXHost <NSObject>
```

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="overview"></a>

## Overview

Workflow extensions can use the [timeline](fcpxhost/timeline.md) property of this protocol as a starting point for communicating with the Final Cut Pro timeline.

## Topics

### Getting the Host Object Details

- [bundleIdentifier](fcpxhost/bundleidentifier.md): A unique string that identifies a host app to the system.
- [name](fcpxhost/name.md): The name of the host app.
- [timeline](fcpxhost/timeline.md): A pointer to the Final Cut Pro timeline proxy object.
- [versionString](fcpxhost/versionstring.md): The version number of the host app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Interactions

- [Interacting with the Final Cut Pro Timeline](../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md): Extend your workflows beyond media exchange by enabling a workflow extension to interact with the Final Cut Pro timeline.
- [ProExtensionHostSingleton](proextensionhostsingleton%28%29.md): Returns the singleton proxy instance of the host object.
- [FCPXTimeline](fcpxtimeline.md): An interface that has methods and properties to communicate and interact with the Final Cut Pro timeline.
- [FCPXTimelineObserver](fcpxtimelineobserver.md): An interface with optional methods implemented by observers of [FCPXTimeline](fcpxtimeline.md) objects.
