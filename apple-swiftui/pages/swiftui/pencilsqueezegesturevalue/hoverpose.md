> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pencilsqueezegesturevalue/hoverpose](https://developer.apple.com/documentation/swiftui/pencilsqueezegesturevalue/hoverpose)

# hoverPose

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 26.2+

The location and distance of an Apple Pencil hovering in the area above the view’s bounds when the squeeze gesture occurred.

## Declaration

```swift
let hoverPose: PencilHoverPose?
```

<a id="discussion"></a>

## Discussion

If the Apple Pencil was hovering in the area above the view’s bounds when the user squeezed their Apple Pencil, this property describes its pose relative to that view.

Conversely, if the Apple Pencil wasn’t hovering in the area above the view’s bounds or if the device can’t detect a hovering Apple Pencil, this property is `nil`.
