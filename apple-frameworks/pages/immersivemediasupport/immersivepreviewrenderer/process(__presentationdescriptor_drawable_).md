> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivepreviewrenderer/process(_:presentationdescriptor:drawable:)](https://developer.apple.com/documentation/immersivemediasupport/immersivepreviewrenderer/process(_:presentationdescriptor:drawable:))

# process(\_:presentationDescriptor:drawable:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Performs the rendering of an immersive video frame.

## Declaration

```swift
@MainActor func process(_ frame: ImmersiveVideoFrame, presentationDescriptor: PresentationDescriptor, drawable: LayerRenderer.Drawable) async
```

## Parameters

- `frame`: The `ImmersiveVideoFrame` to render.
- `presentationDescriptor`: The presentation descriptor for the commands to process on the frame.
- `drawable`: The drawable to render to.

<a id="discussion"></a>

## Discussion

This method is available on visionOS and integrates with the CompositorServices framework to provide head-tracked stereoscopic rendering. It automatically processes both left and right eye views, applies device anchor transforms for head tracking.

The rendering operation is asynchronous and completes when the frame has been submitted to the GPU. Access [commandBuffer](commandbuffer.md) after this method returns to retrieve the command buffer for synchronization.
