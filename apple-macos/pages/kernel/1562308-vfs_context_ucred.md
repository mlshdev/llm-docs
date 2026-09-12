> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1562308-vfs_context_ucred](https://developer.apple.com/documentation/kernel/1562308-vfs_context_ucred)

# vfs_context_ucred

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get the credential associated with a vfs_context_t.

## Declaration

```objectivec
kauth_cred_t vfs_context_ucred(vfs_context_t ctx);
```

## Parameters

- `ctx`: Context whose associated process to find.

<a id="return_value"></a>

## Return Value

Process if available, NULL otherwise.

<a id="discussion"></a>

## Discussion

Succeeds if and only if the context has a thread, the thread has a task, and the task has a BSD proc.
