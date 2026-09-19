> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cncompositioninfo-vzoh/inserttimerange:ofcinematicassetinfo:attime:error:

# insertTimeRange:ofCinematicAssetInfo:atTime:error:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Inserts a time range of Cinematic source asset into the corresponding tracks of a composition.

## Declaration

```objectivec
- (BOOL) insertTimeRange:(CMTimeRange) timeRange ofCinematicAssetInfo:(CNAssetInfo *) assetInfo atTime:(CMTime) startTime error:(NSError **) outError;
```

## Parameters

- `timeRange`: The time range where to insert the Cinematic source asset.
- `assetInfo`: The asset to insert.
- `startTime`: The starting time where to insert the corresponding tracks of the composition.
- `outError`: The error result, if any.
