> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-4b4w9/canceloperationswithcompletionhandler:](https://developer.apple.com/documentation/cloudkit/cksyncengine-4b4w9/canceloperationswithcompletionhandler:)

# cancelOperationsWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Cancels any in-progress or pending sync operations.

## Declaration

```objectivec
- (void) cancelOperationsWithCompletionHandler:(void (^)()) completionHandler;
```

<a id="discussion"></a>

## Discussion

The sync engine processes cancellation requests asynchronously, meaning it’s possible for in-progress operations to complete even after this method returns.
