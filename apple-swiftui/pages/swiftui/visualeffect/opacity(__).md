> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/opacity(_:)](https://developer.apple.com/documentation/swiftui/visualeffect/opacity(_:))

# opacity(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the transparency of the view.

## Declaration

```swift
func opacity(_ opacity: Double) -> some VisualEffect

```

## Parameters

- `opacity`: A value between 0 (fully transparent) and 1 (fully opaque).

<a id="return-value"></a>

## Return Value

An effect that sets the transparency of the view.

<a id="discussion"></a>

## Discussion

When applying the `opacity(_:)` effect to a view that has already had its opacity transformed, the effect of the underlying opacity transformation is multiplied.

## See Also

### Adjusting Color

- [brightness(\_:)](brightness%28__%29.md): Brightens the view by the specified amount.
- [colorEffect(\_:isEnabled:)](coloreffect%28__isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter effect on the color of each pixel.
- [contrast(\_:)](contrast%28__%29.md): Sets the contrast and separation between similar colors in the view.
- [grayscale(\_:)](grayscale%28__%29.md): Adds a grayscale effect to the view.
- [hueRotation(\_:)](huerotation%28__%29.md): Applies a hue rotation effect to the view.
- [saturation(\_:)](saturation%28__%29.md): Adjusts the color saturation of the view.
