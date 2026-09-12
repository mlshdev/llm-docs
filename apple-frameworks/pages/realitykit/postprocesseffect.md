> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/postprocesseffect](https://developer.apple.com/documentation/realitykit/postprocesseffect)

# PostProcessEffect

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A protocol that defines hooks for custom post processing effects.

## Declaration

```swift
protocol PostProcessEffect : Sendable
```

<a id="overview"></a>

## Overview

RealityKit calls each method in this protocol at a predefined time. For example, RealityKit calls the [postProcess(context:)](postprocesseffect/postprocess%28context_%29.md) method every frame, after RealityKit renders the scene, but before displaying it in your app.

Adopt this protocol in a custom object and apply it to your [RealityViewCameraContent](realityviewcameracontent.md) to apply fine-grained control over the render loop.

## Topics

### Instance Methods

- [postProcess(context:)](postprocesseffect/postprocess%28context_%29.md): A method where you can implement postprocess effects.
- [prepare(for:)](postprocesseffect/prepare%28for_%29.md): A method where you can prepare the metal device with initial setup work.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Postprocessing

- [Postprocessing effects](postprocessing-effects.md): Create special rendering effects for your RealityKit scenes.
- [ARView.PostProcessContext](arview/postprocesscontext.md): An object the framework uses to pass data to a postprocess callback.
- [ARView.RenderCallbacks](arview/rendercallbacks-swift.struct.md): A container that holds the view’s render callbacks.
