> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/ornament(attachmentanchor:contentalignment:ornament:effect:)](https://developer.apple.com/documentation/swiftui/customhovereffect/ornament(attachmentanchor:contentalignment:ornament:effect:))

# ornament(attachmentAnchor:contentAlignment:ornament:effect:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Presents an ornament on hover.

## Declaration

```swift
nonisolated static func ornament<Content, EffectContent>(attachmentAnchor: OrnamentAttachmentAnchor, contentAlignment: Alignment3D = .center, @ContentBuilder ornament: () -> Content, effect: @escaping (EmptyHoverEffectContent, Bool, GeometryProxy) -> EffectContent) -> OrnamentHoverContentEffect<Content, EffectContent> where Self == OrnamentHoverContentEffect<Content, EffectContent>, Content : View, EffectContent : HoverEffectContent
```

## Parameters

- `attachmentAnchor`: The positioning anchor that defines the attachment point of the ornament.
- `contentAlignment`: The alignment of the ornament with its attachment anchor.
- `ornament`: The content of the ornament.
- `effect`: The effect used to present the ornament.

<a id="discussion"></a>

## Discussion

Use this method to present an ornament at the specified position when the view is hovered. The ornament will be presented using the provided `effect`.
