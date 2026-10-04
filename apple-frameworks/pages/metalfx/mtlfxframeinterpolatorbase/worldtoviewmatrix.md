> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/worldtoviewmatrix

# worldToViewMatrix (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.1+

The world-to-view transformation matrix this frame interpolator uses as part of its operation.

## Declaration

```swift
var worldToViewMatrix: simd_float4x4 { get set }
```

<a id="discussion"></a>

## Discussion

Set this and [viewToClipMatrix](viewtoclipmatrix.md) to the matrices you use to render the scene into the color buffer. This frame interpolator derives camera-only motion from the pair, and treats two identity matrices as “not supplied”.

# worldToViewMatrix (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.1+

The world-to-view transformation matrix this frame interpolator uses as part of its operation.

## Declaration

```objectivec
@property (nonatomic) simd_float4x4 worldToViewMatrix;
```

<a id="discussion"></a>

## Discussion

Set this and [viewToClipMatrix](viewtoclipmatrix.md) to the matrices you use to render the scene into the color buffer. This frame interpolator derives camera-only motion from the pair, and treats two identity matrices as “not supplied”.
