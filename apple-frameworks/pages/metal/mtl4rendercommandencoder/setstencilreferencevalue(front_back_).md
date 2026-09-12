> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setstencilreferencevalue(front:back:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setstencilreferencevalue(front:back:))

# setStencilReferenceValue(front:back:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.

## Declaration

```swift
func setStencilReferenceValue(front frontReferenceValue: UInt32, back backReferenceValue: UInt32)
```

## Parameters

- `frontReferenceValue`: A stencil test comparison value the render pipeline applies to front-facing primitives.
- `backReferenceValue`: A stencil test comparison value the render pipeline applies to back-facing primitives.

<a id="discussion"></a>

## Discussion

The render pipeline applies `frontReferenceValue` to front-facing primitives and `backReferenceValue` to back-facing primitives.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.

# setStencilFrontReferenceValue:backReferenceValue: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.

## Declaration

```objectivec
- (void) setStencilFrontReferenceValue:(uint32_t) frontReferenceValue backReferenceValue:(uint32_t) backReferenceValue;
```

## Parameters

- `frontReferenceValue`: A stencil test comparison value the render pipeline applies to front-facing primitives.
- `backReferenceValue`: A stencil test comparison value the render pipeline applies to back-facing primitives.

<a id="discussion"></a>

## Discussion

The render pipeline applies `frontReferenceValue` to front-facing primitives and `backReferenceValue` to back-facing primitives.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
