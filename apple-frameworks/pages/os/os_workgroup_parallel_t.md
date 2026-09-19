> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/os_workgroup_parallel_t

# os_workgroup_parallel_t

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A workgroup object that supports the scheduling of threads that work in parallel to complete a task.

## Declaration

```objectivec
typedef OS_os_workgroup<OS_os_workgroup_parallel> * os_workgroup_parallel_t;
```

## See Also

### Parallel

- [os_workgroup_parallel_create](os_workgroup_parallel_create.md): Creates a new workgroup that manges threads working on a single task in parallel.
