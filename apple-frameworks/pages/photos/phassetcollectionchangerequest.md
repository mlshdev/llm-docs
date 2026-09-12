> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest)

# PHAssetCollectionChangeRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.

## Declaration

```swift
class PHAssetCollectionChangeRequest
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)

<a id="overview"></a>

## Overview

You use the [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md) class to request changes for [PHAssetCollection](phassetcollection.md) objects. To make changes to asset collections (such as user-created albums) in the Photos library, create a change request using the appropriate class method for the change you want to perform.

- Call the [creationRequestForAssetCollection(withTitle:)](phassetcollectionchangerequest/creationrequestforassetcollection%28withtitle_%29.md) method to create a new asset collection.
- Call the [deleteAssetCollections(\_:)](phassetcollectionchangerequest/deleteassetcollections%28__%29.md) method to delete existing asset collections.
- Call the [init(for:)](phassetcollectionchangerequest/init%28for_%29.md) or [init(for:assets:)](phassetcollectionchangerequest/init%28for_assets_%29.md) method to modify a collection’s metadata or list of member assets.

Before creating a change request, use the [canPerform(\_:)](phcollection/canperform%28__%29.md) method to verify that the collection allows the edit operation you’re requesting. If you attempt to perform an unsupported edit operation, Photos throws an exception.

A change request for creating or modifying an asset collection works like a mutable version of the asset collection object. Use the change request’s properties and instance methods to request changes to the asset collection itself. For example, the following code removes an asset from an album.

**Swift**

```swift
PHPhotoLibrary.shared().performChanges {

    let request = PHAssetCollectionChangeRequest(for: myAlbum,
                                                 assets: albumAssetsFetchResult)
    
    request!.removeAssets([asset] as NSFastEnumeration)

} completionHandler: { success, error in
    print("Finished removing the asset from the album. \(success ? "Success" : String(describing: error))")
}
```

**Objective-C**

```objc
[[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        
    PHAssetCollectionChangeRequest *request =
        [PHAssetCollectionChangeRequest changeRequestForAssetCollection:myAlbum
                                                                 assets:albumAssetsFetchResult];
        
    [request removeAssets:@[asset]];
     
} completionHandler:^(BOOL success, NSError *error) {
    NSLog(@"Finished removing the asset from the album. %@", (success ? @"Success" : error));
}];
```

After Photos runs the change block and calls your completion handler, the asset collection’s state reflects the changes you requested in the block.

If you create or use a change request object outside a photo library change block, Photos raises an Objective-C exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Adding New Asset Collections

- [creationRequestForAssetCollection(withTitle:)](phassetcollectionchangerequest/creationrequestforassetcollection%28withtitle_%29.md): Creates a request for adding a new asset collection to the Photos library.
- [placeholderForCreatedAssetCollection](phassetcollectionchangerequest/placeholderforcreatedassetcollection.md): A placeholder object for the asset collection that the change request creates.

### Deleting Asset Collections

- [deleteAssetCollections(\_:)](phassetcollectionchangerequest/deleteassetcollections%28__%29.md): Requests that the specified asset collections be deleted.

### Modifying Asset Collections

- [init(for:)](phassetcollectionchangerequest/init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [init(for:assets:)](phassetcollectionchangerequest/init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](phassetcollectionchangerequest/title.md): The displayed name of the asset collection.
- [addAssets(\_:)](phassetcollectionchangerequest/addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets(\_:at:)](phassetcollectionchangerequest/insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets(\_:)](phassetcollectionchangerequest/removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssets(at:)](phassetcollectionchangerequest/removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssets(at:withAssets:)](phassetcollectionchangerequest/replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssets(at:to:)](phassetcollectionchangerequest/moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.

### Initializers

- [init(forAssetCollection:)](phassetcollectionchangerequest/init%28forassetcollection_%29.md)
- [init(forAssetCollection:assets:)](phassetcollectionchangerequest/init%28forassetcollection_assets_%29.md)

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
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

# PHAssetCollectionChangeRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.

## Declaration

```objectivec
@interface PHAssetCollectionChangeRequest : PHChangeRequest
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)

<a id="overview"></a>

## Overview

You use the [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md) class to request changes for [PHAssetCollection](phassetcollection.md) objects. To make changes to asset collections (such as user-created albums) in the Photos library, create a change request using the appropriate class method for the change you want to perform.

- Call the [creationRequestForAssetCollectionWithTitle:](phassetcollectionchangerequest/creationrequestforassetcollection%28withtitle_%29.md) method to create a new asset collection.
- Call the [deleteAssetCollections:](phassetcollectionchangerequest/deleteassetcollections%28__%29.md) method to delete existing asset collections.
- Call the [changeRequestForAssetCollection:](phassetcollectionchangerequest/init%28for_%29.md) or [changeRequestForAssetCollection:assets:](phassetcollectionchangerequest/init%28for_assets_%29.md) method to modify a collection’s metadata or list of member assets.

Before creating a change request, use the [canPerformEditOperation:](phcollection/canperform%28__%29.md) method to verify that the collection allows the edit operation you’re requesting. If you attempt to perform an unsupported edit operation, Photos throws an exception.

A change request for creating or modifying an asset collection works like a mutable version of the asset collection object. Use the change request’s properties and instance methods to request changes to the asset collection itself. For example, the following code removes an asset from an album.

**Swift**

```swift
PHPhotoLibrary.shared().performChanges {

    let request = PHAssetCollectionChangeRequest(for: myAlbum,
                                                 assets: albumAssetsFetchResult)
    
    request!.removeAssets([asset] as NSFastEnumeration)

} completionHandler: { success, error in
    print("Finished removing the asset from the album. \(success ? "Success" : String(describing: error))")
}
```

**Objective-C**

```objc
[[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        
    PHAssetCollectionChangeRequest *request =
        [PHAssetCollectionChangeRequest changeRequestForAssetCollection:myAlbum
                                                                 assets:albumAssetsFetchResult];
        
    [request removeAssets:@[asset]];
     
} completionHandler:^(BOOL success, NSError *error) {
    NSLog(@"Finished removing the asset from the album. %@", (success ? @"Success" : error));
}];
```

After Photos runs the change block and calls your completion handler, the asset collection’s state reflects the changes you requested in the block.

If you create or use a change request object outside a photo library change block, Photos raises an Objective-C exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Adding New Asset Collections

- [creationRequestForAssetCollectionWithTitle:](phassetcollectionchangerequest/creationrequestforassetcollection%28withtitle_%29.md): Creates a request for adding a new asset collection to the Photos library.
- [placeholderForCreatedAssetCollection](phassetcollectionchangerequest/placeholderforcreatedassetcollection.md): A placeholder object for the asset collection that the change request creates.

### Deleting Asset Collections

- [deleteAssetCollections:](phassetcollectionchangerequest/deleteassetcollections%28__%29.md): Requests that the specified asset collections be deleted.

### Modifying Asset Collections

- [changeRequestForAssetCollection:](phassetcollectionchangerequest/init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [changeRequestForAssetCollection:assets:](phassetcollectionchangerequest/init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](phassetcollectionchangerequest/title.md): The displayed name of the asset collection.
- [addAssets:](phassetcollectionchangerequest/addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets:atIndexes:](phassetcollectionchangerequest/insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets:](phassetcollectionchangerequest/removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssetsAtIndexes:](phassetcollectionchangerequest/removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssetsAtIndexes:withAssets:](phassetcollectionchangerequest/replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssetsAtIndexes:toIndex:](phassetcollectionchangerequest/moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.

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
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.
