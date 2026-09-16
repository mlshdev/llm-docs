> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbarcontent/axisbehavior(_:)

# axisBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The bar axis behavior of the toolbar item.

## Declaration

```swift
nonisolated func axisBehavior(_ behavior: ToolbarItemAxisBehavior) -> some ToolbarContent

```

## Parameters

- `behavior`: The axis behavior of the item.

<a id="discussion"></a>

## Discussion

Use this modifier to control which bar axes a toolbar item can appear in.

The following example restricts an item to the horizontal axis. The item can only appear in a horizontal bar.

```swift
.toolbar {
    ToolbarItem(placement: .primaryAction) {
        Toggle(isOn: $isOn) { ... }
    }
    .axisBehavior(.horizontalOnly)
}
```

If both horizontal & vertical bars are present and the item is `.verticalPreferred`, the system prefers placing the item in the vertical bar.

## See Also

### Customizing behaviors

- [ToolbarItemAxisBehavior](../toolbaritemaxisbehavior.md): Beta. Describes the bar axis behavior of a toolbar item.
