> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/properties-swift.struct/init(configuration:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/properties-swift.struct/init(configuration:))

# init(configuration:)

**Framework:** Compositor Services  
**Kind:** Initializer  
**Availability:** macOS 26.0+ · visionOS 1.0+

Creates a set of properties using the specified configuration values.

## Declaration

```swift
init(configuration: LayerRenderer.Configuration) throws
```

## Parameters

- `configuration`: The options you use to configure your Metal rendering engine. Specify the same options you use during drawing.

<a id="discussion"></a>

## Discussion

Prior to receiving the layer you use for drawing, you can create a [LayerRenderer.Properties](../properties-swift.struct.md) structure and use it to start the configuration of your Metal code.
