> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilhoverpose/location](https://developer.apple.com/documentation/swiftui/pencilhoverpose/location)

# location

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a point in that view’s coordinate space.

## Declaration

```swift
let location: CGPoint
```

<a id="discussion"></a>

## Discussion

Use the [anchor](anchor.md) property if you require a normalized anchor point for use with a presentation modifier instead.

## See Also

### Getting the hover characteristics

- [altitude](altitude.md): A value that represents the altitude angle of the hovering Apple Pencil.
- [anchor](anchor.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a normalized anchor point relative to that view.
- [azimuth](azimuth.md): A value that represents the azimuth angle of a hovering Apple Pencil.
- [roll](roll.md): A value that represents the barrel roll angle of the hovering Apple Pencil.
- [zDistance](zdistance.md): The normalized distance between the screen and a hovering Apple Pencil.
