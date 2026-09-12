> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/itemprovidertablerowmodifier](https://developer.apple.com/documentation/swiftui/itemprovidertablerowmodifier)

# ItemProviderTableRowModifier

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A table row modifier that associates an item provider with some base row content.

## Declaration

```swift
@MainActor @preconcurrency struct ItemProviderTableRowModifier
```

## Topics

### Instance Properties

- [body](itemprovidertablerowmodifier/body-swift.property.md)

### Type Aliases

- [ItemProviderTableRowModifier.Body](itemprovidertablerowmodifier/body-swift.typealias.md)

## See Also

### Managing interaction

- [draggable(\_:)](tablerowcontent/draggable%28__%29.md): Activates this row as the source of a drag and drop operation.
- [dropDestination(for:action:)](tablerowcontent/dropdestination%28for_action_%29.md): Defines the entire row as a destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onHover(perform:)](tablerowcontent/onhover%28perform_%29.md): Adds an action to perform when the pointer moves onto or away from the entire row.
- [itemProvider(\_:)](tablerowcontent/itemprovider%28__%29.md): Provides a closure that vends the drag representation for a particular data element.
