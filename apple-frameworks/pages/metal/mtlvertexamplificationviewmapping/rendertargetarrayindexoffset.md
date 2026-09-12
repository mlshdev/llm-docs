> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexamplificationviewmapping/rendertargetarrayindexoffset](https://developer.apple.com/documentation/metal/mtlvertexamplificationviewmapping/rendertargetarrayindexoffset)

# renderTargetArrayIndexOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

An offset into the list of render targets.

## Declaration

```swift
var renderTargetArrayIndexOffset: UInt32
```

## Mentioned In

- [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md)

<a id="discussion"></a>

## Discussion

To specify a list of offsets, call the [setVertexAmplificationCount(\_:viewMappings:)](../mtlrendercommandencoder/setvertexamplificationcount%28__viewmappings_%29.md) method.

When your app renders to different render targets, you specify the render target index to render to in your vertex shader by adding the `render_target_array_index` attribute to one of the vertex shader’s outputs. If you are using vertex amplification, Metal calculates the index for each amplified vertex by adding the index offset for the vertex to the value returned from your shader.

## See Also

### Specifying mapping offsets

- [viewportArrayIndexOffset](viewportarrayindexoffset.md): An offset into the list of viewports.

# renderTargetArrayIndexOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An offset into the list of render targets.

## Declaration

```objectivec
uint32_t renderTargetArrayIndexOffset;
```

## Mentioned In

- [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md)

<a id="discussion"></a>

## Discussion

To specify a list of offsets, call the [setVertexAmplificationCount:viewMappings:](../mtlrendercommandencoder/setvertexamplificationcount%28__viewmappings_%29.md) method.

When your app renders to different render targets, you specify the render target index to render to in your vertex shader by adding the `render_target_array_index` attribute to one of the vertex shader’s outputs. If you are using vertex amplification, Metal calculates the index for each amplified vertex by adding the index offset for the vertex to the value returned from your shader.

## See Also

### Specifying mapping offsets

- [viewportArrayIndexOffset](viewportarrayindexoffset.md): An offset into the list of viewports.
