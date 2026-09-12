> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/overlay(_:alignment:)](https://developer.apple.com/documentation/swiftui/view/overlay(_:alignment:))

# overlay(\_:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Layers a secondary view in front of this view.

> Use [overlay(alignment:content:)](overlay%28alignment_content_%29.md) instead.

## Declaration

```swift
nonisolated func overlay<Overlay>(_ overlay: Overlay, alignment: Alignment = .center) -> some View where Overlay : View

```

## Parameters

- `overlay`: The view to layer in front of this view.
- `alignment`: The alignment for `overlay` in relation to this view.

<a id="return-value"></a>

## Return Value

A view that layers `overlay` in front of the view.

## Mentioned In

- [Building layouts with stack views](../building-layouts-with-stack-views.md)

<a id="discussion"></a>

## Discussion

When you apply an overlay to a view, the original view continues to provide the layout characteristics for the resulting view. In the following example, the heart image is shown overlaid in front of, and aligned to the bottom of the folder image.

```swift
Image(systemName: "folder")
    .font(.system(size: 55, weight: .thin))
    .overlay(Text("❤️"), alignment: .bottom)
```

![View showing placement of a heart overlaid onto a folder icon.](https://developer.apple.com/images/com.apple.SwiftUI/View-overlay-1@2x.png)

## See Also

### Appearance modifiers

- [colorScheme(\_:)](colorscheme%28__%29.md): Deprecated. Sets this view’s color scheme.
- [listRowPlatterColor(\_:)](listrowplattercolor%28__%29.md): Deprecated. Sets the color that the system applies to the row background when this view is placed in a list.
- [background(\_:alignment:)](background%28__alignment_%29.md): Deprecated. Layers the given view behind this view.
- [foregroundColor(\_:)](foregroundcolor%28__%29.md): Deprecated. Sets the color of the foreground elements displayed by this view.
- [complicationForeground()](complicationforeground%28%29.md): Deprecated. Promotes this view to the foreground in a complication.
