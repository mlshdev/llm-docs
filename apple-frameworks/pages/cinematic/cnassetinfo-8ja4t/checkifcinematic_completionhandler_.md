> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/checkifcinematic:completionhandler:

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
