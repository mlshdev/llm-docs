> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollection/fetchtoplevelusercollections(with:)](https://developer.apple.com/documentation/photos/phcollection/fetchtoplevelusercollections(with:))

# fetchTopLevelUserCollections(with:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.

## Declaration

```swift
class func fetchTopLevelUserCollections(with options: PHFetchOptions?) -> PHFetchResult<PHCollection>
```

## Parameters

- `options`: Options that specify a filter predicate and sort order for the fetched collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollection](../phcollection.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Collections

- [fetchCollections(in:options:)](fetchcollections%28in_options_%29.md): Retrieves collections from the specified collection list.

# fetchTopLevelUserCollectionsWithOptions: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.

## Declaration

```objectivec
+ (PHFetchResult<PHCollection *> *) fetchTopLevelUserCollectionsWithOptions:(PHFetchOptions *) options;
```

## Parameters

- `options`: Options that specify a filter predicate and sort order for the fetched collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollection](../phcollection.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Collections

- [fetchCollectionsInCollectionList:options:](fetchcollections%28in_options_%29.md): Retrieves collections from the specified collection list.
