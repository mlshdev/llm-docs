> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventmousesubtype/defaulttype](https://developer.apple.com/documentation/coregraphics/cgeventmousesubtype/defaulttype)

# CGEventMouseSubtype.defaultType (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

Specifies that the event is an ordinary mouse event, and does not contain additional tablet device information.

## Declaration

```swift
case defaultType
```

## See Also

### Constants

- [CGEventMouseSubtype.tabletPoint](tabletpoint.md): Specifies that the mouse event originated from a tablet device, and that the various `kCGTabletEvent` field selectors may be used to obtain tablet-specific data from the mouse event.
- [CGEventMouseSubtype.tabletProximity](tabletproximity.md)

# kCGEventMouseSubtypeDefault (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Specifies that the event is an ordinary mouse event, and does not contain additional tablet device information.

## Declaration

```objectivec
kCGEventMouseSubtypeDefault
```

## See Also

### Constants

- [kCGEventMouseSubtypeTabletPoint](tabletpoint.md): Specifies that the mouse event originated from a tablet device, and that the various `kCGTabletEvent` field selectors may be used to obtain tablet-specific data from the mouse event.
- [kCGEventMouseSubtypeTabletProximity](tabletproximity.md)
