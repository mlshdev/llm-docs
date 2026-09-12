> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/creationrequestforasset(from:)](https://developer.apple.com/documentation/photos/phassetchangerequest/creationrequestforasset(from:))

# creationRequestForAsset(from:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new image asset to the Photos library.

## Declaration

```swift
class func creationRequestForAsset(from image: UIImage) -> Self
```

```swift
class func creationRequestForAsset(from image: NSImage) -> Self
```

## Parameters

- `image`: An image.

<a id="return-value"></a>

## Return Value

An asset creation request.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To reference the newly created asset later in the same change block or after the change block completes, use the [placeholderForCreatedAsset](placeholderforcreatedasset.md) property to retrieve a placeholder object.

> **Important**

>  A [UIImage](../../uikit/uiimage.md) object does not contain all metadata associated with the image file it was originally loaded from (for example, Exif tags such as geographic location, camera model, and exposure parameters). To ensure such metadata is saved in the Photos library, instead use the [creationRequestForAssetFromImage(atFileURL:)](creationrequestforassetfromimage%28atfileurl_%29.md) method or the [PHAssetCreationRequest](../phassetcreationrequest.md) class. To copy metadata from one file to another, see [Image I/O](../../imageio.md).

## See Also

### Adding New Assets

- [creationRequestForAssetFromImage(atFileURL:)](creationrequestforassetfromimage%28atfileurl_%29.md): Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.
- [creationRequestForAssetFromVideo(atFileURL:)](creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
- [placeholderForCreatedAsset](placeholderforcreatedasset.md): A placeholder object for the asset that the change request creates.

# creationRequestForAssetFromImage: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new image asset to the Photos library.

## Declaration

```objectivec
+ (instancetype) creationRequestForAssetFromImage:(UIImage *) image;
```

```objectivec
+ (instancetype) creationRequestForAssetFromImage:(NSImage *) image;
```

## Parameters

- `image`: An image.

<a id="return-value"></a>

## Return Value

An asset creation request.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To reference the newly created asset later in the same change block or after the change block completes, use the [placeholderForCreatedAsset](placeholderforcreatedasset.md) property to retrieve a placeholder object.

> **Important**

>  A [UIImage](../../uikit/uiimage.md) object does not contain all metadata associated with the image file it was originally loaded from (for example, Exif tags such as geographic location, camera model, and exposure parameters). To ensure such metadata is saved in the Photos library, instead use the [creationRequestForAssetFromImageAtFileURL:](creationrequestforassetfromimage%28atfileurl_%29.md) method or the [PHAssetCreationRequest](../phassetcreationrequest.md) class. To copy metadata from one file to another, see [Image I/O](../../imageio.md).

## See Also

### Adding New Assets

- [creationRequestForAssetFromImageAtFileURL:](creationrequestforassetfromimage%28atfileurl_%29.md): Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.
- [creationRequestForAssetFromVideoAtFileURL:](creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
- [placeholderForCreatedAsset](placeholderforcreatedasset.md): A placeholder object for the asset that the change request creates.
