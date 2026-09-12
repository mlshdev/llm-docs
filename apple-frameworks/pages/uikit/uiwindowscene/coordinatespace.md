> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/coordinatespace](https://developer.apple.com/documentation/uikit/uiwindowscene/coordinatespace)

# coordinateSpace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 13.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The coordinate space occupied by the scene.

> Use effectiveGeometry.coordinateSpace instead.

## Declaration

```swift
var coordinateSpace: any UICoordinateSpace { get }
```

<a id="Discussion"></a>

## Discussion

Use the provided coordinate space to get the bounds of the scene’s bounds rectangle and to convert points and rectangles to and from other coordinate spaces. For example, use [coordinateSpace](coordinatespace.md) to convert a point in the scene to the screen coordinate space.

## See Also

### Deprecated symbols

- [interfaceOrientation](interfaceorientation.md): Deprecated. The orientation to use when displaying content in your windows.

# coordinateSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 26.0) · iPadOS 13.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 13.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The coordinate space occupied by the scene.

> Use effectiveGeometry.coordinateSpace instead.

## Declaration

```objectivec
@property (nonatomic, readonly) id<UICoordinateSpace> coordinateSpace;
```

<a id="Discussion"></a>

## Discussion

Use the provided coordinate space to get the bounds of the scene’s bounds rectangle and to convert points and rectangles to and from other coordinate spaces. For example, use [coordinateSpace](coordinatespace.md) to convert a point in the scene to the screen coordinate space.

## See Also

### Deprecated symbols

- [interfaceOrientation](interfaceorientation.md): Deprecated. The orientation to use when displaying content in your windows.
