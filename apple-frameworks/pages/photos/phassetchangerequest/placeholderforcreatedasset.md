> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/placeholderforcreatedasset](https://developer.apple.com/documentation/photos/phassetchangerequest/placeholderforcreatedasset)

# placeholderForCreatedAsset (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A placeholder object for the asset that the change request creates.

## Declaration

```swift
var placeholderForCreatedAsset: PHObjectPlaceholder? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property if you need to reference the asset created by a change request within the same change block. For example, the following code, when included in a photo library change block, creates an asset and then adds it to a collection.

**Swift**

```swift
let createAssetRequest = PHAssetChangeRequest.creationRequestForAsset(from: image)
let assetPlaceholder = createAssetRequest.placeholderForCreatedAsset!
let albumChangeRequest = PHAssetCollectionChangeRequest(for: album)
albumChangeRequest!.addAssets([assetPlaceholder] as NSFastEnumeration)
```

**Objective-C**

```objc
PHAssetChangeRequest *createAssetRequest = [PHAssetChangeRequest creationRequestForAssetFromImage:image];
PHObjectPlaceholder *assetPlaceholder = createAssetRequest.placeholderForCreatedAsset;
PHAssetCollectionChangeRequest *albumChangeRequest =
    [PHAssetCollectionChangeRequest changeRequestForAssetCollection:album];
[albumChangeRequest addAssets:@[ assetPlaceholder ]];
```

For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

## See Also

### Adding New Assets

- [creationRequestForAsset(from:)](creationrequestforasset%28from_%29.md): Creates a request for adding a new image asset to the Photos library.
- [creationRequestForAssetFromImage(atFileURL:)](creationrequestforassetfromimage%28atfileurl_%29.md): Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.
- [creationRequestForAssetFromVideo(atFileURL:)](creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.

# placeholderForCreatedAsset (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A placeholder object for the asset that the change request creates.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHObjectPlaceholder * placeholderForCreatedAsset;
```

<a id="Discussion"></a>

## Discussion

Use this property if you need to reference the asset created by a change request within the same change block. For example, the following code, when included in a photo library change block, creates an asset and then adds it to a collection.

**Swift**

```swift
let createAssetRequest = PHAssetChangeRequest.creationRequestForAsset(from: image)
let assetPlaceholder = createAssetRequest.placeholderForCreatedAsset!
let albumChangeRequest = PHAssetCollectionChangeRequest(for: album)
albumChangeRequest!.addAssets([assetPlaceholder] as NSFastEnumeration)
```

**Objective-C**

```objc
PHAssetChangeRequest *createAssetRequest = [PHAssetChangeRequest creationRequestForAssetFromImage:image];
PHObjectPlaceholder *assetPlaceholder = createAssetRequest.placeholderForCreatedAsset;
PHAssetCollectionChangeRequest *albumChangeRequest =
    [PHAssetCollectionChangeRequest changeRequestForAssetCollection:album];
[albumChangeRequest addAssets:@[ assetPlaceholder ]];
```

For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

## See Also

### Adding New Assets

- [creationRequestForAssetFromImage:](creationrequestforasset%28from_%29.md): Creates a request for adding a new image asset to the Photos library.
- [creationRequestForAssetFromImageAtFileURL:](creationrequestforassetfromimage%28atfileurl_%29.md): Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.
- [creationRequestForAssetFromVideoAtFileURL:](creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
