> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/selectiondisabled(_:)](https://developer.apple.com/documentation/swiftui/view/selectiondisabled(_:))

# selectionDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds a condition that controls whether users can select this view.

## Declaration

```swift
@export(implementation) nonisolated func selectionDisabled(_ isDisabled: Bool = true) -> some View

```

## Parameters

- `isDisabled`: A Boolean value that determines whether users can select this view.

<a id="discussion"></a>

## Discussion

Use this modifier to control the selectability of views in selectable containers like [List](../list.md) or [Table](../table.md). In the example, below, the user can’t select the first item in the list.

```swift
@Binding var selection: Item.ID?
@Binding var items: [Item]

var body: some View {
    List(selection: $selection) {
        ForEach(items) { item in
            ItemView(item: item)
                .selectionDisabled(item.id == items.first?.id)
        }
    }
}
```

You can also use this modifier to specify the selectability of views within a `Picker`. The following example represents a flavor picker that disables selection on flavors that are unavailable.

```swift
Picker("Flavor", selection: $selectedFlavor) {
    ForEach(Flavor.allCases) { flavor in
        Text(flavor.rawValue.capitalized)
            .selectionDisabled(isSoldOut(flavor))
    }
}
```

## See Also

### Configuring interaction

- [swipeActions(edge:allowsFullSwipe:content:)](swipeactions%28edge_allowsfullswipe_content_%29.md): Adds custom swipe actions to a row in a list.
- [listRowHoverEffect(\_:)](listrowhovereffect%28__%29.md): Requests that the containing list row use the provided hover effect.
- [listRowHoverEffectDisabled(\_:)](listrowhovereffectdisabled%28__%29.md): Requests that the containing list row have its hover effect disabled.
