> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/strokestyle(style:)](https://developer.apple.com/documentation/mapkit/mapcontent/strokestyle(style:))

# strokeStyle(style:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Applies the given stroke style to drawn map overlays.

## Declaration

```swift
@MainActor @preconcurrency func strokeStyle(style: StrokeStyle) -> some MapContent

```

## Parameters

- `style`: The stroke style to apply.

<a id="return-value"></a>

## Return Value

Returns [MapContent](../mapcontent.md) with overlays drawn with the [StrokeStyle](https://developer.apple.com/documentation/swiftui/strokestyle) you specified.

## See Also

### Styling the circle

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Specifies the shape style used to fill content in drawing map overlays.
- [stroke(\_:lineWidth:)](stroke%28__linewidth_%29.md): Applies the given shape style to drawn map overlays using the line width you specify.
- [stroke(\_:style:)](stroke%28__style_%29.md): Applies the given shape style to drawn map overlays using the stroke style you specify.
- [stroke(lineWidth:)](stroke%28linewidth_%29.md): Applies the given stoke drawn map overlays using the line width you specify.
