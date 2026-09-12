> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevicedescriptor/createtask](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevicedescriptor/createtask)

# createTask

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+

A handler that the framework calls to create a task object.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGCreateTask createTask;
```

## See Also

### Managing Tasks

- [destroyTask](destroytask.md): A handler that the framework calls to destroy a task object.
- [PGCreateTask](../pgcreatetask.md): The block signature for a routine that creates a task.
- [PGDestroyTask](../pgdestroytask.md): The block signature for a routine that destroys a task.
- [PGTask_t](../pgtask_t.md): An opaque data pointer representing a specific virtual task.
