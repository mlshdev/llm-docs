> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnplane/width](https://developer.apple.com/documentation/scenekit/scnplane/width)

# width (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the plane along its horizontal axis. Animatable.

## Declaration

```swift
var width: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The plane is centered in its local coordinate system. For example, a plane of width `10.0` extends from `-5.0` to `5.0` along the x-axis. The default width is `1.0`. A width of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Plane’s Dimensions

- [height](height.md): The extent of the plane along its vertical axis. Animatable.

# width (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the plane along its horizontal axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat width;
```

<a id="Discussion"></a>

## Discussion

The plane is centered in its local coordinate system. For example, a plane of width `10.0` extends from `-5.0` to `5.0` along the x-axis. The default width is `1.0`. A width of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Plane’s Dimensions

- [height](height.md): The extent of the plane along its vertical axis. Animatable.
