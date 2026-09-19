> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nshost/flushhostcache

# flushHostCache

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Releases the cache of existing `NSHost` objects so subsequent requests for `NSHost` objects create new ones.

> `NSHost` does not implement caching in macOS 10.6 and later.

## Declaration

```objectivec
+ (void) flushHostCache;
```

<a id="Discussion"></a>

## Discussion

`NSHost` objects that were retained before this method was invoked remain valid.

## See Also

### Managing the Host Cache

- [isHostCacheEnabled](ishostcacheenabled.md): Deprecated. Indicates whether caching is turned on or off.
- [setHostCacheEnabled:](sethostcacheenabled_.md): Deprecated. Specifies whether the receiver is to cache instances as it creates them to avoid creating duplicate instances.
