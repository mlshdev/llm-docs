> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaystreamupdaterecttype/reduceddirtyrects](https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdaterecttype/reduceddirtyrects)

# CGDisplayStreamUpdateRectType.reducedDirtyRects (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

The union is calculated and then simplified. This reduces the number of rectangles returned to your app, but it may report some pixels that were not actually changed.

## Declaration

```swift
case reducedDirtyRects
```

## See Also

### Constants

- [CGDisplayStreamUpdateRectType.refreshedRects](refreshedrects.md): The rectangles for the portions of the display that were redrawn.
- [CGDisplayStreamUpdateRectType.movedRects](movedrects.md): The rectangles for the portions of the display that were simply moved from one part of the display to another.
- [CGDisplayStreamUpdateRectType.dirtyRects](dirtyrects.md): The union of both rectangles that were redrawn and rectangles that were moved.

# kCGDisplayStreamUpdateReducedDirtyRects (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

The union is calculated and then simplified. This reduces the number of rectangles returned to your app, but it may report some pixels that were not actually changed.

## Declaration

```objectivec
kCGDisplayStreamUpdateReducedDirtyRects
```

## See Also

### Constants

- [kCGDisplayStreamUpdateRefreshedRects](refreshedrects.md): The rectangles for the portions of the display that were redrawn.
- [kCGDisplayStreamUpdateMovedRects](movedrects.md): The rectangles for the portions of the display that were simply moved from one part of the display to another.
- [kCGDisplayStreamUpdateDirtyRects](dirtyrects.md): The union of both rectangles that were redrawn and rectangles that were moved.
