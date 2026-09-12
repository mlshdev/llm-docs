> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbox/length](https://developer.apple.com/documentation/scenekit/scnbox/length)

# length (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the box along its z-axis. Animatable.

## Declaration

```swift
var length: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The box is centered in its local coordinate system. For example, a box of length `10.0` extends from `-5.0` to `5.0` along the z-axis. The default width is `1.0`. A length of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Box’s Dimensions

- [width](width.md): The extent of the box along its x-axis. Animatable.
- [height](height.md): The extent of the box along its y-axis. Animatable.

# length (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the box along its z-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat length;
```

<a id="Discussion"></a>

## Discussion

The box is centered in its local coordinate system. For example, a box of length `10.0` extends from `-5.0` to `5.0` along the z-axis. The default width is `1.0`. A length of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Box’s Dimensions

- [width](width.md): The extent of the box along its x-axis. Animatable.
- [height](height.md): The extent of the box along its y-axis. Animatable.
