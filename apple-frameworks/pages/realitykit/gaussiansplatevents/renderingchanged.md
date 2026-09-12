> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatevents/renderingchanged](https://developer.apple.com/documentation/realitykit/gaussiansplatevents/renderingchanged)

# GaussianSplatEvents.RenderingChanged

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An event that signals the framework changed how it renders an entity’s splats to manage performance.

## Declaration

```swift
struct RenderingChanged
```

<a id="overview"></a>

## Overview

Subscribe to this event to learn when the framework throttles splat rendering. In response, you can reduce the workload yourself — for example, by switching to a lower-count asset or removing other splat components from the scene.

## Topics

### Instance Properties

- [entity](renderingchanged/entity.md): The entity whose Gaussian splat rendering changed.
- [isRenderingLimited](renderingchanged/isrenderinglimited.md): A Boolean value that indicates whether the framework is currently limiting the entity’s splat rendering.
- [renderingStatus](renderingchanged/renderingstatus.md): The level of rendering the framework now applies to the entity’s splats.

### Enumerations

- [GaussianSplatEvents.RenderingChanged.Status](renderingchanged/status.md): The level of detail at which the framework renders an entity’s splats.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
