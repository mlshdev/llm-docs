> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accentcolor(_:)](https://developer.apple.com/documentation/swiftui/view/accentcolor(_:))

# accentColor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets the accent color for this view and the views it contains.

> Use the asset catalog’s accent color or [tint(\_:)](https://developer.apple.com/documentation/swiftui/view/tint%28_:%29-93mfq) instead.

## Declaration

```swift
nonisolated func accentColor(_ accentColor: Color?) -> some View

```

## Parameters

- `accentColor`: The color to use as an accent color. Set the value to `nil` to use the inherited accent color.

<a id="discussion"></a>

## Discussion

Use `accentColor(_:)` when you want to apply a broad theme color to your app’s user interface. Some styles of controls use the accent color as a default tint color.

> **Note**

> In macOS, SwiftUI applies customization of the accent color only if the user chooses Multicolor under General \> Accent color in System Preferences.

In the example below, the outer [VStack](../vstack.md) contains two child views. The first is a button with the default accent color. The second is a [VStack](../vstack.md) that contains a button and a slider, both of which adopt the purple accent color of their containing view. Note that the [Text](../text.md) element used as a label alongside the `Slider` retains its default color.

```swift
VStack(spacing: 20) {
    Button(action: {}) {
        Text("Regular Button")
    }
    VStack {
        Button(action: {}) {
            Text("Accented Button")
        }
        HStack {
            Text("Accented Slider")
            Slider(value: $sliderValue, in: -100...100, step: 0.1)
        }
    }
    .accentColor(.purple)
}
```

![A VStack showing two child views: one VStack containing a default accented button, and a second VStack where the VStack has a purple accent color applied. The accent color modifies the enclosed button and slider, but not the color of a Text item used as a label for the slider.](https://developer.apple.com/images/com.apple.SwiftUI/View-accentColor-1@2x.png)

## See Also

### Graphics and rendering modifiers

- [mask(\_:)](mask%28__%29.md): Deprecated. Masks this view using the alpha channel of the given view.
- [animation(\_:)](animation%28__%29-1hc0p.md): Deprecated. Applies the given animation to all animatable values within this view.
- [cornerRadius(\_:antialiased:)](cornerradius%28__antialiased_%29.md): Deprecated. Clips this view to its bounding frame, with the specified corner radius.
