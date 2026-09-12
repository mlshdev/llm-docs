> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/defaultscrollanchor(_:)](https://developer.apple.com/documentation/swiftui/view/defaultscrollanchor(_:))

# defaultScrollAnchor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Associates an anchor to control which part of the scroll view’s content should be rendered by default.

## Declaration

```swift
nonisolated func defaultScrollAnchor(_ anchor: UnitPoint?) -> some View

```

<a id="discussion"></a>

## Discussion

Use this modifier to specify an anchor to control both which part of the scroll view’s content should be visible initially and how the scroll view handles content size changes.

Provide a value of [center](../unitpoint/center.md) to have the scroll view start in the center of its content when a scroll view is scrollable in both axes.

```swift
ScrollView([.horizontal, .vertical]) {
    // initially centered content
}
.defaultScrollAnchor(.center)
```

Provide a value of [bottom](../unitpoint/bottom.md) to have the scroll view start at the bottom of its content when scrollable in the vertical axis.

```swift
@Binding var items: [Item]
@Binding var scrolledID: Item.ID?

ScrollView {
    LazyVStack {
        ForEach(items) { item in
            ItemView(item)
        }
    }
}
.defaultScrollAnchor(.bottom)
```

The user may scroll away from the initial defined scroll position. When the content size of the scroll view changes, it may consult the anchor to know how to reposition the content.

## See Also

### Managing scroll position

- [scrollPosition(\_:anchor:)](scrollposition%28__anchor_%29.md): Associates a binding to a scroll position with a scroll view within this view.
- [scrollPosition(id:anchor:)](scrollposition%28id_anchor_%29.md): Associates a binding to be updated when a scroll view within this view scrolls.
- [defaultScrollAnchor(\_:for:)](defaultscrollanchor%28__for_%29.md): Associates an anchor to control the position of a scroll view in a particular circumstance.
- [ScrollAnchorRole](../scrollanchorrole.md): A type defining the role of a scroll anchor.
- [ScrollPosition](../scrollposition.md): A type that defines the semantic position of where a scroll view is scrolled within its content.
