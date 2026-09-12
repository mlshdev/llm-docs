> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setstencilreferencevalue(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setstencilreferencevalue(_:))

# setStencilReferenceValue(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the same comparison value for front- and back-facing primitives.

## Declaration

```swift
func setStencilReferenceValue(_ referenceValue: UInt32)
```

## Parameters

- `referenceValue`: A stencil test comparison value the render pipeline applies to both front- and back-facing primitives.

<a id="discussion"></a>

## Discussion

The command sets the same reference value for front- and back-facing primitives (see [stencilCompareFunction](../mtlstencildescriptor/stencilcomparefunction.md), [frontFaceStencil](../mtldepthstencildescriptor/frontfacestencil.md), and [backFaceStencil](../mtldepthstencildescriptor/backfacestencil.md)). This reference value applies to the stencil state you set with the [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md) method.

The render pass’s default reference value for the front and back stencil compare function is `0`.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValues(front:back:)](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.

# setStencilReferenceValue: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the same comparison value for front- and back-facing primitives.

## Declaration

```objectivec
- (void) setStencilReferenceValue:(uint32_t) referenceValue;
```

## Parameters

- `referenceValue`: A stencil test comparison value the render pipeline applies to both front- and back-facing primitives.

<a id="discussion"></a>

## Discussion

The command sets the same reference value for front- and back-facing primitives (see [stencilCompareFunction](../mtlstencildescriptor/stencilcomparefunction.md), [frontFaceStencil](../mtldepthstencildescriptor/frontfacestencil.md), and [backFaceStencil](../mtldepthstencildescriptor/backfacestencil.md)). This reference value applies to the stencil state you set with the [setDepthStencilState:](setdepthstencilstate%28__%29.md) method.

The render pass’s default reference value for the front and back stencil compare function is `0`.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.
