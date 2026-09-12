> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilhoverpose/altitude](https://developer.apple.com/documentation/swiftui/pencilhoverpose/altitude)

# altitude

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

A value that represents the altitude angle of the hovering Apple Pencil.

## Declaration

```swift
let altitude: Angle
```

<a id="discussion"></a>

## Discussion

This value is `.zero` when the Apple Pencil is parallel to the view’s surface, and is 90 degrees (π/2 radians) when the Apple Pencil is perpendicular to the view’s surface.

## See Also

### Getting the hover characteristics

- [anchor](anchor.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a normalized anchor point relative to that view.
- [azimuth](azimuth.md): A value that represents the azimuth angle of a hovering Apple Pencil.
- [location](location.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a point in that view’s coordinate space.
- [roll](roll.md): A value that represents the barrel roll angle of the hovering Apple Pencil.
- [zDistance](zdistance.md): The normalized distance between the screen and a hovering Apple Pencil.
