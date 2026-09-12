> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listsectionspacing(_:)](https://developer.apple.com/documentation/swiftui/view/listsectionspacing(_:))

# listSectionSpacing(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the spacing between adjacent sections in a [List](../list.md) to a custom value.

## Declaration

```swift
nonisolated func listSectionSpacing(_ spacing: CGFloat) -> some View

```

## Parameters

- `spacing`: The amount of spacing to apply.

<a id="discussion"></a>

## Discussion

The following example creates a [List](../list.md) with 5 pts of spacing between sections:

```swift
List {
    Section("Colors") {
        Text("Blue")
        Text("Red")
    }

    Section("Shapes") {
        Text("Square")
        Text("Circle")
    }
}
.listSectionSpacing(5.0)
```

Spacing can also be specified on an individual [Section](../section.md), as in this example:

```swift
Section("Borders") {
    Text("Dashed")
    Text("Solid")
}
.listSectionSpacing(10.0)
```

If adjacent sections have different spacing applied, each section applies half its spacing above and below. Sections without explicit spacing apply the spacing of their adjacent sections.

```swift
List {
    Section("Colors") {
        Text("Blue")
        Text("Red")
    }

    Section("Borders") {
        Text("Dashed")
        Text("Solid")
    }
    .listSectionSpacing(10.0)

    Section("Shapes") {
        Text("Square")
        Text("Circle")
    }
    .listSectionSpacing(100.0)
}
```

In the above example, the “Colors” and “Borders” section are separated by 10 pts of spacing, and the “Borders” and “Shapes” section are separated by 55 pts of spacing.

Spacing applied on sections in the [List](../list.md) overrides spacing applied on the [List](../list.md) as a whole.

## See Also

### Configuring a list’s layout

- [listRowInsets(\_:)](listrowinsets%28__%29.md): Applies an inset to the rows in a list.
- [listRowInsets(\_:\_:)](listrowinsets%28____%29.md): Sets the insets of rows in a list on the specified edges.
- [defaultMinListRowHeight](../environmentvalues/defaultminlistrowheight.md): The default minimum height of rows in a list.
- [defaultMinListHeaderHeight](../environmentvalues/defaultminlistheaderheight.md): The default minimum height of a header in a list.
- [listRowSpacing(\_:)](listrowspacing%28__%29.md): Sets the vertical spacing between two adjacent rows in a List.
- [ListSectionSpacing](../listsectionspacing.md): The spacing options between two adjacent sections in a list.
- [listSectionMargins(\_:\_:)](listsectionmargins%28____%29.md): Set the section margins for the specific edges.
