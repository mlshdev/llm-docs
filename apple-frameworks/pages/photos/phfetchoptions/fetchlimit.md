> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/fetchlimit](https://developer.apple.com/documentation/photos/phfetchoptions/fetchlimit)

# fetchLimit (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The maximum number of objects to include in the fetch result.

## Declaration

```swift
var fetchLimit: Int { get set }
```

<a id="Discussion"></a>

## Discussion

With the default fetch limit of zero, Photos returns all requested assets or collections in a fetch result. Change this value to fetch more efficiently in situations where a potentially very large result is not needed. For example, to fetch only the most recently captured asset, call the [fetchAssets(with:)](../phasset/fetchassets%28with_%29.md) method, using the [sortDescriptors](sortdescriptors.md) property to sort in descending date order, and setting a fetch limit of one.

## See Also

### Limiting Fetch Results

- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

# fetchLimit (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The maximum number of objects to include in the fetch result.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) NSUInteger fetchLimit;
```

<a id="Discussion"></a>

## Discussion

With the default fetch limit of zero, Photos returns all requested assets or collections in a fetch result. Change this value to fetch more efficiently in situations where a potentially very large result is not needed. For example, to fetch only the most recently captured asset, call the [fetchAssetsWithOptions:](../phasset/fetchassets%28with_%29.md) method, using the [sortDescriptors](sortdescriptors.md) property to sort in descending date order, and setting a fetch limit of one.

## See Also

### Limiting Fetch Results

- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.
