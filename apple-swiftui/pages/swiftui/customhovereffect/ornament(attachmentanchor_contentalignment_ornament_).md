> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/ornament(attachmentanchor:contentalignment:ornament:)](https://developer.apple.com/documentation/swiftui/customhovereffect/ornament(attachmentanchor:contentalignment:ornament:))

# ornament(attachmentAnchor:contentAlignment:ornament:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Presents an ornament on hover.

## Declaration

```swift
nonisolated static func ornament<Content>(attachmentAnchor: OrnamentAttachmentAnchor, contentAlignment: Alignment3D = .center, @ContentBuilder ornament: () -> Content) -> OrnamentHoverEffect<Content> where Self == OrnamentHoverEffect<Content>, Content : View
```

## Parameters

- `attachmentAnchor`: The positioning anchor that defines the attachment point of the ornament.
- `contentAlignment`: The alignment of the ornament with its attachment anchor.
- `ornament`: The content of the ornament.

<a id="discussion"></a>

## Discussion

Use this method to show an ornament at the specified position when the view is hovered. The ornament will be shown with the default fade animation.
