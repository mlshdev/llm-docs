> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523368-vfs_clearextendedsecurity](https://developer.apple.com/documentation/kernel/1523368-vfs_clearextendedsecurity)

# vfs_clearextendedsecurity

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Mark a filesystem as NOT supporting security controls beyond POSIX permissions.

## Declaration

```objectivec
void vfs_clearextendedsecurity(mount_t mp);
```

## Parameters

- `mp`: Mount to test.

<a id="return_value"></a>

## Return Value

void.

<a id="discussion"></a>

## Discussion

Specific controls include ACLs, file owner UUIDs, and group UUIDs.
