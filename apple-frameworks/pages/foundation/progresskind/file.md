> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progresskind/file](https://developer.apple.com/documentation/foundation/progresskind/file)

# file (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates that the progress is tracking a file operation.

## Declaration

```swift
static let file: ProgressKind
```

<a id="Discussion"></a>

## Discussion

If you set this value for the progress [kind](../progress/kind.md), set a value in the user info dictionary for the [fileOperationKindKey](../progressuserinfokey/fileoperationkindkey.md).

The system assumes [Progress](../progress.md) of this kind uses bytes as the unit of work. The default implementation of [localizedDescription](../progress/localizeddescription.md) takes advantage of that to return more specific text than it does otherwise. If present, [localizedDescription](../progress/localizeddescription.md) uses the [fileTotalCountKey](../progressuserinfokey/filetotalcountkey.md) and [fileCompletedCountKey](../progressuserinfokey/filecompletedcountkey.md) keys in the [userInfo](../progress/userinfo.md) dictionary for the overall count of files.

# NSProgressKindFile (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates that the progress is tracking a file operation.

## Declaration

```objectivec
extern NSProgressKind const NSProgressKindFile;
```

<a id="Discussion"></a>

## Discussion

If you set this value for the progress [kind](../progress/kind.md), set a value in the user info dictionary for the [NSProgressFileOperationKindKey](../progressuserinfokey/fileoperationkindkey.md).

The system assumes [NSProgress](../progress.md) of this kind uses bytes as the unit of work. The default implementation of [localizedDescription](../progress/localizeddescription.md) takes advantage of that to return more specific text than it does otherwise. If present, [localizedDescription](../progress/localizeddescription.md) uses the [NSProgressFileTotalCountKey](../progressuserinfokey/filetotalcountkey.md) and [NSProgressFileCompletedCountKey](../progressuserinfokey/filecompletedcountkey.md) keys in the [userInfo](../progress/userinfo.md) dictionary for the overall count of files.
