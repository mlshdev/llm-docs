> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkhostingcontroller/setneedsbodyupdate()](https://developer.apple.com/documentation/swiftui/wkhostingcontroller/setneedsbodyupdate())

# setNeedsBodyUpdate()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Invalidates the current SwiftUI views and triggers an update during the next cycle.

## Declaration

```swift
@MainActor @preconcurrency func setNeedsBodyUpdate()
```

<a id="discussion"></a>

## Discussion

Call this method to mark the views of the hosting controller as needing an update. During the next update cycle, the hosting controller fetches an updated set of views from its [body](body.md) property.

## See Also

### Updating the root view

- [updateBodyIfNeeded()](updatebodyifneeded%28%29.md): Updates the interface controller’s set of views immediately, if updates are pending.
