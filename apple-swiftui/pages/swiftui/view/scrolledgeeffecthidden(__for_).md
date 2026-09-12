> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scrolledgeeffecthidden(_:for:)](https://developer.apple.com/documentation/swiftui/view/scrolledgeeffecthidden(_:for:))

# scrollEdgeEffectHidden(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

Hides any scroll edge effects for scroll views within this hierarchy.

## Declaration

```swift
nonisolated func scrollEdgeEffectHidden(_ hidden: Bool = true, for edges: Edge.Set = .all) -> some View

```

<a id="discussion"></a>

## Discussion

By default, a scroll view renders an automatic edge effect style. Use this modifier to hide any edge effects for scroll views within this hierarchy.

```swift
ScrollView {
    LazyVStack {
        ForEach(data) { item in
            RowView(item)
        }
    }
}
.scrollEdgeEffectHidden()
```

## See Also

### Configuring scroll edge effects

- [scrollEdgeEffectStyle(\_:for:)](scrolledgeeffectstyle%28__for_%29.md): Configures the scroll edge effect style for scroll views within this hierarchy.
- [ScrollEdgeEffectStyle](../scrolledgeeffectstyle.md): A structure that specifies blur transitions between scrolling content and an area with controls, such as toolbars.
- [safeAreaBar(edge:alignment:spacing:content:)](safeareabar%28edge_alignment_spacing_content_%29.md): Shows the specified content as a custom bar beside the modified view.
