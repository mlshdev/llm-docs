> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropdelegate/performdrop(info:)](https://developer.apple.com/documentation/swiftui/dropdelegate/performdrop(info:))

# performDrop(info:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate it can request the item provider data from the given information.

## Declaration

```swift
@MainActor @preconcurrency func performDrop(info: DropInfo) -> Bool
```

<a id="return-value"></a>

## Return Value

A Boolean that is `true` if the drop was successful, `false` otherwise.

<a id="discussion"></a>

## Discussion

Incorporate the received data into your app’s data model as appropriate.

Make sure to start loading the contents of `NSItemProvider` instances from [DropInfo](../dropinfo.md) within the scope of this method. Do not perform loading asynchronously on a different actor. Loading the contents may finish later, but it must start here. For security reasons, the drop receiver can access the dropped payload only before this method returns.

## See Also

### Receiving drop information

- [dropEntered(info:)](dropentered%28info_%29.md): Tells the delegate a validated drop has entered the modified view.
- [dropExited(info:)](dropexited%28info_%29.md): Tells the delegate a validated drop operation has exited the modified view.
- [dropUpdated(info:)](dropupdated%28info_%29.md): Tells the delegate that a validated drop moved inside the modified view.
- [validateDrop(info:)](validatedrop%28info_%29.md): Tells the delegate that a drop containing items conforming to one of the expected types entered a view that accepts drops.
