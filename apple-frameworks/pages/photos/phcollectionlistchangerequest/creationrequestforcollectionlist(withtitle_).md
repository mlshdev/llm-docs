> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/creationrequestforcollectionlist(withtitle:)](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/creationrequestforcollectionlist(withtitle:))

# creationRequestForCollectionList(withTitle:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new collection list to the Photos library.

## Declaration

```swift
class func creationRequestForCollectionList(withTitle title: String) -> Self
```

## Parameters

- `title`: A name for the new collection list.

<a id="return-value"></a>

## Return Value

A collection list creation request.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new collection list. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To add collections to the newly created collection list or to change its title, use the methods listed in Managing Collections. To reference the newly created collection list later in the same change block or after the change block completes, use the [placeholderForCreatedCollectionList](placeholderforcreatedcollectionlist.md) property to retrieve a placeholder object.

## See Also

### Managing Collection Lists

- [placeholderForCreatedCollectionList](placeholderforcreatedcollectionlist.md): A placeholder object for the collection list that the change request creates.
- [deleteCollectionLists(\_:)](deletecollectionlists%28__%29.md): Requests to delete the specified asset collections.

# creationRequestForCollectionListWithTitle: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new collection list to the Photos library.

## Declaration

```objectivec
+ (instancetype) creationRequestForCollectionListWithTitle:(NSString *) title;
```

## Parameters

- `title`: A name for the new collection list.

<a id="return-value"></a>

## Return Value

A collection list creation request.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new collection list. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To add collections to the newly created collection list or to change its title, use the methods listed in Managing Collections. To reference the newly created collection list later in the same change block or after the change block completes, use the [placeholderForCreatedCollectionList](placeholderforcreatedcollectionlist.md) property to retrieve a placeholder object.

## See Also

### Managing Collection Lists

- [placeholderForCreatedCollectionList](placeholderforcreatedcollectionlist.md): A placeholder object for the collection list that the change request creates.
- [deleteCollectionLists:](deletecollectionlists%28__%29.md): Requests to delete the specified asset collections.
