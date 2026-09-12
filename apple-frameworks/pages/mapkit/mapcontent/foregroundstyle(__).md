> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/foregroundstyle(_:)](https://developer.apple.com/documentation/mapkit/mapcontent/foregroundstyle(_:))

# foregroundStyle(\_:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Specifies the shape style used to fill content in drawing map overlays.

## Declaration

```swift
@MainActor @preconcurrency func foregroundStyle(_ content: some ShapeStyle) -> some MapContent

```

## Parameters

- `content`: The shape style to apply to the overlay.

<a id="return-value"></a>

## Return Value

Returns [MapContent](../mapcontent.md) with the foreground style you specified.

## See Also

### Styling the circle

- [stroke(\_:lineWidth:)](stroke%28__linewidth_%29.md): Applies the given shape style to drawn map overlays using the line width you specify.
- [stroke(\_:style:)](stroke%28__style_%29.md): Applies the given shape style to drawn map overlays using the stroke style you specify.
- [stroke(lineWidth:)](stroke%28linewidth_%29.md): Applies the given stoke drawn map overlays using the line width you specify.
- [strokeStyle(style:)](strokestyle%28style_%29.md): Applies the given stroke style to drawn map overlays.
