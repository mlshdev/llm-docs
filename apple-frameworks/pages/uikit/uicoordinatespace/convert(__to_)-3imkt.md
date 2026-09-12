> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicoordinatespace/convert(_:to:)-3imkt](https://developer.apple.com/documentation/uikit/uicoordinatespace/convert(_:to:)-3imkt)

# convert(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a rectangle from the coordinate space of the current object to the specified coordinate space.

## Declaration

```swift
func convert(_ rect: CGRect, to coordinateSpace: any UICoordinateSpace) -> CGRect
```

## Parameters

- `rect`: A rectangle specified in the coordinate system of the current object.
- `coordinateSpace`: The coordinate space into which `rect` is to be converted.

<a id="return-value"></a>

## Return Value

A rectangle specified in the target coordinate space.

## See Also

### Converting between coordinate spaces

- [convert(\_:to:)](convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:from:)](convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convert(\_:from:)](convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

# convertRect:toCoordinateSpace: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

Converts a rectangle from the coordinate space of the current object to the specified coordinate space.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) rect toCoordinateSpace:(id<UICoordinateSpace>) coordinateSpace;
```

## Parameters

- `rect`: A rectangle specified in the coordinate system of the current object.
- `coordinateSpace`: The coordinate space into which `rect` is to be converted.

<a id="return-value"></a>

## Return Value

A rectangle specified in the target coordinate space.

## See Also

### Converting between coordinate spaces

- [convertPoint:toCoordinateSpace:](convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convertPoint:fromCoordinateSpace:](convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convertRect:fromCoordinateSpace:](convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.
