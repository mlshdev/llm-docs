> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setstencilreferencevalue(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setstencilreferencevalue(_:))

# setStencilReferenceValue(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures this encoder with a reference value for stencil testing.

## Declaration

```swift
func setStencilReferenceValue(_ referenceValue: UInt32)
```

## Parameters

- `referenceValue`: A stencil test comparison value.

<a id="discussion"></a>

## Discussion

The render pipeline applies this reference value to both front-facing and back-facing primitives.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(front:back:)](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.

# setStencilReferenceValue: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures this encoder with a reference value for stencil testing.

## Declaration

```objectivec
- (void) setStencilReferenceValue:(uint32_t) referenceValue;
```

## Parameters

- `referenceValue`: A stencil test comparison value.

<a id="discussion"></a>

## Discussion

The render pipeline applies this reference value to both front-facing and back-facing primitives.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.
