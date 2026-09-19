> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cncompositioninfo-7eunn/inserttimerange(_:of:at:)

# insertTimeRange(\_:of:at:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Inserts a timeRange of Cinematic source asset into the corresponding tracks of a composition.

## Declaration

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of cinematicAssetInfo: CNAssetInfo, at startTime: CMTime) throws
```

## Parameters

- `timeRange`: The time range where to insert the Cinematic source asset.
- `cinematicAssetInfo`: The asset to insert.
- `startTime`: The starting time where to insert the corresponding tracks of the composition.
