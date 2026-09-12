> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nszonerealloc](https://developer.apple.com/documentation/foundation/nszonerealloc)

# NSZoneRealloc

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allocates memory in a zone.

> Zones are ignored on iOS and 64-bit runtime in macOS. You should not use zones in current development.

## Declaration

```objectivec
extern void *NSZoneRealloc(NSZone *zone, void *ptr, NSUInteger size);
```

<a id="Discussion"></a>

## Discussion

Changes the size of the block of memory pointed to by `ptr` to `size` bytes. It may allocate new memory to replace the old, in which case it moves the contents of the old memory block to the new block, up to a maximum of `size` bytes. `ptr` may be `NULL`. This function returns `NULL` if it was unable to allocate the requested memory.

## See Also

### Managing Zones

- [NSCreateZone](nscreatezone.md): Deprecated. Creates a new zone.
- [NSRecycleZone](nsrecyclezone.md): Deprecated. Frees memory in a zone.
- [NSSetZoneName](nssetzonename.md): Deprecated. Sets the name of the specified zone.
- [NSZoneCalloc](nszonecalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneFree](nszonefree.md): Deprecated. Deallocates a block of memory in the specified zone.
- [NSZoneFromPointer](nszonefrompointer.md): Deprecated. Gets the zone for a given block of memory.
- [NSZoneMalloc](nszonemalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneName](nszonename.md): Deprecated. Returns the name of the specified zone.
- [NSDefaultMallocZone](nsdefaultmalloczone.md): Deprecated. Returns the default zone.
