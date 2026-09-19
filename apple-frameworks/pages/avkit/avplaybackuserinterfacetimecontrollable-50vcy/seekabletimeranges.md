> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacetimecontrollable-50vcy/seekabletimeranges

# seekableTimeRanges

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Time ranges within the timeline where seeking operations are permitted.

## Declaration

```swift
@MainActor var seekableTimeRanges: [CMTimeRange]? { get }
```
