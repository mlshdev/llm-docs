> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/cgdisplaycreateuuidfromdisplayid(_:)](https://developer.apple.com/documentation/colorsync/cgdisplaycreateuuidfromdisplayid(_:))

# CGDisplayCreateUUIDFromDisplayID(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

## Declaration

```swift
func CGDisplayCreateUUIDFromDisplayID(_ displayID: UInt32) -> Unmanaged<CFUUID>!
```

## See Also

### Converting display identifiers

- [CGDisplayGetDisplayIDFromUUID(\_:)](cgdisplaygetdisplayidfromuuid%28__%29.md)

# CGDisplayCreateUUIDFromDisplayID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern CFUUIDRefCGDisplayCreateUUIDFromDisplayID(uint32_t displayID);
```

## See Also

### Converting display identifiers

- [CGDisplayGetDisplayIDFromUUID](cgdisplaygetdisplayidfromuuid%28__%29.md)
