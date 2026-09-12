> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropdelegate/validatedrop(info:)](https://developer.apple.com/documentation/swiftui/dropdelegate/validatedrop(info:))

# validateDrop(info:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a drop containing items conforming to one of the expected types entered a view that accepts drops.

## Declaration

```swift
@MainActor @preconcurrency func validateDrop(info: DropInfo) -> Bool
```

<a id="discussion"></a>

## Discussion

Specify the expected types when you apply the drop modifier to the view. The default implementation returns `true`.

## Default Implementations

### DropDelegate Implementations

- [validateDrop(info:)](validatedrop%28info_%29-1hqfh.md): Tells the delegate that a drop containing items conforming to one of the expected types entered a view that accepts drops.

## See Also

### Receiving drop information

- [dropEntered(info:)](dropentered%28info_%29.md): Tells the delegate a validated drop has entered the modified view.
- [dropExited(info:)](dropexited%28info_%29.md): Tells the delegate a validated drop operation has exited the modified view.
- [dropUpdated(info:)](dropupdated%28info_%29.md): Tells the delegate that a validated drop moved inside the modified view.
- [performDrop(info:)](performdrop%28info_%29.md): Tells the delegate it can request the item provider data from the given information.
