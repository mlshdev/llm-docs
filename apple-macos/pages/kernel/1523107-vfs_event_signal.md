> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523107-vfs_event_signal](https://developer.apple.com/documentation/kernel/1523107-vfs_event_signal)

# vfs_event_signal

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Post a kqueue-style event on a filesystem (EVFILT_FS).

## Declaration

```objectivec
void vfs_event_signal(fsid_t *fsid, u_int32_t event, intptr_t data);
```

## Parameters

- `fsid`: Unused.
- `event`: Events to post.
- `data`: Unused.

<a id="return_value"></a>

## Return Value

void.
