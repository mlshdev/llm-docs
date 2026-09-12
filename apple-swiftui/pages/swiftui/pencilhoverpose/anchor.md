> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilhoverpose/anchor](https://developer.apple.com/documentation/swiftui/pencilhoverpose/anchor)

# anchor

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a normalized anchor point relative to that view.

## Declaration

```swift
let anchor: UnitPoint
```

<a id="discussion"></a>

## Discussion

You can pass this anchor point directly to a presentation modifier like [popover(isPresented:attachmentAnchor:arrowEdge:content:)](../view/popover%28ispresented_attachmentanchor_arrowedge_content_%29.md) or use the [location](location.md) property if you require an absolute point instead.

## See Also

### Getting the hover characteristics

- [altitude](altitude.md): A value that represents the altitude angle of the hovering Apple Pencil.
- [azimuth](azimuth.md): A value that represents the azimuth angle of a hovering Apple Pencil.
- [location](location.md): The location of an Apple Pencil hovering in the area above the view’s bounds, expressed as a point in that view’s coordinate space.
- [roll](roll.md): A value that represents the barrel roll angle of the hovering Apple Pencil.
- [zDistance](zdistance.md): The normalized distance between the screen and a hovering Apple Pencil.
