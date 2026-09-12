> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/rendercallbacks-swift.struct](https://developer.apple.com/documentation/realitykit/arview/rendercallbacks-swift.struct)

# ARView.RenderCallbacks

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

A container that holds the view’s render callbacks.

## Declaration

```swift
struct RenderCallbacks
```

<a id="overview"></a>

## Overview

Render callbacks are closures RealityKit calls at predefined times. You can use render callbacks to modify the results of RealityKit’s rendering. If you assign a function or closure to any of the contained callback properties, RealityKit calls that function or closure at a predefined time. Setting the [postProcess](rendercallbacks-swift.struct/postprocess.md) property, for example, causes RealityKit to call the assigned function or closure every frame, after RealityKit renders the scene, but before it displays it.

## Topics

### Creating a callback object

- [init()](rendercallbacks-swift.struct/init%28%29.md): Creates a new object.

### Register callback closures

- [prepareWithDevice](rendercallbacks-swift.struct/preparewithdevice.md): A callback function for doing initial setup work.
- [postProcess](rendercallbacks-swift.struct/postprocess.md): A callback function for implementing postprocess effects.

## See Also

### Postprocessing

- [Postprocessing effects](../postprocessing-effects.md): Create special rendering effects for your RealityKit scenes.
- [ARView.PostProcessContext](postprocesscontext.md): An object the framework uses to pass data to a postprocess callback.
- [PostProcessEffect](../postprocesseffect.md): A protocol that defines hooks for custom post processing effects.
