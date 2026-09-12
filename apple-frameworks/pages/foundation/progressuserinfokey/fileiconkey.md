> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressuserinfokey/fileiconkey](https://developer.apple.com/documentation/foundation/progressuserinfokey/fileiconkey)

# fileIconKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.9+

A key with a corresponding value that must be an image, typically an icon to represent the file.

## Declaration

```swift
static let fileIconKey: ProgressUserInfoKey
```

<a id="Discussion"></a>

## Discussion

If present, the Finder uses this corresponding value to show the icon of a file that a progress object is tracking.

## See Also

### Using File Operation Keys

- [fileAnimationImageKey](fileanimationimagekey.md): A key with a corresponding value that is an image, typically an icon to represent the file.
- [fileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [fileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [fileOperationKindKey](fileoperationkindkey.md): A key with a corresponding value that indicates the kind of file operation a progress object represents.
- [fileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
- [fileURLKey](fileurlkey.md): A key with a corresponding value that represents the file URL of a file operation for the progress object.

# NSProgressFileIconKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A key with a corresponding value that must be an image, typically an icon to represent the file.

## Declaration

```objectivec
extern NSProgressUserInfoKey const NSProgressFileIconKey;
```

<a id="Discussion"></a>

## Discussion

If present, the Finder uses this corresponding value to show the icon of a file that a progress object is tracking.

## See Also

### Using File Operation Keys

- [NSProgressFileAnimationImageKey](fileanimationimagekey.md): A key with a corresponding value that is an image, typically an icon to represent the file.
- [NSProgressFileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [NSProgressFileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [NSProgressFileOperationKindKey](fileoperationkindkey.md): A key with a corresponding value that indicates the kind of file operation a progress object represents.
- [NSProgressFileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
- [NSProgressFileURLKey](fileurlkey.md): A key with a corresponding value that represents the file URL of a file operation for the progress object.
