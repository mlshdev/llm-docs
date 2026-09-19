> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/preprocessassetwithconfiguration:completionhandler:

# preprocessAssetWithConfiguration:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Preprocesses the asset by generating a disparity track, writing the result to the URL specified in `configuration`. Required for assets whose `cinematicCapability` is \\c CNCinematicCapabilityNeedsPreprocessing; on success \\c assetInfo will be \\c CNCinematicCapabilityRenderable.

## Declaration

```objectivec
- (NSProgress *) preprocessAssetWithConfiguration:(CNAssetPreprocessConfiguration *) configuration completionHandler:(void (^)(CNAssetInfo *assetInfo, NSError *error)) completionHandler;
```

## Parameters

- `configuration`: Destination URL and whether to embed or reference source tracks.
- `completionHandler`: Called on completion; on success \\c assetInfo is the new preprocessed asset and \\c error is \\c nil. On failure \\c assetInfo is \\c nil and \\c error is non-nil.

<a id="return-value"></a>

## Return Value

A \\c NSProgress tracking preprocessing progress.

<a id="discussion"></a>

## Discussion

Ensure \\c resourceStatus is ready before calling — download resources first if needed.
