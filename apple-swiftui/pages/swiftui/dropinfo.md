> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropinfo](https://developer.apple.com/documentation/swiftui/dropinfo)

# DropInfo

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

The current state of a drop.

## Declaration

```swift
struct DropInfo
```

## Topics

### Getting the drop location

- [location](dropinfo/location.md): The location of the drag in the coordinate space of the drop view.

### Checking for items

- [hasItemsConforming(to:)](dropinfo/hasitemsconforming%28to_%29-47irh.md): Indicates whether at least one item conforms to at least one of the specified uniform type identifiers.
- [itemProviders(for:)](dropinfo/itemproviders%28for_%29-93409.md): Finds item providers that conform to at least one of the specified uniform type identifiers.

### Deprecated symbols

- [hasItemsConforming(to:)](dropinfo/hasitemsconforming%28to_%29-4qeez.md): Deprecated. Returns whether at least one item conforms to at least one of the specified uniform type identifiers.
- [itemProviders(for:)](dropinfo/itemproviders%28for_%29-b6fo.md): Deprecated. Returns an array of items that each conform to at least one of the specified uniform type identifiers.

### Instance Methods

- [hasItemsConforming(to:)](dropinfo/hasitemsconforming%28to_%29.md): Indicates whether at least one item conforms to at least one of the specified uniform type identifiers.
- [itemProviders(for:)](dropinfo/itemproviders%28for_%29.md): Finds item providers that conform to at least one of the specified uniform type identifiers.

## See Also

### Moving items using item providers

- [itemProvider(\_:)](view/itemprovider%28__%29.md): Provides a closure that vends the drag representation to be used for a particular data element.
- [onDrag(\_:preview:)](view/ondrag%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [onDrag(\_:)](view/ondrag%28__%29.md): Activates this view as the source of a drag and drop operation.
- [onDrop(of:isTargeted:perform:)](view/ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [onDrop(of:delegate:)](view/ondrop%28of_delegate_%29.md): Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.
- [DropDelegate](dropdelegate.md): An interface that you implement to interact with a drop operation in a view modified to accept drops.
- [DropProposal](dropproposal.md): The behavior of a drop.
- [DropOperation](dropoperation.md): Operation types that determine how a drag and drop session resolves when the user drops a drag item.
