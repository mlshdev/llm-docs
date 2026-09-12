> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicoordinatespace/convert(_:from:)-9921a](https://developer.apple.com/documentation/uikit/uicoordinatespace/convert(_:from:)-9921a)

# convert(\_:from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

## Declaration

```swift
func convert(_ rect: CGRect, from coordinateSpace: any UICoordinateSpace) -> CGRect
```

## Parameters

- `rect`: A rectangle in the specified coordinate space.
- `coordinateSpace`: The coordinate space in which `rect` is specified.

<a id="return-value"></a>

## Return Value

A rectangle specified in the coordinate space of the current object.

## See Also

### Converting between coordinate spaces

- [convert(\_:to:)](convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:from:)](convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convert(\_:to:)](convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.

# convertRect:fromCoordinateSpace: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) rect fromCoordinateSpace:(id<UICoordinateSpace>) coordinateSpace;
```

## Parameters

- `rect`: A rectangle in the specified coordinate space.
- `coordinateSpace`: The coordinate space in which `rect` is specified.

<a id="return-value"></a>

## Return Value

A rectangle specified in the coordinate space of the current object.

## See Also

### Converting between coordinate spaces

- [convertPoint:toCoordinateSpace:](convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convertPoint:fromCoordinateSpace:](convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convertRect:toCoordinateSpace:](convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
