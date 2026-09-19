> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenu/setmenuzone:

# setMenuZone:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.2)

Sets the zone from which `NSMenu` objects should be allocated

## Declaration

```objectivec
+ (void) setMenuZone:(NSZone *) zone;
```

## Parameters

- `zone`: The memory zone to set.

## See Also

### Controlling Allocation Zones

- [menuZone](menuzone%28%29.md): Deprecated. Returns the zone from which `NSMenu` objects should be allocated.
