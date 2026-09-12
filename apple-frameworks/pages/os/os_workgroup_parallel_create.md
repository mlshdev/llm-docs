> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_parallel_create](https://developer.apple.com/documentation/os/os_workgroup_parallel_create)

# os_workgroup_parallel_create

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new workgroup that manges threads working on a single task in parallel.

## Declaration

```objectivec
extern os_workgroup_parallel_tos_workgroup_parallel_create(const char *name, os_workgroup_attr_t attr);
```

## Parameters

- `name`: An optional name for the workgroup. Use this name to identify the workgroups you create. You may specify `NULL` for this parameter.
- `attr`: The attributes you apply to the workgroup.

<a id="return-value"></a>

## Return Value

An opaque workgroup object that tracks a parallel workload.

<a id="Discussion"></a>

## Discussion

The returned workgroup doesn’t initially have any associated threads. Join individual threads to the workgroup by calling `os_workgroup_join_self` from the thread itself.

## See Also

### Parallel

- [os_workgroup_parallel_t](os_workgroup_parallel_t.md): A workgroup object that supports the scheduling of threads that work in parallel to complete a task.
