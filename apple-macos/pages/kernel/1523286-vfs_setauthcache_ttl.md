> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1523286-vfs_setauthcache_ttl](https://developer.apple.com/documentation/kernel/1523286-vfs_setauthcache_ttl)

# vfs_setauthcache_ttl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

Enable credential caching and set time-to-live of cached authorized credentials for files in this filesystem.

## Declaration

```objectivec
void vfs_setauthcache_ttl(mount_t mp, int ttl);
```

## Parameters

- `mp`: Mount for which to set cache lifetime.

<a id="return_value"></a>

## Return Value

void.

<a id="discussion"></a>

## Discussion

If a filesystem is set to allow caching credentials, the VFS layer can authorize previously-authorized actions from the same vfs_context_t without calling down to the filesystem (though it will not deny based on the cache).
