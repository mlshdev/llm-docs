> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetspatialaudioinfo-57yc5/checkifcontainsspatialaudio:completionhandler:](https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-57yc5/checkifcontainsspatialaudio:completionhandler:)

# checkIfContainsSpatialAudio:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```objectivec
+ (void) checkIfContainsSpatialAudio:(AVAsset *) asset completionHandler:(void (^)(BOOL result)) completionHandler;
```

## Parameters

- `asset`: An instance of AVAsset.
- `completionHandler`: Completion handler to return the result

<a id="discussion"></a>

## Discussion

Check if asset meets all the requirements to operate with Spatial Audio and its accompanying effects
