> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/creationrequestforassetfromimage(atfileurl:)](https://developer.apple.com/documentation/photos/phassetchangerequest/creationrequestforassetfromimage(atfileurl:))

# creationRequestForAssetFromImage(atFileURL:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.

## Declaration

```swift
class func creationRequestForAssetFromImage(atFileURL fileURL: URL) -> Self?
```

## Parameters

- `fileURL`: A URL for an image file.

<a id="return-value"></a>

## Return Value

An asset creation request.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To set metadata properties of the newly created asset, use the corresponding properties of the change request (listed in Modifying Assets). To reference the newly created asset later in the same change block or after the change block completes, use the [placeholderForCreatedAsset](placeholderforcreatedasset.md) property to retrieve a placeholder object.

## See Also

### Adding New Assets

- [creationRequestForAsset(from:)](creationrequestforasset%28from_%29.md): Creates a request for adding a new image asset to the Photos library.
- [creationRequestForAssetFromVideo(atFileURL:)](creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
- [placeholderForCreatedAsset](placeholderforcreatedasset.md): A placeholder object for the asset that the change request creates.

# creationRequestForAssetFromImageAtFileURL: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for adding a new image asset to the Photos library, using the image file at the specified URL.

## Declaration

```objectivec
+ (instancetype) creationRequestForAssetFromImageAtFileURL:(NSURL *) fileURL;
```

## Parameters

- `fileURL`: A URL for an image file.

<a id="return-value"></a>

## Return Value

An asset creation request.

<a id="Discussion"></a>

## Discussion

Call this method within a photo library change block to create a new asset. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To set metadata properties of the newly created asset, use the corresponding properties of the change request (listed in Modifying Assets). To reference the newly created asset later in the same change block or after the change block completes, use the [placeholderForCreatedAsset](placeholderforcreatedasset.md) property to retrieve a placeholder object.

## See Also

### Adding New Assets

- [creationRequestForAssetFromImage:](creationrequestforasset%28from_%29.md): Creates a request for adding a new image asset to the Photos library.
- [creationRequestForAssetFromVideoAtFileURL:](creationrequestforassetfromvideo%28atfileurl_%29.md): Creates a request for adding a new video asset to the Photos library, using the video file at the specified URL.
- [placeholderForCreatedAsset](placeholderforcreatedasset.md): A placeholder object for the asset that the change request creates.
