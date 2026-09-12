> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/transientcollectionlist(withcollectionsfetchresult:title:)](https://developer.apple.com/documentation/photos/phcollectionlist/transientcollectionlist(withcollectionsfetchresult:title:))

# transientCollectionList(withCollectionsFetchResult:title:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a temporary collection list containing the asset collections in the specified fetch result.

## Declaration

```swift
class func transientCollectionList(withCollectionsFetchResult fetchResult: PHFetchResult<PHCollection>, title: String?) -> PHCollectionList
```

## Parameters

- `fetchResult`: A fetch result that contains one or more [PHAssetCollection](../phassetcollection.md) objects.
- `title`: A name for the new temporary collection list.

<a id="return-value"></a>

## Return Value

A new collection list.

<a id="Discussion"></a>

## Discussion

Transient collection lists are not saved to local storage or iCloud and do not appear in the Photos application or other apps using the Photos framework. A transient collection can be useful if you’ve designed a UI for displaying the contents of a collection list and want to display an arbitrary set of collections.

## See Also

### Creating Temporary Collection Lists

- [transientCollectionList(with:title:)](transientcollectionlist%28with_title_%29.md): Creates a temporary collection list that contains the specified asset collections.

# transientCollectionListWithCollectionsFetchResult:title: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a temporary collection list containing the asset collections in the specified fetch result.

## Declaration

```objectivec
+ (PHCollectionList *) transientCollectionListWithCollectionsFetchResult:(PHFetchResult<PHCollection *> *) fetchResult title:(NSString *) title;
```

## Parameters

- `fetchResult`: A fetch result that contains one or more [PHAssetCollection](../phassetcollection.md) objects.
- `title`: A name for the new temporary collection list.

<a id="return-value"></a>

## Return Value

A new collection list.

<a id="Discussion"></a>

## Discussion

Transient collection lists are not saved to local storage or iCloud and do not appear in the Photos application or other apps using the Photos framework. A transient collection can be useful if you’ve designed a UI for displaying the contents of a collection list and want to display an arbitrary set of collections.

## See Also

### Creating Temporary Collection Lists

- [transientCollectionListWithCollections:title:](transientcollectionlist%28with_title_%29.md): Creates a temporary collection list that contains the specified asset collections.
