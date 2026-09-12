> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi/convertpoint(fromspace:fromx:fromy:tospace:tox:toy:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi/convertpoint(fromspace:fromx:fromy:tospace:tox:toy:))

# convertPoint(fromSpace:fromX:fromY:toSpace:toX:toY:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Converts a position from object space to canvas space.

## Declaration

```swift
func convertPoint(fromSpace: FxDrawingCoordinates, fromX: Double, fromY: Double, toSpace: FxDrawingCoordinates, toX: UnsafeMutablePointer<Double>!, toY: UnsafeMutablePointer<Double>!)
```

## Parameters

- `fromSpace`: The coordinate space to convert from.
- `fromX`: The X coordinate of the position to convert from.
- `fromY`: The Y coordinate of the position to convert from.
- `toSpace`: The coordinate space to convert to.
- `toX`: Returns, by-reference, the X coordinate of the computed position.
- `toY`: Returns, by-reference, the Y coordinate of the computed position.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

# convertPointFromSpace:fromX:fromY:toSpace:toX:toY: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Converts a position from object space to canvas space.

## Declaration

```objectivec
- (void) convertPointFromSpace:(FxDrawingCoordinates) fromSpace fromX:(double) fromX fromY:(double) fromY toSpace:(FxDrawingCoordinates) toSpace toX:(double *) toX toY:(double *) toY;
```

## Parameters

- `fromSpace`: The coordinate space to convert from.
- `fromX`: The X coordinate of the position to convert from.
- `fromY`: The Y coordinate of the position to convert from.
- `toSpace`: The coordinate space to convert to.
- `toX`: Returns, by-reference, the X coordinate of the computed position.
- `toY`: Returns, by-reference, the Y coordinate of the computed position.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)
