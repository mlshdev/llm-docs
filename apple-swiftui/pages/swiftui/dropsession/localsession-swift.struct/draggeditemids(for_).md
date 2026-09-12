> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropsession/localsession-swift.struct/draggeditemids(for:)](https://developer.apple.com/documentation/swiftui/dropsession/localsession-swift.struct/draggeditemids(for:))

# draggedItemIDs(for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Provides an array of identifiers of the currently dragged items if available.

## Declaration

```swift
func draggedItemIDs<ItemID>(for type: ItemID.Type) -> [ItemID] where ItemID : Hashable
```

<a id="discussion"></a>

## Discussion

If drag started within the application, the dragged items have identifiers, and SwiftUI has access to these identifiers, you can access them using this method.

Parameter type: The type of the identifiers. Returns: The array with the identifiers of the dragged items if provided. Returns an empty array if there are no dragged identifiers of a given type.
