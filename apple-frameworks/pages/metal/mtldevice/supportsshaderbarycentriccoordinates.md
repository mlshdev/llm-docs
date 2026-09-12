> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsshaderbarycentriccoordinates](https://developer.apple.com/documentation/metal/mtldevice/supportsshaderbarycentriccoordinates)

# supportsShaderBarycentricCoordinates (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU supports barycentric coordinates.

## Declaration

```swift
var supportsShaderBarycentricCoordinates: Bool { get }
```

<a id="discussion"></a>

## Discussion

If a GPU device supports barycentric coordinates, a fragment shader can receive them by adding the `[[barycentric_coord]]` attribute to one of its arguments. See the [Metal Shading Language specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) and [Detecting GPU features and Metal software versions](../detecting-gpu-features-and-metal-software-versions.md) for more information.

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsPrimitiveMotionBlur](supportsprimitivemotionblur.md): A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsVertexAmplificationCount(\_:)](supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
- [areProgrammableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [areRasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
- [areBarycentricCoordsSupported](arebarycentriccoordssupported.md): Deprecated. A Boolean value that indicates whether the GPU supports barycentric coordinates.

# supportsShaderBarycentricCoordinates (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU supports barycentric coordinates.

## Declaration

```objectivec
@property (readonly) BOOL supportsShaderBarycentricCoordinates;
```

<a id="discussion"></a>

## Discussion

If a GPU device supports barycentric coordinates, a fragment shader can receive them by adding the `[[barycentric_coord]]` attribute to one of its arguments. See the [Metal Shading Language specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) and [Detecting GPU features and Metal software versions](../detecting-gpu-features-and-metal-software-versions.md) for more information.

## See Also

### Checking render support

- [supportsRaytracing](supportsraytracing.md): A Boolean value that indicates whether the GPU device supports ray tracing.
- [supportsPrimitiveMotionBlur](supportsprimitivemotionblur.md): A Boolean value that indicates whether the GPU device supports motion blur for ray tracing.
- [supportsRaytracingFromRender](supportsraytracingfromrender.md): A Boolean value that indicates whether you can call ray-tracing functions from a vertex or fragment shader.
- [supports32BitMSAA](supports32bitmsaa.md): A Boolean value that indicates whether the GPU can allocate 32-bit integer texture formats and resolve to 32-bit floating-point texture formats.
- [supportsPullModelInterpolation](supportspullmodelinterpolation.md): A Boolean value that indicates whether the GPU can compute multiple interpolations of a fragment function’s input.
- [supportsVertexAmplificationCount:](supportsvertexamplificationcount%28__%29.md): Returns a Boolean value that indicates whether the GPU supports an amplification factor.
- [programmableSamplePositionsSupported](areprogrammablesamplepositionssupported.md): A Boolean value that indicates whether the GPU supports programmable sample positions.
- [rasterOrderGroupsSupported](arerasterordergroupssupported.md): A Boolean value that indicates whether the GPU supports raster order groups.
- [barycentricCoordsSupported](arebarycentriccoordssupported.md): Deprecated. A Boolean value that indicates whether the GPU supports barycentric coordinates.
