> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/prefetchassetextendedmetadata](https://developer.apple.com/documentation/photos/phfetchoptions/prefetchassetextendedmetadata)

# prefetchAssetExtendedMetadata (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

## Declaration

```swift
var prefetchAssetExtendedMetadata: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default `extendedMetadata` is fetched on demand, with the dot accessor. Prefetching will fetch it as part of the `PHAsset` in a single fetch, rather than incurring fetch overhead for each `PHAsset`.

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.

# prefetchAssetExtendedMetadata (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL prefetchAssetExtendedMetadata;
```

<a id="discussion"></a>

## Discussion

By default `extendedMetadata` is fetched on demand, with the dot accessor. Prefetching will fetch it as part of the `PHAsset` in a single fetch, rather than incurring fetch overhead for each `PHAsset`.

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
