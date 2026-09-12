> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsgarbagecollector/zone](https://developer.apple.com/documentation/foundation/nsgarbagecollector/zone)

# zone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.10)

Returns a zone of unscanned memory.

## Declaration

```objectivec
- (NSZone *) zone;
```

<a id="return-value"></a>

## Return Value

A memory zone of memory that is not scanned.

<a id="Discussion"></a>

## Discussion

The collector provides a [NSZoneMalloc](../nszonemalloc.md)-style allocation interface, primarily for compatibility with existing code that maintains zone affinity. Such memory is unscanned and you must free it using [NSZoneFree](../nszonefree.md).  This is exactly equivalent to calling [NSAllocateCollectable](../nsallocatecollectable.md) with the option [NSCollectorDisabledOption](../nscollectordisabledoption.md).

You should typically allocate garbage-collected memory using [NSAllocateCollectable](../nsallocatecollectable.md).
