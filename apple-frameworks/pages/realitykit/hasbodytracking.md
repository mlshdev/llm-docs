> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasbodytracking](https://developer.apple.com/documentation/realitykit/hasbodytracking)

# HasBodyTracking

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

An interface that enables the animation of a virtual character by tracking a real person in AR.

## Declaration

```swift
@MainActor @preconcurrency protocol HasBodyTracking : HasTransform
```

<a id="overview"></a>

## Overview

> **Important**

> Body tracking requires a compatible rigged model. For more information on creating a compatible model, see [Rigging a Model for Motion Capture](../arkit/rigging-a-model-for-motion-capture.md).

## Topics

### Accessing the component

- [bodyTracking](hasbodytracking/bodytracking.md): The body-tracking component for the body-tracked entity.

## Relationships

### Inherits From

- [HasTransform](hastransform.md)

### Conforming Types

- [BodyTrackedEntity](bodytrackedentity.md)

## See Also

### Body and face tracking

- [Creating an App for Face-Painting in AR](creating-an-app-for-face-painting-in-ar.md): Combine RealityKit’s face detection with PencilKit to implement virtual face-painting.
- [Occluding virtual content with people](../arkit/occluding-virtual-content-with-people.md): Cover your app’s virtual content with people that ARKit perceives in the camera feed.
- [Placing entities using head and device transform](../visionos/placing-entities-using-head-and-device-transform.md): Query and react to changes in the position and rotation of Apple Vision Pro.
- [BodyTrackingComponent](bodytrackingcomponent.md): A component for tracking people in an AR session.
- [BodyTrackedEntity](bodytrackedentity.md): An entity used to animate a virtual character in an AR scene by tracking a real person.
