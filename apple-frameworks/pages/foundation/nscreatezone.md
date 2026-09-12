> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscreatezone](https://developer.apple.com/documentation/foundation/nscreatezone)

# NSCreateZone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new zone.

> Zones are ignored on iOS and 64-bit runtime in macOS. You should not use zones in current development.

## Declaration

```objectivec
extern NSZone *NSCreateZone(NSUInteger startSize, NSUInteger granularity, BOOL canFree);
```

<a id="return-value"></a>

## Return Value

A pointer to a new zone of `startSize` bytes, which will grow and shrink by `granularity` bytes. If `canFree` is 0, the allocator will never free memory, and `malloc` will be fast. Returns `NULL` if a new zone could not be created.

## See Also

### Managing Zones

- [NSRecycleZone](nsrecyclezone.md): Deprecated. Frees memory in a zone.
- [NSSetZoneName](nssetzonename.md): Deprecated. Sets the name of the specified zone.
- [NSZoneCalloc](nszonecalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneFree](nszonefree.md): Deprecated. Deallocates a block of memory in the specified zone.
- [NSZoneFromPointer](nszonefrompointer.md): Deprecated. Gets the zone for a given block of memory.
- [NSZoneMalloc](nszonemalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneName](nszonename.md): Deprecated. Returns the name of the specified zone.
- [NSZoneRealloc](nszonerealloc.md): Deprecated. Allocates memory in a zone.
- [NSDefaultMallocZone](nsdefaultmalloczone.md): Deprecated. Returns the default zone.
