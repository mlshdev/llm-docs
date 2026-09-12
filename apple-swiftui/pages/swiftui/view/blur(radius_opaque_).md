> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/blur(radius:opaque:)](https://developer.apple.com/documentation/swiftui/view/blur(radius:opaque:))

# blur(radius:opaque:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies a Gaussian blur to this view.

## Declaration

```swift
nonisolated func blur(radius: CGFloat, opaque: Bool = false) -> some View

```

## Parameters

- `radius`: The radial size of the blur. A blur is more diffuse when its radius is large.
- `opaque`: A Boolean value that indicates whether the blur renderer permits transparency in the blur output. Set to `true` to create an opaque blur, or set to `false` to permit transparency.

<a id="discussion"></a>

## Discussion

Use `blur(radius:opaque:)` to apply a gaussian blur effect to the rendering of this view.

The example below shows two [Text](../text.md) views, the first with no blur effects, the second with `blur(radius:opaque:)` applied with the `radius` set to `2`. The larger the radius, the more diffuse the effect.

```swift
struct Blur: View {
    var body: some View {
        VStack {
            Text("This is some text.")
                .padding()
            Text("This is some blurry text.")
                .blur(radius: 2.0)
        }
    }
}
```

![A screenshot showing the effect of applying gaussian blur effect to](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-blurRadius@2x.png)

## See Also

### Applying blur and shadows

- [shadow(color:radius:x:y:)](shadow%28color_radius_x_y_%29.md): Adds a shadow to this view.
- [ColorMatrix](../colormatrix.md): A matrix to use in an RGBA color transformation.
