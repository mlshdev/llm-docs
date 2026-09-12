> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaystreamupdaterecttype/movedrects](https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdaterecttype/movedrects)

# CGDisplayStreamUpdateRectType.movedRects (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

The rectangles for the portions of the display that were simply moved from one part of the display to another.

## Declaration

```swift
case movedRects
```

## See Also

### Constants

- [CGDisplayStreamUpdateRectType.refreshedRects](refreshedrects.md): The rectangles for the portions of the display that were redrawn.
- [CGDisplayStreamUpdateRectType.dirtyRects](dirtyrects.md): The union of both rectangles that were redrawn and rectangles that were moved.
- [CGDisplayStreamUpdateRectType.reducedDirtyRects](reduceddirtyrects.md): The union is calculated and then simplified. This reduces the number of rectangles returned to your app, but it may report some pixels that were not actually changed.

# kCGDisplayStreamUpdateMovedRects (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

The rectangles for the portions of the display that were simply moved from one part of the display to another.

## Declaration

```objectivec
kCGDisplayStreamUpdateMovedRects
```

## See Also

### Constants

- [kCGDisplayStreamUpdateRefreshedRects](refreshedrects.md): The rectangles for the portions of the display that were redrawn.
- [kCGDisplayStreamUpdateDirtyRects](dirtyrects.md): The union of both rectangles that were redrawn and rectangles that were moved.
- [kCGDisplayStreamUpdateReducedDirtyRects](reduceddirtyrects.md): The union is calculated and then simplified. This reduces the number of rectangles returned to your app, but it may report some pixels that were not actually changed.
