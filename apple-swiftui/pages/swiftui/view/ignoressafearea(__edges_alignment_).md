> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ignoressafearea(_:edges:alignment:)](https://developer.apple.com/documentation/swiftui/view/ignoressafearea(_:edges:alignment:))

# ignoresSafeArea(\_:edges:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Expands the safe area of a view aligning content within the new bounds using the provided alignment.

## Declaration

```swift
@export(implementation) nonisolated func ignoresSafeArea(_ regions: SafeAreaRegions = .all, edges: Edge.Set = .all, alignment: Alignment?) -> some View

```

## Parameters

- `regions`: The regions to expand the view’s safe area into. The modifier expands into all safe area region types by default.
- `edges`: The set of edges to expand. Any edges that you don’t include in this set remain unchanged. The set includes all edges by default.
- `alignment`: The alignment of this view inside the resulting frame. Note that most alignment values have no apparent effect when the size of the frame happens to match that of this view.

<a id="return-value"></a>

## Return Value

A view with an expanded safe area.

<a id="discussion"></a>

## Discussion

By default, the SwiftUI layout system sizes and positions views to avoid certain safe areas. This ensures that system content like the software keyboard or edges of the device don’t obstruct your views. To extend your content into these regions, you can ignore safe areas on specific edges by applying this modifier.

When expanding the safe area, the SwiftUI layout system proposes the expanded size to the view. If your view has a fixed size, you can use the alignment property to determine how the fixed size view should be aligned in the expanded bounds.

For examples of how to use this modifier, see [Adding a background to your view](../adding-a-background-to-your-view.md).

## See Also

### Staying in the safe areas

- [ignoresSafeArea(\_:edges:)](ignoressafearea%28__edges_%29.md): Expands the safe area of a view.
- [safeAreaInset(edge:alignment:spacing:content:)](safeareainset%28edge_alignment_spacing_content_%29.md): Shows the specified content beside the modified view.
- [safeAreaPadding(\_:)](safeareapadding%28__%29.md): Adds the provided insets into the safe area of this view.
- [safeAreaPadding(\_:\_:)](safeareapadding%28____%29.md): Adds the provided insets into the safe area of this view.
- [SafeAreaRegions](../safearearegions.md): A set of symbolic safe area regions.
