> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkhostingcontroller/updatebodyifneeded()](https://developer.apple.com/documentation/swiftui/wkhostingcontroller/updatebodyifneeded())

# updateBodyIfNeeded()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Updates the interface controller’s set of views immediately, if updates are pending.

## Declaration

```swift
@MainActor @preconcurrency func updateBodyIfNeeded()
```

<a id="discussion"></a>

## Discussion

Calling this method forces the hosting controller to update its current set of views, but only if there are pending changes. If there are no pending changes, this method does nothing.

To mark the interface controller as needing an update, call [setNeedsBodyUpdate()](setneedsbodyupdate%28%29.md).

## See Also

### Updating the root view

- [setNeedsBodyUpdate()](setneedsbodyupdate%28%29.md): Invalidates the current SwiftUI views and triggers an update during the next cycle.
