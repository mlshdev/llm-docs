> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585589-mpgettaskstoragevalue](https://developer.apple.com/documentation/coreservices/1585589-mpgettaskstoragevalue)

# MPGetTaskStorageValue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Gets the storage value stored at a specified index number.

## Declaration

```objectivec
TaskStorageValue MPGetTaskStorageValue(TaskStorageIndex taskIndex);
```

## Parameters

- `index`: The index number of the storage value you want to obtain.

<a id="return_value"></a>

## Return Value

The value stored at the specified index number. See the description of the `TaskStorageValue` data type.

<a id="discussion"></a>

## Discussion

Calling this function from within a task effectively reads a value in a two-dimensional array cross-referenced by task storage index value and the task ID.

Note that since this function does not return any status information, it may not be immediately obvious whether the returned storage value is valid. 

Also see the function  [MPSetTaskStorageValue](1585626-mpsettaskstoragevalue.md).

## See Also

### Accessing Per-Task Storage Variables

- [MPAllocateTaskStorageIndex](1585719-mpallocatetaskstorageindex.md): Deprecated. Returns an index number to access per-task storage.
- [MPDeallocateTaskStorageIndex](1585649-mpdeallocatetaskstorageindex.md): Deprecated. Frees an index number used to access per-task storage
- [MPSetTaskStorageValue](1585626-mpsettaskstoragevalue.md): Deprecated. Sets the storage value for a given index number.
