> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/includeallburstassets](https://developer.apple.com/documentation/photos/phfetchoptions/includeallburstassets)

# includeAllBurstAssets (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.

## Declaration

```swift
var includeAllBurstAssets: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the user takes a sequence of photos in burst mode with the Camera app (on supported devices), the Photos app user interface groups the resulting assets together and allows the user to select favorite members of the sequence. Photos also automatically marks members of the sequence as potential user favorites.

If the value is `false` (the default), fetches that include burst photo sequences return only the user-picked members and representative asset of each sequence. If the value is`true`, such fetches include all assets in each sequence.

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

# includeAllBurstAssets (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL includeAllBurstAssets;
```

<a id="Discussion"></a>

## Discussion

When the user takes a sequence of photos in burst mode with the Camera app (on supported devices), the Photos app user interface groups the resulting assets together and allows the user to select favorite members of the sequence. Photos also automatically marks members of the sequence as potential user favorites.

If the value is `false` (the default), fetches that include burst photo sequences return only the user-picked members and representative asset of each sequence. If the value is`true`, such fetches include all assets in each sequence.

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.
