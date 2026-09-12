> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photokit/requesting-changes-to-the-photo-library](https://developer.apple.com/documentation/photokit/requesting-changes-to-the-photo-library)

# Requesting Changes to the Photo Library (Swift)

**Framework:** Photos  
**Kind:** Article

Create, delete, or modify assets and collections in a photo library by making change requests.

<a id="overview"></a>

## Overview

Because [PHAsset](../photos/phasset.md), [PHAssetCollection](../photos/phassetcollection.md), and [PHCollectionList](../photos/phcollectionlist.md) instances are immutable objects, you can’t make changes to them. To modify the Photos assets or collections these objects represent, use the shared photo library to execute a change block. Inside the change block, create change request objects. Then apply a change block with one of the methods listed in Updating the Library. The changes you request take effect after Photos runs the change block and calls your completion handler.

Each of the change request classes—[PHAssetChangeRequest](../photos/phassetchangerequest.md), [PHAssetCollectionChangeRequest](../photos/phassetcollectionchangerequest.md), and [PHCollectionListChangeRequest](../photos/phcollectionlistchangerequest.md)—corresponds to an asset or collection class. Use these classes to make the following types of changes:

Creating items. Each change request class provides methods for requesting to create a new item of the corresponding asset or collection class. For example, use the [creationRequestForAssetCollection(withTitle:)](../photos/phassetcollectionchangerequest/creationrequestforassetcollection%28withtitle_%29.md) method to create an asset collection.

To reference a newly created request within the change block—for example, to add a new asset to a collection—use the [PHObjectPlaceholder](../photos/phobjectplaceholder.md) object provided by the change request. After the change block completes, use the placeholder object’s [localIdentifier](../photos/phobject/localidentifier.md) property to fetch the created object.

Deleting items. Each change request class provides methods for requesting to delete one or more items of the corresponding asset or collection class. For example, use the [deleteCollectionLists(\_:)](../photos/phcollectionlistchangerequest/deletecollectionlists%28__%29.md) method to delete collection lists.

Modifying items. You modify an existing asset or collection by creating a change request from a [PHAsset](../photos/phasset.md), [PHAssetCollection](../photos/phassetcollection.md), or [PHCollectionList](../photos/phcollectionlist.md) object representing it. For example, the [init(for:)](../photos/phassetchangerequest/init%28for_%29.md) method creates a change request you can use for modifying an asset.

After creating a change request, use its properties and instance methods to modify the corresponding features of the asset or collection it represents. For example, to set an asset’s [isFavorite](../photos/phasset/isfavorite.md) property, set the [isFavorite](../photos/phassetchangerequest/isfavorite.md) property of a change request created from that asset. To add to an asset collection, call the [addAssets(\_:)](../photos/phassetcollectionchangerequest/addassets%28__%29.md) method on an asset collection change request.

<a id="Create-an-Asset-for-an-Album"></a>

### Create an Asset for an Album

Use a change block to combine several changes to the photo library into a single atomic update. The following code uses a change block to create an asset from an image and add that asset to an album.

**Swift**

```swift
func addAsset(image: UIImage, to album: PHAssetCollection) {
    PHPhotoLibrary.shared().performChanges {
        // Request creating an asset from the image.
        let creationRequest = PHAssetChangeRequest.creationRequestForAsset(from: image)
        // Request editing the album.
        guard let addAssetRequest = PHAssetCollectionChangeRequest(for: album) else { return }
        // Get a placeholder for the new asset and add it to the album editing request.
        addAssetRequest.addAssets([creationRequest.placeholderForCreatedAsset!] as NSArray)
    } completionHandler: { success, error in
        if !success, let error = error {
            print("error creating asset: \(error)")
        }
    }
}
```

**Objective-C**

```objc
- (void) addNewAssetWithImage:(UIImage*)image toAlbum:(PHAssetCollection*)album 
{
    [[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        // Request creating an asset from the image.
        PHAssetChangeRequest* createAssetRequest = [PHAssetChangeRequest creationRequestForAssetFromImage:image];
         // Request editing the album.
        PHAssetCollectionChangeRequest* albumChangeRequest = [PHAssetCollectionChangeRequest changeRequestForAssetCollection:album];
         // Get a placeholder for the new asset and add it to the album editing request.
        PHObjectPlaceholder* assetPlaceholder = [createAssetRequest placeholderForCreatedAsset];        [albumChangeRequest addAssets:@[ assetPlaceholder ]];
     } completionHandler:^(BOOL success, NSError* error) {
        NSLog(@"Finished adding asset. %@", (success ? @"Success" : error));
    }];
}
```

For each call to the [performChanges(\_:completionHandler:)](../photos/phphotolibrary/performchanges%28__completionhandler_%29.md) or [performChangesAndWait(\_:)](../photos/phphotolibrary/performchangesandwait%28__%29.md) method, Photos shows an alert asking the user for permission to edit the contents of the photo library. If your app needs to submit several changes at once, combine them into a single change block.

For example, to add several new images in one batch, extend the code to create multiple [PHAssetChangeRequest](../photos/phassetchangerequest.md) objects using the [creationRequestForAsset(from:)](../photos/phassetchangerequest/creationrequestforasset%28from_%29.md) method. To edit the content of multiple existing photos, create multiple [PHAssetChangeRequest](../photos/phassetchangerequest.md) objects and set the [contentEditingOutput](../photos/phassetchangerequest/contenteditingoutput.md) property on each to an independent [PHContentEditingOutput](../photos/phcontenteditingoutput.md) object.

You can modify and delete assets in a similar way.

## See Also

### Updating the Library

- [performChanges(\_:completionHandler:)](../photos/phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait(\_:)](../photos/phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](../photos/phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](../photos/phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](../photos/phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](../photos/phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](../photos/phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

# Requesting Changes to the Photo Library (Objective-C)

**Framework:** Photos  
**Kind:** Article

Create, delete, or modify assets and collections in a photo library by making change requests.

<a id="overview"></a>

## Overview

Because [PHAsset](../photos/phasset.md), [PHAssetCollection](../photos/phassetcollection.md), and [PHCollectionList](../photos/phcollectionlist.md) instances are immutable objects, you can’t make changes to them. To modify the Photos assets or collections these objects represent, use the shared photo library to execute a change block. Inside the change block, create change request objects. Then apply a change block with one of the methods listed in Updating the Library. The changes you request take effect after Photos runs the change block and calls your completion handler.

Each of the change request classes—[PHAssetChangeRequest](../photos/phassetchangerequest.md), [PHAssetCollectionChangeRequest](../photos/phassetcollectionchangerequest.md), and [PHCollectionListChangeRequest](../photos/phcollectionlistchangerequest.md)—corresponds to an asset or collection class. Use these classes to make the following types of changes:

Creating items. Each change request class provides methods for requesting to create a new item of the corresponding asset or collection class. For example, use the [creationRequestForAssetCollectionWithTitle:](../photos/phassetcollectionchangerequest/creationrequestforassetcollection%28withtitle_%29.md) method to create an asset collection.

To reference a newly created request within the change block—for example, to add a new asset to a collection—use the [PHObjectPlaceholder](../photos/phobjectplaceholder.md) object provided by the change request. After the change block completes, use the placeholder object’s [localIdentifier](../photos/phobject/localidentifier.md) property to fetch the created object.

Deleting items. Each change request class provides methods for requesting to delete one or more items of the corresponding asset or collection class. For example, use the [deleteCollectionLists:](../photos/phcollectionlistchangerequest/deletecollectionlists%28__%29.md) method to delete collection lists.

Modifying items. You modify an existing asset or collection by creating a change request from a [PHAsset](../photos/phasset.md), [PHAssetCollection](../photos/phassetcollection.md), or [PHCollectionList](../photos/phcollectionlist.md) object representing it. For example, the [changeRequestForAsset:](../photos/phassetchangerequest/init%28for_%29.md) method creates a change request you can use for modifying an asset.

After creating a change request, use its properties and instance methods to modify the corresponding features of the asset or collection it represents. For example, to set an asset’s [favorite](../photos/phasset/isfavorite.md) property, set the [favorite](../photos/phassetchangerequest/isfavorite.md) property of a change request created from that asset. To add to an asset collection, call the [addAssets:](../photos/phassetcollectionchangerequest/addassets%28__%29.md) method on an asset collection change request.

<a id="Create-an-Asset-for-an-Album"></a>

### Create an Asset for an Album

Use a change block to combine several changes to the photo library into a single atomic update. The following code uses a change block to create an asset from an image and add that asset to an album.

**Swift**

```swift
func addAsset(image: UIImage, to album: PHAssetCollection) {
    PHPhotoLibrary.shared().performChanges {
        // Request creating an asset from the image.
        let creationRequest = PHAssetChangeRequest.creationRequestForAsset(from: image)
        // Request editing the album.
        guard let addAssetRequest = PHAssetCollectionChangeRequest(for: album) else { return }
        // Get a placeholder for the new asset and add it to the album editing request.
        addAssetRequest.addAssets([creationRequest.placeholderForCreatedAsset!] as NSArray)
    } completionHandler: { success, error in
        if !success, let error = error {
            print("error creating asset: \(error)")
        }
    }
}
```

**Objective-C**

```objc
- (void) addNewAssetWithImage:(UIImage*)image toAlbum:(PHAssetCollection*)album 
{
    [[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        // Request creating an asset from the image.
        PHAssetChangeRequest* createAssetRequest = [PHAssetChangeRequest creationRequestForAssetFromImage:image];
         // Request editing the album.
        PHAssetCollectionChangeRequest* albumChangeRequest = [PHAssetCollectionChangeRequest changeRequestForAssetCollection:album];
         // Get a placeholder for the new asset and add it to the album editing request.
        PHObjectPlaceholder* assetPlaceholder = [createAssetRequest placeholderForCreatedAsset];        [albumChangeRequest addAssets:@[ assetPlaceholder ]];
     } completionHandler:^(BOOL success, NSError* error) {
        NSLog(@"Finished adding asset. %@", (success ? @"Success" : error));
    }];
}
```

For each call to the [performChanges:completionHandler:](../photos/phphotolibrary/performchanges%28__completionhandler_%29.md) or [performChangesAndWait:error:](../photos/phphotolibrary/performchangesandwait%28__%29.md) method, Photos shows an alert asking the user for permission to edit the contents of the photo library. If your app needs to submit several changes at once, combine them into a single change block.

For example, to add several new images in one batch, extend the code to create multiple [PHAssetChangeRequest](../photos/phassetchangerequest.md) objects using the [creationRequestForAssetFromImage:](../photos/phassetchangerequest/creationrequestforasset%28from_%29.md) method. To edit the content of multiple existing photos, create multiple [PHAssetChangeRequest](../photos/phassetchangerequest.md) objects and set the [contentEditingOutput](../photos/phassetchangerequest/contenteditingoutput.md) property on each to an independent [PHContentEditingOutput](../photos/phcontenteditingoutput.md) object.

You can modify and delete assets in a similar way.

## See Also

### Updating the Library

- [performChanges:completionHandler:](../photos/phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait:error:](../photos/phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](../photos/phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](../photos/phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](../photos/phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](../photos/phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](../photos/phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.
