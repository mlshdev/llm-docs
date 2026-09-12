> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventmousesubtype/tabletpoint](https://developer.apple.com/documentation/coregraphics/cgeventmousesubtype/tabletpoint)

# CGEventMouseSubtype.tabletPoint (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

Specifies that the mouse event originated from a tablet device, and that the various `kCGTabletEvent` field selectors may be used to obtain tablet-specific data from the mouse event.

## Declaration

```swift
case tabletPoint
```

## See Also

### Constants

- [CGEventMouseSubtype.defaultType](defaulttype.md): Specifies that the event is an ordinary mouse event, and does not contain additional tablet device information.
- [CGEventMouseSubtype.tabletProximity](tabletproximity.md)

# kCGEventMouseSubtypeTabletPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Specifies that the mouse event originated from a tablet device, and that the various `kCGTabletEvent` field selectors may be used to obtain tablet-specific data from the mouse event.

## Declaration

```objectivec
kCGEventMouseSubtypeTabletPoint
```

## See Also

### Constants

- [kCGEventMouseSubtypeDefault](defaulttype.md): Specifies that the event is an ordinary mouse event, and does not contain additional tablet device information.
- [kCGEventMouseSubtypeTabletProximity](tabletproximity.md)
