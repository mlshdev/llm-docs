> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phprojectchangerequest/setprojectpreviewimage(_:)](https://developer.apple.com/documentation/photos/phprojectchangerequest/setprojectpreviewimage(_:))

# setProjectPreviewImage(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Updates the project preview in Photos.

## Declaration

```swift
func setProjectPreviewImage(_ previewImage: NSImage)
```

## Parameters

- `previewImage`: A rendered project preview with dimensions of 1024 x 1024.

<a id="Discussion"></a>

## Discussion

PhotoKit requires that you set a project preview in the following situations:

- Whenever the project changes in a way that requires a new preview.
- During or after execution of the [beginProject(with:projectInfo:completion:)](../../photosui/phprojectextensioncontroller/beginproject%28with_projectinfo_completion_%29.md) protocol method.
- During or after execution of the [resumeProject(with:completion:)](../../photosui/phprojectextensioncontroller/resumeproject%28with_completion_%29.md) protocol method.

## See Also

### Responding to Change Requests

- [setKeyAsset(\_:)](setkeyasset%28__%29.md): Deprecated. Sets the key asset representing the project.

# setProjectPreviewImage: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Updates the project preview in Photos.

## Declaration

```objectivec
- (void) setProjectPreviewImage:(UIImage *) previewImage;
```

```objectivec
- (void) setProjectPreviewImage:(NSImage *) previewImage;
```

## Parameters

- `previewImage`: A rendered project preview with dimensions of 1024 x 1024.

<a id="Discussion"></a>

## Discussion

PhotoKit requires that you set a project preview in the following situations:

- Whenever the project changes in a way that requires a new preview.
- During or after execution of the [beginProjectWithExtensionContext:projectInfo:completion:](../../photosui/phprojectextensioncontroller/beginproject%28with_projectinfo_completion_%29.md) protocol method.
- During or after execution of the [resumeProjectWithExtensionContext:completion:](../../photosui/phprojectextensioncontroller/resumeproject%28with_completion_%29.md) protocol method.

## See Also

### Responding to Change Requests

- [setKeyAsset:](setkeyasset%28__%29.md): Deprecated. Sets the key asset representing the project.
