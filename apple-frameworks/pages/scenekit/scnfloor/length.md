> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfloor/length](https://developer.apple.com/documentation/scenekit/scnfloor/length)

# length (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the floor along its z-axis. Animatable.

## Declaration

```swift
var length: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The floor is centered in its local coordinate system. For example, a floor of length `10.0` extends from `-5.0` to `5.0` along the z-axis. The default width is zero, indicating that the floor’s length is infinite.

You can animate changes to this property’s value. See `Animating SceneKit Content`.

## See Also

### Adjusting a Floor’s Size

- [width](width.md): The extent of the floor along its x-axis. Animatable.

# length (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The extent of the floor along its z-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat length;
```

<a id="Discussion"></a>

## Discussion

The floor is centered in its local coordinate system. For example, a floor of length `10.0` extends from `-5.0` to `5.0` along the z-axis. The default width is zero, indicating that the floor’s length is infinite.

You can animate changes to this property’s value. See `Animating SceneKit Content`.

## See Also

### Adjusting a Floor’s Size

- [width](width.md): The extent of the floor along its x-axis. Animatable.
