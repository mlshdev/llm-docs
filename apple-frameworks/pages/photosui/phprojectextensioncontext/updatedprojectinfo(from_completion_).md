> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontext/updatedprojectinfo(from:completion:)](https://developer.apple.com/documentation/photosui/phprojectextensioncontext/updatedprojectinfo(from:completion:))

# updatedProjectInfo(from:completion:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Creates an updated [PHProjectInfo](../phprojectinfo.md) instance from existing project information and current assets.

## Declaration

```swift
func updatedProjectInfo(from existingProjectInfo: PHProjectInfo?, completion: @escaping (PHProjectInfo?) -> Void) -> Progress
```

## Parameters

- `existingProjectInfo`: The project information to update. If this is not `nil`, a new [PHProjectInfo](../phprojectinfo.md) instance is created from all assets in the [PHProject](../../photos/phproject.md).
- `completion`: A closure with code you provide that runs on completion.

## See Also

### Updating Assets

- [showEditor(for:)](showeditor%28for_%29.md): Invokes the built-in photo editor for the given asset.

# updatedProjectInfoFromProjectInfo:completion: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Creates an updated [PHProjectInfo](../phprojectinfo.md) instance from existing project information and current assets.

## Declaration

```objectivec
- (NSProgress *) updatedProjectInfoFromProjectInfo:(PHProjectInfo *) existingProjectInfo completion:(void (^)(PHProjectInfo *updatedProjectInfo)) completion;
```

## Parameters

- `existingProjectInfo`: The project information to update. If this is not `nil`, a new [PHProjectInfo](../phprojectinfo.md) instance is created from all assets in the [PHProject](../../photos/phproject.md).
- `completion`: A closure with code you provide that runs on completion.

## See Also

### Updating Assets

- [showEditorForAsset:](showeditor%28for_%29.md): Invokes the built-in photo editor for the given asset.
