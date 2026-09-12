> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_index](https://developer.apple.com/documentation/os/os_workgroup_index)

# os_workgroup_index

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A unique index that the workgroup assigns to its joined threads.

## Declaration

```objectivec
typedef uint32_t os_workgroup_index;
```

## See Also

### Workgroup Configuration

- [os_workgroup_max_parallel_threads](os_workgroup_max_parallel_threads.md): Returns the maximum number of threads that the system recommends you add to the specified workgroup.
- [os_workgroup_mpt_attr_t](os_workgroup_mpt_attr_t.md): An opaque structure containing attributes related to a request for the maximum number of parallel threads.
- [os_workgroup_set_working_arena](os_workgroup_set_working_arena.md): Distributes a block of managed memory to the threads of a workgroup.
- [os_workgroup_get_working_arena](os_workgroup_get_working_arena.md): Retrieves the workgroup’s shared data, and the thread-specific index into that data.
- [os_workgroup_working_arena_destructor_t](os_workgroup_working_arena_destructor_t.md): A function that deallocates a workgroup’s currently assigned shared memory.
