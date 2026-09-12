> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgcreatetask](https://developer.apple.com/documentation/paravirtualizedgraphics/pgcreatetask)

# PGCreateTask

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

The block signature for a routine that creates a task.

## Declaration

```objectivec
typedef struct PGTask_s *(^)(unsigned long long, void **) PGCreateTask;
```

## Parameters

- `vmSize`: The size of the virtual memory reservation to make for this task.
- `baseAddress`: On return, the block writes the base-host virtually contiguous address for this task.

<a id="return-value"></a>

## Return Value

A [PGTask_t](pgtask_t.md) pointer, or `NULL` if an error occurred.

<a id="Discussion"></a>

## Discussion

The paravirtualization framework calls this block to request memory for a task. The block allocates virtual memory for the task and returns it to the framework. The block also records any data it needs to keep track of this task and returns a pointer to that data. The framework uses this pointer to identify the task in other operations. The framework never accesses the contents of the [PGTask_t](pgtask_t.md) pointer.

## See Also

### Managing Tasks

- [createTask](pgdevicedescriptor/createtask.md): A handler that the framework calls to create a task object.
- [destroyTask](pgdevicedescriptor/destroytask.md): A handler that the framework calls to destroy a task object.
- [PGDestroyTask](pgdestroytask.md): The block signature for a routine that destroys a task.
- [PGTask_t](pgtask_t.md): An opaque data pointer representing a specific virtual task.
