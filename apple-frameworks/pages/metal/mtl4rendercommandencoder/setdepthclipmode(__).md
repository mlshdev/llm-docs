> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setdepthclipmode(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setdepthclipmode(_:))

# setDepthClipMode(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the behavior for fragments outside of the near or far planes.

## Declaration

```swift
func setDepthClipMode(_ depthClipMode: MTLDepthClipMode)
```

## Parameters

- `depthClipMode`: [MTLDepthClipMode](../mtldepthclipmode.md) to set.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
- [setStencilReferenceValue(front:back:)](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.

# setDepthClipMode: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the behavior for fragments outside of the near or far planes.

## Declaration

```objectivec
- (void) setDepthClipMode:(MTLDepthClipMode) depthClipMode;
```

## Parameters

- `depthClipMode`: [MTLDepthClipMode](../mtldepthclipmode.md) to set.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.
