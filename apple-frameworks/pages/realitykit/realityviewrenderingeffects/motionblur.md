> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewrenderingeffects/motionblur](https://developer.apple.com/documentation/realitykit/realityviewrenderingeffects/motionblur)

# motionBlur

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Enables or disables a motion blur effect for virtual content.

## Declaration

```swift
var motionBlur: RealityViewRenderingEffectMode
```

<a id="discussion"></a>

## Discussion

A video stream consists of a sequence of images. Each image in the sequence represents a short, but non-zero period of time. Fast-moving, real-world objects captured within a frame can experience a visual smearing, known as *motion blur*.

By default, RealityKit applies an effect that introduces motion blur for virtual objects that appear in the scene. The effect takes into account the relative motion of the camera and the virtual object.

If the motion blur effect is disabled by setting the `motionBlur` property to `.disabled`, virtual objects will be rendered at exactly one position in the frame for any given image in the image sequence. Disabling motion blur reduces the computational cost of rendering.

When deciding whether to use any effect, be sure to consider your app’s CPU and GPU utilization, as described in [Improving the Performance of a RealityKit App](../improving-the-performance-of-a-realitykit-app.md).

> **Important**

> This rendering effect is unavailable on macOS.
