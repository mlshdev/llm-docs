> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/ornamentattachmentanchor/parent(_:)](https://developer.apple.com/documentation/swiftui/ornamentattachmentanchor/parent(_:))

# parent(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

The anchor point for the ornament expressed as a 3D unit point relative to its parent.

## Declaration

```swift
static func parent(_ anchor: UnitPoint3D) -> OrnamentAttachmentAnchor
```

<a id="discussion"></a>

## Discussion

The parent depends on where the ornament modifier is placed. When used inside another ornament context, that ornament is the parent. Otherwise, it’s the Scene itself.
