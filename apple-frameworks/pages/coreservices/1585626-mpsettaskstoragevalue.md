> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585626-mpsettaskstoragevalue](https://developer.apple.com/documentation/coreservices/1585626-mpsettaskstoragevalue)

# MPSetTaskStorageValue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Sets the storage value for a given index number.

## Declaration

```objectivec
OSStatus MPSetTaskStorageValue(TaskStorageIndex taskIndex, TaskStorageValue value);
```

## Parameters

- `index`: The index number whose storage value you want to set.
- `value`: The value you want to set.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Typically you use `MPSetTaskStorageValue` to store pointers to task-specific structures or data.

Calling this function from within a task effectively assigns a value in a two-dimensional array cross-referenced by task storage index value and the task ID. 

Also see the function  [MPGetTaskStorageValue](1585589-mpgettaskstoragevalue.md).

## See Also

### Accessing Per-Task Storage Variables

- [MPAllocateTaskStorageIndex](1585719-mpallocatetaskstorageindex.md): Deprecated. Returns an index number to access per-task storage.
- [MPDeallocateTaskStorageIndex](1585649-mpdeallocatetaskstorageindex.md): Deprecated. Frees an index number used to access per-task storage
- [MPGetTaskStorageValue](1585589-mpgettaskstoragevalue.md): Deprecated. Gets the storage value stored at a specified index number.
