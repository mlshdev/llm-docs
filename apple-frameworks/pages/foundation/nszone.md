> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nszone](https://developer.apple.com/documentation/foundation/nszone)

# NSZone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type used to identify and manage memory zones.

## Declaration

```objectivec
typedef struct _NSZone NSZone;
```

## Topics

### Managing Zones

Zones are ignored on iOS and 64-bit runtime in macOS. You should not use zones in current development.

- [NSCreateZone](nscreatezone.md): Deprecated. Creates a new zone.
- [NSRecycleZone](nsrecyclezone.md): Deprecated. Frees memory in a zone.
- [NSSetZoneName](nssetzonename.md): Deprecated. Sets the name of the specified zone.
- [NSZoneCalloc](nszonecalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneFree](nszonefree.md): Deprecated. Deallocates a block of memory in the specified zone.
- [NSZoneFromPointer](nszonefrompointer.md): Deprecated. Gets the zone for a given block of memory.
- [NSZoneMalloc](nszonemalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneName](nszonename.md): Deprecated. Returns the name of the specified zone.
- [NSZoneRealloc](nszonerealloc.md): Deprecated. Allocates memory in a zone.
- [NSDefaultMallocZone](nsdefaultmalloczone.md): Deprecated. Returns the default zone.

## See Also

### Legacy

- [Distributed Objects Support](distributed-objects-support.md): Enable communication among objects in different processes, both locally and on remote systems.
- [Objective-C Garbage Collection](objective-c-garbage-collection.md): Interface with the legacy garbage collection system.
