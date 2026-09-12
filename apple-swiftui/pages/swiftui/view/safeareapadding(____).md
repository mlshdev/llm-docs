> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/safeareapadding(_:_:)](https://developer.apple.com/documentation/swiftui/view/safeareapadding(_:_:))

# safeAreaPadding(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds the provided insets into the safe area of this view.

## Declaration

```swift
@export(implementation) nonisolated func safeAreaPadding(_ edges: Edge.Set = .all, _ length: CGFloat? = nil) -> some View

```

<a id="discussion"></a>

## Discussion

Use this modifier when you would like to add a fixed amount of space to the safe area a view sees.

```swift
ScrollView(.horizontal) {
    HStack(spacing: 10.0) {
        ForEach(items) { item in
            ItemView(item)
        }
    }
}
.safeAreaPadding(.horizontal, 20.0)
```

See the horizontal [safeAreaInset(edge:alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/view/safeareainset%28edge:alignment:spacing:content:%29-6gwby) or vertical [safeAreaInset(edge:alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/view/safeareainset%28edge:alignment:spacing:content:%29-4s51l) modifier for adding to the safe area based on the size of a view.

## See Also

### Staying in the safe areas

- [ignoresSafeArea(\_:edges:)](ignoressafearea%28__edges_%29.md): Expands the safe area of a view.
- [ignoresSafeArea(\_:edges:alignment:)](ignoressafearea%28__edges_alignment_%29.md): Expands the safe area of a view aligning content within the new bounds using the provided alignment.
- [safeAreaInset(edge:alignment:spacing:content:)](safeareainset%28edge_alignment_spacing_content_%29.md): Shows the specified content beside the modified view.
- [safeAreaPadding(\_:)](safeareapadding%28__%29.md): Adds the provided insets into the safe area of this view.
- [SafeAreaRegions](../safearearegions.md): A set of symbolic safe area regions.
