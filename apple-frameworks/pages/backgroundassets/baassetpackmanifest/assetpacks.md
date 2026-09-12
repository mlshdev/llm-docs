> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanifest/assetpacks](https://developer.apple.com/documentation/backgroundassets/baassetpackmanifest/assetpacks)

# assetPacks

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The asset packs in this manifest that are available to download.

## Declaration

```objectivec
@property (copy, readonly) NSSet<BAAssetPack *> * assetPacks;
```

## See Also

### Getting asset packs

- [assetPackWithIdentifier:](assetpackwithidentifier_.md): Returns the asset pack in this manifest with the given identifier.
