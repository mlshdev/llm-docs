> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phprojectextensioncontext/showeditor(for:)

# showEditor(for:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Invokes the built-in photo editor for the given asset.

## Declaration

```swift
func showEditor(for asset: PHAsset)
```

## Parameters

- `asset`: The asset to edit.

<a id="Discussion"></a>

## Discussion

To be notified when assets are edited, the extension should observe library changes by implementing the [PHPhotoLibraryChangeObserver](../../photos/phphotolibrarychangeobserver.md) protocol.

## See Also

### Updating Assets

- [updatedProjectInfo(from:completion:)](updatedprojectinfo%28from_completion_%29.md): Creates an updated [PHProjectInfo](../phprojectinfo.md) instance from existing project information and current assets.

# showEditorForAsset: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Invokes the built-in photo editor for the given asset.

## Declaration

```objectivec
- (void) showEditorForAsset:(PHAsset *) asset;
```

## Parameters

- `asset`: The asset to edit.

<a id="Discussion"></a>

## Discussion

To be notified when assets are edited, the extension should observe library changes by implementing the [PHPhotoLibraryChangeObserver](../../photos/phphotolibrarychangeobserver.md) protocol.

## See Also

### Updating Assets

- [updatedProjectInfoFromProjectInfo:completion:](updatedprojectinfo%28from_completion_%29.md): Creates an updated [PHProjectInfo](../phprojectinfo.md) instance from existing project information and current assets.
