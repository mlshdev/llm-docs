> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/cornerradius(_:antialiased:)](https://developer.apple.com/documentation/swiftui/view/cornerradius(_:antialiased:))

# cornerRadius(\_:antialiased:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Clips this view to its bounding frame, with the specified corner radius.

> Use [clipShape(\_:style:)](clipshape%28__style_%29.md) or [fill(style:)](../shape/fill%28style_%29.md) instead.

## Declaration

```swift
nonisolated func cornerRadius(_ radius: CGFloat, antialiased: Bool = true) -> some View

```

## Parameters

- `radius`: A CGFloat value that specifies the corner radius to use when clipping the view to its bounding frame.
- `antialiased`: A Boolean value that indicates whether the rendering system applies smoothing to the edges of the clipping rectangle.

<a id="return-value"></a>

## Return Value

A view that clips this view to its bounding frame with the specified corner radius.

<a id="discussion"></a>

## Discussion

By default, a view’s bounding frame only affects its layout, so any content that extends beyond the edges of the frame remains visible. Use `cornerRadius(_:antialiased:)` to hide any content that extends beyond these edges while applying a corner radius.

The following code applies a corner radius of 25 to a text view:

```swift
Text("Rounded Corners")
    .frame(width: 175, height: 75)
    .foregroundColor(Color.white)
    .background(Color.black)
    .cornerRadius(25)
```

![A screenshot of a rectangle with rounded corners bounding a text](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-cornerRadius@2x.png)

## See Also

### Graphics and rendering modifiers

- [accentColor(\_:)](accentcolor%28__%29.md): Deprecated. Sets the accent color for this view and the views it contains.
- [mask(\_:)](mask%28__%29.md): Deprecated. Masks this view using the alpha channel of the given view.
- [animation(\_:)](animation%28__%29-1hc0p.md): Deprecated. Applies the given animation to all animatable values within this view.
