> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_leave](https://developer.apple.com/documentation/os/os_workgroup_leave)

# os_workgroup_leave

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes the current thread from the workgroup it previously joined.

## Declaration

```objectivec
extern void os_workgroup_leave(os_workgroup_t wg, os_workgroup_join_token_t token);
```

## Parameters

- `wg`: The workgroup to leave. This workgroup must be the same workgroup that the thread previously joined. If it isn’t, this function aborts the process.
- `token`: The token you received when the thread joined the workgroup. If the data in the token is invalid, if the token belongs to a different thread, or if the workgroup in the `wg` parameter doesn’t match the information in the token, this function aborts the process.

<a id="Discussion"></a>

## Discussion

Always call this function using the same [os_workgroup_t](os_workgroup_t.md) and [os_workgroup_join_token_t](os_workgroup_join_token_t.md) structures you used at join time. If the workgroup or token information doesn’t match, this function aborts the current process. You may call this function safely from a real-time thread of your app.

> **Important**

>  Always remove a thread from its workgroup before the thread exits. If a thread is still joined to a workgroup when it terminates, the system aborts the current process.

## See Also

### Thread Attachment

- [os_workgroup_join](os_workgroup_join.md): Adds the current thread to the specified workgroup.
- [os_workgroup_join_token_t](os_workgroup_join_token_t.md): An opaque token that represents a connection between a thread and a workgroup.
