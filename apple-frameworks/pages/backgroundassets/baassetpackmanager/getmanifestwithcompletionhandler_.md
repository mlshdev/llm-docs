> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanager/getmanifestwithcompletionhandler:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/getmanifestwithcompletionhandler:)

# getManifestWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Gets the manifest of asset packs that are available to download.

## Declaration

```objectivec
- (void) getManifestWithCompletionHandler:(void (^)(BAAssetPackManifest *manifest, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that receives the manifest or an error if one occurs.

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

## See Also

### Accessing asset packs

- [BAAssetPackManifest](../baassetpackmanifest.md): A manifest of asset packs that are available to download.
- [getAllAssetPacksWithCompletionHandler:](getallassetpackswithcompletionhandler_.md): Deprecated. Gets the asset packs that are available to download.
- [getAssetPackWithIdentifier:completionHandler:](getassetpackwithidentifier_completionhandler_.md): Deprecated. Gets the asset pack with the given identifier.
