> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshost/ishostcacheenabled](https://developer.apple.com/documentation/foundation/nshost/ishostcacheenabled)

# isHostCacheEnabled

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Indicates whether caching is turned on or off.

> `NSHost` does not implement caching in macOS 10.6 and later.

## Declaration

```objectivec
+ (BOOL) isHostCacheEnabled;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when caching is turned on; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Managing the Host Cache

- [setHostCacheEnabled:](sethostcacheenabled_.md): Deprecated. Specifies whether the receiver is to cache instances as it creates them to avoid creating duplicate instances.
- [flushHostCache](flushhostcache.md): Deprecated. Releases the cache of existing `NSHost` objects so subsequent requests for `NSHost` objects create new ones.
