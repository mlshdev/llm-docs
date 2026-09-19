> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/binocularfrustummatrix(convention:increasetangents:depthrange:)

# binocularFrustumMatrix(convention:increaseTangents:depthRange:)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 2.0+ (deprecated in 26.0)

## Declaration

```swift
func binocularFrustumMatrix(convention: AxisDirectionConvention = .rightUpBack, increaseTangents: SIMD4<Float>, depthRange: SIMD2<Float>) -> matrix_float4x4
```
