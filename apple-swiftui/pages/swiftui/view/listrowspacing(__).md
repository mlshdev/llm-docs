> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listrowspacing(_:)](https://developer.apple.com/documentation/swiftui/view/listrowspacing(_:))

# listRowSpacing(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 27.0+ · visionOS 1.0+

Sets the vertical spacing between two adjacent rows in a List.

## Declaration

```swift
nonisolated func listRowSpacing(_ spacing: CGFloat?) -> some View

```

## Parameters

- `spacing`: The spacing value to use. A value of `nil` uses the default spacing.

<a id="discussion"></a>

## Discussion

The following example creates a List with 10 pts of spacing between each row:

```swift
List {
    Text("Blue")
    Text("Red")
}
.listRowSpacing(10.0)
```

## See Also

### Configuring a list’s layout

- [listRowInsets(\_:)](listrowinsets%28__%29.md): Applies an inset to the rows in a list.
- [listRowInsets(\_:\_:)](listrowinsets%28____%29.md): Sets the insets of rows in a list on the specified edges.
- [defaultMinListRowHeight](../environmentvalues/defaultminlistrowheight.md): The default minimum height of rows in a list.
- [defaultMinListHeaderHeight](../environmentvalues/defaultminlistheaderheight.md): The default minimum height of a header in a list.
- [listSectionSpacing(\_:)](listsectionspacing%28__%29.md): Sets the spacing between adjacent sections in a [List](../list.md) to a custom value.
- [ListSectionSpacing](../listsectionspacing.md): The spacing options between two adjacent sections in a list.
- [listSectionMargins(\_:\_:)](listsectionmargins%28____%29.md): Set the section margins for the specific edges.
