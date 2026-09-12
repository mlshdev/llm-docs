> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/canceloperations()](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/canceloperations())

# cancelOperations()

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Cancels any in-progress or pending sync operations.

## Declaration

```swift
final func cancelOperations() async
```

<a id="discussion"></a>

## Discussion

The sync engine processes cancellation requests asynchronously, meaning it’s possible for in-progress operations to complete even after this method returns.
