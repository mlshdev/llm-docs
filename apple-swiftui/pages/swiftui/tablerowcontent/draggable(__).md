> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowcontent/draggable(_:)](https://developer.apple.com/documentation/swiftui/tablerowcontent/draggable(_:))

# draggable(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Activates this row as the source of a drag and drop operation.

## Declaration

```swift
@MainActor @preconcurrency func draggable<T>(_ payload: @autoclosure @escaping () -> T) -> some TableRowContent<Self.TableRowValue> where T : Transferable

```

## Parameters

- `payload`: A closure that returns a single instance or a value conforming to [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) that represents the draggable data from this view.

<a id="return-value"></a>

## Return Value

A row that activates this row as the source of a drag and drop operation.

<a id="discussion"></a>

## Discussion

Applying the `draggable(_:)` modifier adds the appropriate gestures for drag and drop to this row.

## See Also

### Managing interaction

- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the entire row as a destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onHover(perform:)](onhover%28perform_%29.md): Adds an action to perform when the pointer moves onto or away from the entire row.
- [itemProvider(\_:)](itemprovider%28__%29.md): Provides a closure that vends the drag representation for a particular data element.
- [ItemProviderTableRowModifier](../itemprovidertablerowmodifier.md): A table row modifier that associates an item provider with some base row content.
