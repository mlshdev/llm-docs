> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacetimecontrollable-50vcy/seek(to:tolerance:)](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-50vcy/seek(to:tolerance:))

# seek(to:tolerance:)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Requests a seek to the specified position.

## Declaration

```swift
@MainActor func seek(to position: CMTime, tolerance: CMTime)
```

## Parameters

- `position`: The position to seek to.
- `tolerance`: How close to `position` the actual seek must land. Pass `CMTime.zero` for exact frame-accurate seeking or `CMTime.positiveInfinity` for fast approximate seeking.
