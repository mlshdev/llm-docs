> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523418-vfs_typenum](https://developer.apple.com/documentation/kernel/1523418-vfs_typenum)

# vfs_typenum

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get (archaic) filesystem type number.

## Declaration

```objectivec
int vfs_typenum(mount_t mp);
```

## Parameters

- `mp`: Mount for which to get type number.

<a id="return_value"></a>

## Return Value

Type number.

<a id="discussion"></a>

## Discussion

Filesystem type numbers are an old construct; most filesystems just get a number assigned based on the order in which they are registered with the system.
