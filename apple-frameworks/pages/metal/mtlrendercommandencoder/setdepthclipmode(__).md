> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setdepthclipmode(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setdepthclipmode(_:))

# setDepthClipMode(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.

## Declaration

```swift
func setDepthClipMode(_ depthClipMode: MTLDepthClipMode)
```

## Parameters

- `depthClipMode`: The mode that determines how to handle fragments outside the near and far planes.

<a id="discussion"></a>

## Discussion

You can use depth clipping to ignore fragments outside the z-axis boundaries of a viewing volume.

The render pass’s default clip mode is [MTLDepthClipMode.clip](../mtldepthclipmode/clip.md).

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilReferenceValues(front:back:)](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.

# setDepthClipMode: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+

Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.

## Declaration

```objectivec
- (void) setDepthClipMode:(MTLDepthClipMode) depthClipMode;
```

## Parameters

- `depthClipMode`: The mode that determines how to handle fragments outside the near and far planes.

<a id="discussion"></a>

## Discussion

You can use depth clipping to ignore fragments outside the z-axis boundaries of a viewing volume.

The render pass’s default clip mode is [MTLDepthClipModeClip](../mtldepthclipmode/clip.md).

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.
