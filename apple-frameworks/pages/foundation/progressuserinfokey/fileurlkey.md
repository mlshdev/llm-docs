> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressuserinfokey/fileurlkey](https://developer.apple.com/documentation/foundation/progressuserinfokey/fileurlkey)

# fileURLKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a corresponding value that represents the file URL of a file operation for the progress object.

## Declaration

```swift
static let fileURLKey: ProgressUserInfoKey
```

<a id="Discussion"></a>

## Discussion

If present, [Progress](../progress.md) presents additional information in its localized description.

## See Also

### Using File Operation Keys

- [fileAnimationImageKey](fileanimationimagekey.md): A key with a corresponding value that is an image, typically an icon to represent the file.
- [fileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [fileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [fileIconKey](fileiconkey.md): A key with a corresponding value that must be an image, typically an icon to represent the file.
- [fileOperationKindKey](fileoperationkindkey.md): A key with a corresponding value that indicates the kind of file operation a progress object represents.
- [fileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.

# NSProgressFileURLKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a corresponding value that represents the file URL of a file operation for the progress object.

## Declaration

```objectivec
extern NSProgressUserInfoKey const NSProgressFileURLKey;
```

<a id="Discussion"></a>

## Discussion

If present, [NSProgress](../progress.md) presents additional information in its localized description.

## See Also

### Using File Operation Keys

- [NSProgressFileAnimationImageKey](fileanimationimagekey.md): A key with a corresponding value that is an image, typically an icon to represent the file.
- [NSProgressFileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [NSProgressFileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [NSProgressFileIconKey](fileiconkey.md): A key with a corresponding value that must be an image, typically an icon to represent the file.
- [NSProgressFileOperationKindKey](fileoperationkindkey.md): A key with a corresponding value that indicates the kind of file operation a progress object represents.
- [NSProgressFileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
