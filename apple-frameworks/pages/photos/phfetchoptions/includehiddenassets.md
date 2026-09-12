> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/includehiddenassets](https://developer.apple.com/documentation/photos/phfetchoptions/includehiddenassets)

# includeHiddenAssets (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the fetch result includes assets marked as hidden.

## Declaration

```swift
var includeHiddenAssets: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `false` (the default), fetches exclude assets whose [isHidden](../phasset/ishidden.md) property is `true`. If the value is `true`, fetches include all assets regardless of their hidden state.

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

# includeHiddenAssets (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the fetch result includes assets marked as hidden.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL includeHiddenAssets;
```

<a id="Discussion"></a>

## Discussion

If the value is `false` (the default), fetches exclude assets whose [hidden](../phasset/ishidden.md) property is `true`. If the value is `true`, fetches include all assets regardless of their hidden state.

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.
