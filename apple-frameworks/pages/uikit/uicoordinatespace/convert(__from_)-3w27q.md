> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicoordinatespace/convert(_:from:)-3w27q](https://developer.apple.com/documentation/uikit/uicoordinatespace/convert(_:from:)-3w27q)

# convert(\_:from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a point from the specified coordinate space to the coordinate space of the current object.

## Declaration

```swift
func convert(_ point: CGPoint, from coordinateSpace: any UICoordinateSpace) -> CGPoint
```

## Parameters

- `point`: A point in the specified coordinate space.
- `coordinateSpace`: The coordinate space in which `point` is specified.

<a id="return-value"></a>

## Return Value

A point specified in the coordinate space of the current object.

## See Also

### Converting between coordinate spaces

- [convert(\_:to:)](convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:to:)](convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:from:)](convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

# convertPoint:fromCoordinateSpace: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a point from the specified coordinate space to the coordinate space of the current object.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point fromCoordinateSpace:(id<UICoordinateSpace>) coordinateSpace;
```

## Parameters

- `point`: A point in the specified coordinate space.
- `coordinateSpace`: The coordinate space in which `point` is specified.

<a id="return-value"></a>

## Return Value

A point specified in the coordinate space of the current object.

## See Also

### Converting between coordinate spaces

- [convertPoint:toCoordinateSpace:](convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convertRect:toCoordinateSpace:](convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
- [convertRect:fromCoordinateSpace:](convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.
