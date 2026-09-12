> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/rendercallbacks-swift.property](https://developer.apple.com/documentation/realitykit/arview/rendercallbacks-swift.property)

# renderCallbacks

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

A container that holds the view’s render callbacks.

## Declaration

```swift
@MainActor @preconcurrency var renderCallbacks: ARView.RenderCallbacks { get set }
```

## Mentioned In

- [Applying core image filters as a postprocess effect](../applying-core-image-filters-as-a-postprocess-effect.md)
- [Implementing postprocess effects using Metal compute functions](../implementing-postprocess-effects-using-metal-compute-functions.md)

<a id="discussion"></a>

## Discussion

Render callbacks are closures RealityKit calls at predefined times. You can use render callbacks to modify the results of RealityKit’s rendering. If you assign a function or closure to any of the contained callback properties, RealityKit calls that function or closure at a predefined time. Setting the `ARView/RenderCallbacks-swift.postProcess` property, for example, causes RealityKit to call the assigned function or closure every frame, after RealityKit renders the scene, but before it displays it.

## See Also

### Configuring the AR session

- [session](session.md): The AR session that supports the view’s rendering.
- [automaticallyConfigureSession](automaticallyconfiguresession.md): An indication of whether to use an automatically configured AR session.
- [renderOptions](renderoptions-swift.property.md): The render options that configure the view’s AR session.
