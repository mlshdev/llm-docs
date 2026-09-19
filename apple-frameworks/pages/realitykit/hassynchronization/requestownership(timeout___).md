> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hassynchronization/requestownership(timeout:_:)

# requestOwnership(timeout:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Requests ownership of the entity.

## Declaration

```swift
@MainActor @preconcurrency func requestOwnership(timeout: TimeInterval = 15, _ callback: @escaping (SynchronizationComponent.OwnershipTransferCompletionResult) -> Void)
```

## Parameters

- `timeout`: A time in seconds to wait before giving up.
- `callback`: A closure that the method calls when the request completes or times out.

<a id="discussion"></a>

## Discussion

Requesting ownership isn’t guaranteed to succeed.

## See Also

### Managing ownership

- [isOwner](isowner.md): A Boolean that indicates whether the calling process owns the entity.
