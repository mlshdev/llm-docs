> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shadowstyle/drop(color:radius:x:y:)](https://developer.apple.com/documentation/swiftui/shadowstyle/drop(color:radius:x:y:))

# drop(color:radius:x:y:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a custom drop shadow style.

## Declaration

```swift
static func drop(color: Color = .init(.sRGBLinear, white: 0, opacity: 0.33), radius: CGFloat, x: CGFloat = 0, y: CGFloat = 0) -> ShadowStyle
```

## Parameters

- `color`: The shadow’s color.
- `radius`: The shadow’s size.
- `x`: A horizontal offset you use to position the shadow relative to this view.
- `y`: A vertical offset you use to position the shadow relative to this view.

<a id="return-value"></a>

## Return Value

A new shadow style.

<a id="discussion"></a>

## Discussion

Drop shadows draw behind the source content by blurring, tinting and offsetting its per-pixel alpha values.

## See Also

### Getting shadow styles

- [inner(color:radius:x:y:)](inner%28color_radius_x_y_%29.md): Creates a custom inner shadow style.
