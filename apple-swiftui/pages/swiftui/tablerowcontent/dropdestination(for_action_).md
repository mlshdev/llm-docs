> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowcontent/dropdestination(for:action:)](https://developer.apple.com/documentation/swiftui/tablerowcontent/dropdestination(for:action:))

# dropDestination(for:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Defines the entire row as a destination of a drag and drop operation that handles the dropped content with a closure that you specify.

## Declaration

```swift
@MainActor @preconcurrency func dropDestination<T>(for payloadType: T.Type = T.self, action: @escaping ([T]) -> Void) -> some TableRowContent<Self.TableRowValue> where T : Transferable

```

## Parameters

- `payloadType`: The expected type of the dropped models.
- `action`: A closure that takes the dropped content and responds with `true` if the drop operation was successful; otherwise, return `false`.

<a id="return-value"></a>

## Return Value

A row that provides a drop destination for a drag operation of the specified type.

## See Also

### Managing interaction

- [draggable(\_:)](draggable%28__%29.md): Activates this row as the source of a drag and drop operation.
- [onHover(perform:)](onhover%28perform_%29.md): Adds an action to perform when the pointer moves onto or away from the entire row.
- [itemProvider(\_:)](itemprovider%28__%29.md): Provides a closure that vends the drag representation for a particular data element.
- [ItemProviderTableRowModifier](../itemprovidertablerowmodifier.md): A table row modifier that associates an item provider with some base row content.
