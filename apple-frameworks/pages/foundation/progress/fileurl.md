> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/fileurl](https://developer.apple.com/documentation/foundation/progress/fileurl)

# fileURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A URL that represents the file for the current progress object.

## Declaration

```swift
var fileURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value for a progress that you [publish()](publish%28%29.md) to subscribers that register for updates using [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md).

If present, [Progress](../progress.md) presents additional information in its localized description by setting a value in the `userInfo` dictionary.

## See Also

### Inspecting File Operation Progress Information

- [fileOperationKind](fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileTotalCount](filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](filecompletedcount.md): The number of completed files for a file progress object.
- [Progress.FileOperationKind](fileoperationkind-swift.struct.md): The kind of file operation.

# fileURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A URL that represents the file for the current progress object.

## Declaration

```objectivec
@property (copy, nullable) NSURL * fileURL;
```

<a id="Discussion"></a>

## Discussion

Set this value for a progress that you [publish](publish%28%29.md) to subscribers that register for updates using [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md).

If present, [NSProgress](../progress.md) presents additional information in its localized description by setting a value in the `userInfo` dictionary.

## See Also

### Inspecting File Operation Progress Information

- [fileOperationKind](fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileTotalCount](../nsprogress/filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](../nsprogress/filecompletedcount.md): The number of completed files for a file progress object.
- [NSProgressFileOperationKind](fileoperationkind-swift.struct.md): The kind of file operation.
