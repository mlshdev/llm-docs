> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/monocularfrustummatrix(convention:viewindex:increasetangents:depthrange:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/monocularfrustummatrix(convention:viewindex:increasetangents:depthrange:))

# monocularFrustumMatrix(convention:viewIndex:increaseTangents:depthRange:)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 2.0+ (deprecated in 26.0)

## Declaration

```swift
func monocularFrustumMatrix(convention: AxisDirectionConvention = .rightUpBack, viewIndex: Int, increaseTangents: SIMD4<Float>, depthRange: SIMD2<Float>) -> matrix_float4x4
```
