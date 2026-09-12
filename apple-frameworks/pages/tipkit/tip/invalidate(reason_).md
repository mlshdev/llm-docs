> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/invalidate(reason:)](https://developer.apple.com/documentation/tipkit/tip/invalidate(reason:))

# invalidate(reason:)

**Framework:** TipKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Permanently invalidates a tip and prevents it from displaying.

## Declaration

```swift
func invalidate(reason: Self.InvalidationReason)
```

## Parameters

- `reason`: The reason for the tip’s invalidation. The tip’s `invalidationReason` returns this value after invalidation.

## See Also

### Invalidating a tip

- [resetEligibility()](reseteligibility%28%29.md): Reset a previously invalidated tip.
