> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropdelegate/dropupdated(info:)](https://developer.apple.com/documentation/swiftui/dropdelegate/dropupdated(info:))

# dropUpdated(info:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a validated drop moved inside the modified view.

## Declaration

```swift
@MainActor @preconcurrency func dropUpdated(info: DropInfo) -> DropProposal?
```

<a id="discussion"></a>

## Discussion

Use this method to return a drop proposal containing the operation the delegate intends to perform at the drop [location](../dropinfo/location.md). The default implementation of this method returns `nil`, which tells the drop to use the last valid returned value or else [DropOperation.copy](../dropoperation/copy.md).

## Default Implementations

### DropDelegate Implementations

- [dropUpdated(info:)](dropupdated%28info_%29-2mktz.md): Tells the delegate that a validated drop moved inside the modified view.

## See Also

### Receiving drop information

- [dropEntered(info:)](dropentered%28info_%29.md): Tells the delegate a validated drop has entered the modified view.
- [dropExited(info:)](dropexited%28info_%29.md): Tells the delegate a validated drop operation has exited the modified view.
- [validateDrop(info:)](validatedrop%28info_%29.md): Tells the delegate that a drop containing items conforming to one of the expected types entered a view that accepts drops.
- [performDrop(info:)](performdrop%28info_%29.md): Tells the delegate it can request the item provider data from the given information.
