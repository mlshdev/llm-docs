> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/videocompositionwithvideocomposition:](https://developer.apple.com/documentation/avfoundation/avvideocomposition/videocompositionwithvideocomposition:)

# videoCompositionWithVideoComposition:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method

Pass-through initializer, for internal use in AVFoundation only

## Declaration

```objectivec
+ (AVVideoComposition *) videoCompositionWithVideoComposition:(AVVideoComposition *) videoComposition;
```

## See Also

### Creating a video composition

- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [videoCompositionWithPropertiesOfAsset:completionHandler:](videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:](init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
