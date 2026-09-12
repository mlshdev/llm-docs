> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowcontent/onhover(perform:)](https://developer.apple.com/documentation/swiftui/tablerowcontent/onhover(perform:))

# onHover(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Adds an action to perform when the pointer moves onto or away from the entire row.

## Declaration

```swift
@MainActor @preconcurrency func onHover(perform action: @escaping (Bool) -> Void) -> some TableRowContent<Self.TableRowValue>

```

## See Also

### Managing interaction

- [draggable(\_:)](draggable%28__%29.md): Activates this row as the source of a drag and drop operation.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the entire row as a destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [itemProvider(\_:)](itemprovider%28__%29.md): Provides a closure that vends the drag representation for a particular data element.
- [ItemProviderTableRowModifier](../itemprovidertablerowmodifier.md): A table row modifier that associates an item provider with some base row content.
