> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/fetchassets(withburstidentifier:options:)](https://developer.apple.com/documentation/photos/phasset/fetchassets(withburstidentifier:options:))

# fetchAssets(withBurstIdentifier:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves assets with the specified burst photo sequence identifier.

## Declaration

```swift
class func fetchAssets(withBurstIdentifier burstIdentifier: String, options: PHFetchOptions?) -> PHFetchResult<PHAsset>
```

## Parameters

- `burstIdentifier`: A burst identifier string, as provided by the [burstIdentifier](burstidentifier.md) property of an asset.
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

A burst photo sequence, as seen in the Photos app, corresponds to a group of Photos assets that share the same [burstIdentifier](burstidentifier.md) string.

By default, the returned [PHFetchResult](../phfetchresult.md) object contains only the representative asset and any user-picked photos from the burst sequence. To retrieve all photos in the burst sequence, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssets(in:options:)](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssets(with:options:)](fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssets(withLocalIdentifiers:options:)](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssets(in:options:)](fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssets(with:)](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssets(withALAssetURLs:options:)](fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.

# fetchAssetsWithBurstIdentifier:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves assets with the specified burst photo sequence identifier.

## Declaration

```objectivec
+ (PHFetchResult<PHAsset *> *) fetchAssetsWithBurstIdentifier:(NSString *) burstIdentifier options:(PHFetchOptions *) options;
```

## Parameters

- `burstIdentifier`: A burst identifier string, as provided by the [burstIdentifier](burstidentifier.md) property of an asset.
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

A burst photo sequence, as seen in the Photos app, corresponds to a group of Photos assets that share the same [burstIdentifier](burstidentifier.md) string.

By default, the returned [PHFetchResult](../phfetchresult.md) object contains only the representative asset and any user-picked photos from the burst sequence. To retrieve all photos in the burst sequence, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssetsInAssetCollection:options:](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssetsWithMediaType:options:](fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssetsWithLocalIdentifiers:options:](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssetsInAssetCollection:options:](fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssetsWithOptions:](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssetsWithALAssetURLs:options:](fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.
