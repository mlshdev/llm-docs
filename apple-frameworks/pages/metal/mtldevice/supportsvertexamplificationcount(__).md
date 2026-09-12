> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsvertexamplificationcount(_:)](https://developer.apple.com/documentation/metal/mtldevice/supportsvertexamplificationcount(_:))

# supportsVertexAmplificationCount(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU supports an amplification factor.

## Declaration

```swift
func supportsVertexAmplificationCount(_ count: Int) -> Bool
```

## Parameters

- `count`: An integer that represents the number of output streams you want the GPU to generate from an input stream.

## Mentioned In

- [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md)

<a id="discussion"></a>

## Discussion

A vertex amplification factor of `1` has no effect because it effectively disables vertex amplification.

> **Important**

>  Passing a vertex amplification factor of `1` or less to this method triggers an API validation error.

For more information about vertex amplification, see [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md).

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsPrimitiveMotionBlur](supportsprimitivemotionblur.md): A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md): A Boolean value that indicates whether the GPU supports barycentric coordinates.
- [areProgrammableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [areRasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
- [areBarycentricCoordsSupported](arebarycentriccoordssupported.md): Deprecated. A Boolean value that indicates whether the GPU supports barycentric coordinates.

# supportsVertexAmplificationCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU supports an amplification factor.

## Declaration

```objectivec
- (BOOL) supportsVertexAmplificationCount:(NSUInteger) count;
```

## Parameters

- `count`: An integer that represents the number of output streams you want the GPU to generate from an input stream.

## Mentioned In

- [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md)

<a id="discussion"></a>

## Discussion

A vertex amplification factor of `1` has no effect because it effectively disables vertex amplification.

> **Important**

>  Passing a vertex amplification factor of `1` or less to this method triggers an API validation error.

For more information about vertex amplification, see [Improving rendering performance with vertex amplification](../improving-rendering-performance-with-vertex-amplification.md).

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsPrimitiveMotionBlur](supportsprimitivemotionblur.md): A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md): A Boolean value that indicates whether the GPU supports barycentric coordinates.
- [programmableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [rasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
- [barycentricCoordsSupported](arebarycentriccoordssupported.md): Deprecated. A Boolean value that indicates whether the GPU supports barycentric coordinates.
