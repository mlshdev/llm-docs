> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest/placeholderforcreatedcollectionlist](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest/placeholderforcreatedcollectionlist)

# placeholderForCreatedCollectionList (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A placeholder object for the collection list that the change request creates.

## Declaration

```swift
var placeholderForCreatedCollectionList: PHObjectPlaceholder { get }
```

<a id="Discussion"></a>

## Discussion

Use this property if you need to reference the collection created by a change request within the same change block. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

## See Also

### Managing Collection Lists

- [creationRequestForCollectionList(withTitle:)](creationrequestforcollectionlist%28withtitle_%29.md): Creates a request for adding a new collection list to the Photos library.
- [deleteCollectionLists(\_:)](deletecollectionlists%28__%29.md): Requests to delete the specified asset collections.

# placeholderForCreatedCollectionList (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A placeholder object for the collection list that the change request creates.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHObjectPlaceholder * placeholderForCreatedCollectionList;
```

<a id="Discussion"></a>

## Discussion

Use this property if you need to reference the collection created by a change request within the same change block. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

## See Also

### Managing Collection Lists

- [creationRequestForCollectionListWithTitle:](creationrequestforcollectionlist%28withtitle_%29.md): Creates a request for adding a new collection list to the Photos library.
- [deleteCollectionLists:](deletecollectionlists%28__%29.md): Requests to delete the specified asset collections.
