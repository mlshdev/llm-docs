> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnpyramid/height](https://developer.apple.com/documentation/scenekit/scnpyramid/height)

# height (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the pyramid along its y-axis. Animatable.

## Declaration

```swift
var height: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The pyramid’s base is centered in its local coordinate system. For example, if you create a pyramid of height `10.0`, the y-coordinate of every point in its rectangular base is `0.0` and the y-coordinate of its apex is `10.0`. The default height is `1.0`. A height of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Pyramid’s Dimensions

- [width](width.md): The extent of the pyramid along its x-axis. Animatable.
- [length](length.md): The extent of the pyramid along its z-axis. Animatable.

# height (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the pyramid along its y-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat height;
```

<a id="Discussion"></a>

## Discussion

The pyramid’s base is centered in its local coordinate system. For example, if you create a pyramid of height `10.0`, the y-coordinate of every point in its rectangular base is `0.0` and the y-coordinate of its apex is `10.0`. The default height is `1.0`. A height of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Pyramid’s Dimensions

- [width](width.md): The extent of the pyramid along its x-axis. Animatable.
- [length](length.md): The extent of the pyramid along its z-axis. Animatable.
