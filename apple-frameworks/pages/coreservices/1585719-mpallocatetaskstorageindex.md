> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585719-mpallocatetaskstorageindex](https://developer.apple.com/documentation/coreservices/1585719-mpallocatetaskstorageindex)

# MPAllocateTaskStorageIndex

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns an index number to access per-task storage.

## Declaration

```objectivec
OSStatus MPAllocateTaskStorageIndex(TaskStorageIndex *taskIndex);
```

## Parameters

- `index`: On return, `index` contains an index number you can use to store task data.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

A call to the function `MPAllocateTaskStorageIndex` returns an index number that is common across all tasks in the current process. You can use this index number in calls to  [MPSetTaskStorageValue](1585626-mpsettaskstoragevalue.md)  and  [MPGetTaskStorageValue](1585589-mpgettaskstoragevalue.md)  to set a different value for each task using the same index. 

You can think of the task storage area as a two dimensional array cross-referenced by the task storage index number and the task ID. Note that since the amount of per-task storage is determined when the task is created, the number of possible index values associated with a task is limited.

Also see the function  [MPDeallocateTaskStorageIndex](1585649-mpdeallocatetaskstorageindex.md).

## See Also

### Accessing Per-Task Storage Variables

- [MPDeallocateTaskStorageIndex](1585649-mpdeallocatetaskstorageindex.md): Deprecated. Frees an index number used to access per-task storage
- [MPGetTaskStorageValue](1585589-mpgettaskstoragevalue.md): Deprecated. Gets the storage value stored at a specified index number.
- [MPSetTaskStorageValue](1585626-mpsettaskstoragevalue.md): Deprecated. Sets the storage value for a given index number.
