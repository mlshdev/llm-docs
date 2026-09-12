> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventmousesubtype/tabletproximity](https://developer.apple.com/documentation/coregraphics/cgeventmousesubtype/tabletproximity)

# CGEventMouseSubtype.tabletProximity (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
case tabletProximity
```

<a id="Discussion"></a>

## Discussion

Specifies that the mouse event originated from a tablet device with the pen in proximity but not necessarily touching the tablet, and that the various `kCGTabletProximity` field selectors may be used to obtain tablet-specific data from the mouse event. This is often used with mouse move events originating from a tablet.

## See Also

### Constants

- [CGEventMouseSubtype.defaultType](defaulttype.md): Specifies that the event is an ordinary mouse event, and does not contain additional tablet device information.
- [CGEventMouseSubtype.tabletPoint](tabletpoint.md): Specifies that the mouse event originated from a tablet device, and that the various `kCGTabletEvent` field selectors may be used to obtain tablet-specific data from the mouse event.

# kCGEventMouseSubtypeTabletProximity (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGEventMouseSubtypeTabletProximity
```

<a id="Discussion"></a>

## Discussion

Specifies that the mouse event originated from a tablet device with the pen in proximity but not necessarily touching the tablet, and that the various `kCGTabletProximity` field selectors may be used to obtain tablet-specific data from the mouse event. This is often used with mouse move events originating from a tablet.

## See Also

### Constants

- [kCGEventMouseSubtypeDefault](defaulttype.md): Specifies that the event is an ordinary mouse event, and does not contain additional tablet device information.
- [kCGEventMouseSubtypeTabletPoint](tabletpoint.md): Specifies that the mouse event originated from a tablet device, and that the various `kCGTabletEvent` field selectors may be used to obtain tablet-specific data from the mouse event.
