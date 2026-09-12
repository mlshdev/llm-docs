> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/init(for:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/init(for:))

# init(for:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for modifying the specified collection list.

## Declaration

```swift
convenience init?(for collectionList: PHCollectionList)
```

## Parameters

- `collectionList`: The collection list to be modified.

<a id="return-value"></a>

## Return Value

A collection list change request.

<a id="Discussion"></a>

## Discussion

After you create a change request within a photo library change block, propose changes to the collection’s title or list of child collections with the properties and instance methods of the change request. After Photos runs your change block, the collection list reflects your changes. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

Use this method when modifying a collection list’s metadata or when adding or removing child collections without regard to their arrangement. To work with indexes in the list of child collections, use the [init(for:childCollections:)](init%28for_childcollections_%29.md) method instead.

## See Also

### Creating a Change Request

- [init(for:childCollections:)](init%28for_childcollections_%29.md): Creates a request for modifying the specified collection list, with a fetch result for tracking changes.
- [init(forTopLevelCollectionListUserCollections:)](init%28fortoplevelcollectionlistusercollections_%29.md): Creates a request to add, remove, or rearrange child collections in the top-level collection list.

# changeRequestForCollectionList: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for modifying the specified collection list.

## Declaration

```objectivec
+ (instancetype) changeRequestForCollectionList:(PHCollectionList *) collectionList;
```

## Parameters

- `collectionList`: The collection list to be modified.

<a id="return-value"></a>

## Return Value

A collection list change request.

<a id="Discussion"></a>

## Discussion

After you create a change request within a photo library change block, propose changes to the collection’s title or list of child collections with the properties and instance methods of the change request. After Photos runs your change block, the collection list reflects your changes. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

Use this method when modifying a collection list’s metadata or when adding or removing child collections without regard to their arrangement. To work with indexes in the list of child collections, use the [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md) method instead.

## See Also

### Creating a Change Request

- [changeRequestForCollectionList:childCollections:](init%28for_childcollections_%29.md): Creates a request for modifying the specified collection list, with a fetch result for tracking changes.
- [changeRequestForTopLevelCollectionListUserCollections:](init%28fortoplevelcollectionlistusercollections_%29.md): Creates a request to add, remove, or rearrange child collections in the top-level collection list.
