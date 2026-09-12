> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listrowseparator(_:edges:)](https://developer.apple.com/documentation/swiftui/view/listrowseparator(_:edges:))

# listRowSeparator(\_:edges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

Sets the display mode for the separator associated with this specific row.

## Declaration

```swift
nonisolated func listRowSeparator(_ visibility: Visibility, edges: VerticalEdge.Set = .all) -> some View

```

## Parameters

- `visibility`: The visibility of this row’s separators.
- `edges`: The set of row edges for which this preference applies. The list style might already decide to not display separators for some edges, typically the top edge. The default is [all](../verticaledge/set/all.md).

<a id="discussion"></a>

## Discussion

Separators can be presented above and below a row. You can specify to which edge this preference should apply.

This modifier expresses a preference to the containing [List](../list.md). The list style is the final arbiter of the separator visibility.

The following example shows a simple grouped list whose row separators are hidden:

```swift
List {
    ForEach(garage.cars) { car in
        Text(car.model)
            .listRowSeparator(.hidden)
    }
}
.listStyle(.grouped)
```

To change the color of a row separators, use [listRowSeparatorTint(\_:edges:)](listrowseparatortint%28__edges_%29.md). To hide or change the tint color for a section separators, use [listSectionSeparator(\_:edges:)](listsectionseparator%28__edges_%29.md) and [listSectionSeparatorTint(\_:edges:)](listsectionseparatortint%28__edges_%29.md).

## See Also

### Configuring separators

- [listRowSeparatorTint(\_:edges:)](listrowseparatortint%28__edges_%29.md): Sets the tint color associated with a row.
- [listSectionSeparatorTint(\_:edges:)](listsectionseparatortint%28__edges_%29.md): Sets the tint color associated with a section.
- [listSectionSeparator(\_:edges:)](listsectionseparator%28__edges_%29.md): Sets whether to hide the separator associated with a list section.
