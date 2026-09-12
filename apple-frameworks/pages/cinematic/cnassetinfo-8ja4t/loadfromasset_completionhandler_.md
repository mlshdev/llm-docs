> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-8ja4t/loadfromasset:completionhandler:](https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/loadfromasset:completionhandler:)

# loadFromAsset:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Loads the Cinematic asset information.

## Declaration

```objectivec
+ (void) loadFromAsset:(AVAsset *) asset completionHandler:(void (^)(CNAssetInfo *cinematicAssetInfo, NSError *error)) completionHandler;
```

## Parameters

- `asset`: The Cinematic asset of interest to load.
- `completionHandler`: Called when the loaded Cinematic asset loads, or with an error if it fails.
