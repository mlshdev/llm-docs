> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setdepthtestminbound:maxbound:](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setdepthtestminbound:maxbound:)

# setDepthTestMinBound:maxBound:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the minimum and maximum bounds for depth bounds testing.

## Declaration

```objectivec
- (void) setDepthTestMinBound:(float) minBound maxBound:(float) maxBound;
```

## Parameters

- `minBound`: A minimum bound for depth testing, which discards fragments with a stored depth that is less than `minBound`.
- `maxBound`: A maximum bound for depth testing, which discards fragments with a stored depth that is greater than `maxBound`.

<a id="discussion"></a>

## Discussion

The render command encoder disables depth bounds testing by default. The render command encoder also disables depth bounds testing when all of the following properties equal a specific value:

- The `minBound` property is equal to `0.0f`.
- The `maxBound` property is equal to `1.0f`. Both `minBound` and `maxBound` need to be within `[0.0f, 1.0f]`, and `minBound` needs to be less than or equal to `maxBound`.

## See Also

### Configuring depth and stencil behavior

- [setDepthStencilState:](setdepthstencilstate%28__%29.md): Configures this encoder with a depth stencil state that applies to your subsequent draw commands.
- [setDepthBias:slopeScale:clamp:](setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment shader functions by a scaling factor and bias.
- [setDepthClipMode:](setdepthclipmode%28__%29.md): Controls the behavior for fragments outside of the near or far planes.
- [setStencilReferenceValue:](setstencilreferencevalue%28__%29.md): Configures this encoder with a reference value for stencil testing.
- [setStencilFrontReferenceValue:backReferenceValue:](setstencilreferencevalue%28front_back_%29.md): Configures the encoder with different stencil test reference values for front-facing and back-facing primitives.
