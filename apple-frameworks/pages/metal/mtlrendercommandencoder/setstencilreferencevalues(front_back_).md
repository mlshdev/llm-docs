> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setstencilreferencevalues(front:back:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setstencilreferencevalues(front:back:))

# setStencilReferenceValues(front:back:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Configures different comparison values for front- and back-facing primitives.

## Declaration

```swift
func setStencilReferenceValues(front frontReferenceValue: UInt32, back backReferenceValue: UInt32)
```

## Parameters

- `frontReferenceValue`: A stencil test comparison value the render pipeline applies to only front-facing primitives.
- `backReferenceValue`: A stencil test comparison value the render pipeline applies to only back-facing primitives.

<a id="discussion"></a>

## Discussion

The command sets separate reference values for front- and back-facing primitives (see [stencilCompareFunction](../mtlstencildescriptor/stencilcomparefunction.md), [frontFaceStencil](../mtldepthstencildescriptor/frontfacestencil.md), and [backFaceStencil](../mtldepthstencildescriptor/backfacestencil.md)). These reference values apply to the stencil state you set with the [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md) method.

The render pass’s default reference value for the front and back stencil compare function is `0`.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.

# setStencilFrontReferenceValue:backReferenceValue: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Configures different comparison values for front- and back-facing primitives.

## Declaration

```objectivec
- (void) setStencilFrontReferenceValue:(uint32_t) frontReferenceValue backReferenceValue:(uint32_t) backReferenceValue;
```

## Parameters

- `frontReferenceValue`: A stencil test comparison value the render pipeline applies to only front-facing primitives.
- `backReferenceValue`: A stencil test comparison value the render pipeline applies to only back-facing primitives.

<a id="discussion"></a>

## Discussion

The command sets separate reference values for front- and back-facing primitives (see [stencilCompareFunction](../mtlstencildescriptor/stencilcomparefunction.md), [frontFaceStencil](../mtldepthstencildescriptor/frontfacestencil.md), and [backFaceStencil](../mtldepthstencildescriptor/backfacestencil.md)). These reference values apply to the stencil state you set with the [setDepthStencilState:](setdepthstencilstate%28__%29.md) method.

The render pass’s default reference value for the front and back stencil compare function is `0`.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
