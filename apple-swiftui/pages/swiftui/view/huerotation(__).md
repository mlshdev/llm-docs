> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/huerotation(_:)](https://developer.apple.com/documentation/swiftui/view/huerotation(_:))

# hueRotation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies a hue rotation effect to this view.

## Declaration

```swift
nonisolated func hueRotation(_ angle: Angle) -> some View

```

## Parameters

- `angle`: The hue rotation angle to apply to the colors in this view.

<a id="return-value"></a>

## Return Value

A view that applies a hue rotation effect to this view.

<a id="discussion"></a>

## Discussion

Use hue rotation effect to shift all of the colors in a view according to the angle you specify.

The example below shows a series of squares filled with a linear gradient. Each square shows the effect of a 36˚ hueRotation (a total of 180˚ across the 5 squares) on the gradient:

```swift
struct HueRotation: View {
    var body: some View {
        HStack {
            ForEach(0..<6) {
                Rectangle()
                    .fill(.linearGradient(
                        colors: [.blue, .red, .green],
                        startPoint: .top, endPoint: .bottom))
                    .hueRotation((.degrees(Double($0 * 36))))
                    .frame(width: 60, height: 60, alignment: .center)
            }
        }
    }
}
```

![Shows the effect of hueRotation on a linear](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-hueRotation@2x.png)

## See Also

### Transforming colors

- [brightness(\_:)](brightness%28__%29.md): Brightens this view by the specified amount.
- [contrast(\_:)](contrast%28__%29.md): Sets the contrast and separation between similar colors in this view.
- [colorInvert()](colorinvert%28%29.md): Inverts the colors in this view.
- [colorMultiply(\_:)](colormultiply%28__%29.md): Adds a color multiplication effect to this view.
- [saturation(\_:)](saturation%28__%29.md): Adjusts the color saturation of this view.
- [grayscale(\_:)](grayscale%28__%29.md): Adds a grayscale effect to this view.
- [luminanceToAlpha()](luminancetoalpha%28%29.md): Adds a luminance to alpha effect to this view.
- [materialActiveAppearance(\_:)](materialactiveappearance%28__%29.md): Sets an explicit active appearance for materials in this view.
- [materialActiveAppearance](../environmentvalues/materialactiveappearance.md): The behavior materials should use for their active state, defaulting to `automatic`.
- [MaterialActiveAppearance](../materialactiveappearance.md): The behavior for how materials appear active and inactive.
