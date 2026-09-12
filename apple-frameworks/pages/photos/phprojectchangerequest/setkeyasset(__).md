> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phprojectchangerequest/setkeyasset(_:)](https://developer.apple.com/documentation/photos/phprojectchangerequest/setkeyasset(_:))

# setKeyAsset(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 10.14)

Sets the key asset representing the project.

## Declaration

```swift
func setKeyAsset(_ keyAsset: PHAsset?)
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Setting a key asset has been deprecated in macOS 10.14. Use [setProjectPreviewImage(\_:)](setprojectpreviewimage%28__%29.md) to provide a rendered preview image instead of designating a key asset.

## See Also

### Responding to Change Requests

- [setProjectPreviewImage(\_:)](setprojectpreviewimage%28__%29.md): Updates the project preview in Photos.

# setKeyAsset: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 10.14)

Sets the key asset representing the project.

## Declaration

```objectivec
- (void) setKeyAsset:(PHAsset *) keyAsset;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Setting a key asset has been deprecated in macOS 10.14. Use [setProjectPreviewImage:](setprojectpreviewimage%28__%29.md) to provide a rendered preview image instead of designating a key asset.

## See Also

### Responding to Change Requests

- [setProjectPreviewImage:](setprojectpreviewimage%28__%29.md): Updates the project preview in Photos.
