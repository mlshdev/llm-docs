> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsprogress/filetotalcount](https://developer.apple.com/documentation/foundation/nsprogress/filetotalcount)

# fileTotalCount

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The total number of files for a file progress object.

## Declaration

```objectivec
@property (copy, nullable) NSNumber * fileTotalCount;
```

<a id="Discussion"></a>

## Discussion

If the current progress is operating on a set of files, set this property to the total number of files in the operation.

If present, [NSProgress](../progress.md) presents additional information in its localized description by setting a value in the `userInfo` dictionary.

## See Also

### Inspecting File Operation Progress Information

- [fileOperationKind](../progress/fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileURL](../progress/fileurl.md): A URL that represents the file for the current progress object.
- [fileCompletedCount](filecompletedcount.md): The number of completed files for a file progress object.
- [NSProgressFileOperationKind](../progress/fileoperationkind-swift.struct.md): The kind of file operation.
