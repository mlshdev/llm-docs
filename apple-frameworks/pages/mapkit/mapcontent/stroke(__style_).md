> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/stroke(_:style:)](https://developer.apple.com/documentation/mapkit/mapcontent/stroke(_:style:))

# stroke(\_:style:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies the given shape style to drawn map overlays using the stroke style you specify.

## Declaration

```swift
@MainActor @preconcurrency func stroke(_ content: some ShapeStyle, style: StrokeStyle) -> some MapContent

```

## Parameters

- `content`: The shape style to apply.
- `style`: The stroke style to apply.

## See Also

### Styling the circle

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Specifies the shape style used to fill content in drawing map overlays.
- [stroke(\_:lineWidth:)](stroke%28__linewidth_%29.md): Applies the given shape style to drawn map overlays using the line width you specify.
- [stroke(lineWidth:)](stroke%28linewidth_%29.md): Applies the given stoke drawn map overlays using the line width you specify.
- [strokeStyle(style:)](strokestyle%28style_%29.md): Applies the given stroke style to drawn map overlays.
