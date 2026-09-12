> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshost/sethostcacheenabled:](https://developer.apple.com/documentation/foundation/nshost/sethostcacheenabled:)

# setHostCacheEnabled:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Specifies whether the receiver is to cache instances as it creates them to avoid creating duplicate instances.

> `NSHost` does not implement caching in macOS 10.6 and later.

## Declaration

```objectivec
+ (void) setHostCacheEnabled:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to turn on caching. [false](https://developer.apple.com/documentation/swift/false) to turn of caching.

<a id="Discussion"></a>

## Discussion

This method doesn’t flush the cache. If you turn caching off and then back on, new requests for hosts use what was in the cache at the time caching was turned off. However, `NSHost` objects created while caching is turned off aren’t entered into the cache.

## See Also

### Managing the Host Cache

- [isHostCacheEnabled](ishostcacheenabled.md): Deprecated. Indicates whether caching is turned on or off.
- [flushHostCache](flushhostcache.md): Deprecated. Releases the cache of existing `NSHost` objects so subsequent requests for `NSHost` objects create new ones.
