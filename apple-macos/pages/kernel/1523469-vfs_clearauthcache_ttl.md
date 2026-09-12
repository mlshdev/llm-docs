> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523469-vfs_clearauthcache_ttl](https://developer.apple.com/documentation/kernel/1523469-vfs_clearauthcache_ttl)

# vfs_clearauthcache_ttl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

Remove time-to-live controls for cached credentials on a filesytem. Filesystems with remote authorization decisions (opaque) will still have KAUTH_VNODE_SEARCH rights cached for a default of CACHED_LOOKUP_RIGHT_TTL seconds.

## Declaration

```objectivec
void vfs_clearauthcache_ttl(mount_t mp);
```

## Parameters

- `mp`: Mount for which to clear cache lifetime.

<a id="return_value"></a>

## Return Value

void.
