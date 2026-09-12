> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/deletecollectionlists(_:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/deletecollectionlists(_:))

# deleteCollectionLists(\_:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests to delete the specified asset collections.

## Declaration

```swift
class func deleteCollectionLists(_ collectionLists: any NSFastEnumeration)
```

## Parameters

- `collectionLists`: An array of [PHCollectionList](../phcollectionlist.md) objects to be deleted.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to delete collection lists. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

> **Important**

>  Deleting a collection list also deletes any child collections it contains. To preserve those collections, remove them from the collection list (with the [removeChildCollections(\_:)](removechildcollections%28__%29.md) or [removeChildCollections(at:)](removechildcollections%28at_%29.md) method) before deleting it. Deleting a collection list does not delete assets contained in its child collections.

## See Also

### Managing Collection Lists

- [creationRequestForCollectionList(withTitle:)](creationrequestforcollectionlist%28withtitle_%29.md): Creates a request for adding a new collection list to the Photos library.
- [placeholderForCreatedCollectionList](placeholderforcreatedcollectionlist.md): A placeholder object for the collection list that the change request creates.

# deleteCollectionLists: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests to delete the specified asset collections.

## Declaration

```objectivec
+ (void) deleteCollectionLists:(id<NSFastEnumeration>) collectionLists;
```

## Parameters

- `collectionLists`: An array of [PHCollectionList](../phcollectionlist.md) objects to be deleted.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to delete collection lists. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

> **Important**

>  Deleting a collection list also deletes any child collections it contains. To preserve those collections, remove them from the collection list (with the [removeChildCollections:](removechildcollections%28__%29.md) or [removeChildCollectionsAtIndexes:](removechildcollections%28at_%29.md) method) before deleting it. Deleting a collection list does not delete assets contained in its child collections.

## See Also

### Managing Collection Lists

- [creationRequestForCollectionListWithTitle:](creationrequestforcollectionlist%28withtitle_%29.md): Creates a request for adding a new collection list to the Photos library.
- [placeholderForCreatedCollectionList](placeholderforcreatedcollectionlist.md): A placeholder object for the collection list that the change request creates.
