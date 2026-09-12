> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/grayscale(_:)](https://developer.apple.com/documentation/swiftui/visualeffect/grayscale(_:))

# grayscale(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds a grayscale effect to the view.

## Declaration

```swift
func grayscale(_ amount: Double) -> some VisualEffect

```

## Parameters

- `amount`: The intensity of grayscale to apply from 0.0 to less than 1.0. Values closer to 0.0 are more colorful, and values closer to 1.0 are less colorful.

<a id="return-value"></a>

## Return Value

An effect that reduces the intensity of colors in the view.

<a id="discussion"></a>

## Discussion

A grayscale effect reduces the intensity of colors in the view.

## See Also

### Adjusting Color

- [brightness(\_:)](brightness%28__%29.md): Brightens the view by the specified amount.
- [colorEffect(\_:isEnabled:)](coloreffect%28__isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter effect on the color of each pixel.
- [contrast(\_:)](contrast%28__%29.md): Sets the contrast and separation between similar colors in the view.
- [hueRotation(\_:)](huerotation%28__%29.md): Applies a hue rotation effect to the view.
- [saturation(\_:)](saturation%28__%29.md): Adjusts the color saturation of the view.
- [opacity(\_:)](opacity%28__%29.md): Sets the transparency of the view.
