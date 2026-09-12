> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nszonename](https://developer.apple.com/documentation/foundation/nszonename)

# NSZoneName

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the name of the specified zone.

> Zones are ignored on iOS and 64-bit runtime in macOS. You should not use zones in current development.

## Declaration

```objectivec
extern NSString *NSZoneName(NSZone *zone);
```

<a id="return-value"></a>

## Return Value

A string containing the name associated with `zone`. If `zone` is `nil`, the default zone is used. If no name is associated with `zone`, the returned string is empty.

## See Also

### Managing Zones

- [NSCreateZone](nscreatezone.md): Deprecated. Creates a new zone.
- [NSRecycleZone](nsrecyclezone.md): Deprecated. Frees memory in a zone.
- [NSSetZoneName](nssetzonename.md): Deprecated. Sets the name of the specified zone.
- [NSZoneCalloc](nszonecalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneFree](nszonefree.md): Deprecated. Deallocates a block of memory in the specified zone.
- [NSZoneFromPointer](nszonefrompointer.md): Deprecated. Gets the zone for a given block of memory.
- [NSZoneMalloc](nszonemalloc.md): Deprecated. Allocates memory in a zone.
- [NSZoneRealloc](nszonerealloc.md): Deprecated. Allocates memory in a zone.
- [NSDefaultMallocZone](nsdefaultmalloczone.md): Deprecated. Returns the default zone.
