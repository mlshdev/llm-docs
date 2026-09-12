> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvf_clear_part_cache](https://developer.apple.com/documentation/hvf/hvf_clear_part_cache)

# HVF_clear_part_cache

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Clear the cache of loaded parts.

## Declaration

```objectivec
int HVF_clear_part_cache(HVFPartRenderer *renderer);
```

<a id="discussion"></a>

## Discussion

When rendering a large number of parts with the same part renderer, clearing the cache prevents the cache size from growing without bounds. This is a time/space tradeoff. Typically the cache should be cleared every dozen or so parts.

The return value is 0 for success, nonzero for failure.
