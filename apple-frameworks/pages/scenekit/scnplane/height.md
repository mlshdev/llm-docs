> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnplane/height](https://developer.apple.com/documentation/scenekit/scnplane/height)

# height (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the plane along its vertical axis. Animatable.

## Declaration

```swift
var height: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The plane is centered in its local coordinate system. For example, a plane of height `10.0` extends from `-5.0` to `5.0` along the y-axis. The default height is `1.0`. A height of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Plane’s Dimensions

- [width](width.md): The extent of the plane along its horizontal axis. Animatable.

# height (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the plane along its vertical axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat height;
```

<a id="Discussion"></a>

## Discussion

The plane is centered in its local coordinate system. For example, a plane of height `10.0` extends from `-5.0` to `5.0` along the y-axis. The default height is `1.0`. A height of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Plane’s Dimensions

- [width](width.md): The extent of the plane along its horizontal axis. Animatable.
