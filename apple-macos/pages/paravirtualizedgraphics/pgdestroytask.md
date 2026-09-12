> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdestroytask](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdestroytask)

# PGDestroyTask

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

The block signature for a routine that destroys a task.

## Declaration

```objectivec
typedef void (^)(struct PGTask_s *) PGDestroyTask;
```

## Parameters

- `task`: The task to destroy.

<a id="Discussion"></a>

## Discussion

The block must clean up any virtual memory that the device object allocated when it created the task.

## See Also

### Managing Tasks

- [createTask](pgdevicedescriptor/createtask.md): A handler that the framework calls to create a task object.
- [destroyTask](pgdevicedescriptor/destroytask.md): A handler that the framework calls to destroy a task object.
- [PGCreateTask](pgcreatetask.md): The block signature for a routine that creates a task.
- [PGTask_t](pgtask_t.md): An opaque data pointer representing a specific virtual task.
