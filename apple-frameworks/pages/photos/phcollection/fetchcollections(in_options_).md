> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollection/fetchcollections(in:options:)](https://developer.apple.com/documentation/photos/phcollection/fetchcollections(in:options:))

# fetchCollections(in:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collections from the specified collection list.

## Declaration

```swift
class func fetchCollections(in collectionList: PHCollectionList, options: PHFetchOptions?) -> PHFetchResult<PHCollection>
```

## Parameters

- `collectionList`: The collection list from which to fetch collections.
- `options`: Options that specify a filter predicate and sort order for the fetched collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollection](../phcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all collections in the specified collection list. To retrieve a more specific set of assets, provide a [PHFetchOptions](../phfetchoptions.md) object that contains a filter predicate.

## See Also

### Fetching Collections

- [fetchTopLevelUserCollections(with:)](fetchtoplevelusercollections%28with_%29.md): Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.

# fetchCollectionsInCollectionList:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collections from the specified collection list.

## Declaration

```objectivec
+ (PHFetchResult<PHCollection *> *) fetchCollectionsInCollectionList:(PHCollectionList *) collectionList options:(PHFetchOptions *) options;
```

## Parameters

- `collectionList`: The collection list from which to fetch collections.
- `options`: Options that specify a filter predicate and sort order for the fetched collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollection](../phcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all collections in the specified collection list. To retrieve a more specific set of assets, provide a [PHFetchOptions](../phfetchoptions.md) object that contains a filter predicate.

## See Also

### Fetching Collections

- [fetchTopLevelUserCollectionsWithOptions:](fetchtoplevelusercollections%28with_%29.md): Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.
