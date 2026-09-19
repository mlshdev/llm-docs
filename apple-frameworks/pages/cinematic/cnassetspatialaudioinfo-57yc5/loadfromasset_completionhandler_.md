> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/loadfromasset:completionhandler:

# loadFromAsset:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```objectivec
+ (void) loadFromAsset:(AVAsset *) asset completionHandler:(void (^)(CNAssetSpatialAudioInfo *assetInfo, NSError *error)) completionHandler;
```

## Parameters

- `asset`: An instance of AVAsset
- `completionHandler`: Completion handler to return the result

<a id="discussion"></a>

## Discussion

Returns an instance of CNAssetAudioInfo for an AVAsset object asynchronously.
