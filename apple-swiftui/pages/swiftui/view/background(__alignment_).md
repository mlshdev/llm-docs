> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/background(_:alignment:)](https://developer.apple.com/documentation/swiftui/view/background(_:alignment:))

# background(\_:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Layers the given view behind this view.

> Use [background(alignment:content:)](background%28alignment_content_%29.md) instead.

## Declaration

```swift
nonisolated func background<Background>(_ background: Background, alignment: Alignment = .center) -> some View where Background : View

```

## Parameters

- `background`: The view to draw behind this view.
- `alignment`: The alignment with a default value of [center](../alignment/center.md) that you use to position the background view.

## Mentioned In

- [Building layouts with stack views](../building-layouts-with-stack-views.md)

<a id="discussion"></a>

## Discussion

Use `background(_:alignment:)` when you need to place one view behind another, with the background view optionally aligned with a specified edge of the frontmost view.

The example below creates two views: the `Frontmost` view, and the `DiamondBackground` view. The `Frontmost` view uses the `DiamondBackground` view for the background of the image element inside the `Frontmost` view’s [VStack](../vstack.md).

```swift
struct DiamondBackground: View {
    var body: some View {
        VStack {
            Rectangle()
                .fill(Color.gray)
                .frame(width: 250, height: 250, alignment: .center)
                .rotationEffect(.degrees(45.0))
        }
    }
}

struct Frontmost: View {
    var body: some View {
        VStack {
            Image(systemName: "folder")
                .font(.system(size: 128, weight: .ultraLight))
                .background(DiamondBackground())
        }
    }
}
```

![A view showing a large folder image with a gray diamond placed behind it as its background view.](https://developer.apple.com/images/com.apple.SwiftUI/View-background-1@2x.png)

## See Also

### Appearance modifiers

- [colorScheme(\_:)](colorscheme%28__%29.md): Deprecated. Sets this view’s color scheme.
- [listRowPlatterColor(\_:)](listrowplattercolor%28__%29.md): Deprecated. Sets the color that the system applies to the row background when this view is placed in a list.
- [overlay(\_:alignment:)](overlay%28__alignment_%29.md): Deprecated. Layers a secondary view in front of this view.
- [foregroundColor(\_:)](foregroundcolor%28__%29.md): Deprecated. Sets the color of the foreground elements displayed by this view.
- [complicationForeground()](complicationforeground%28%29.md): Deprecated. Promotes this view to the foreground in a complication.
