> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilhoverpose/azimuth](https://developer.apple.com/documentation/swiftui/pencilhoverpose/azimuth)

# azimuth

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

A value that represents the azimuth angle of a hovering Apple Pencil.

## Declaration

```swift
let azimuth: Angle
```

<a id="discussion"></a>

## Discussion

This value is `.zero` when the Apple Pencil points along the view’s positive x-axis.

## See Also

### Getting the hover characteristics

- [altitude](altitude.md): A value that represents the altitude angle of the hovering Apple Pencil.
- [anchor](anchor.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a normalized anchor point relative to that view.
- [location](location.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a point in that view’s coordinate space.
- [roll](roll.md): A value that represents the barrel roll angle of the hovering Apple Pencil.
- [zDistance](zdistance.md): The normalized distance between the screen and a hovering Apple Pencil.
