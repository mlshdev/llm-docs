> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/colormultiply(_:)](https://developer.apple.com/documentation/swiftui/view/colormultiply(_:))

# colorMultiply(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a color multiplication effect to this view.

## Declaration

```swift
nonisolated func colorMultiply(_ color: Color) -> some View

```

## Parameters

- `color`: The color to bias this view toward.

<a id="return-value"></a>

## Return Value

A view with a color multiplication effect.

<a id="discussion"></a>

## Discussion

The following example shows two versions of the same image side by side; at left is the original, and at right is a duplicate with the `colorMultiply(_:)` modifier applied with [purple](../shapestyle/purple.md).

```swift
struct InnerCircleView: View {
    var body: some View {
        Circle()
            .fill(Color.green)
            .frame(width: 40, height: 40, alignment: .center)
    }
}

struct ColorMultiply: View {
    var body: some View {
        HStack {
            Color.red.frame(width: 100, height: 100, alignment: .center)
                .overlay(InnerCircleView(), alignment: .center)
                .overlay(Text("Normal")
                             .font(.callout),
                         alignment: .bottom)
                .border(Color.gray)

            Spacer()

            Color.red.frame(width: 100, height: 100, alignment: .center)
                .overlay(InnerCircleView(), alignment: .center)
                .colorMultiply(Color.purple)
                .overlay(Text("Multiply")
                            .font(.callout),
                         alignment: .bottom)
                .border(Color.gray)
        }
        .padding(50)
    }
}
```

![A screenshot showing two images showing the effect of multiplying the](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-colorMultiply@2x.png)

## See Also

### Transforming colors

- [brightness(\_:)](brightness%28__%29.md): Brightens this view by the specified amount.
- [contrast(\_:)](contrast%28__%29.md): Sets the contrast and separation between similar colors in this view.
- [colorInvert()](colorinvert%28%29.md): Inverts the colors in this view.
- [saturation(\_:)](saturation%28__%29.md): Adjusts the color saturation of this view.
- [grayscale(\_:)](grayscale%28__%29.md): Adds a grayscale effect to this view.
- [hueRotation(\_:)](huerotation%28__%29.md): Applies a hue rotation effect to this view.
- [luminanceToAlpha()](luminancetoalpha%28%29.md): Adds a luminance to alpha effect to this view.
- [materialActiveAppearance(\_:)](materialactiveappearance%28__%29.md): Sets an explicit active appearance for materials in this view.
- [materialActiveAppearance](../environmentvalues/materialactiveappearance.md): The behavior materials should use for their active state, defaulting to `automatic`.
- [MaterialActiveAppearance](../materialactiveappearance.md): The behavior for how materials appear active and inactive.
