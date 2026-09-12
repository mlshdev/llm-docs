> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-8ja4t/checkcinematiccapabilityforasset:completionhandler:](https://developer.apple.com/documentation/cinematic/cnassetinfo-8ja4t/checkcinematiccapabilityforasset:completionhandler:)

# checkCinematicCapabilityForAsset:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Asynchronously checks the cinematic capability of an asset. The completionHandler returns: CNCinematicCapabilityNone if a cinematic metadata track is not present. CNCinematicCapabilityRenderable if the cinematic asset can be used without preprocessing CNCinematicCapabilityNeedsPreprocessing If cinematic asset needs preprocessing before it can be used For assets that need preprocessing use \[CNAssetInfo preprocessAssetWithConfiguration:completionHandler:\] before using the asset

## Declaration

```objectivec
+ (void) checkCinematicCapabilityForAsset:(AVAsset *) asset completionHandler:(void (^)(CNCinematicCapability capability)) completionHandler;
```
