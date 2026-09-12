> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listsectionseparator(_:edges:)](https://developer.apple.com/documentation/swiftui/view/listsectionseparator(_:edges:))

# listSectionSeparator(\_:edges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

Sets whether to hide the separator associated with a list section.

## Declaration

```swift
nonisolated func listSectionSeparator(_ visibility: Visibility, edges: VerticalEdge.Set = .all) -> some View

```

## Parameters

- `visibility`: The visibility of this section’s separators.
- `edges`: The set of row edges for which the preference applies. The list style might already decide to not display separators for some edges. The default is [all](../verticaledge/set/all.md).

<a id="discussion"></a>

## Discussion

Separators can be presented above and below a section. You can specify to which edge this preference should apply.

This modifier expresses a preference to the containing [List](../list.md). The list style is the final arbiter of the separator visibility.

The following example shows a simple grouped list whose bottom sections separator are hidden:

```swift
List {
    ForEach(garage) { garage in
        Section(header: Text(garage.location)) {
            ForEach(garage.cars) { car in
                Text(car.model)
                    .listRowSeparatorTint(car.brandColor)
            }
        }
        .listSectionSeparator(.hidden, edges: .bottom)
    }
}
.listStyle(.grouped)
```

To change the visibility and tint color for a row separator, use [listRowSeparator(\_:edges:)](listrowseparator%28__edges_%29.md) and [listRowSeparatorTint(\_:edges:)](listrowseparatortint%28__edges_%29.md). To set the tint color for a section separator, use [listSectionSeparatorTint(\_:edges:)](listsectionseparatortint%28__edges_%29.md).

## See Also

### Configuring separators

- [listRowSeparatorTint(\_:edges:)](listrowseparatortint%28__edges_%29.md): Sets the tint color associated with a row.
- [listSectionSeparatorTint(\_:edges:)](listsectionseparatortint%28__edges_%29.md): Sets the tint color associated with a section.
- [listRowSeparator(\_:edges:)](listrowseparator%28__edges_%29.md): Sets the display mode for the separator associated with this specific row.
