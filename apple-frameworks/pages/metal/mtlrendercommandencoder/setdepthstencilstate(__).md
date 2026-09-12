> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setdepthstencilstate(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setdepthstencilstate(_:))

# setDepthStencilState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the combined depth and stencil state.

## Declaration

```swift
func setDepthStencilState(_ depthStencilState: (any MTLDepthStencilState)?)
```

## Parameters

- `depthStencilState`: An instance that conforms to the [MTLDepthStencilState](../mtldepthstencilstate.md) protocol.

<a id="discussion"></a>

## Discussion

This method changes the combined depth and stencil state for the render command encoder that’s compatible with its depth and stencil attachment configuration. For example, if the new state enables depth testing or depth writing, the render pass needs to have a depth attachment. Similarly, if the new state enables stencil testing or stencil writing, the render pass’s stencil needs to have a stencil attachment. You create depth and stencil attachments for a render pass by assigning the [depthAttachment](../mtlrenderpassdescriptor/depthattachment.md) and [stencilAttachment](../mtlrenderpassdescriptor/stencilattachment.md) properties of the [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance that creates it.

Pass `nil` to clear the state from the previous call, which restores a state that’s equivalent to the default values of an [MTLDepthStencilDescriptor](../mtldepthstencildescriptor.md) instance’s properties.

## See Also

### Configuring depth and stencil behavior

- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestBounds(\_:)](setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilReferenceValues(front:back:)](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.

# setDepthStencilState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures the combined depth and stencil state.

## Declaration

```objectivec
- (void) setDepthStencilState:(id<MTLDepthStencilState>) depthStencilState;
```

## Parameters

- `depthStencilState`: An instance that conforms to the [MTLDepthStencilState](../mtldepthstencilstate.md) protocol.

<a id="discussion"></a>

## Discussion

This method changes the combined depth and stencil state for the render command encoder that’s compatible with its depth and stencil attachment configuration. For example, if the new state enables depth testing or depth writing, the render pass needs to have a depth attachment. Similarly, if the new state enables stencil testing or stencil writing, the render pass’s stencil needs to have a stencil attachment. You create depth and stencil attachments for a render pass by assigning the [depthAttachment](../mtlrenderpassdescriptor/depthattachment.md) and [stencilAttachment](../mtlrenderpassdescriptor/stencilattachment.md) properties of the [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance that creates it.

Pass `nil` to clear the state from the previous call, which restores a state that’s equivalent to the default values of an [MTLDepthStencilDescriptor](../mtldepthstencildescriptor.md) instance’s properties.

## See Also

### Configuring depth and stencil behavior

- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestMinBound:maxBound:](setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.
