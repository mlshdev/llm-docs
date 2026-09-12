> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssetzonename](https://developer.apple.com/documentation/foundation/nssetzonename)

# NSSetZoneName

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the name of the specified zone.

> Zones are ignored on iOS and 64-bit runtime in macOS. You should not use zones in current development.

## Declaration

```objectivec
extern void NSSetZoneName(NSZone *zone, NSString *name);
```

<a id="Discussion"></a>

## Discussion

Sets the name of `zone` to `name`, which can aid in debugging.

## See Also

### Managing Zones

- [NSCreateZone](nscreatezone.md): Deprecated. Creates a new zone.
- [NSRecycleZone](nsrecyclezone.md): Deprecated. Frees memory in a zone.
- [NSZoneCalloc](nszonecalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneFree](nszonefree.md): Deprecated. Deallocates a block of memory in the specified zone.
- [NSZoneFromPointer](nszonefrompointer.md): Deprecated. Gets the zone for a given block of memory.
- [NSZoneMalloc](nszonemalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneName](nszonename.md): Deprecated. Returns the name of the specified zone.
- [NSZoneRealloc](nszonerealloc.md): Deprecated. Allocates memory in a zone.
- [NSDefaultMallocZone](nsdefaultmalloczone.md): Deprecated. Returns the default zone.
