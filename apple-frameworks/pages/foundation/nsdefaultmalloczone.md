> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdefaultmalloczone](https://developer.apple.com/documentation/foundation/nsdefaultmalloczone)

# NSDefaultMallocZone

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default zone.

> Zones are ignored on iOS and 64-bit runtime in macOS. You should not use zones in current development.

## Declaration

```objectivec
extern NSZone *NSDefaultMallocZone();
```

<a id="return-value"></a>

## Return Value

The default zone, which is created automatically at startup.

<a id="Discussion"></a>

## Discussion

This zone is used by the standard C function `malloc`.

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
- [NSZoneRealloc](nszonerealloc.md): Deprecated. Allocates memory in a zone.
