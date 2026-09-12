> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listrowseparatortint(_:edges:)](https://developer.apple.com/documentation/swiftui/view/listrowseparatortint(_:edges:))

# listRowSeparatorTint(\_:edges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

Sets the tint color associated with a row.

## Declaration

```swift
nonisolated func listRowSeparatorTint(_ color: Color?, edges: VerticalEdge.Set = .all) -> some View

```

## Parameters

- `color`: The color to use to tint the row separators, or `nil` to use the default color for the current list style.
- `edges`: The set of row edges for which the tint applies. The list style might decide to not display certain separators, typically the top edge. The default is [all](../verticaledge/set/all.md).

<a id="discussion"></a>

## Discussion

Separators can be presented above and below a row. You can specify to which edge this preference should apply.

This modifier expresses a preference to the containing [List](../list.md). The list style is the final arbiter for the separator tint.

The following example shows a simple grouped list whose row separators are tinted based on row-specific data:

```swift
List {
    ForEach(garage.cars) { car in
        Text(car.model)
            .listRowSeparatorTint(car.brandColor)
    }
}
.listStyle(.grouped)
```

To hide a row separators, use [listRowSeparator(\_:edges:)](listrowseparator%28__edges_%29.md). To hide or change the tint color for a section separator, use [listSectionSeparator(\_:edges:)](listsectionseparator%28__edges_%29.md) and [listSectionSeparatorTint(\_:edges:)](listsectionseparatortint%28__edges_%29.md).

## See Also

### Configuring separators

- [listSectionSeparatorTint(\_:edges:)](listsectionseparatortint%28__edges_%29.md): Sets the tint color associated with a section.
- [listRowSeparator(\_:edges:)](listrowseparator%28__edges_%29.md): Sets the display mode for the separator associated with this specific row.
- [listSectionSeparator(\_:edges:)](listsectionseparator%28__edges_%29.md): Sets whether to hide the separator associated with a list section.
