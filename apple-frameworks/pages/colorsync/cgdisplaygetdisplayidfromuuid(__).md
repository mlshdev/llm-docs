> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/cgdisplaygetdisplayidfromuuid(_:)](https://developer.apple.com/documentation/colorsync/cgdisplaygetdisplayidfromuuid(_:))

# CGDisplayGetDisplayIDFromUUID(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

## Declaration

```swift
func CGDisplayGetDisplayIDFromUUID(_ uuid: CFUUID!) -> UInt32
```

## See Also

### Converting display identifiers

- [CGDisplayCreateUUIDFromDisplayID(\_:)](cgdisplaycreateuuidfromdisplayid%28__%29.md)

# CGDisplayGetDisplayIDFromUUID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern uint32_t CGDisplayGetDisplayIDFromUUID(CFUUIDRef uuid);
```

## See Also

### Converting display identifiers

- [CGDisplayCreateUUIDFromDisplayID](cgdisplaycreateuuidfromdisplayid%28__%29.md)
