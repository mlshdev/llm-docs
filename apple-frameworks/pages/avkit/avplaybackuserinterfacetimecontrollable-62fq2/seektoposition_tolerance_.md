> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-62fq2/seektoposition:tolerance:

# seekToPosition:tolerance:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Requests a seek to the specified position.

## Declaration

```objectivec
- (void) seekToPosition:(CMTime) position tolerance:(CMTime) tolerance;
```

## Parameters

- `position`: The position to seek to.
- `tolerance`: How close to `position` the actual seek must land. Pass `kCMTimeZero` for exact frame-accurate seeking or `kCMTimePositiveInfinity` for fast approximate seeking.
