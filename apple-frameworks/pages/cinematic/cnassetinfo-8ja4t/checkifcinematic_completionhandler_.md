> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-8ja4t/checkifcinematic:completionhandler:](https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/checkifcinematic:completionhandler:)

# checkIfCinematic:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0)

Determines if the asset is Cinematic.

## Declaration

```objectivec
+ (void) checkIfCinematic:(AVAsset *) asset completionHandler:(void (^)(BOOL result)) completionHandler;
```

## Parameters

- `asset`: The asset of interest.
- `completionHandler`: A Boolean value that indicates whether the asset is Cinematic.
