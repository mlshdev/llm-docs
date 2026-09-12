> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/transientcollectionlist(with:title:)](https://developer.apple.com/documentation/photos/phcollectionlist/transientcollectionlist(with:title:))

# transientCollectionList(with:title:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a temporary collection list that contains the specified asset collections.

## Declaration

```swift
class func transientCollectionList(with collections: [PHCollection], title: String?) -> PHCollectionList
```

## Parameters

- `collections`: An array of [PHAssetCollection](../phassetcollection.md) objects.
- `title`: A name for the new temporary collection list.

<a id="return-value"></a>

## Return Value

A new collection list.

<a id="Discussion"></a>

## Discussion

Transient collection lists are not saved to local storage or iCloud and do not appear in the Photos application or other apps using the Photos framework. A transient collection can be useful if you’ve designed a UI for displaying the contents of a collection list and want to display an arbitrary set of collections.

## See Also

### Creating Temporary Collection Lists

- [transientCollectionList(withCollectionsFetchResult:title:)](transientcollectionlist%28withcollectionsfetchresult_title_%29.md): Creates a temporary collection list containing the asset collections in the specified fetch result.

# transientCollectionListWithCollections:title: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a temporary collection list that contains the specified asset collections.

## Declaration

```objectivec
+ (PHCollectionList *) transientCollectionListWithCollections:(NSArray<PHCollection *> *) collections title:(NSString *) title;
```

## Parameters

- `collections`: An array of [PHAssetCollection](../phassetcollection.md) objects.
- `title`: A name for the new temporary collection list.

<a id="return-value"></a>

## Return Value

A new collection list.

<a id="Discussion"></a>

## Discussion

Transient collection lists are not saved to local storage or iCloud and do not appear in the Photos application or other apps using the Photos framework. A transient collection can be useful if you’ve designed a UI for displaying the contents of a collection list and want to display an arbitrary set of collections.

## See Also

### Creating Temporary Collection Lists

- [transientCollectionListWithCollectionsFetchResult:title:](transientcollectionlist%28withcollectionsfetchresult_title_%29.md): Creates a temporary collection list containing the asset collections in the specified fetch result.
