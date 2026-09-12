> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolledgeeffectstyle](https://developer.apple.com/documentation/swiftui/scrolledgeeffectstyle)

# ScrollEdgeEffectStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure that specifies blur transitions between scrolling content and an area with controls, such as toolbars.

## Declaration

```swift
struct ScrollEdgeEffectStyle
```

<a id="overview"></a>

## Overview

By default, the system sets an automatic scroll edge effect style to provide a visual transition between scrolling content and stationary controls at both edges of the scroll view in the scrolling direction. The system determines which style to apply based on the platform and context. The [hard](scrolledgeeffectstyle/hard.md) style provides a more opaque, clearly defined linear boundary, and the [soft](scrolledgeeffectstyle/soft.md) style provides a subtle blurred transition:

**Hard**

![A partial image of a list scrolling behind a bottom toolbar on iPhone. The area where the toolbar overlaps the list content is nearly opaque, with a defined, straight horizontal line at the top.](https://developer.apple.com/images/com.apple.SwiftUI/ScrollEdgeEffectStyle-2@2x.png)

**Soft**

![A partial image of a list scrolling behind a bottom toolbar on iPhone. The area where the toolbar overlaps the list is translucent and blurry and gets progressively more opaque from the top to the bottom.](https://developer.apple.com/images/com.apple.SwiftUI/ScrollEdgeEffectStyle-1@2x.png)

**None**

![A partial image of a list scrolling behind a bottom toolbar on iPhone. The area where the toolbar overlaps the list is transparent.](https://developer.apple.com/images/com.apple.SwiftUI/ScrollEdgeEffectStyle-3@2x.png)

Specify a `ScrollEdgeEffectStyle` for a scroll view using [scrollEdgeEffectStyle(\_:for:)](view/scrolledgeeffectstyle%28__for_%29.md) when the automatic style the system applies isn’t appropriate for your content and controls. Apply [scrollEdgeEffectHidden(\_:for:)](view/scrolledgeeffecthidden%28__for_%29.md) to a scroll view to remove the scroll edge effect entirely for an edge you specify.

## Topics

### Creating a scroll edge effect style

- [automatic](scrolledgeeffectstyle/automatic.md): A scroll edge effect the system applies automatically when pinned content overlaps scrolling content.
- [hard](scrolledgeeffectstyle/hard.md): A scroll edge effect that provides a linear, nearly opaque boundary between pinned controls and scrolling content.
- [soft](scrolledgeeffectstyle/soft.md): A scroll edge effect that provides a subtle, blurred boundary between pinned controls and scrolling content.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring scroll edge effects

- [scrollEdgeEffectStyle(\_:for:)](view/scrolledgeeffectstyle%28__for_%29.md): Configures the scroll edge effect style for scroll views within this hierarchy.
- [scrollEdgeEffectHidden(\_:for:)](view/scrolledgeeffecthidden%28__for_%29.md): Hides any scroll edge effects for scroll views within this hierarchy.
- [safeAreaBar(edge:alignment:spacing:content:)](view/safeareabar%28edge_alignment_spacing_content_%29.md): Shows the specified content as a custom bar beside the modified view.
