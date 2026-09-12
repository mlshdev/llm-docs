> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetchangerequest/init(for:)](https://developer.apple.com/documentation/photos/phassetchangerequest/init(for:))

# init(for:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for modifying the specified asset.

## Declaration

```swift
convenience init(for asset: PHAsset)
```

## Parameters

- `asset`: The asset to be modified.

<a id="return-value"></a>

## Return Value

An asset change request.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Before editing an asset, use its [canPerform(\_:)](../phasset/canperform%28__%29.md) method to see if the asset allows editing.

After you create a change request within a photo library change block, propose changes to the original asset’s properties by setting the corresponding properties of the change request. After Photos runs your change block, the asset’s properties reflect your changes. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To edit an asset’s image or video content, first begin a content editing session with the asset’s [requestContentEditingInput(with:completionHandler:)](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method. You commit a content edit by setting the [contentEditingOutput](contenteditingoutput.md) property of a change request within a change block. For more information about asset content editing, see [PHAsset](../phasset.md).

## See Also

### Modifying Assets

- [creationDate](creationdate.md): The date and time at which the asset claims to have been originally created.
- [location](location.md): The location information saved with the asset.
- [isFavorite](isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [isHidden](ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword(\_:)](addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [removeKeyword(\_:)](removekeyword%28__%29.md)
- [rating](rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled(\_:)](setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)

# changeRequestForAsset: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for modifying the specified asset.

## Declaration

```objectivec
+ (instancetype) changeRequestForAsset:(PHAsset *) asset;
```

## Parameters

- `asset`: The asset to be modified.

<a id="return-value"></a>

## Return Value

An asset change request.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

Before editing an asset, use its [canPerformEditOperation:](../phasset/canperform%28__%29.md) method to see if the asset allows editing.

After you create a change request within a photo library change block, propose changes to the original asset’s properties by setting the corresponding properties of the change request. After Photos runs your change block, the asset’s properties reflect your changes. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

To edit an asset’s image or video content, first begin a content editing session with the asset’s [requestContentEditingInputWithOptions:completionHandler:](../phasset/requestcontenteditinginput%28with_completionhandler_%29.md) method. You commit a content edit by setting the [contentEditingOutput](contenteditingoutput.md) property of a change request within a change block. For more information about asset content editing, see [PHAsset](../phasset.md).

## See Also

### Modifying Assets

- [creationDate](creationdate.md): The date and time at which the asset claims to have been originally created.
- [location](location.md): The location information saved with the asset.
- [favorite](isfavorite.md): A Boolean value that indicates whether the asset is marked as one of the user’s favorites.
- [hidden](ishidden.md): A Boolean value that indicates whether the asset is hidden in collections.
- [caption](caption.md): An asset description to change to. Set to nil or an empty string to clear the caption.
- [addKeyword:](addkeyword%28__%29.md): Add or remove a keyword associated with this asset Adding a keyword that is already associated (or removing a keyword that is not) will be silently ignored
- [removeKeyword:](removekeyword%28__%29.md)
- [rating](rating.md): The rating for this asset
- [setLivePhotoVideoPlaybackEnabled:](setlivephotovideoplaybackenabled%28__%29.md): Disable or enable the video part of a Live Photo so it just appears as a still image (disabled) or a Live Photo (enabled)
