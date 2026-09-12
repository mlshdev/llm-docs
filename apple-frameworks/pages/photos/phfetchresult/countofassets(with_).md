> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/countofassets(with:)](https://developer.apple.com/documentation/photos/phfetchresult/countofassets(with:))

# countOfAssets(with:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the number of assets in the fetch result of a specified type.

## Declaration

```swift
func countOfAssets(with mediaType: PHAssetMediaType) -> Int
```

## Parameters

- `mediaType`: The type of assets to count, such as image or video. See [PHAssetMediaType](../phassetmediatype.md).

<a id="return-value"></a>

## Return Value

The number of assets in the fetch result of the specified type.

<a id="Discussion"></a>

## Discussion

The first time you call this method, Photos enumerates the contents of the fetch result to count those of the specified type, then caches the result. Subsequent calls with the same `mediaType` parameter return the cached value.

This method counts only the [PHAsset](../phasset.md) objects in a fetch result. If a fetch result contains only [PHAssetCollection](../phassetcollection.md) or [PHCollectionList](../phcollectionlist.md) objects, the return value is `0`.

## See Also

### Querying a Fetch Result

- [contains(\_:)](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object located at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.

# countOfAssetsWithMediaType: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the number of assets in the fetch result of a specified type.

## Declaration

```objectivec
- (NSUInteger) countOfAssetsWithMediaType:(PHAssetMediaType) mediaType;
```

## Parameters

- `mediaType`: The type of assets to count, such as image or video. See [PHAssetMediaType](../phassetmediatype.md).

<a id="return-value"></a>

## Return Value

The number of assets in the fetch result of the specified type.

<a id="Discussion"></a>

## Discussion

The first time you call this method, Photos enumerates the contents of the fetch result to count those of the specified type, then caches the result. Subsequent calls with the same `mediaType` parameter return the cached value.

This method counts only the [PHAsset](../phasset.md) objects in a fetch result. If a fetch result contains only [PHAssetCollection](../phassetcollection.md) or [PHCollectionList](../phcollectionlist.md) objects, the return value is `0`.

## See Also

### Querying a Fetch Result

- [containsObject:](contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](count.md): The number of objects in the fetch result.
- [firstObject](firstobject.md): The first object in the fetch result.
- [lastObject](lastobject.md): The last object in the fetch result.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object located at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.
