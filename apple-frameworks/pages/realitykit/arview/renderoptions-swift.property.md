> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/renderoptions-swift.property](https://developer.apple.com/documentation/realitykit/arview/renderoptions-swift.property)

# renderOptions

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

The render options that configure the view’s AR session.

## Declaration

```swift
@MainActor @preconcurrency var renderOptions: ARView.RenderOptions { get set }
```

## Mentioned In

- [Reducing GPU Utilization in Your RealityKit App](../reducing-gpu-utilization-in-your-realitykit-app.md)

<a id="discussion"></a>

## Discussion

RealityKit applies effects like camera grain, motion blur, and depth of field to the render to make the AR experience more immersive. Each effect causes your virtual content to better blend in with live images from the camera in some way.

To disable an effect, you add an option from the [ARView.RenderOptions](renderoptions-swift.struct.md) option set to the view’s [renderOptions](renderoptions-swift.property.md) property:

```swift
arView.renderOptions.insert(.disableMotionBlur) // Turn off motion blur.
```

When you create an AR view, the system automatically adds certain render options to disable effects that might be too demanding for the GPU hardware on which your app is running. But you can modify the [renderOptions](renderoptions-swift.property.md) set at any time to enable or disable any particular effect, depending on the needs of your app.

To decide whether to use an effect, consider both its visual impact on your app, and its computational cost. Check the cost by measuring your app’s CPU and GPU utilization with the effect enabled across all the devices your app supports, as described in [Improving the Performance of a RealityKit App](../improving-the-performance-of-a-realitykit-app.md).

## See Also

### Configuring the AR session

- [session](session.md): The AR session that supports the view’s rendering.
- [automaticallyConfigureSession](automaticallyconfiguresession.md): An indication of whether to use an automatically configured AR session.
- [renderCallbacks](rendercallbacks-swift.property.md): A container that holds the view’s render callbacks.
