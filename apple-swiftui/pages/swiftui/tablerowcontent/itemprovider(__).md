> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowcontent/itemprovider(_:)](https://developer.apple.com/documentation/swiftui/tablerowcontent/itemprovider(_:))

# itemProvider(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Provides a closure that vends the drag representation for a particular data element.

## Declaration

```swift
@MainActor @preconcurrency func itemProvider(_ action: (() -> NSItemProvider?)?) -> ModifiedContent<Self, ItemProviderTableRowModifier>
```

## See Also

### Managing interaction

- [draggable(\_:)](draggable%28__%29.md): Activates this row as the source of a drag and drop operation.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the entire row as a destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onHover(perform:)](onhover%28perform_%29.md): Adds an action to perform when the pointer moves onto or away from the entire row.
- [ItemProviderTableRowModifier](../itemprovidertablerowmodifier.md): A table row modifier that associates an item provider with some base row content.
