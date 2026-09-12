> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest/placeholderforcreatedassetcollection](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/placeholderforcreatedassetcollection)

# placeholderForCreatedAssetCollection (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A placeholder object for the asset collection that the change request creates.

## Declaration

```swift
var placeholderForCreatedAssetCollection: PHObjectPlaceholder { get }
```

<a id="Discussion"></a>

## Discussion

Use this property if you need to reference the asset collection created by a change request within the same change block. For example, the following code, when included in a photo library change block, creates an asset collection and then adds it to a collection list.

**Swift**

```swift
let createAlbumRequest = PHAssetCollectionChangeRequest.creationRequestForAssetCollection(withTitle: "New Album")
let albumPlaceholder = createAlbumRequest.placeholderForCreatedAssetCollection
let folderChangeRequest = PHCollectionListChangeRequest(for: folder)
folderChangeRequest!.addChildCollections([albumPlaceholder] as NSFastEnumeration)
```

**Objective-C**

```objc
PHAssetCollectionChangeRequest *createAlbumRequest =
    [PHAssetCollectionChangeRequest creationRequestForAssetCollectionWithTitle:@"New Album"];
PHObjectPlaceholder *albumPlaceholder = createAlbumRequest.placeholderForCreatedAssetCollection;
PHCollectionListChangeRequest *folderChangeRequest =
    [PHCollectionListChangeRequest changeRequestForCollectionList:folder];
[folderChangeRequest addChildCollections:@[ albumPlaceholder ]];
```

For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

## See Also

### Adding New Asset Collections

- [creationRequestForAssetCollection(withTitle:)](creationrequestforassetcollection%28withtitle_%29.md): Creates a request for adding a new asset collection to the Photos library.

# placeholderForCreatedAssetCollection (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A placeholder object for the asset collection that the change request creates.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHObjectPlaceholder * placeholderForCreatedAssetCollection;
```

<a id="Discussion"></a>

## Discussion

Use this property if you need to reference the asset collection created by a change request within the same change block. For example, the following code, when included in a photo library change block, creates an asset collection and then adds it to a collection list.

**Swift**

```swift
let createAlbumRequest = PHAssetCollectionChangeRequest.creationRequestForAssetCollection(withTitle: "New Album")
let albumPlaceholder = createAlbumRequest.placeholderForCreatedAssetCollection
let folderChangeRequest = PHCollectionListChangeRequest(for: folder)
folderChangeRequest!.addChildCollections([albumPlaceholder] as NSFastEnumeration)
```

**Objective-C**

```objc
PHAssetCollectionChangeRequest *createAlbumRequest =
    [PHAssetCollectionChangeRequest creationRequestForAssetCollectionWithTitle:@"New Album"];
PHObjectPlaceholder *albumPlaceholder = createAlbumRequest.placeholderForCreatedAssetCollection;
PHCollectionListChangeRequest *folderChangeRequest =
    [PHCollectionListChangeRequest changeRequestForCollectionList:folder];
[folderChangeRequest addChildCollections:@[ albumPlaceholder ]];
```

For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

## See Also

### Adding New Asset Collections

- [creationRequestForAssetCollectionWithTitle:](creationrequestforassetcollection%28withtitle_%29.md): Creates a request for adding a new asset collection to the Photos library.
