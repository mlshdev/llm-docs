> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/synchronizationcomponent/ownershiptransfercompletionresult/timedout

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
