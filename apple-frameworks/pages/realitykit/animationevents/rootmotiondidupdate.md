> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents/rootmotiondidupdate](https://developer.apple.com/documentation/realitykit/animationevents/rootmotiondidupdate)

# AnimationEvents.RootMotionDidUpdate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The event raised each frame when a new root motion delta is produced for an entity.

## Declaration

```swift
struct RootMotionDidUpdate
```

<a id="overview"></a>

## Overview

Root motion is locomotion that’s authored into an animation itself — for example, a run cycle whose root joint advances forward — rather than driven by code. Each frame’s contribution is reported as a [rootMotionTransform](rootmotiondidupdate/rootmotiontransform.md) delta, which the system applies to the entity’s transform automatically. The event fires after animation evaluation but before the resulting skeletal pose is applied to the mesh.

Subscribe to this event when you need to take over root motion application — for example, to project the delta onto a navigation surface or to reject motion on collision. By default, subscribing through `scene.subscribe(to:on:)` suppresses the automatic application; the subscriber is then fully responsible for applying or discarding the delta.

<a id="Take-over-root-motion-application"></a>

### Take over root motion application

```swift
scene.subscribe(to: AnimationEvents.RootMotionDidUpdate.self, on: entity) { event in
    entity.transform = event.rootMotionTransform * entity.transform
}
```

<a id="Observe-root-motion-without-taking-over"></a>

### Observe root motion without taking over

To observe the delta while leaving automatic application in place, set [suppressesAutomaticApplication](rootmotiondidupdate/suppressesautomaticapplication.md) to `false` inside the handler:

```swift
scene.subscribe(to: AnimationEvents.RootMotionDidUpdate.self, on: entity) { event in
    event.suppressesAutomaticApplication = false
    print("Delta: \(event.rootMotionTransform)")
}
```

## Topics

### Accessing root motion

- [rootMotionTransform](rootmotiondidupdate/rootmotiontransform.md): The change in position and orientation since the previous frame.
- [suppressesAutomaticApplication](rootmotiondidupdate/suppressesautomaticapplication.md): A Boolean value that controls whether subscribing to the event suppresses automatic application of the root motion delta.

### Instance Properties

- [deltaTime](rootmotiondidupdate/deltatime.md): The elapsed time since the last update, in seconds.
- [entity](rootmotiondidupdate/entity.md): The entity the root motion delta was produced for.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
