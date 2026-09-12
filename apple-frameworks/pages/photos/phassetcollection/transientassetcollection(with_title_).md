> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/transientassetcollection(with:title:)](https://developer.apple.com/documentation/photos/phassetcollection/transientassetcollection(with:title:))

# transientAssetCollection(with:title:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a temporary asset collection containing the specified assets.

## Declaration

```swift
class func transientAssetCollection(with assets: [PHAsset], title: String?) -> PHAssetCollection
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects.
- `title`: A name for the new temporary asset collection.

<a id="return-value"></a>

## Return Value

A new asset collection.

<a id="Discussion"></a>

## Discussion

Transient asset collections are not saved to local storage or iCloud and do not appear in the Photos app or other apps using the Photos framework. A transient collection can be useful if you’ve designed a UI for displaying the contents of a collection and want to display an arbitrary set of assets.

## See Also

### Creating Temporary Asset Collections

- [transientAssetCollection(withAssetFetchResult:title:)](transientassetcollection%28withassetfetchresult_title_%29.md): Creates a temporary asset collection containing the assets from the specified fetch result.

# transientAssetCollectionWithAssets:title: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a temporary asset collection containing the specified assets.

## Declaration

```objectivec
+ (PHAssetCollection *) transientAssetCollectionWithAssets:(NSArray<PHAsset *> *) assets title:(NSString *) title;
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects.
- `title`: A name for the new temporary asset collection.

<a id="return-value"></a>

## Return Value

A new asset collection.

<a id="Discussion"></a>

## Discussion

Transient asset collections are not saved to local storage or iCloud and do not appear in the Photos app or other apps using the Photos framework. A transient collection can be useful if you’ve designed a UI for displaying the contents of a collection and want to display an arbitrary set of assets.

## See Also

### Creating Temporary Asset Collections

- [transientAssetCollectionWithAssetFetchResult:title:](transientassetcollection%28withassetfetchresult_title_%29.md): Creates a temporary asset collection containing the assets from the specified fetch result.
