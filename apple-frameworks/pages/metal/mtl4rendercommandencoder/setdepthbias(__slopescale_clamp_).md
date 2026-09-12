> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setdepthbias(_:slopescale:clamp:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setdepthbias(_:slopescale:clamp:))

# setDepthBias(\_:slopeScale:clamp:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.

## Declaration

```swift
func setDepthBias(_ depthBias: Float, slopeScale: Float, clamp: Float)
```

## Parameters

- `depthBias`: A constant bias the render pipeline applies to all fragments.
- `slopeScale`: A bias coefficient that scales with the depth of the primitive relative to the camera.
- `clamp`: A value that limits the bias value the render pipeline can apply to a fragment. Pass a positive or negative value to limit the largest magnitude of a positive or negative bias, respectively. Set this value to `0` to disable bias clamping.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
- [setStencilReferenceValue(front:back:)](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.

# setDepthBias:slopeScale:clamp: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.

## Declaration

```objectivec
- (void) setDepthBias:(float) depthBias slopeScale:(float) slopeScale clamp:(float) clamp;
```

## Parameters

- `depthBias`: A constant bias the render pipeline applies to all fragments.
- `slopeScale`: A bias coefficient that scales with the depth of the primitive relative to the camera.
- `clamp`: A value that limits the bias value the render pipeline can apply to a fragment. Pass a positive or negative value to limit the largest magnitude of a positive or negative bias, respectively. Set this value to `0` to disable bias clamping.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.
