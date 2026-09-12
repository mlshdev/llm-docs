> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setdepthtestbounds(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setdepthtestbounds(_:))

# setDepthTestBounds(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the range for depth bounds testing.

## Declaration

```swift
func setDepthTestBounds(_ bounds: ClosedRange<Float>)
```

## Parameters

- `bounds`: A closed range the renderer applies to depth bounds testing. The renderer discards fragments with a stored depth that is outside `bounds`.

<a id="discussion"></a>

## Discussion

The render command encoder disables depth bounds testing by default. The render command encoder also disables depth bounds testing when the `bounds` property equals `0.0...1.0`. `bounds.lowerBound` needs to be greater than or equal to `0.0`. `bounds.upperBound` needs to be less than or equal to `1.0`.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilReferenceValues(front:back:)](setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.
