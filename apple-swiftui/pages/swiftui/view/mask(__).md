> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/mask(_:)](https://developer.apple.com/documentation/swiftui/view/mask(_:))

# mask(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Masks this view using the alpha channel of the given view.

> Use [mask(alignment:\_:)](mask%28alignment___%29.md) instead.

## Declaration

```swift
nonisolated func mask<Mask>(_ mask: Mask) -> some View where Mask : View

```

## Parameters

- `mask`: The view whose alpha the rendering system applies to the specified view.

<a id="discussion"></a>

## Discussion

Use `mask(_:)` when you want to apply the alpha (opacity) value of another view to the current view.

This example shows an image masked by rectangle with a 10% opacity:

```swift
Image(systemName: "envelope.badge.fill")
    .foregroundColor(Color.blue)
    .font(.system(size: 128, weight: .regular))
    .mask(Rectangle().opacity(0.1))
```

![A screenshot of a view masked by a rectangle with 10% opacity.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-mask@2x.png)

## See Also

### Graphics and rendering modifiers

- [accentColor(\_:)](accentcolor%28__%29.md): Deprecated. Sets the accent color for this view and the views it contains.
- [animation(\_:)](animation%28__%29-1hc0p.md): Deprecated. Applies the given animation to all animatable values within this view.
- [cornerRadius(\_:antialiased:)](cornerradius%28__antialiased_%29.md): Deprecated. Clips this view to its bounding frame, with the specified corner radius.
