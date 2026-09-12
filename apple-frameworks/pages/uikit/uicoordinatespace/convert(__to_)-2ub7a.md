> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicoordinatespace/convert(_:to:)-2ub7a](https://developer.apple.com/documentation/uikit/uicoordinatespace/convert(_:to:)-2ub7a)

# convert(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a point from the coordinate space of the current object to the specified coordinate space.

## Declaration

```swift
func convert(_ point: CGPoint, to coordinateSpace: any UICoordinateSpace) -> CGPoint
```

## Parameters

- `point`: A point specified in the coordinate system of the current object.
- `coordinateSpace`: The coordinate space into which `point` is to be converted.

<a id="return-value"></a>

## Return Value

A point specified in the target coordinate space.

## See Also

### Converting between coordinate spaces

- [convert(\_:from:)](convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convert(\_:to:)](convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:from:)](convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

# convertPoint:toCoordinateSpace: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a point from the coordinate space of the current object to the specified coordinate space.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point toCoordinateSpace:(id<UICoordinateSpace>) coordinateSpace;
```

## Parameters

- `point`: A point specified in the coordinate system of the current object.
- `coordinateSpace`: The coordinate space into which `point` is to be converted.

<a id="return-value"></a>

## Return Value

A point specified in the target coordinate space.

## See Also

### Converting between coordinate spaces

- [convertPoint:fromCoordinateSpace:](convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convertRect:toCoordinateSpace:](convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
- [convertRect:fromCoordinateSpace:](convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.
