> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/grayscale(_:)](https://developer.apple.com/documentation/swiftui/view/grayscale(_:))

# grayscale(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a grayscale effect to this view.

## Declaration

```swift
nonisolated func grayscale(_ amount: Double) -> some View

```

## Parameters

- `amount`: The intensity of grayscale to apply from 0.0 to less than 1.0. Values closer to 0.0 are more colorful, and values closer to 1.0 are less colorful.

<a id="return-value"></a>

## Return Value

A view that adds a grayscale effect to this view.

<a id="discussion"></a>

## Discussion

A grayscale effect reduces the intensity of colors in this view.

The example below shows a series of red squares with their grayscale effect increasing from 0 (reddest) to 99% (fully desaturated) in approximate 20% increments:

```swift
struct Saturation: View {
    var body: some View {
        HStack {
            ForEach(0..<6) {
                Color.red.frame(width: 60, height: 60, alignment: .center)
                    .grayscale(Double($0) * 0.1999)
                    .overlay(Text("\(Double($0) * 0.1999 * 100, specifier: "%.4f")%"),
                             alignment: .bottom)
                    .border(Color.gray)
            }
        }
    }
}
```

![Rendering showing the effects of grayscale adjustments in](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-grayscale@2x.png)

## See Also

### Transforming colors

- [brightness(\_:)](brightness%28__%29.md): Brightens this view by the specified amount.
- [contrast(\_:)](contrast%28__%29.md): Sets the contrast and separation between similar colors in this view.
- [colorInvert()](colorinvert%28%29.md): Inverts the colors in this view.
- [colorMultiply(\_:)](colormultiply%28__%29.md): Adds a color multiplication effect to this view.
- [saturation(\_:)](saturation%28__%29.md): Adjusts the color saturation of this view.
- [hueRotation(\_:)](huerotation%28__%29.md): Applies a hue rotation effect to this view.
- [luminanceToAlpha()](luminancetoalpha%28%29.md): Adds a luminance to alpha effect to this view.
- [materialActiveAppearance(\_:)](materialactiveappearance%28__%29.md): Sets an explicit active appearance for materials in this view.
- [materialActiveAppearance](../environmentvalues/materialactiveappearance.md): The behavior materials should use for their active state, defaulting to `automatic`.
- [MaterialActiveAppearance](../materialactiveappearance.md): The behavior for how materials appear active and inactive.
