> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistchangerequest](https://developer.apple.com/documentation/photos/phcollectionlistchangerequest)

# PHCollectionListChangeRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create, delete, or modify a Photos collection list, for use in a photo library change block.

## Declaration

```swift
class PHCollectionListChangeRequest
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)

<a id="overview"></a>

## Overview

You use the [PHCollectionListChangeRequest](phcollectionlistchangerequest.md) class to request changes for [PHCollectionList](phcollectionlist.md) objects. To make changes to collection lists (such as folders containing user-created albums) in the Photos library, create a change request using the appropriate class method for the change you want to perform.

- Call the [creationRequestForCollectionList(withTitle:)](phcollectionlistchangerequest/creationrequestforcollectionlist%28withtitle_%29.md) method to create a new asset collection.
- Call the [deleteCollectionLists(\_:)](phcollectionlistchangerequest/deletecollectionlists%28__%29.md) method to delete existing asset collections.
- Call the [init(for:)](phcollectionlistchangerequest/init%28for_%29.md) or [init(for:childCollections:)](phcollectionlistchangerequest/init%28for_childcollections_%29.md) method to modify a collection’s metadata or its list of child collections.

Before creating a change request, use the [canPerform(\_:)](phcollection/canperform%28__%29.md) method to verify that the collection allows the edit operation you’re requesting. If you attempt to perform an unsupported edit operation, Photos throws an exception.

A change request for creating or modifying a collection list works like a mutable version of the collection list object. Use the change request’s properties and instance methods to request changes to the collection list itself. For example, the following code removes an album from a folder.

**Swift**

```swift
PHPhotoLibrary.shared().performChanges {
            
    let request = PHCollectionListChangeRequest(for: folder,
                                                childCollections: folderContentsFetchResult)
            
    request!.removeChildCollections([album!] as NSFastEnumeration)
            
} completionHandler: { success, error in
    print("Finished removing the album from the folder. \(success ? "Success" : String(describing: error))")
}
```

**Objective-C**

```objc
[[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        
    PHCollectionListChangeRequest *request =
        [PHCollectionListChangeRequest changeRequestForCollectionList:folder
                                                     childCollections:folderContentsFetchResult];
        
    [request removeChildCollections:@[ album ]];
     
} completionHandler:^(BOOL success, NSError *error) {
    NSLog(@"Finished removing the album from the folder. %@", (success ? @"Success" : error));
}];
```

After Photos runs the change block and calls your completion handler, the collection list’s state reflects the changes you requested in the block.

If you create or use a change request object outside a photo library change block, Photos raises an Objective-C exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Creating a Change Request

- [init(for:)](phcollectionlistchangerequest/init%28for_%29.md): Creates a request for modifying the specified collection list.
- [init(for:childCollections:)](phcollectionlistchangerequest/init%28for_childcollections_%29.md): Creates a request for modifying the specified collection list, with a fetch result for tracking changes.
- [init(forTopLevelCollectionListUserCollections:)](phcollectionlistchangerequest/init%28fortoplevelcollectionlistusercollections_%29.md): Creates a request to add, remove, or rearrange child collections in the top-level collection list.

### Managing Collection Lists

- [creationRequestForCollectionList(withTitle:)](phcollectionlistchangerequest/creationrequestforcollectionlist%28withtitle_%29.md): Creates a request for adding a new collection list to the Photos library.
- [placeholderForCreatedCollectionList](phcollectionlistchangerequest/placeholderforcreatedcollectionlist.md): A placeholder object for the collection list that the change request creates.
- [deleteCollectionLists(\_:)](phcollectionlistchangerequest/deletecollectionlists%28__%29.md): Requests to delete the specified asset collections.

### Managing Collections

- [addChildCollections(\_:)](phcollectionlistchangerequest/addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections(\_:at:)](phcollectionlistchangerequest/insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollections(at:to:)](phcollectionlistchangerequest/movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollections(at:withChildCollections:)](phcollectionlistchangerequest/replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections(\_:)](phcollectionlistchangerequest/removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollections(at:)](phcollectionlistchangerequest/removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.

### Inspecting the Request

- [title](phcollectionlistchangerequest/title.md): The displayed name of the collection list.

### Initializers

- [init(forCollectionList:)](phcollectionlistchangerequest/init%28forcollectionlist_%29.md)
- [init(forCollectionList:childCollections:)](phcollectionlistchangerequest/init%28forcollectionlist_childcollections_%29.md)

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges(\_:completionHandler:)](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait(\_:)](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

# PHCollectionListChangeRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create, delete, or modify a Photos collection list, for use in a photo library change block.

## Declaration

```objectivec
@interface PHCollectionListChangeRequest : PHChangeRequest
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)

<a id="overview"></a>

## Overview

You use the [PHCollectionListChangeRequest](phcollectionlistchangerequest.md) class to request changes for [PHCollectionList](phcollectionlist.md) objects. To make changes to collection lists (such as folders containing user-created albums) in the Photos library, create a change request using the appropriate class method for the change you want to perform.

- Call the [creationRequestForCollectionListWithTitle:](phcollectionlistchangerequest/creationrequestforcollectionlist%28withtitle_%29.md) method to create a new asset collection.
- Call the [deleteCollectionLists:](phcollectionlistchangerequest/deletecollectionlists%28__%29.md) method to delete existing asset collections.
- Call the [changeRequestForCollectionList:](phcollectionlistchangerequest/init%28for_%29.md) or [changeRequestForCollectionList:childCollections:](phcollectionlistchangerequest/init%28for_childcollections_%29.md) method to modify a collection’s metadata or its list of child collections.

Before creating a change request, use the [canPerformEditOperation:](phcollection/canperform%28__%29.md) method to verify that the collection allows the edit operation you’re requesting. If you attempt to perform an unsupported edit operation, Photos throws an exception.

A change request for creating or modifying a collection list works like a mutable version of the collection list object. Use the change request’s properties and instance methods to request changes to the collection list itself. For example, the following code removes an album from a folder.

**Swift**

```swift
PHPhotoLibrary.shared().performChanges {
            
    let request = PHCollectionListChangeRequest(for: folder,
                                                childCollections: folderContentsFetchResult)
            
    request!.removeChildCollections([album!] as NSFastEnumeration)
            
} completionHandler: { success, error in
    print("Finished removing the album from the folder. \(success ? "Success" : String(describing: error))")
}
```

**Objective-C**

```objc
[[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        
    PHCollectionListChangeRequest *request =
        [PHCollectionListChangeRequest changeRequestForCollectionList:folder
                                                     childCollections:folderContentsFetchResult];
        
    [request removeChildCollections:@[ album ]];
     
} completionHandler:^(BOOL success, NSError *error) {
    NSLog(@"Finished removing the album from the folder. %@", (success ? @"Success" : error));
}];
```

After Photos runs the change block and calls your completion handler, the collection list’s state reflects the changes you requested in the block.

If you create or use a change request object outside a photo library change block, Photos raises an Objective-C exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Creating a Change Request

- [changeRequestForCollectionList:](phcollectionlistchangerequest/init%28for_%29.md): Creates a request for modifying the specified collection list.
- [changeRequestForCollectionList:childCollections:](phcollectionlistchangerequest/init%28for_childcollections_%29.md): Creates a request for modifying the specified collection list, with a fetch result for tracking changes.
- [changeRequestForTopLevelCollectionListUserCollections:](phcollectionlistchangerequest/init%28fortoplevelcollectionlistusercollections_%29.md): Creates a request to add, remove, or rearrange child collections in the top-level collection list.

### Managing Collection Lists

- [creationRequestForCollectionListWithTitle:](phcollectionlistchangerequest/creationrequestforcollectionlist%28withtitle_%29.md): Creates a request for adding a new collection list to the Photos library.
- [placeholderForCreatedCollectionList](phcollectionlistchangerequest/placeholderforcreatedcollectionlist.md): A placeholder object for the collection list that the change request creates.
- [deleteCollectionLists:](phcollectionlistchangerequest/deletecollectionlists%28__%29.md): Requests to delete the specified asset collections.

### Managing Collections

- [addChildCollections:](phcollectionlistchangerequest/addchildcollections%28__%29.md): Adds the specified collections as children of the collection list.
- [insertChildCollections:atIndexes:](phcollectionlistchangerequest/insertchildcollections%28__at_%29.md): Inserts the specified collections into the collection list at the specified indexes.
- [moveChildCollectionsAtIndexes:toIndex:](phcollectionlistchangerequest/movechildcollections%28at_to_%29.md): Moves the child collections at the specified indexes in the collection list to a new index.
- [replaceChildCollectionsAtIndexes:withChildCollections:](phcollectionlistchangerequest/replacechildcollections%28at_withchildcollections_%29.md): Replaces the child collections at the specified indexes in the collection list with the specified collections.
- [removeChildCollections:](phcollectionlistchangerequest/removechildcollections%28__%29.md): Removes the specified child collections from the collection list.
- [removeChildCollectionsAtIndexes:](phcollectionlistchangerequest/removechildcollections%28at_%29.md): Removes the child collections at the specified indexes from the collection list.

### Inspecting the Request

- [title](phcollectionlistchangerequest/title.md): The displayed name of the collection list.

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges:completionHandler:](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait:error:](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.
