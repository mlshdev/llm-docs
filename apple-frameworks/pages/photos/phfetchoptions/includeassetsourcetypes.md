> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/includeassetsourcetypes](https://developer.apple.com/documentation/photos/phfetchoptions/includeassetsourcetypes)

# includeAssetSourceTypes (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The set of source types for which to include assets in the fetch result.

## Declaration

```swift
var includeAssetSourceTypes: PHAssetSourceType { get set }
```

<a id="Discussion"></a>

## Discussion

Asset source types identify the means by which an asset enters the Photos library, and affect the possible actions you can perform on an asset. For example, assets synced from iTunes cannot be edited or deleted.

The [PHAssetSourceType](../phassetsourcetype.md) type is an option set—to include multiple source types in the same query, combine type constants with the bitwise OR operator (Objective-C) or OptionSetType set syntax (Swift).

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

# includeAssetSourceTypes (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The set of source types for which to include assets in the fetch result.

## Declaration

```objectivec
@property (nonatomic, assign) PHAssetSourceType includeAssetSourceTypes;
```

<a id="Discussion"></a>

## Discussion

Asset source types identify the means by which an asset enters the Photos library, and affect the possible actions you can perform on an asset. For example, assets synced from iTunes cannot be edited or deleted.

The [PHAssetSourceType](../phassetsourcetype.md) type is an option set—to include multiple source types in the same query, combine type constants with the bitwise OR operator (Objective-C) or OptionSetType set syntax (Swift).

## See Also

### Limiting Fetch Results

- [fetchLimit](fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [prefetchAssetExtendedMetadata](prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.
