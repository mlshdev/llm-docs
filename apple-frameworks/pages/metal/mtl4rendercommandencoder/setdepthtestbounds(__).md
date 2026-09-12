> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setdepthtestbounds(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setdepthtestbounds(_:))

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

- [setDepthStencilState(\_:)](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias(\_:slopeScale:clamp:)](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setStencilReferenceValue(\_:)](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
- [setStencilReferenceValue(front:back:)](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.
