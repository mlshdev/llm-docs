> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585649-mpdeallocatetaskstorageindex](https://developer.apple.com/documentation/coreservices/1585649-mpdeallocatetaskstorageindex)

# MPDeallocateTaskStorageIndex

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Frees an index number used to access per-task storage

## Declaration

```objectivec
OSStatus MPDeallocateTaskStorageIndex(TaskStorageIndex taskIndex);
```

## Parameters

- `index`: The index number you want to deallocate.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Also see the function  [MPAllocateTaskStorageIndex](1585719-mpallocatetaskstorageindex.md).

## See Also

### Accessing Per-Task Storage Variables

- [MPAllocateTaskStorageIndex](1585719-mpallocatetaskstorageindex.md): Deprecated. Returns an index number to access per-task storage.
- [MPGetTaskStorageValue](1585589-mpgettaskstoragevalue.md): Deprecated. Gets the storage value stored at a specified index number.
- [MPSetTaskStorageValue](1585626-mpsettaskstoragevalue.md): Deprecated. Sets the storage value for a given index number.
