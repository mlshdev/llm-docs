> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgtask_t](https://developer.apple.com/documentation/paravirtualizedgraphics/pgtask_t)

# PGTask_t

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

An opaque data pointer representing a specific virtual task.

## Declaration

```objectivec
typedef struct PGTask_s PGTask_t;
```

<a id="Discussion"></a>

## Discussion

A client using the framework determines which data it needs to keep track of each task. The framework never accesses the contents of the pointer.

## See Also

### Managing Tasks

- [createTask](pgdevicedescriptor/createtask.md): A handler that the framework calls to create a task object.
- [destroyTask](pgdevicedescriptor/destroytask.md): A handler that the framework calls to destroy a task object.
- [PGCreateTask](pgcreatetask.md): The block signature for a routine that creates a task.
- [PGDestroyTask](pgdestroytask.md): The block signature for a routine that destroys a task.
