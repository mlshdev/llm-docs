> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationcomponent/ownershiptransfercompletionresult/timedout](https://developer.apple.com/documentation/realitykit/synchronizationcomponent/ownershiptransfercompletionresult/timedout)

# SynchronizationComponent.OwnershipTransferCompletionResult.timedOut

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The ownership transfer request timed out.

## Declaration

```swift
case timedOut
```

<a id="discussion"></a>

## Discussion

A timeout doesn’t necessarily mean that the request is denied. It might succeed after the timeout.

## See Also

### Ownership transfer completion results

- [SynchronizationComponent.OwnershipTransferCompletionResult.granted](granted.md): The request is accepted and ownership is transferred.
