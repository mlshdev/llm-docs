> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/fetchassets(with:options:)](https://developer.apple.com/documentation/photos/phasset/fetchassets(with:options:))

# fetchAssets(with:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves assets with the specified media type.

## Declaration

```swift
class func fetchAssets(with mediaType: PHAssetMediaType, options: PHFetchOptions?) -> PHFetchResult<PHAsset>
```

## Parameters

- `mediaType`: A media type, such as image or video. See [PHAssetMediaType](../phassetmediatype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all assets with the specified type. To retrieve a more specific set of assets, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

By default, fetch results do not include photos synced to the device through iTunes or stored in iCloud Shared Albums. To change this behavior, use the [includeAssetSourceTypes](../phfetchoptions/includeassetsourcetypes.md) property in the `options` parameter.

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssets(in:options:)](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssets(withLocalIdentifiers:options:)](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssets(in:options:)](fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssets(with:)](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssets(withBurstIdentifier:options:)](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssets(withALAssetURLs:options:)](fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.

# fetchAssetsWithMediaType:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves assets with the specified media type.

## Declaration

```objectivec
+ (PHFetchResult<PHAsset *> *) fetchAssetsWithMediaType:(PHAssetMediaType) mediaType options:(PHFetchOptions *) options;
```

## Parameters

- `mediaType`: A media type, such as image or video. See [PHAssetMediaType](../phassetmediatype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all assets with the specified type. To retrieve a more specific set of assets, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

By default, fetch results do not include photos synced to the device through iTunes or stored in iCloud Shared Albums. To change this behavior, use the [includeAssetSourceTypes](../phfetchoptions/includeassetsourcetypes.md) property in the `options` parameter.

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssetsInAssetCollection:options:](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssetsWithLocalIdentifiers:options:](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssetsInAssetCollection:options:](fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssetsWithOptions:](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssetsWithBurstIdentifier:options:](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssetsWithALAssetURLs:options:](fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.
