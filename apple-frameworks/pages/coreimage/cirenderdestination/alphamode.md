> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestination/alphamode](https://developer.apple.com/documentation/coreimage/cirenderdestination/alphamode)

# alphaMode (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The render destination’s representation of alpha (transparency) values.

## Declaration

```swift
var alphaMode: CIRenderDestinationAlphaMode { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to an appropriate value given the object with which you initialized the [CIRenderDestination](../cirenderdestination.md).

## See Also

### Customizing Rendering

- [CIRenderDestinationAlphaMode](../cirenderdestinationalphamode.md): Different ways of representing alpha.
- [blendKernel](blendkernel.md): The destination’s blend kernel.
- [blendsInDestinationColorSpace](blendsindestinationcolorspace.md): Indicator of whether to blend in the destination’s color space.
- [colorSpace](colorspace.md): The destination’s color space.
- [width](width.md): The render destination’s row width.
- [height](height.md): The render destination’s buffer height.
- [isClamped](isclamped.md): Indicator of whether or not the destination clamps.
- [isDithered](isdithered.md): Indicator of whether or not the destination dithers.
- [isFlipped](isflipped.md): Indicator of whether the destination is flipped.

# alphaMode (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The render destination’s representation of alpha (transparency) values.

## Declaration

```objectivec
@property CIRenderDestinationAlphaMode alphaMode;
```

<a id="Discussion"></a>

## Discussion

This property defaults to an appropriate value given the object with which you initialized the [CIRenderDestination](../cirenderdestination.md).

## See Also

### Customizing Rendering

- [CIRenderDestinationAlphaMode](../cirenderdestinationalphamode.md): Different ways of representing alpha.
- [blendKernel](blendkernel.md): The destination’s blend kernel.
- [blendsInDestinationColorSpace](blendsindestinationcolorspace.md): Indicator of whether to blend in the destination’s color space.
- [colorSpace](colorspace.md): The destination’s color space.
- [width](width.md): The render destination’s row width.
- [height](height.md): The render destination’s buffer height.
- [clamped](isclamped.md): Indicator of whether or not the destination clamps.
- [dithered](isdithered.md): Indicator of whether or not the destination dithers.
- [flipped](isflipped.md): Indicator of whether the destination is flipped.
