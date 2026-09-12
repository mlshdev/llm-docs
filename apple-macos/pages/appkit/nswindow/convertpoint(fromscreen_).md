> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/convertpoint(fromscreen:)](https://developer.apple.com/documentation/appkit/nswindow/convertpoint(fromscreen:))

# convertPoint(fromScreen:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Converts a point from the screen coordinate system to the window’s coordinate system.

## Declaration

```swift
func convertPoint(fromScreen point: NSPoint) -> NSPoint
```

## Parameters

- `point`: A point in the screen’s coordinate system.

<a id="return-value"></a>

## Return Value

A point in the window’s coordinate system.

## See Also

### Converting Coordinates

- [backingScaleFactor](backingscalefactor.md): The backing scale factor.
- [backingAlignedRect(\_:options:)](backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in window coordinates.
- [convertFromBacking(\_:)](convertfrombacking%28__%29.md): Converts a rectangle from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertFromScreen(\_:)](convertfromscreen%28__%29.md): Converts a rectangle from the screen coordinate system to the window’s coordinate system.
- [convertPointFromBacking(\_:)](convertpointfrombacking%28__%29.md): Converts a point from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertToBacking(\_:)](converttobacking%28__%29.md): Converts a rectangle from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertToScreen(\_:)](converttoscreen%28__%29.md): Converts a rectangle to the screen coordinate system from the window’s coordinate system.
- [convertPointToBacking(\_:)](convertpointtobacking%28__%29.md): Converts a point from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertPoint(toScreen:)](convertpoint%28toscreen_%29.md): Converts a point to the screen coordinate system from the window’s coordinate system.

# convertPointFromScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Converts a point from the screen coordinate system to the window’s coordinate system.

## Declaration

```objectivec
- (NSPoint) convertPointFromScreen:(NSPoint) point;
```

## Parameters

- `point`: A point in the screen’s coordinate system.

<a id="return-value"></a>

## Return Value

A point in the window’s coordinate system.

## See Also

### Converting Coordinates

- [backingScaleFactor](backingscalefactor.md): The backing scale factor.
- [backingAlignedRect:options:](backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in window coordinates.
- [convertRectFromBacking:](convertfrombacking%28__%29.md): Converts a rectangle from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertRectFromScreen:](convertfromscreen%28__%29.md): Converts a rectangle from the screen coordinate system to the window’s coordinate system.
- [convertPointFromBacking:](convertpointfrombacking%28__%29.md): Converts a point from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertRectToBacking:](converttobacking%28__%29.md): Converts a rectangle from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertRectToScreen:](converttoscreen%28__%29.md): Converts a rectangle to the screen coordinate system from the window’s coordinate system.
- [convertPointToBacking:](convertpointtobacking%28__%29.md): Converts a point from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertPointToScreen:](convertpoint%28toscreen_%29.md): Converts a point to the screen coordinate system from the window’s coordinate system.
