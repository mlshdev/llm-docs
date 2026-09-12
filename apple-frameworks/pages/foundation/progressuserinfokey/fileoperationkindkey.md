> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressuserinfokey/fileoperationkindkey](https://developer.apple.com/documentation/foundation/progressuserinfokey/fileoperationkindkey)

# fileOperationKindKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a corresponding value that indicates the kind of file operation a progress object represents.

## Declaration

```swift
static let fileOperationKindKey: ProgressUserInfoKey
```

<a id="Discussion"></a>

## Discussion

When you set the property [kind](../progress/kind.md) on a progress to [file](../progresskind/file.md), set the corresponding value to one of the entries in Recognizing Kinds of File Operations.

## See Also

### Using File Operation Keys

- [fileAnimationImageKey](fileanimationimagekey.md): A key with a corresponding value that is an image, typically an icon to represent the file.
- [fileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [fileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [fileIconKey](fileiconkey.md): A key with a corresponding value that must be an image, typically an icon to represent the file.
- [fileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
- [fileURLKey](fileurlkey.md): A key with a corresponding value that represents the file URL of a file operation for the progress object.

# NSProgressFileOperationKindKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a corresponding value that indicates the kind of file operation a progress object represents.

## Declaration

```objectivec
extern NSProgressUserInfoKey const NSProgressFileOperationKindKey;
```

<a id="Discussion"></a>

## Discussion

When you set the property [kind](../progress/kind.md) on a progress to [NSProgressKindFile](../progresskind/file.md), set the corresponding value to one of the entries in Recognizing Kinds of File Operations.

## See Also

### Using File Operation Keys

- [NSProgressFileAnimationImageKey](fileanimationimagekey.md): A key with a corresponding value that is an image, typically an icon to represent the file.
- [NSProgressFileAnimationImageOriginalRectKey](fileanimationimageoriginalrectkey.md): A key with a corresponding value that indicates the starting location of the image onscreen.
- [NSProgressFileCompletedCountKey](filecompletedcountkey.md): A key with a corresponding value that represents the number of completed files.
- [NSProgressFileIconKey](fileiconkey.md): A key with a corresponding value that must be an image, typically an icon to represent the file.
- [NSProgressFileTotalCountKey](filetotalcountkey.md): A key with a corresponding value that represents the total number of files within a file operation.
- [NSProgressFileURLKey](fileurlkey.md): A key with a corresponding value that represents the file URL of a file operation for the progress object.
