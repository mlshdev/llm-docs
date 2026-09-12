> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/brightness(_:)](https://developer.apple.com/documentation/swiftui/visualeffect/brightness(_:))

# brightness(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Brightens the view by the specified amount.

## Declaration

```swift
func brightness(_ amount: Double) -> some VisualEffect

```

## Parameters

- `amount`: A value between 0 (no effect) and 1 (full white brightening) that represents the intensity of the brightness effect.

<a id="return-value"></a>

## Return Value

An effect that brightens the view by the specified amount.

## See Also

### Adjusting Color

- [colorEffect(\_:isEnabled:)](coloreffect%28__isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter effect on the color of each pixel.
- [contrast(\_:)](contrast%28__%29.md): Sets the contrast and separation between similar colors in the view.
- [grayscale(\_:)](grayscale%28__%29.md): Adds a grayscale effect to the view.
- [hueRotation(\_:)](huerotation%28__%29.md): Applies a hue rotation effect to the view.
- [saturation(\_:)](saturation%28__%29.md): Adjusts the color saturation of the view.
- [opacity(\_:)](opacity%28__%29.md): Sets the transparency of the view.
