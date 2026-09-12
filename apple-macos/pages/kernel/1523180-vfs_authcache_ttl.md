> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523180-vfs_authcache_ttl](https://developer.apple.com/documentation/kernel/1523180-vfs_authcache_ttl)

# vfs_authcache_ttl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

Determine the time-to-live of cached authorized credentials for files in this filesystem.

## Declaration

```objectivec
int vfs_authcache_ttl(mount_t mp);
```

## Parameters

- `mp`: Mount for which to check cache lifetime.

<a id="return_value"></a>

## Return Value

Cache lifetime in seconds. CACHED_RIGHT_INFINITE_TTL indicates that credentials never expire.

<a id="discussion"></a>

## Discussion

If a filesystem is set to allow caching credentials, the VFS layer can authorize previously-authorized actions from the same vfs_context_t without calling down to the filesystem (though it will not deny based on the cache).
