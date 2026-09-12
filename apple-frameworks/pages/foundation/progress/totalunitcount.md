> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/totalunitcount](https://developer.apple.com/documentation/foundation/progress/totalunitcount)

# totalUnitCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The total number of tracked units of work for the current progress.

## Declaration

```swift
var totalUnitCount: Int64 { get set }
```

<a id="Discussion"></a>

## Discussion

For an [Progress](../progress.md) with a kind of [file](../progresskind/file.md), the unit of this property is bytes, and the [fileTotalCountKey](../progressuserinfokey/filetotalcountkey.md) and [fileCompletedCountKey](../progressuserinfokey/filecompletedcountkey.md) keys in the `userInfo` dictionary report the overall count of files.

For any other kind of [Progress](../progress.md), the unit of measurement doesn’t matter as long as it’s consistent. You can report the values to the user in the [localizedDescription](localizeddescription.md) and [localizedAdditionalDescription](localizedadditionaldescription.md).

## See Also

### Related Documentation

- [fractionCompleted](fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.

### Reporting Progress

- [completedUnitCount](completedunitcount.md): The number of completed units of work for the current job.
- [localizedDescription](localizeddescription.md): A localized description of tracked progress for the receiver.
- [localizedAdditionalDescription](localizedadditionaldescription.md): A more specific localized description of tracked progress for the receiver.
- [isCancellable](iscancellable.md): A Boolean value that indicates whether the receiver is tracking work that you can cancel.
- [isCancelled](iscancelled.md): A Boolean value that Indicates whether the receiver is tracking canceled work.
- [cancellationHandler](cancellationhandler.md): The block to invoke when canceling progress.
- [isPausable](ispausable.md): A Boolean value that indicates whether the receiver is tracking work that you can pause.
- [isPaused](ispaused.md): A Boolean value that indicates whether the receiver is tracking paused work.
- [pausingHandler](pausinghandler.md): The block to invoke when pausing progress.

# totalUnitCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The total number of tracked units of work for the current progress.

## Declaration

```objectivec
@property int64_t totalUnitCount;
```

<a id="Discussion"></a>

## Discussion

For an [NSProgress](../progress.md) with a kind of [NSProgressKindFile](../progresskind/file.md), the unit of this property is bytes, and the [NSProgressFileTotalCountKey](../progressuserinfokey/filetotalcountkey.md) and [NSProgressFileCompletedCountKey](../progressuserinfokey/filecompletedcountkey.md) keys in the `userInfo` dictionary report the overall count of files.

For any other kind of [NSProgress](../progress.md), the unit of measurement doesn’t matter as long as it’s consistent. You can report the values to the user in the [localizedDescription](localizeddescription.md) and [localizedAdditionalDescription](localizedadditionaldescription.md).

## See Also

### Related Documentation

- [fractionCompleted](fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.

### Reporting Progress

- [completedUnitCount](completedunitcount.md): The number of completed units of work for the current job.
- [localizedDescription](localizeddescription.md): A localized description of tracked progress for the receiver.
- [localizedAdditionalDescription](localizedadditionaldescription.md): A more specific localized description of tracked progress for the receiver.
- [cancellable](iscancellable.md): A Boolean value that indicates whether the receiver is tracking work that you can cancel.
- [cancelled](iscancelled.md): A Boolean value that Indicates whether the receiver is tracking canceled work.
- [cancellationHandler](cancellationhandler.md): The block to invoke when canceling progress.
- [pausable](ispausable.md): A Boolean value that indicates whether the receiver is tracking work that you can pause.
- [paused](ispaused.md): A Boolean value that indicates whether the receiver is tracking paused work.
- [pausingHandler](pausinghandler.md): The block to invoke when pausing progress.
