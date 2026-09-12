> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressuserinfokey/fileanimationimagekey](https://developer.apple.com/documentation/foundation/progressuserinfokey/fileanimationimagekey)

# fileAnimationImageKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.9+

A key with a corresponding value that is an image, typically an icon to represent the file.

## Declaration

```swift
static let fileAnimationImageKey: ProgressUserInfoKey
```

<a id="Discussion"></a>

## Discussion

This entry is optional, but if present, along with a value for [fileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md), the Dock may show an animation. When the Dock has an item for the folder that contains the relevant file (such as the Downloads folder), the Dock uses this key to show an animation of the file flying into the Dock.

## See Also

### Using File Operation Keys

- [fileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [fileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [fileIconKey](fileiconkey.md): A key with a corresponding value that must be an image, typically an icon to represent the file.
- [fileOperationKindKey](fileoperationkindkey.md): A key with a corresponding value that indicates the kind of file operation a progress object represents.
- [fileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
- [fileURLKey](fileurlkey.md): A key with a corresponding value that represents the file URL of a file operation for the progress object.

# NSProgressFileAnimationImageKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A key with a corresponding value that is an image, typically an icon to represent the file.

## Declaration

```objectivec
extern NSProgressUserInfoKey const NSProgressFileAnimationImageKey;
```

<a id="Discussion"></a>

## Discussion

This entry is optional, but if present, along with a value for [NSProgressFileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md), the Dock may show an animation. When the Dock has an item for the folder that contains the relevant file (such as the Downloads folder), the Dock uses this key to show an animation of the file flying into the Dock.

## See Also

### Using File Operation Keys

- [NSProgressFileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [NSProgressFileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [NSProgressFileIconKey](fileiconkey.md): A key with a corresponding value that must be an image, typically an icon to represent the file.
- [NSProgressFileOperationKindKey](fileoperationkindkey.md): A key with a corresponding value that indicates the kind of file operation a progress object represents.
- [NSProgressFileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
- [NSProgressFileURLKey](fileurlkey.md): A key with a corresponding value that represents the file URL of a file operation for the progress object.
