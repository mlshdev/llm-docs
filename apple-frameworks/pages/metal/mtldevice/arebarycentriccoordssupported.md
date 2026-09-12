> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/arebarycentriccoordssupported](https://developer.apple.com/documentation/metal/mtldevice/arebarycentriccoordssupported)

# areBarycentricCoordsSupported (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the GPU supports barycentric coordinates.

> Use [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md) instead.

## Declaration

```swift
var areBarycentricCoordsSupported: Bool { get }
```

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsPrimitiveMotionBlur](supportsprimitivemotionblur.md): A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md): A Boolean value that indicates whether the GPU supports barycentric coordinates.
- [supportsVertexAmplificationCount(\_:)](supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
- [areProgrammableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [areRasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.

# barycentricCoordsSupported (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the GPU supports barycentric coordinates.

> Use [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md) instead.

## Declaration

```objectivec
@property (readonly, getter=areBarycentricCoordsSupported) BOOL barycentricCoordsSupported;
```

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsPrimitiveMotionBlur](supportsprimitivemotionblur.md): A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsShaderBarycentricCoordinates](supportsshaderbarycentriccoordinates.md): A Boolean value that indicates whether the GPU supports barycentric coordinates.
- [supportsVertexAmplificationCount:](supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
- [programmableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [rasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
