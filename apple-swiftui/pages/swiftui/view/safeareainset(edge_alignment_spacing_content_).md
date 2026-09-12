> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/safeareainset(edge:alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/view/safeareainset(edge:alignment:spacing:content:))

# safeAreaInset(edge:alignment:spacing:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Shows the specified content beside the modified view.

## Declaration

```swift
nonisolated func safeAreaInset<V>(edge: HorizontalEdge, alignment: VerticalAlignment = .center, spacing: CGFloat? = nil, @ContentBuilder content: () -> V) -> some View where V : View

```

## Parameters

- `edge`: The horizontal edge of the view to inset by the width of `content`, to make space for `content`.
- `alignment`: The alignment guide used to position `content` vertically.
- `spacing`: Extra distance placed between the two views, or nil to use the default amount of spacing.
- `content`: A content builder function providing the view to display in the inset space of the modified view.

<a id="return-value"></a>

## Return Value

A new view that displays `content` beside the modified view, making space for the `content` view by horizontally insetting the modified view.

<a id="discussion"></a>

## Discussion

The `content` view is anchored to the specified horizontal edge in the parent view, aligning its vertical axis to the specified alignment guide. The modified view is inset by the width of `content`, from `edge`, with its safe area increased by the same amount.

```swift
struct ScrollableViewWithSideBar: View {
    var body: some View {
        ScrollView {
            ScrolledContent()
        }
        .safeAreaInset(edge: .leading, spacing: 0) {
            SideBarContent()
        }
    }
}
```

## See Also

### Staying in the safe areas

- [ignoresSafeArea(\_:edges:)](ignoressafearea%28__edges_%29.md): Expands the safe area of a view.
- [ignoresSafeArea(\_:edges:alignment:)](ignoressafearea%28__edges_alignment_%29.md): Expands the safe area of a view aligning content within the new bounds using the provided alignment.
- [safeAreaPadding(\_:)](safeareapadding%28__%29.md): Adds the provided insets into the safe area of this view.
- [safeAreaPadding(\_:\_:)](safeareapadding%28____%29.md): Adds the provided insets into the safe area of this view.
- [SafeAreaRegions](../safearearegions.md): A set of symbolic safe area regions.
