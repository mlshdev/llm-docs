> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanager/getallassetpackswithcompletionhandler:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/getallassetpackswithcompletionhandler:)

# getAllAssetPacksWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

Gets the asset packs that are available to download.

## Declaration

```objectivec
- (void) getAllAssetPacksWithCompletionHandler:(void (^)(NSSet<BAAssetPack *> *assetPacks, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that receives the asset packs or an error if one occurs.

<a id="discussion"></a>

## Discussion

This method may attempt to get the latest asset-pack information from the server.

## See Also

### Accessing asset packs

- [getManifestWithCompletionHandler:](getmanifestwithcompletionhandler_.md): Gets the manifest of asset packs that are available to download.
- [BAAssetPackManifest](../baassetpackmanifest.md): A manifest of asset packs that are available to download.
- [getAssetPackWithIdentifier:completionHandler:](getassetpackwithidentifier_completionhandler_.md): Deprecated. Gets the asset pack with the given identifier.
