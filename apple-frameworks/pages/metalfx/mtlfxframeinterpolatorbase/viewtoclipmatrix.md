> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/viewtoclipmatrix

# viewToClipMatrix (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.1+

The view-to-clip coordinates transformation matrix this frame interpolator uses as part of its operation.

## Declaration

```swift
var viewToClipMatrix: simd_float4x4 { get set }
```

<a id="discussion"></a>

## Discussion

Set this to your unmodified projection matrix. Its depth range has to agree with [isDepthReversed](isdepthreversed.md): when that property is `NO` this matrix maps the near plane to a clip z of 0, and when it is `YES` it maps the near plane to a clip z of 1. Both a left-handed and a right-handed matrix are fine, as long as it is the one that produced [depthTexture](depthtexture.md).

# viewToClipMatrix (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.1+

The view-to-clip coordinates transformation matrix this frame interpolator uses as part of its operation.

## Declaration

```objectivec
@property (nonatomic) simd_float4x4 viewToClipMatrix;
```

<a id="discussion"></a>

## Discussion

Set this to your unmodified projection matrix. Its depth range has to agree with [depthReversed](isdepthreversed.md): when that property is `NO` this matrix maps the near plane to a clip z of 0, and when it is `YES` it maps the near plane to a clip z of 1. Both a left-handed and a right-handed matrix are fine, as long as it is the one that produced [depthTexture](depthtexture.md).
