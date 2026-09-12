> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest](https://developer.apple.com/documentation/photos/phassetchangerequest)

# PHAssetChangeRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.

## Declaration

```swift
class PHAssetChangeRequest
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)
- [Editing Asset Content](../photokit/editing-asset-content.md)

<a id="overview"></a>

## Overview

You use the [PHAssetChangeRequest](phassetchangerequest.md) class to request changes for [PHAsset](phasset.md) objects. To make changes to assets in the Photos library, create a change request by using the appropriate class method for the change you want to perform.

- Call one of the methods listed in Adding New Assets to create a new asset from an image or video file.
- Call the [deleteAssets(\_:)](phassetchangerequest/deleteassets%28__%29.md) method to delete existing assets.
- Call the [init(for:)](phassetchangerequest/init%28for_%29.md) method to modify an asset’s content or metadata.

A change request for creating or modifying an asset works like a mutable version of the asset object. Use the change request’s properties to request changes to the corresponding properties of the asset itself. For example, the following code uses the [isFavorite](phassetchangerequest/isfavorite.md) property of a change request to mark an asset as a favorite:

**Swift**

```swift
func toggleFavorite(for asset: PHAsset) {        
    PHPhotoLibrary.shared().performChanges {
        // Create a change request from the asset to be modified.
        let request = PHAssetChangeRequest(for: asset)
        // Set a property of the request to change the asset itself.
        request.isFavorite = !asset.isFavorite
    } completionHandler: { success, error in
        print("Finished updating asset. " + (success ? "Success." : error!.localizedDescription))
    }  
}
```

**Objective-C**

```objc
- (void)toggleFavoriteForAsset:(PHAsset *)asset {
    [[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        // Create a change request from the asset to be modified.
        PHAssetChangeRequest *request = [PHAssetChangeRequest changeRequestForAsset:asset];
        // Set a property of the request to change the asset itself.
        request.favorite = !asset.favorite;
    } completionHandler:^(BOOL success, NSError *error) {
        NSLog(@"Finished updating asset. %@", (success ? @"Success." : error));
    }];
}
```

After Photos runs the change block and calls your completion handler, the asset’s state reflects the changes that you requested in the block.

If you create or use a change request object outside a photo library change block, Photos raises an Objective-C exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Adding New Assets

- [creationRequestForAsset(from:)](phassetchangerequest/creationrequestforasset%28from_%29.md): Creates a request for adding a new image asset to the Photos library.
- [creationRequestForAssetFromImage(atFileURL:)](phassetchangerequest/creationrequestforassetfromimage%28atfileurl_%29.md): Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.
- [creationRequestForAssetFromVideo(atFileURL:)](phassetchangerequest/creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
- [placeholderForCreatedAsset](phassetchangerequest/placeholderforcreatedasset.md): A placeholder object for the asset that the change request creates.

### Deleting Assets

- [deleteAssets(\_:)](phassetchangerequest/deleteassets%28__%29.md): Requests that the specified assets be deleted.

### Modifying Assets

- [init(for:)](phassetchangerequest/init%28for_%29.md): Creates a request for modifying the specified asset.
- [creationDate](phassetchangerequest/creationdate.md): The date and time at which the asset claims to have been originally created.
- [location](phassetchangerequest/location.md): The location information saved with the asset.
- [isFavorite](phassetchangerequest/isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [isHidden](phassetchangerequest/ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](phassetchangerequest/caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword(\_:)](phassetchangerequest/addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [removeKeyword(\_:)](phassetchangerequest/removekeyword%28__%29.md)
- [rating](phassetchangerequest/rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled(\_:)](phassetchangerequest/setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)

### Editing Asset Content

- [contentEditingOutput](phassetchangerequest/contenteditingoutput.md): The output of an asset content editing session.
- [revertAssetContentToOriginal()](phassetchangerequest/revertassetcontenttooriginal%28%29.md): Request to revert any edits made to the asset’s content.
- [revertAssetContent(to:)](phassetchangerequest/revertassetcontent%28to_%29.md): Reverts the asset’s content to its original, choosing which original resource to use as the unadjusted base for all renders.

### Initializers

- [init(forAsset:)](phassetchangerequest/init%28forasset_%29.md)

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

### Inherited By

- [PHAssetCreationRequest](phassetcreationrequest.md)

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
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

# PHAssetChangeRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.

## Declaration

```objectivec
@interface PHAssetChangeRequest : PHChangeRequest
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)
- [Editing Asset Content](../photokit/editing-asset-content.md)

<a id="overview"></a>

## Overview

You use the [PHAssetChangeRequest](phassetchangerequest.md) class to request changes for [PHAsset](phasset.md) objects. To make changes to assets in the Photos library, create a change request by using the appropriate class method for the change you want to perform.

- Call one of the methods listed in Adding New Assets to create a new asset from an image or video file.
- Call the [deleteAssets:](phassetchangerequest/deleteassets%28__%29.md) method to delete existing assets.
- Call the [changeRequestForAsset:](phassetchangerequest/init%28for_%29.md) method to modify an asset’s content or metadata.

A change request for creating or modifying an asset works like a mutable version of the asset object. Use the change request’s properties to request changes to the corresponding properties of the asset itself. For example, the following code uses the [favorite](phassetchangerequest/isfavorite.md) property of a change request to mark an asset as a favorite:

**Swift**

```swift
func toggleFavorite(for asset: PHAsset) {        
    PHPhotoLibrary.shared().performChanges {
        // Create a change request from the asset to be modified.
        let request = PHAssetChangeRequest(for: asset)
        // Set a property of the request to change the asset itself.
        request.isFavorite = !asset.isFavorite
    } completionHandler: { success, error in
        print("Finished updating asset. " + (success ? "Success." : error!.localizedDescription))
    }  
}
```

**Objective-C**

```objc
- (void)toggleFavoriteForAsset:(PHAsset *)asset {
    [[PHPhotoLibrary sharedPhotoLibrary] performChanges:^{
        // Create a change request from the asset to be modified.
        PHAssetChangeRequest *request = [PHAssetChangeRequest changeRequestForAsset:asset];
        // Set a property of the request to change the asset itself.
        request.favorite = !asset.favorite;
    } completionHandler:^(BOOL success, NSError *error) {
        NSLog(@"Finished updating asset. %@", (success ? @"Success." : error));
    }];
}
```

After Photos runs the change block and calls your completion handler, the asset’s state reflects the changes that you requested in the block.

If you create or use a change request object outside a photo library change block, Photos raises an Objective-C exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Adding New Assets

- [creationRequestForAssetFromImage:](phassetchangerequest/creationrequestforasset%28from_%29.md): Creates a request for adding a new image asset to the Photos library.
- [creationRequestForAssetFromImageAtFileURL:](phassetchangerequest/creationrequestforassetfromimage%28atfileurl_%29.md): Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.
- [creationRequestForAssetFromVideoAtFileURL:](phassetchangerequest/creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
- [placeholderForCreatedAsset](phassetchangerequest/placeholderforcreatedasset.md): A placeholder object for the asset that the change request creates.

### Deleting Assets

- [deleteAssets:](phassetchangerequest/deleteassets%28__%29.md): Requests that the specified assets be deleted.

### Modifying Assets

- [changeRequestForAsset:](phassetchangerequest/init%28for_%29.md): Creates a request for modifying the specified asset.
- [creationDate](phassetchangerequest/creationdate.md): The date and time at which the asset claims to have been originally created.
- [location](phassetchangerequest/location.md): The location information saved with the asset.
- [favorite](phassetchangerequest/isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [hidden](phassetchangerequest/ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](phassetchangerequest/caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword:](phassetchangerequest/addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [removeKeyword:](phassetchangerequest/removekeyword%28__%29.md)
- [rating](phassetchangerequest/rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled:](phassetchangerequest/setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)

### Editing Asset Content

- [contentEditingOutput](phassetchangerequest/contenteditingoutput.md): The output of an asset content editing session.
- [revertAssetContentToOriginal](phassetchangerequest/revertassetcontenttooriginal%28%29.md): Request to revert any edits made to the asset’s content.
- [revertAssetContentToOriginalResourceChoice:](phassetchangerequest/revertassetcontent%28to_%29.md): Reverts the asset’s content to its original, choosing which original resource to use as the unadjusted base for all renders.

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

### Inherited By

- [PHAssetCreationRequest](phassetcreationrequest.md)

## See Also

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges:completionHandler:](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait:error:](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.
