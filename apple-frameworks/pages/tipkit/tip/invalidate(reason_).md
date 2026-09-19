> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tipkit/tip/invalidate(reason:)

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

- `reason`: The reason for the tip’s invalidation. After invalidation the tip’s [status](status-swift.property.md) becomes `invalidated`, carrying this value.

## See Also

### Invalidating a tip

- [resetEligibility()](reseteligibility%28%29.md): Reset a previously invalidated tip.
