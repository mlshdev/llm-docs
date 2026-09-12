> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/compositorlayerconfiguration/makeconfiguration(capabilities:configuration:)](https://developer.apple.com/documentation/compositorservices/compositorlayerconfiguration/makeconfiguration(capabilities:configuration:))

# makeConfiguration(capabilities:configuration:)

**Framework:** CompositorServices  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Creates and returns a type that contains the rendering options for Compositor Services to use when configuring a layer.

## Declaration

```swift
@MainActor @preconcurrency func makeConfiguration(capabilities: LayerRenderer.Capabilities, configuration: inout LayerRenderer.Configuration)
```

## Parameters

- `capabilities`: The supported capabilities of the current device. Use these values to validate any choices you apply to the `configuration` parameter.
- `configuration`: The default set of configuration options. Modify this type to specify the options you want to use during rendering.

## Mentioned In

- [Drawing fully immersive content using Metal](../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

In your implementation of this method, modify the `configuration` parameter to specify the Metal texture formats and layouts you want to use during rendering. Verify that your preferred choices are available by checking the supported options using the information in the `capabilities` parameter.
