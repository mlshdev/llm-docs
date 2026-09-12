> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/blur(radius:opaque:)](https://developer.apple.com/documentation/swiftui/visualeffect/blur(radius:opaque:))

# blur(radius:opaque:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies a Gaussian blur to the view.

## Declaration

```swift
func blur(radius: CGFloat, opaque: Bool = false) -> some VisualEffect

```

## Parameters

- `radius`: The radial size of the blur. A blur is more diffuse when its radius is large.
- `opaque`: A Boolean value that indicates whether the blur renderer permits transparency in the blur output. Set to `true` to create an opaque blur, or set to `false` to permit transparency.

<a id="return-value"></a>

## Return Value

An effect that blurs the view.

<a id="discussion"></a>

## Discussion

Use `blur(radius:opaque:)` to apply a gaussian blur effect to the rendering of the view.

## See Also

### Applying other effects

- [distortionEffect(\_:maxSampleOffset:isEnabled:)](distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter on the raster layer created from `self`.
