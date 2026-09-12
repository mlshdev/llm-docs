> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsprimitivemotionblur](https://developer.apple.com/documentation/metal/mtldevice/supportsprimitivemotionblur)

# supportsPrimitiveMotionBlur (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.

## Declaration

```swift
var supportsPrimitiveMotionBlur: Bool { get }
```

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md): A Boolean value that indicates whether the GPU supports barycentric coordinates.
- [supportsVertexAmplificationCount(\_:)](supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
- [areProgrammableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [areRasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
- [areBarycentricCoordsSupported](arebarycentriccoordssupported.md): Deprecated. A Boolean value that indicates whether the GPU supports barycentric coordinates.

# supportsPrimitiveMotionBlur (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.

## Declaration

```objectivec
@property (readonly) BOOL supportsPrimitiveMotionBlur;
```

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md): A Boolean value that indicates whether the GPU supports barycentric coordinates.
- [supportsVertexAmplificationCount:](supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
- [programmableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [rasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
- [barycentricCoordsSupported](arebarycentriccoordssupported.md): Deprecated. A Boolean value that indicates whether the GPU supports barycentric coordinates.
