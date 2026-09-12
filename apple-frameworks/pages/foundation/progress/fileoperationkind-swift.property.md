> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/fileoperationkind-swift.property](https://developer.apple.com/documentation/foundation/progress/fileoperationkind-swift.property)

# fileOperationKind (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The kind of file operation for the progress object.

## Declaration

```swift
var fileOperationKind: Progress.FileOperationKind? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value when the [kind](kind.md) property is [file](../progresskind/file.md) to describe the kind of file operation.

If present, [Progress](../progress.md) presents additional information in its localized description by setting a value in the `userInfo` dictionary.

## See Also

### Inspecting File Operation Progress Information

- [fileURL](fileurl.md): A URL that represents the file for the current progress object.
- [fileTotalCount](filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](filecompletedcount.md): The number of completed files for a file progress object.
- [Progress.FileOperationKind](fileoperationkind-swift.struct.md): The kind of file operation.

# fileOperationKind (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The kind of file operation for the progress object.

## Declaration

```objectivec
@property (copy, nullable) NSProgressFileOperationKind fileOperationKind;
```

<a id="Discussion"></a>

## Discussion

Set this value when the [kind](kind.md) property is [NSProgressKindFile](../progresskind/file.md) to describe the kind of file operation.

If present, [NSProgress](../progress.md) presents additional information in its localized description by setting a value in the `userInfo` dictionary.

## See Also

### Inspecting File Operation Progress Information

- [fileURL](fileurl.md): A URL that represents the file for the current progress object.
- [fileTotalCount](../nsprogress/filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](../nsprogress/filecompletedcount.md): The number of completed files for a file progress object.
- [NSProgressFileOperationKind](fileoperationkind-swift.struct.md): The kind of file operation.
