> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armattegenerator/generatedilateddepth(from:commandbuffer:)](https://developer.apple.com/documentation/arkit/armattegenerator/generatedilateddepth(from:commandbuffer:))

# generateDilatedDepth(from:commandBuffer:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Generates dilated depth at the resolution of the segmentation stencil.

## Declaration

```swift
func generateDilatedDepth(from frame: ARFrame, commandBuffer: any MTLCommandBuffer) -> any MTLTexture
```

<a id="return-value"></a>

## Return Value

A dilated depth texture which consists of a single channel of type `float32`.

<a id="Discussion"></a>

## Discussion

You use the linear depth information this function provides when compositing a virtual object with the camera image.

# generateDilatedDepthFromFrame:commandBuffer: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Generates dilated depth at the resolution of the segmentation stencil.

## Declaration

```objectivec
- (id<MTLTexture>) generateDilatedDepthFromFrame:(ARFrame *) frame commandBuffer:(id<MTLCommandBuffer>) commandBuffer;
```

<a id="return-value"></a>

## Return Value

A dilated depth texture which consists of a single channel of type `float32`.

<a id="Discussion"></a>

## Discussion

You use the linear depth information this function provides when compositing a virtual object with the camera image.
