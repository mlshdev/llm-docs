> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_join_token_t](https://developer.apple.com/documentation/os/os_workgroup_join_token_t)

# os_workgroup_join_token_t

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque token that represents a connection between a thread and a workgroup.

## Declaration

```objectivec
typedef struct os_workgroup_join_token_opaque_s * os_workgroup_join_token_t;
```

<a id="Discussion"></a>

## Discussion

You provide an uninitialized token structure when calling the `os_workgroup_join_self` function, which initializes the structure and fills it with information. Use that token structure in a subsequent call to `os_workgroup_leave_self` to remove the thread from the workgroup.

> **Important**

>  You must provide the original thread, workgroup, and token when removing a thread from its workgroup. If the values don’t match, the system aborts your process.

## See Also

### Thread Attachment

- [os_workgroup_join](os_workgroup_join.md): Adds the current thread to the specified workgroup.
- [os_workgroup_leave](os_workgroup_leave.md): Removes the current thread from the workgroup it previously joined.
